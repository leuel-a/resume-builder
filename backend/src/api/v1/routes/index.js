import { Router } from 'express';

import AppController from '../controllers/AppController';
import userController from '../controllers/UserController';

const router = Router();

router.get('/api/v1/status', AppController.getStatus);

router.post('/api/v1/users', userController.createUser);

export default router;
