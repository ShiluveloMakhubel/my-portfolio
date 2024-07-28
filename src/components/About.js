import React from 'react';
import './About.css';
import { FaCode, FaShieldAlt, FaUserSecret } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-icon">
           
          </div>
          <p>
            I am a computer science graduate with a passion for software engineering, security, and digital forensics. 
            I love creating modern, interactive web applications and solving complex problems. I am currently completing 
            my Honours degree in computer science at the University of Pretoria.
          </p>
          <div className="about-skills">
            <div className="skill">
              <FaCode className="skill-icon" />
              <p>Software Engineering</p>
            </div>
            <div className="skill">
              <FaShieldAlt className="skill-icon" />
              <p>Security</p>
            </div>
            <div className="skill">
              <FaUserSecret className="skill-icon" />
              <p>Digital Forensics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
