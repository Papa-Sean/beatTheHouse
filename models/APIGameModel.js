import mongoose from 'mongoose';

const APIGameSchema = new mongoose.Schema(
  {
    home_team: String,
    away_team: String,
    home_spread: Number,
    away_spread: Number,
    gameId: String,
    commence_time: String,
    sport_title: String,
  },
  { timestamps: true }
);

export default mongoose.model('APIgames', APIGameSchema);
