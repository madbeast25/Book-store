import PropTypes from 'prop-types';
import '../../home.css';

const Modal = ({ isOpen, onClose, book }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <span className="close-btn" onClick={onClose}>&times;</span>
                <div className="modal-body">
                    <div className="modal-left">
                        <p><strong>Author:</strong> {book.author}</p>
                        <p><strong>Description:</strong> {book.description}</p>
                    </div>
                    <div className="modal-right">
                        <h2>{book.title}</h2>
                        <img src={`http://localhost:5000/${book.img}`} alt={book.title} className="modal-img" />
                        <a href={`http://localhost:5000/${book.pdf}`} className="download-btn" download>Download PDF</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Define PropTypes for the Modal component
Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    book: PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        pdf: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};

export default Modal;
