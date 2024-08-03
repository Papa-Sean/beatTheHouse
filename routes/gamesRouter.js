import { Router } from 'express';
const router = Router();

import {
  getAllGames,
  getSingleGame,
  createGame,
  updateGame,
  deleteGame,
} from '../controllers/gamesController.js';

import {
  validateGameInput,
  validateIdParam,
} from '../middleware/validationMiddleware.js';

router.route('/').get(getAllGames).post(validateGameInput, createGame);

router
  .route('/:id')
  .get(validateIdParam, getSingleGame)
  .patch(validateGameInput, validateIdParam, updateGame)
  .delete(validateIdParam, deleteGame);

export default router;
