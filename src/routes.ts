import { Router } from 'express';

import ConnectController from './controllers/connectController';
import AddNewBlockController from './controllers/AddNewBlockController';

const router = Router();

router.get('/api', ConnectController.handle);

router.post('/addblock', AddNewBlockController.handle);

export { router }