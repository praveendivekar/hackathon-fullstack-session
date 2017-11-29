import { Router } from 'express';
import Controller from './controller';

const router = new Router();

router.post('/login', Controller.login);

export default router;
