import React from 'react';
import './Education.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Education = () => {
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    hidden: { opacity: 0, y: 100 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="education-section"
    >
      <h2>Education</h2>
      <div className="education-list">
        <div className="education-item">
          <FontAwesomeIcon icon={faUniversity} className="education-icon" />
          <div className="education-content">
            <h3>University of Pretoria</h3>
            <p><strong>Bachelor of Science Honours in Computer Science</strong><br />2024 - Present</p>
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
    </motion.div>
  );
};

export default Education;
