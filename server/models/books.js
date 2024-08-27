const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  img: { type: String, required: true },
  pdf: { type: String, required: true },
  description: { type: String, required: true },
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
