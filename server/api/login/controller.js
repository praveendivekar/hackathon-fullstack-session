import JWT from 'jsonwebtoken';
import config from '../../config';
import logger from '../../utils/logger';

const { SECRET } = config;

export async function login(req, res, next) {
  try {
    let { username, password } = req.body;

    if (username === 'santRaju') {
      let userDetails = {
        name: 'Santhosh Raju',
        username: 'santRaju',
        email: 'santnagaraj@deloitte.com'
      };

      let token = await JWT.sign(userDetails, SECRET, { expiresIn: 60 * 60 });

      res.json({ status: 200, success: true, token });
    } else {
      res.json({ status: 200, success: false, message: 'Invalid user creds ' });
    }
  } catch (err) {
    logger.error(`Something went wrong in ${err}`);
    next(err);
  }
}

export default {
  login
};
