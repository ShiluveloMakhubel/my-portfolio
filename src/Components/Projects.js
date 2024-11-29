import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Projects.css';

const Projects = () => {
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
      id="projects"
      className="projects-section"
    >
      <h2>Projects</h2>
      <div className="project-grid">
        <div className="project-item">
          <h3>2023 Mini‑project: Dating App</h3>
          <p className="project-description">
            Created a dating app using Angular/Ionic.
          </p>
          <p className="project-skills">
            <strong>Skills Gained:</strong> Front‑end development, UI/UX design, API integration, matching algorithms, chat functionality.
          </p>
          <a href="https://github.com/ShiluveloMakhubel/dating-app" className="github-link" target="_blank" rel="noopener noreferrer">
            <FaGithub className="github-icon" /> View on GitHub
          </a>
        </div>
        <div className="project-item">
          <h3>2023 Capstone Project: Event Organizer App</h3>
          <p className="project-description">
            Built an Event Organizer app with Angular/Ionic, NestJS, and MongoDB.
          </p>
          <p className="project-skills">
            <strong>Skills Gained:</strong> Full‑stack development, RESTful API creation, JWT, MongoDB data modelling, event scheduling, user management, DevOps, Agile methodology.
          </p>
          <a href="https://github.com/ShiluveloMakhubel/event-organizer-app" className="github-link" target="_blank" rel="noopener noreferrer">
            <FaGithub className="github-icon" /> View on GitHub
          </a>
        </div>
        <div className="project-item">
          <h3>2024 NVS System Project</h3>
          <p className="project-description">
            Worked on updating the system for NVS, a provider of pre-employment and background screening solutions.
          </p>
          <p className="project-skills">
            <strong>Skills Gained:</strong> Full‑stack development, React, .NET, leadership, DevOps.
          </p>
          <a href="https://github.com/ShiluveloMakhubel/nvs-system" className="github-link" target="_blank" rel="noopener noreferrer">
            <FaGithub className="github-icon" /> View on GitHub
          </a>
        </div>
        <div className="project-item">
          <h3>2024 COS72O (Computer Security) Project</h3>
          <p className="project-description">
            Built a cloud-based application with security features using AWS's EC2 instance.
          </p>
          <p className="project-skills">
            <strong>Skills Gained:</strong> Full‑stack development, React, OAuth 2.0, Node.js, AWS DynamoDB, AWS EC2, AWS Inspector, logging.
          </p>
          <a href="https://github.com/ShiluveloMakhubel/cloud-security-app" className="github-link" target="_blank" rel="noopener noreferrer">
            <FaGithub className="github-icon" /> View on GitHub
          </a>
        </div>
        <div className="project-item">
          <h3>2022 COS214 Project: War Simulator</h3>
          <p className="project-description">
            Implemented a generic war simulator using various design patterns.
          </p>
          <p className="project-skills">
            <strong>Skills Gained:</strong> Design patterns, UML diagrams, documentation, C++, teamwork.
          </p>
          <a href="https://github.com/ShiluveloMakhubel/war-simulator" className="github-link" target="_blank" rel="noopener noreferrer">
            <FaGithub className="github-icon" /> View on GitHub
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
