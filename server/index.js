import express from 'express';
import db from './config/db';
import middleware from './config/middleware';
import logger from './utils/logger';
import config from './config';
import { SessionRoutes } from './api/sessions';

const { PORT } = config;
const app = express();

//establishing connection to Mongo DB
db.open();

//middleware config
middleware(app);

app.use('/api', [SessionRoutes]);

app.use((err, req, res, next) => {
  logger.error(`Error : ${err}`);
  res.json({
    status: 500,
    success: false,
    message: 'Something went wrong'
  });
});

app.listen(PORT, err => {
  if (err) {
    logger.error(`Error in starting the server on port ${PORT} - ${err}`);
  } else {
    logger.log(`Server listening on PORT: ${PORT}`);
  }
});
