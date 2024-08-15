import Bet from '../models/BetModel.js';
import { StatusCodes } from 'http-status-codes';

export const getAllBets = async (req, res) => {
  const bets = await Bet.find({ createdBy: req.user.userId });
  res.status(StatusCodes.OK).json({ bets });
};

export const createBet = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const bet = await Bet.create(req.body);
  res.status(StatusCodes.CREATED).json({ bet, user: req.user.userId });
};

export const getSingleBet = async (req, res) => {
  const bet = await Bet.findById(req.params.id);
  res.status(StatusCodes.OK).json({ bet });
};
