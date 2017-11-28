import { Router } from 'express';
import Controller from './controller';

const router = new Router();

router.get('/sessions', Controller.getSessions);
router.delete('/session/:id', Controller.deleteSession);

router.route('/session').post(Controller.createSession);

router
  .route('/session/:id')
  .delete(Controller.deleteSession)
  .put(Controller.updateSession)
  .get(Controller.getSession);

export default router;
