import { Router } from 'express';
const router = Router();
import { login, register } from '../controllers/authController.js';
import {
  validateLoginInput,
  validateRegisterInput,
} from '../middleware/validationMiddleware.js';

router.route('/register').post(validateRegisterInput, register);

// router.post('/register', register);
router.post('/login', validateLoginInput, login);

export default router;
