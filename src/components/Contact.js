import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <div className="contact-card">
        <div className="contact-item">
          <FontAwesomeIcon icon={faEnvelope} />
          <a href="mailto:Shiluvelo26@outlook.com">Shiluvelo26@outlook.com</a>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faPhone} />
          <span>0659739081</span>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faGithub} />
          <a href="https://github.com/ShiluveloMakhubel" target="_blank" rel="noopener noreferrer">github.com/ShiluveloMakhubel</a>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <span>538 Grosvenor St, Hatfield, Pretoria, 0028</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
