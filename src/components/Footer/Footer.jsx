import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import twitterIcon from '../../assets/twitter-icon.png';
import instagramIcon from '../../assets/instagram-icon.png';
import tiktokIcon from '../../assets/tiktok-icon.png';
import youtubeIcon from '../../assets/youtube-icon.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social">
        <h2>SÍGUENOS EN</h2>
        <div className="social-icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <img src={tiktokIcon} alt="TikTok" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img src={youtubeIcon} alt="YouTube" />
          </a>
        </div>
      </div>
      <div className="footer-links">
        <a>Privacy Policy</a>
        <a>Terms of Use</a>
        <Link to="/conocenos">Contact Us</Link>
        <a>Mobile App</a>
      </div>
    </footer>
  );
};

export default Footer;



