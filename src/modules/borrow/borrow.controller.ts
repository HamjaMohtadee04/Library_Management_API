import { Request, Response, NextFunction } from 'express';
import { Borrow } from './borrow.model';
import { Book } from '../book/book.model';  
import { sendResponse } from '../../utils/sendResponse';

export const createBorrow = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { book: bookId, quantity, dueDate } = req.body;

   
    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({
        success: false,
        message: 'Book not found',
        error: {},
      });
    }

    if (book.copies < quantity) {
      return res.status(400).json({
        success: false,
        message: 'Not enough copies available',
        error: {},
      });
    }

 
    book.copies -= quantity;
    if (book.copies === 0) book.available = false;
    await book.save();

    
    const borrow = await Borrow.create({
      book: bookId,
      quantity,
      dueDate,
    });

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: 'Book borrowed successfully',
      data: borrow,
    });
  } catch (error) {
    next(error);
  }
};

export const getBorrowSummary = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const summary = await Borrow.aggregate([
      {
        $group: {
          _id: '$book',
          totalQuantity: { $sum: '$quantity' },
        },
      },
      {
        $lookup: {
          from: 'books',
          localField: '_id',
          foreignField: '_id',
          as: 'bookDetails',
        },
      },
      {
        $unwind: '$bookDetails',
      },
      {
        $project: {
          _id: 0,
          totalQuantity: 1,
          book: {
            title: '$bookDetails.title',
            isbn: '$bookDetails.isbn',
          },
        },
      },
    ]);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Borrowed books summary retrieved successfully',
      data: summary,
    });
  } catch (error) {
    next(error);
  }
};
