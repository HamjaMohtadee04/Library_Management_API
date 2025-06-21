import express from 'express';
import { createBook,getAllBooks,getBookById,updateBook,deleteBook} from './book.controller';
export const bookRoutes = express.Router();

bookRoutes.post('/', createBook); 
bookRoutes.get('/', getAllBooks);
bookRoutes.get('/:bookId', getBookById);
bookRoutes.put('/:bookId', updateBook);
bookRoutes.delete('/:bookId', deleteBook);