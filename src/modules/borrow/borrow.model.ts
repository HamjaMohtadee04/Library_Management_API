import { Schema, model, Types } from 'mongoose';

const borrowSchema = new Schema(
  {
    book: {
      type: Types.ObjectId,
      ref: 'Book',
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: [1, 'Quantity must be at least 1'],
    },
    dueDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

export const Borrow = model('Borrow', borrowSchema);
