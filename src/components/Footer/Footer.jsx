import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social">
        <h2>SÍGUENOS EN</h2>
        <div className="social-icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/twitter-icon.png" alt="Twitter" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/instagram-icon.png" alt="Instagram" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/tiktok-icon.png" alt="TikTok" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/youtube-icon.png" alt="YouTube" />
          </a>
        </div>
      </div>
      <div className="footer-links">
        <Link to="/conocenos">Contact Us</Link>
      </div>
    </footer>
  );
};

export default Footer;


