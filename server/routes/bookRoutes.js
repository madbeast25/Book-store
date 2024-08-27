const express = require('express');
const multer = require('multer');
const {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
} = require('../controllers/books');
const authMiddleware = require('../middleware/authMiddlware');

const router = express.Router();

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Routes for handling book operations
router.post('/upload-book', upload.fields([{ name: 'img', maxCount: 1 }, { name: 'pdf', maxCount: 1 }]), createBook);
router.get('/books', getAllBooks);
router.get('/books/:id', getBookById);
router.patch('/books/:id',  upload.fields([{ name: 'img', maxCount: 1 }, { name: 'pdf', maxCount: 1 }]), updateBook);
router.delete('/books/:id', deleteBook);

module.exports = router;
