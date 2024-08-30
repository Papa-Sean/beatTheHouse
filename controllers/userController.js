import { StatusCodes } from 'http-status-codes';
import User from '../models/UserModel.js';
import Game from '../models/GameModel.js';
import Bet from '../models/BetModel.js';

export const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  const userWithoutPassword = user.toJSON();
  res.status(StatusCodes.OK).json({ userWithoutPassword });
};

export const getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.status(StatusCodes.OK).json({ users });
};

export const getApplicationStats = async (req, res) => {
  const users = await User.countDocuments();
  const usersWithGames = await User.find({});
  const bets = await Bet.find({});
  const data = [];
  const convert = (arr) => {
    const res = {};
    arr.forEach((obj) => {
      const key = `${obj.createdBy}`;
      if (!res[key]) {
        res[key] = { createdBy: obj.createdBy, bets: 0 };
      }
      res[key].bets += 1;
    });
    return Object.values(res);
  };
  const betsData = convert(bets);
  // const betStats = bets.map((bet) => {

  //   if (data !== bet.createdBy) {
  //     return data.push({ createdBy: bet.createdBy, totalBet: 1 });
  //   }
  //   return data.push({ createdBy: bet.createdBy, total: +2 });
  // });
  // console.log(data);

  res.status(StatusCodes.OK).json({ usersWithGames, betsData });
};

export const updateUser = async (req, res) => {
  const obj = { ...req.body };
  delete obj.password;
  console.log(obj);
  const updatedUser = await User.findByIdAndUpdate(req.user.userId, obj);
  res.status(StatusCodes.OK).json({ msg: 'update user' });
};
