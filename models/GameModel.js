import mongoose from 'mongoose';

const GameSchema = new mongoose.Schema(
  {
    homeTeam: String,
    awayTeam: String,
    homeSpread: Number,
    awaySpread: Number,
    homeOdds: Number,
    awayOdds: Number,
  },
  { timestamps: true }
);

export default mongoose.model('games', GameSchema);
