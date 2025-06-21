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

app.use('/api', router);



app.use(errorHandler);

export default app;
