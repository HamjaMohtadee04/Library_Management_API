import express from 'express';

import { createBorrow, getBorrowSummary } from './borrow.controller';
export const borrowRoutes = express.Router();

borrowRoutes.post('/', createBorrow);
borrowRoutes.get('/', getBorrowSummary);
