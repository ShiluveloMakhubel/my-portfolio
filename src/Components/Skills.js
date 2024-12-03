import React from 'react';
import { FaCode, FaDatabase, FaCloud, FaGitAlt, FaReact, FaNodeJs, FaAws } from 'react-icons/fa';
import {  SiDotnet, SiCplusplus, SiHtml5 } from 'react-icons/si';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const Skills = () => {
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
      id="skills"
      className="skills-section"
    >
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          <motion.div
            className="skill-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <FaCode className="skill-icon" />
            <h3>Software Development</h3>
            <p>JavaScript, .NET, C++, Node.js, React</p>
          </motion.div>
          <motion.div
            className="skill-item"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <FaDatabase className="skill-icon" />
            <h3>Databases</h3>
            <p>NoSQL, SQL, MongoDB, AWS DynamoDB</p>
          </motion.div>
          <motion.div
            className="skill-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.2 }}
          >
            <FaCloud className="skill-icon" />
            <h3>Cloud Computing</h3>
            <p>AWS EC2, AWS Inspector, Cloud Security Principles</p>
          </motion.div>
          <motion.div
            className="skill-item"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.4 }}
          >
            <FaGitAlt className="skill-icon" />
            <h3>Version Control</h3>
            <p>GIT, GitHub</p>
          </motion.div>
          <motion.div
            className="skill-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.6 }}
          >
            <FaReact className="skill-icon" />
            <h3>Front-End Development</h3>
            <p>React, Angular/Ionic, HTML, CSS</p>
          </motion.div>
          <motion.div
            className="skill-item"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.8 }}
          >
            <FaNodeJs className="skill-icon" />
            <h3>Back-End Development</h3>
            <p>Node.js, REST APIs, JWT, Python, Flask</p>
          </motion.div>
          <motion.div
            className="skill-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeInOut', delay: 1 }}
          >
            <FaAws className="skill-icon" />
            <h3>DevOps</h3>
            <p>CI/CD Pipeline, Agile Methodology</p>
          </motion.div>
          <motion.div
            className="skill-item"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeInOut', delay: 1.2 }}
          >
            <SiHtml5 className="skill-icon" />
            <h3>Web Technologies</h3>
            <p>HTML, CSS</p>
          </motion.div>
          <motion.div
            className="skill-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeInOut', delay: 1.4 }}
          >
            <SiDotnet className="skill-icon" />
            <h3>Software Architecture</h3>
            <p>Software Development Lifecycle (SDLC), Design Patterns, UML Diagrams</p>
          </motion.div>
          <motion.div
            className="skill-item"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeInOut', delay: 1.6 }}
          >
            <SiCplusplus className="skill-icon" />
            <h3>Programming Languages</h3>
            <p>C++, JavaScript, .NET</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
