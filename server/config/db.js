import mongoose from 'mongoose';
import config from './index';
import logger from '../utils/logger';

const { DB_URL } = config;
export default {
  /**
  * Function to open mongo connection
  * @method open
  */
  open() {
    mongoose.Promise = global.Promise;
    mongoose.connect(DB_URL);
    mongoose.connection
      .on('open', () => logger.log(`Connected to Mongo DB`))
      .on('error', err => logger.error(`Failed to connect to MongoDB: ${err}`));
  },

  /**
  * Function to close a mongo connection
  * @method close
  */
  close() {
    mongoose.connection.close();
  }
};
