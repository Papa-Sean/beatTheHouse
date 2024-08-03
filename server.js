import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import morgan from 'morgan';
import mongoose from 'mongoose';

// ROUTERS
import gameRouter from './routes/gamesRouter.js';
import authRouter from './routes/authRouter.js';

// MIDDLEWARE
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use('/api/v1/games', gameRouter);
app.use('/api/v1/auth', authRouter);

app.use('*', (req, res) => {
  res.status(404).json({ msg: 'Not Found' });
});

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(5100, () => {
    console.log(`Server is running on PORT: ${port}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
