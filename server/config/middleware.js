import bodyParser from 'body-parser';
import morgan from 'morgan';

export default app => {
  app.use(bodyParser.urlencoded({ extend: false }));
  app.use(bodyParser.json({ encoded: true }));
  app.use(morgan('dev'));
};
