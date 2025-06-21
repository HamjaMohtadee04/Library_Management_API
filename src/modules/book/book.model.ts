import { Schema, model, Document, Model } from 'mongoose';

export enum Genre {
  FICTION = 'FICTION',
  NON_FICTION = 'NON_FICTION',
  SCIENCE = 'SCIENCE',
  HISTORY = 'HISTORY',
  BIOGRAPHY = 'BIOGRAPHY',
  FANTASY = 'FANTASY',
}

// 1️⃣ Interface for a single Book document
export interface IBook extends Document {
  title: string;
  author: string;
  genre: Genre;
  isbn: string;
  description?: string;
  copies: number;
  available: boolean;
}

// 2️⃣ Interface for the static method
export interface BookModelType extends Model<IBook> {
  handleBorrow(bookId: string, quantity: number): Promise<IBook>;
}

// 3️⃣ Schema definition
const bookSchema = new Schema<IBook>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    author: {
      type: String,
      required: [true, 'Author is required'],
    },
    genre: {
      type: String,
      required: [true, 'Genre is required'],
      enum: Object.values(Genre),
    },
    isbn: {
      type: String,
      required: [true, 'ISBN is required'],
      unique: true,
    },
    description: {
      type: String,
    },
    copies: {
      type: Number,
      required: [true, 'Copies is required'],
      min: [0, 'Copies must be a non-negative number'],
    },
    available: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// 4️⃣ Static method
bookSchema.statics.handleBorrow = async function (
  bookId: string,
  quantity: number
) {
  const book = await this.findById(bookId);
  if (!book) {
    throw new Error('Book not found');
  }

  if (book.copies < quantity) {
    throw new Error('Not enough copies available to borrow');
  }

  book.copies -= quantity;
  if (book.copies === 0) {
    book.available = false;
  }

  await book.save();
  return book;
};

// 5️⃣ Middleware: auto-trim title and author
bookSchema.pre<IBook>('save', function (next) {
  if (this.title) this.title = this.title.trim();
  if (this.author) this.author = this.author.trim();
  next();
});

// 6️⃣ Export model with types
export const Book = model<IBook, BookModelType>('Book', bookSchema);
