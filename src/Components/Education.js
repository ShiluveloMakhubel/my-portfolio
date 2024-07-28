import React from 'react';
import './Education.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2>Education</h2>
        <div className="education-list">
          <div className="education-item">
            <FontAwesomeIcon icon={faUniversity} className="education-icon" />
            <div className="education-content">
              <h3>University of Pretoria</h3>
              <p><strong>Bachelor of Honours in Computer Science</strong><br />2024 - Present</p>
            </div>
          </div>
          <div className="education-item">
            <FontAwesomeIcon icon={faUniversity} className="education-icon" />
            <div className="education-content">
              <h3>University of Pretoria</h3>
              <p><strong>Bachelor of Science in Computer Science</strong><br />2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
