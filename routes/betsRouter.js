import { Router } from 'express';
const router = Router();

import {
  getAllBets,
  getSingleBet,
  createBet,
} from '../controllers/betController.js';

import {
  validateBetInput,
  validateIdParam,
} from '../middleware/validationMiddleware.js';

router.route('/').get(getAllBets).post(validateBetInput, createBet);

router.route('/:id').get(validateIdParam, getSingleBet);

export default router;
