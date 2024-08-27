import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container footer_container">
        <article>
          <Link to="/" className='logo'>
            <img src="" alt="Bookstore Logo" />
          </Link>
          <p>
            Welcome to [Bookstore Name], your one-stop destination for an extensive collection of books across various genres. Dive into the world of literature with us!
          </p>
          <div className="footer_socials">
            <a href="https://linkedin.com/" target='_blank' rel='noreferrer noopener'><FaLinkedin /></a>
            <a href="https://twitter.com/" target='_blank' rel='noreferrer noopener'><AiOutlineTwitter /></a>
            <a href="https://www.facebook.com" target='_blank' rel='noreferrer noopener'><FaFacebookF /></a>
            <a href="https://instagram.com/" target='_blank' rel='noreferrer noopener'><AiFillInstagram /></a>
          </div>
        </article>
        <article>
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </article>
        <article>
          <h4>Explore</h4>
          <Link to="/bestsellers">Bestsellers</Link>
          <Link to="/newarrivals">New Arrivals</Link>
          <Link to="/genres">Genres</Link>
          <Link to="/authors">Authors</Link>
          <Link to="/faqs">FAQs</Link>
        </article>
        <article>
          <h4>Customer Service</h4>
          <Link to="/contact">Help & Support</Link>
          <Link to="/returns">Returns</Link>
          <Link to="/shipping">Shipping Info</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </article>
      </div>
      <div className="footer_copyright">
        <small>2023 [Bookstore Name] &copy; All Rights Reserved</small>
      </div>
    </footer>
  );
}

export default Footer;
