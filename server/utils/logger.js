import logger from 'logger';
import fs from 'fs';
import config from '../config';

const { LOGS } = config;

if (!fs.existsSync(LOGS)) {
  fs.openSync(LOGS, 'a+');
}

let logInstance = logger.createLogger(LOGS);

export default {
  /**
  * Error logging util
  * @method error
  * @param message
  */
  error(message) {
    console.error(message);
    logInstance.error(message);
  },

  /**
  * Warn logging util
  * @method warn
  * @param message
  */
  warn(message) {
    console.warn(message);
    logInstance.warn(message);
  },

  /**
  * Info logging util
  * @method log
  * @param message
  */
  log(message) {
    console.log(message);
    logInstance.info(message);
  }
};
