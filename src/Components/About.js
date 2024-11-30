import React, { useEffect, useState } from 'react';
import './About.css';
import { FaCode, FaShieldAlt, FaUserSecret } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Use the Intersection Observer to track when the component goes out of view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the section is in view
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <motion.div
      id="about"
      className={`about-section ${isVisible ? 'visible' : 'hidden'}`}
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.7 }}
    >
      <h2>About Me</h2>
      <div className="about-content" >
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
    </motion.div>
  );
};

export default About;
