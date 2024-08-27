import { useState, useEffect } from 'react';
import axios from 'axios';
import './BookManagement.css';

const BookManagement = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState(''); // Added description state
  const [img, setImg] = useState(null);
  const [pdf, setPdf] = useState(null);
  const [message, setMessage] = useState('');

  // Fetch all books
  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/v1/books');
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error.response?.data || error.message);
    }
  };

  useEffect(() => {
    fetchBooks(); // Call fetchBooks when component mounts
  }, []);

  // Handle form submission for create/update
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('description', description); // Append description
    if (img) formData.append('img', img);
    if (pdf) formData.append('pdf', pdf);

    try {
      if (selectedBook) {
        // Update book
        await axios.patch(`http://localhost:5000/api/v1/books/${selectedBook._id}`, formData);
        setMessage('Book updated successfully!');
      } else {
        // Create book
        await axios.post('http://localhost:5000/api/v1/upload-book', formData);
        setMessage('Book created successfully!');
      }

      clearForm();
      fetchBooks(); // Re-fetch books after creating/updating
    } catch (error) {
      console.error('Error creating/updating book:', error.response?.data || error.message);
      setMessage(`Error creating/updating book: ${error.response?.data?.error || error.message}`);
    }
  };

  // Handle book selection
  const handleSelect = (book) => {
    setSelectedBook(book);
    setTitle(book.title);
    setAuthor(book.author);
    setDescription(book.description); // Set description for selected book
    setMessage('');
  };

  // Handle book deletion
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/books/${id}`);
      setMessage('Book deleted successfully!');
      setSelectedBook(null);
      clearForm();
      fetchBooks(); // Re-fetch books after deletion
    } catch (error) {
      console.error('Error deleting book:', error.response?.data || error.message);
      setMessage(`Error deleting book: ${error.response?.data?.error || error.message}`);
    }
  };

  // Clear form fields
  const clearForm = () => {
    setTitle('');
    setAuthor('');
    setDescription(''); // Clear description field
    setImg(null);
    setPdf(null);
    setSelectedBook(null);
  };

  return (
    <div className="admin-container">
      <div className="form-container">
        <h2>{selectedBook ? 'Update Book' : 'Create New Book'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              placeholder="Enter book title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              id="author"
              placeholder="Enter book author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              placeholder="Enter book description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="img">Image</label>
            <input
              type="file"
              id="img"
              onChange={(e) => setImg(e.target.files[0])}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pdf">PDF</label>
            <input
              type="file"
              id="pdf"
              onChange={(e) => setPdf(e.target.files[0])}
            />
          </div>
          <button type="submit">{selectedBook ? 'Update Book' : 'Create Book'}</button>
          {selectedBook && <button type="button" onClick={clearForm}>Cancel</button>}
        </form>
        {message && <p className="message">{message}</p>}
      </div>
      <div className="books-container">
        <h2>Books</h2>
        {books.length > 0 ? (
          <div className="books-grid">
            {books.map((book) => (
              <div className="book-card" key={book._id}>
                <h3>{book.title}</h3>
                <p><strong>Author:</strong> {book.author}</p>
                <p><strong>Description:</strong> {book.description}</p>
                {book.img && <img src={`http://localhost:5000/${book.img}`} alt={book.title} className="book-img" />}
                {book.pdf && <a href={`http://localhost:5000/${book.pdf}`} download className="download-btn">Download PDF</a>}
                <div className="card-actions">
                  <button onClick={() => handleSelect(book)}>Edit</button>
                  <button onClick={() => handleDelete(book._id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No books available.</p>
        )}
      </div>
    </div>
  );
};

export default BookManagement;
