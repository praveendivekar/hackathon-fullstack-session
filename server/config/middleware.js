import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

export default app => {
  app.use(bodyParser.urlencoded({ extend: false }));
  app.use(bodyParser.json({ encoded: true }));
  app.use(morgan('dev'));
  app.use(cors());
};
