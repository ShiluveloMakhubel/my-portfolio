import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Projects.css';

const projectData = [
  {
    title: "2023 Mini‑project: Dating App",
    description: "Created a dating app using Angular/Ionic.",
    skills: "Front‑end development, UI/UX design, API integration, matching algorithms, chat functionality.",
    link: "https://github.com/dylankapnias-uni/miniproject-2023-grp5.git",
  },
  {
    title: "2023 Capstone Project: Event Organizer App",
    description: "Built an Event Organizer Mobile app with Angular/Ionic, NestJS, and MongoDB.",
    skills: "Full‑stack development, RESTful API creation, JWT, MongoDB data modelling, event scheduling, user management, DevOps, Agile methodology.",
    link: "https://github.com/COS301-SE-2023/MeetApp.git",
  },
  {
    title: "2024 NVS System Project",
    description: "Worked on updating the system for NVS, a provider of pre-employment and background screening solutions.",
    skills: "Full‑stack development, React, .NET, leadership, DevOps.",
    link: "https://github.com/khabubu/Preproduction-National-Validation-Services.git",
  },
  {
    title: "2024 COS72O (Computer Security) Project",
    description: "Built a cloud-based application with security features using AWS's EC2 instance.",
    skills: "Full‑stack development, React, OAuth 2.0, Node.js, AWS DynamoDB, AWS EC2, AWS Inspector, logging.",
    link: "https://github.com/ShiluveloMakhubel/modsel.git",
  },
  {
    title: "2022 COS214 Project: War Simulator",
    description: "Implemented a generic war simulator using various design patterns.",
    skills: "Design patterns, UML diagrams, documentation, C++, teamwork.",
    link: "https://github.com/ChrisMitt/COS214_Project.git",
  },
];

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: false });

  const containerVariants = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger project item animations
      },
    },
    hidden: { opacity: 0 },
  };

  const itemVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"} // Animate based on inView
      variants={containerVariants}
      id="projects"
      className="projects-section"
    >
      <h2>Projects</h2>
      <div className="project-grid">
        {projectData.map((project, index) => (
          <motion.div
            className="project-item"
            key={index}
            variants={itemVariants} // Apply item animations
          >
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-skills">
              <strong>Skills Gained:</strong> {project.skills}
            </p>
            <a
              href={project.link}
              className="github-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="github-icon" /> View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
