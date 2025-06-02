import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import logo1 from '../Images/logo-svg 2.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img src={logo1} alt="Wealthwise Logo" className="footer-logo" />
          <p className="footer-tagline">
            Empowering your financial future with smart loans and fast approvals.
          </p>
        </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/service">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <ul>
            <li>Email: wealthwisefund@gmail.com</li>
            <li>Phone: +91 9266965252</li>
            
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Wealthwise. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
