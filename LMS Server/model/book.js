const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      min: 1,
      max: 255,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
      max: 1024,
    },
    author: {
      type: String,
      required: true,
      min: 1,
      max: 1024,
    },
    category: {
      type: String,
      required: true,
      min: 1,
      max: 1024,
    },
    isbn: {
      type: String,
      required: true,
      min: 13,
      max: 1024,
    },
    publication_date: {
      type: String,
      required: true,
    },
    publisher: {
      type: String,
      required: true,
    },
    available_books: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Books", bookSchema);
