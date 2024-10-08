import { body, param, validationResult } from 'express-validator';
import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} from '../errors/customErrors.js';
import mongoose from 'mongoose';
import Bet from '../models/BetModel.js';
import User from '../models/UserModel.js';
import { NFL_TEAMS } from '../utils/constants.js';

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        if (errorMessages[0].startsWith('No game')) {
          throw new NotFoundError(errorMessages);
        }
        if (errorMessages[0].startsWith('Not authorized')) {
          throw new UnauthorizedError(errorMessages);
        }
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

export const validateGameInput = withValidationErrors([
  body('homeTeam')
    .isIn(Object.values(NFL_TEAMS))
    .withMessage('Invalid team entry, try again.'),
  body('awayTeam')
    .isIn(Object.values(NFL_TEAMS))
    .withMessage('Invalid team entry, try again.'),
  body('homeSpread').notEmpty().withMessage('Home spread entry required.'),
  body('awaySpread').notEmpty().withMessage('Away spread entry required.'),
  body('homeOdds').notEmpty().withMessage('Home odds entry required.'),
  body('awayOdds').notEmpty().withMessage('Away odds entry required.'),
]);

export const validateIdParam = withValidationErrors([
  param('id').custom(async (value, { req }) => {
    const isValidId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidId) throw new BadRequestError('Invalid MongoDB id...');
    const bet = await Bet.findById(value);
    if (!bet) throw new NotFoundError(`No game with id: ${value}!`);
    const isAdmin = req.user.role === 'admin';
    const isOwner = req.user.userId === bet.createdBy.toString();
    if (!isAdmin && !isOwner)
      throw new UnauthorizedError('Not authorized to access this route');
  }),
]);

export const validateRegisterInput = withValidationErrors([
  body('name').notEmpty().withMessage('First Name required'),
  body('email')
    .notEmpty()
    .withMessage('Email address required')
    .isEmail()
    .withMessage('Invalid email/format')
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) {
        throw new BadRequestError('Email already exists...');
      }
    }),
  body('lastName').notEmpty().withMessage('Last Name required'),
  body('password')
    .notEmpty()
    .withMessage('Password required')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long.'),
  body('location').notEmpty().withMessage('User location required'),
]);

export const validateLoginInput = withValidationErrors([
  body('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Invalid email format'),
  body('password').notEmpty().withMessage('Password is required'),
]);

export const validateUpdateUserInput = withValidationErrors([
  body('name').notEmpty().withMessage('First Name required'),
  body('email')
    .notEmpty()
    .withMessage('Email address required')
    .isEmail()
    .withMessage('Invalid email/format')
    .custom(async (email, { req }) => {
      const user = await User.findOne({ email });
      if (user && user._id.toString() !== req.user.userId) {
        throw new BadRequestError('Email already exists...');
      }
    }),
  body('lastName').notEmpty().withMessage('Last Name required'),
  body('location').notEmpty().withMessage('User location required'),
]);

export const validateBetInput = withValidationErrors([
  body('betTeam').notEmpty().withMessage('Invalid team entry, try again.'),
  body('betAmount').notEmpty().withMessage('Bet amount required...'),
]);
