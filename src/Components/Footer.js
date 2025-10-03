import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-left">
          <p>&copy; 2025 Shiluvelo Makhubele. All rights reserved.</p>
        </div>
        <div className="footer-section footer-center">
          <h2>Contact</h2>
          <div className="footer-item">
            <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />
            <a href="mailto:Shiluvelo26@outlook.com">Shiluvelo26@outlook.com</a>
          </div>
          <div className="footer-item">
            <FontAwesomeIcon icon={faPhone} className="footer-icon" />
            <a href="tel:+27659739081">065 973 9081</a>
          </div>
          
            
          <div className="footer-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="footer-icon" />
            <span>538 Grosvenor St, Hatfield, Pretoria, 0028</span>
          </div>
        </div>
        <div className="footer-section footer-right">
            <p>Follow me on social media:</p>
            <div className="footer-item">
              <FontAwesomeIcon icon={faLinkedin} className="footer-icon" />
              <a href="https://www.linkedin.com/in/shiluvelo-makhubele-b1ab2bba/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            
            <div className="footer-item">
              <FontAwesomeIcon icon={faGithub} className="footer-icon" />
              <a href="https://github.com/ShiluveloMakhubel" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
