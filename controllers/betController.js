import Bet from '../models/BetModel.js';
import { StatusCodes } from 'http-status-codes';

export const getAllBets = async (req, res) => {
  const { search, betTeam, sort } = req.query;
  const queryObject = {
    createdBy: req.user.userId,
  };

  if (search) {
    queryObject.$or = [{ betTeam: { $regex: search, $options: 'i' } }];
  }

  if (betTeam && betTeam !== 'all') {
    queryObject.betTeam = betTeam;
  }

  const sortOptions = {
    newest: '-createdAt',
    oldest: 'createdAt',
  };

  const sortKey = sortOptions[sort] || sortOptions.newest;

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 6;
  const skip = (page - 1) * limit;

  const bets = await Bet.find(queryObject)
    .sort(sortKey)
    .skip(skip)
    .limit(limit);

  const totalBets = await Bet.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalBets / limit);

  res
    .status(StatusCodes.OK)
    .json({ totalBets, numOfPages, currentPage: page, bets });
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
