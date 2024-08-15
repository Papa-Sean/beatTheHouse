import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import morgan from 'morgan';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import { v2 as cloudinary } from 'cloudinary';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';

// ROUTERS
import gamesRouter from './routes/gamesRouter.js';
import authRouter from './routes/authRouter.js';
import userRouter from './routes/userRouter.js';
import betsRouter from './routes/betsRouter.js';

// PUBLIC
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

// MIDDLEWARE
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
import { authenticateUser } from './middleware/authMiddleware.js';

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const __dirname = dirname(fileURLToPath(import.meta.url));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// app.use(express.static.apply(path.resolve(__dirname, './public')));
app.use(cookieParser());
app.use(express.json());
app.use(helmet());
app.use(mongoSanitize());

app.get('/', (req, res) => {
  res.send('What up doe! Close but your front-end didnt build right!');
});

app.get('/api/v1/test', (req, res) => {
  res.json({ msg: 'test route' });
});

app.use('/api/v1/games', authenticateUser, gamesRouter);
app.use('/api/v1/users', authenticateUser, userRouter);
app.use('/api/v1/bets', authenticateUser, betsRouter);
app.use('/api/v1/auth', authRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public', 'index.html'));
});

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
