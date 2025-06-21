import express from 'express';
import cors from 'cors';
import { router } from './routes';
import { errorHandler } from './middleware/errorHandler';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('📚 Library Management API is running!');
});
// All routes
app.use('/api', router);


// Global error handler
app.use(errorHandler);

export default app;
