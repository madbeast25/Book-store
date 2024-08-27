import { useState,useEffect } from "react";
import axios  from "axios";
import Header from "../Header/Header";
import Modal from "../model/Model";
import Footer from "../footer/Footer";
const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [books, setBooks] = useState([]);

  useEffect(() => {
      const fetchBooks = async () => {
          try {
              const response = await axios.get('http://localhost:5000/api/v1/books');
              setBooks(response.data);
          } catch (error) {
              console.error('Error fetching books:', error);
          }
      };

      fetchBooks();
  }, []);

  const openModal = (book) => {
      setSelectedBook(book);
      setIsModalOpen(true);
  };

  const closeModal = () => {
      setIsModalOpen(false);
      setSelectedBook(null);
  };

  return (
      <>
          <Header />
          <main>
            <h3>book list</h3>
              <div id="booksContainer">
                  
                  {books.map(book => (
  <div key={book._id} className="book-item" onClick={() => openModal(book)}>
    <img src={`http://localhost:5000/${book.img}`} alt={book.title} />
    <h3>Title :{book.title}</h3>
    <p>Author: {book.author}</p>
    <p>Description{book.description}</p>
    <a href={`http://localhost:5000/${book.pdf}`} className="download-btn" download>Download PDF</a>
  </div>
))}

              </div>

              {selectedBook && (
                  <Modal
                      isOpen={isModalOpen}
                      onClose={closeModal}
                      book={selectedBook}
                  />
              )}
          </main>
          <Footer />
      </>
  );
};

export default Home;
