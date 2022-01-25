import { Router } from 'express';

import ConnectController from './controllers/connectController';
import AddNewBlockController from './controllers/AddNewBlockController';
import CheckBlocksController from './controllers/CheckBlocksController';
import FilterUserController from './controllers/FilterUserController';

const router = Router();

router.get('/api', ConnectController.handle);
router.get('/check', CheckBlocksController.handle);

router.post('/addblock', AddNewBlockController.handle);
router.post('/filter', FilterUserController.handle);

export { router }