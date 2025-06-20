import dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from './app';

dotenv.config();

const port = process.env.PORT || 5000;
const dbUri = process.env.MONGODB_URI as string;

mongoose
  .connect(dbUri)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(port, () => {
      console.log(`🚀 Server is running on port ${port}`);
    });
  })
  .catch(err => console.error('❌ DB connection error:', err));

  console.log(typeof app);
