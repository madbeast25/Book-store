const Book = require('../models/books');

// Create a book
const createBook = async (req, res) => {
  try {
    const { title, author, description } = req.body;
    const img = req.files['img'][0].path;
    const pdf = req.files['pdf'][0].path;

    const newBook = new Book({ title, author, description, img, pdf });

    await newBook.save();
    res.status(201).json({ message: 'Book uploaded successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error uploading book' });
  }
};

// Update a book by ID
const updateBook = async (req, res) => {
  try {
    const updates = req.body;
    if (req.files['img']) {
      updates.img = req.files['img'][0].path;
    }
    if (req.files['pdf']) {
      updates.pdf = req.files['pdf'][0].path;
    }

    const updatedBook = await Book.findByIdAndUpdate(req.params.id, updates, { new: true });
    if (!updatedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.status(200).json({ message: 'Book updated successfully', updatedBook });
  } catch (error) {
    res.status(500).json({ error: 'Error updating the book' });
  }
};

// Get a book by ID
const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching the book' });
  }
};

// Get all books with optional filters
const getAllBooks = async (req, res) => {
  try {
    const { author, genre, pages, categories } = req.query;

    // Build query object
    const query = {};
    if (author) query.author = author;
    if (genre) query.genre = genre;
    if (pages) query.pages = { $lte: pages };
    if (categories) query.categories = { $in: categories.split(',') };

    const books = await Book.find(query);
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching books' });
  }
};

// Delete a book by ID
const deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting the book' });
  }
};

// Export the functions
module.exports = {
  createBook,
  updateBook,
  getBookById,
  getAllBooks,
  deleteBook
};
