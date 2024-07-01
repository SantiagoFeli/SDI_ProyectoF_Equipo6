import React from 'react';
import './Footer.css';
import { FaInstagram, FaTiktok, FaYoutube, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media">
        <h2>SÍGUENOS EN</h2>
        <div className="icons">
          <FaTwitter className="icon" />
          <FaInstagram className="icon" />
          <FaTiktok className="icon" />
          <FaYoutube className="icon" />
        </div>
      </div>
      <div className="links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
        <Link to="/contact-us">Contact Us</Link>
        <a href="#">Mobile App</a>
      </div>
    </footer>
  );
};

export default Footer;


