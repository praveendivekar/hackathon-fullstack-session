import express from 'express';
import db from './config/db';
import middleware from './config/middleware';
import logger from './utils/logger';
import config from './config';
import { SessionRoutes } from './api/sessions';
import { LoginRoutes } from './api/login';

import JWT from 'jsonwebtoken';

const { PORT, SECRET } = config;
const app = express();

//establishing connection to Mongo DB
db.open();

//middleware config
middleware(app);

/**
* Authorization middleware function for authorizing the routes
* @method authMiddleWare
*/
function authMiddleWare() {
  return function(req, res, next) {
    if (req.headers['authorization']) {
      let token = req.headers['authorization'];

      try {
        let verifed = JWT.verify(token, SECRET);

        if (verifed.username === 'santRaju') {
          next();
        } else {
          throw 'unauthorized';
        }
      } catch (err) {
        res.json({
          status: 403,
          success: false,
          message: 'unauthorized access'
        });
      }
    } else {
      res.json({
        status: 403,
        success: false,
        message: 'unauthorized access'
      });
    }
  };
}

/* unauthorized, usually login */
app.use('/', [LoginRoutes]);

/* authorized route */
app.use('/api', [SessionRoutes]);

/*
* Global error handling middleware, this is application level middleware.
* The application errors are caught here, which is caught in the logger.
* A reasonable or understandable error message is responded to the client
*/
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
