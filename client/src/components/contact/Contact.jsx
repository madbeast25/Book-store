
import '../../app.css';
import { useState } from 'react';
import axios from 'axios';
import  '../../home.css'
import Header from '../Header/Header';
import Footer from '../footer/Footer';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/v1/contacts', formData);

      if (response.status !== 201) {
        throw new Error('Failed to send message');
      }

      alert('Message sent successfully');
    } catch (error) {
      if (error.response) {
        console.error('Response error:', error.response.data);
      } else if (error.request) {
        console.error('Request error:', error.request);
      } else {
        console.error('Unexpected error:', error.message);
      }
      alert('There was an error sending your message.');
    }
    
  };

  return (
    <>
      <Header />
      <section className="location">
       
      </section>
      <section className="contact-us">
        <div className="row">
          <div className="contact-col">
            <div>
              <i className="fa fa-home"></i>
              <span>
                <h5>xyz, abc building</h5>
                <p>Madurai, Tamil Nadu, IN</p>
              </span>
            </div>
            <div>
              <i className="fa fa-phone"></i>
              <span>
                <h5>9025267664</h5>
                <p>Monday to Saturday, 10 AM</p>
              </span>
            </div>
            <div>
              <i className="fa fa-envelope-o"></i>
              <span>
                <h4>Administrator</h4>
                <h5>Email: admissions@collegename.edu</h5>
                <p>Phone: 9245687087</p>
              </span>
            </div>
           
          </div>
          <div className="contact-col">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                aria-label="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
                aria-label="Your Email"
                required
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter your subject"
                aria-label="Subject"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="8"
                placeholder="Message"
                aria-label="Your Message"
                required
              ></textarea>
              <button
                type="submit"
                className="home-btn red-btn"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Contact;
