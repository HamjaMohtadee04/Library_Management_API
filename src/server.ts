import dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from './app';

dotenv.config();

const dbUri = process.env.MONGODB_URI as string;

// Connect to MongoDB once when the serverless function cold starts
mongoose.connect(dbUri)
  .then(() => {
    console.log('✅ Connected to MongoDB');
  })
  .catch(err => console.error('❌ DB connection error:', err));

// Export the app as default for Vercel
export default app;
