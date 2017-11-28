import Session from './model';
import logger from '../../utils/logger';

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

export async function getSessions(req, res, next) {
  try {
    let sessions = await Session.find({});
    res.json({ status: 200, success: true, sessions });
  } catch (err) {
    logger.error(`Something went wrong ${err}`);
    next(err);
  }
}

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

export async function updateSession(req, res, next) {
  try {
    let { id } = req.params;
    let { title, description, fromDate, toDate, timing, img } = req.body;
    let updated = Session.where({ _id: id }).update({ title });
    res.json({ status: 200, success: true, updated });
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
