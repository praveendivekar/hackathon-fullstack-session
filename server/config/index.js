/*
* Application configuration
* Configuring PORT, DB_URL - MongoDB URL and log location
* SECRET key for generating JWT tokens for authorization
*/

const ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 3000;
const { DB_USER, DB_PASS } = process.env;

const LOG_LOCATION = `logs/${ENV}.log`;

let DB_URL = '';

switch (ENV) {
  case 'prod':
    DB_URL = '';
    break;
  case 'test':
    DB_URL = '';
    break;
  default:
    DB_URL = `mongodb://0.0.0.0:27017/sessions`;
    break;
}

export default {
  PORT,
  DB_URL,
  LOGS: LOG_LOCATION,
  SECRET: 'secret'
};
