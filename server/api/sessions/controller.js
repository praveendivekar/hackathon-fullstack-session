import Session from './model';
import logger from '../../utils/logger';

/**
* Async function to creating a session
* @method createSession
* @param req, res, next
*/
export async function createSession(req, res, next) {
  try {
    let { title, fromDate, toDate, description, timing, img } = req.body;
    console.log(req.body);
    let session = new Session({
      title,
      fromDate,
      toDate,
      description,
      timing,
      img
    });

    let savedSession = await session.save();
    logger.log('Session saved');
    res.json({ status: 200, success: true, session: savedSession });
  } catch (err) {
    logger.error(`Something went wrong ${err}`);
    next(new Error(err));
  }
}

/**
* Async function for getting a session based on the id
* @method getSession
* @param req, res, next
*/
export async function getSession(req, res, next) {
  try {
    let { id } = req.params;
    let session = await Session.findById(id);
    res.json({ status: 200, success: true, session });
  } catch (err) {
    logger.error(`Something went wrong ${err}`);
    next(new Error(err));
  }
}

/**
* Async function for getting list of sessions
* @method getSessions
* @param req, res, next
*/
export async function getSessions(req, res, next) {
  try {
    let sessions = await Session.find({});
    res.json({ status: 200, success: true, sessions });
  } catch (err) {
    logger.error(`Something went wrong ${err}`);
    next(err);
  }
}

/**
* Async function for deleting a session based on the id
* @method deleteSession
* @param req, res, next
*/
export async function deleteSession(req, res, next) {
  try {
    let { id } = req.params;

    let book = await Session.findByIdAndRemove(id);
    res.json({ status: 200, success: true, message: 'Session deleted' });
  } catch (err) {
    logger.error(`Something went wrong ${err}`);
    next(err);
  }
}

/**
* Async function for upating a session based on the id
* @method updateSession
* @param req, res, next
*/
export async function updateSession(req, res, next) {
  try {
    let { id } = req.params;
    let { title, description, fromDate, toDate, timing, img } = req.body;

    let session = await Session.findById(id);

    if (session) {
      session.title = title || session.title;
      session.description = description || session.description;
      session.fromDate = fromDate || session.fromDate;
      session.toDate = toDate || session.toDate;
      session.timing = timing || session.timing;
      session.img = img || session.img;

      let updated = await session.save();

      res.json({ status: 200, success: true, updated });
    } else {
      res.json({
        status: 200,
        success: false,
        message: 'Couldnt find the session'
      });
    }
  } catch (err) {
    logger.error(`Something went wrong ${err}`);
    next(err);
  }
}

export default {
  createSession,
  getSessions,
  deleteSession,
  getSession,
  updateSession
};
