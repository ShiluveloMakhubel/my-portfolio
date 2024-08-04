// src/Components/About.js
import React from 'react';
import './About.css';
import { FaCode, FaShieldAlt, FaUserSecret } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import DataStructuresVisualization from './DataStructuresVisualization';

const About = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 100 },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      id="about"
      className="about-section"
    >
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Me</h2>
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
          <DataStructuresVisualization />
        </div>
      </div>
    </motion.section>
  );
};

export default About;
