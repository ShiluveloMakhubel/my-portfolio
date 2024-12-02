import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaServer, FaCartPlus } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './OngoingProjects.css';

const OngoingProjects = () => {
  const techStack = [
    {
      name: "Front-End",
      tools: "React, HTML, CSS",
      icon: <FaReact className="tech-icon" />,
    },
    {
      name: "Back-End",
      tools: ".NET (ASP.NET Core)",
      icon: <FaServer className="tech-icon" />,
    },
    {
      name: "Database",
      tools: "Microsoft SQL Server",
      icon: <FaDatabase className="tech-icon" />,
    },
    {
      name: "E-Commerce Features",
      tools: "Shopping cart, user accounts, and payment integration",
      icon: <FaCartPlus className="tech-icon" />,
    },
    {
      name: "API Integration",
      tools: "RESTful APIs for user and product management",
      icon: <FaNodeJs className="tech-icon" />,
    },
  ];

  return (
    <motion.section
      id="ongoing-projects"
      className="ongoing-projects-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div className="floating-container">
        <h2>Ongoing Projects: The Belah Hair Project</h2>
        <p>
          The **Belah Hair** project is an e-commerce platform designed to sell hair weaves, phones, shoes, and other accessories.
          We aim to deliver a user-friendly and modern experience by leveraging advanced technologies and seamless functionality.
        </p>
        
        <motion.div
          className="tech-stack"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <h3>Technologies Used:</h3>
          <div className="tech-grid">
            {techStack.map((tech, index) => (
              <div key={index} className="tech-item">
                {tech.icon}
                <h4>{tech.name}</h4>
                <p>{tech.tools}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="future-plans"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.2 }}
        >
          <h3>Future Plans:</h3>
          <ul>
            <li>Implement advanced recommendation algorithms for personalized shopping.</li>
            <li>Introduce real-time chat support using SignalR.</li>
            <li>Enhance payment options to support diverse payment gateways.</li>
            <li>Optimize SEO for better visibility and user traffic.</li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default OngoingProjects;
