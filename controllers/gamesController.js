import Game from '../models/GameModel.js';
import APIGame from '../models/APIGameModel.js';
import { StatusCodes } from 'http-status-codes';

export const getAllGames = async (req, res) => {
  const games = await Game.find({});
  res.status(StatusCodes.OK).json({ games });
};

export const getAllAPIGames = async (req, res) => {
  const games = await APIGame.find({});
  res.status(StatusCodes.OK).json({ games });
};

export const createGame = async (req, res) => {
  const game = await Game.create(req.body);
  res.status(StatusCodes.CREATED).json({ game });
};

export const createAPIGame = async (req, res) => {
  const game = await APIGame.create(req.body);
  res.status(StatusCodes.CREATED).json({ game });
};

export const getSingleGame = async (req, res) => {
  const game = await Game.findById(req.params.id);
  res.status(StatusCodes.OK).json({ game });
};

export const getSingleAPIGame = async (req, res) => {
  const game = await APIGame.findById(req.params.id);
  res.status(StatusCodes.OK).json({ game });
};

export const updateGame = async (req, res) => {
  const updatedGame = await Game.findOneAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(StatusCodes.OK).json({ msg: 'Game Modified', game: updatedGame });
};

export const deleteGame = async (req, res) => {
  const removedGame = await Game.findByIdAndDelete(req.params.id);
  res.status(StatusCodes.OK).json({ msg: 'Game Deleted', game: removedGame });
};
