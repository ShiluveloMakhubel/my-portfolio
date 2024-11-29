import React from 'react';
import { FaEnvelope, FaPhone, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Contact</h2>
        <div className="contact-info">
          <p><FaEnvelope /> <a href="mailto:Shiluvelo26@outlook.com">Shiluvelo26@outlook.com</a></p>
          <p><FaPhone /> 0659739081</p>
          <p><FaGithub /> <a href="https://github.com/ShiluveloMakhubel" target="_blank" rel="noopener noreferrer">github.com/ShiluveloMakhubel</a></p>
          <p><FaMapMarkerAlt /> 538 Grosvenor St, Hatfield, Pretoria, 0028</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
