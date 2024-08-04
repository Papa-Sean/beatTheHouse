import mongoose from 'mongoose';

const BetSchema = new mongoose.Schema(
  {
    betTeam: String,
    betSpread: Number,
    betOdds: Number,
    betAmount: Number,
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'BTHusers',
    },
  },
  { timestamps: true }
);

export default mongoose.model('bets', BetSchema);
