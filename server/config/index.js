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
    DB_URL = `mongodb://${DB_USER}:${DB_PASS}@ds117156.mlab.com:17156/sessions`;
    break;
}

export default {
  PORT,
  DB_URL,
  LOGS: LOG_LOCATION
};
