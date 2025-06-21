import dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from './app';

dotenv.config();

const dbUri = process.env.MONGODB_URI as string;


mongoose.connect(dbUri)
  .then(() => {
    console.log('✅ Connected to MongoDB');
  })
  .catch(err => console.error('❌ DB connection error:', err));


export default app;
