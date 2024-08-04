import React from 'react';
import { FaCode, FaDatabase, FaCloud, FaGitAlt, FaReact, FaNodeJs, FaAws } from 'react-icons/fa';
import { SiJavascript, SiDotnet, SiCplusplus, SiCss3, SiHtml5 } from 'react-icons/si';
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
          <div className="skill-item">
            <FaCode className="skill-icon" />
            <h3>Software Development</h3>
            <p>JavaScript, .NET, C++, Node.js, React</p>
          </div>
          <div className="skill-item">
            <FaDatabase className="skill-icon" />
            <h3>Databases</h3>
            <p>NoSQL, SQL, MongoDB, AWS DynamoDB</p>
          </div>
          <div className="skill-item">
            <FaCloud className="skill-icon" />
            <h3>Cloud Computing</h3>
            <p>AWS EC2, AWS Inspector, Cloud Security Principles</p>
          </div>
          <div className="skill-item">
            <FaGitAlt className="skill-icon" />
            <h3>Version Control</h3>
            <p>GIT, GitHub</p>
          </div>
          <div className="skill-item">
            <FaReact className="skill-icon" />
            <h3>Front-End Development</h3>
            <p>React, Angular/Ionic, HTML, CSS</p>
          </div>
          <div className="skill-item">
            <FaNodeJs className="skill-icon" />
            <h3>Back-End Development</h3>
            <p>Node.js, REST APIs, JWT</p>
          </div>
          <div className="skill-item">
            <FaAws className="skill-icon" />
            <h3>DevOps</h3>
            <p>CI/CD Pipeline, Agile Methodology</p>
          </div>
          <div className="skill-item">
            <SiHtml5 className="skill-icon" />
            <h3>Web Technologies</h3>
            <p>HTML, CSS</p>
          </div>
          <div className="skill-item">
            <SiDotnet className="skill-icon" />
            <h3>Software Architecture</h3>
            <p>Software Development Lifecycle (SDLC), Design Patterns, UML Diagrams</p>
          </div>
          <div className="skill-item">
            <SiCplusplus className="skill-icon" />
            <h3>Programming Languages</h3>
            <p>C++, JavaScript, .NET</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
