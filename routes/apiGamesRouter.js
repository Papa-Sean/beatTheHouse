import { Router } from 'express';
const router = Router();

import {
  createAPIGame,
  getAllAPIGames,
  getSingleAPIGame,
} from '../controllers/gamesController.js';

import {
  validateGameInput,
  validateIdParam,
} from '../middleware/validationMiddleware.js';

router.route('/').get(getAllAPIGames).post(createAPIGame);

router.route('/:id').get(getSingleAPIGame);

export default router;
