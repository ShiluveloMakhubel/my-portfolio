import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="experience-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div className="container">
        <h2>Experience</h2>
        <div className="experience-list">
          {/* Enaex */}
          <motion.div
            className="experience-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <h3>Enaex</h3>
            <p><strong>Role:</strong> Graduate Trainee</p>
            <p><strong>Duration:</strong> Nov 2023 - Feb 2024</p>
            <p>
              <strong>Participated as part of a bursary program to learn</strong>
            </p>
            <p>
              <em>Skills Gained:</em> Communication, teamwork, understanding of industrial operations and processes
              <li><strong>Adaptability:</strong> Quickly learned processes and adjusted to new environments</li>
              <li><strong>Time Management:</strong> Prioritized tasks efficiently to meet deadlines</li>
            </p>
          </motion.div>

          {/* NVS System Update */}
          <motion.div
            className="experience-item"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.2 }}
          >
            <h3>NVS System Update</h3>
            <p><strong>Role:</strong> Full-Stack Developer</p>
            <p><strong>Duration:</strong> Jan 2024 - Mar 2024</p>
            <p>
              <strong>Responsibilities:</strong> Updated the NVS system, a provider of pre-employment and background screening solutions. Worked with React, .NET, and DevOps pipelines.
            </p>
            <p><em>Skills Gained:</em> Full-stack development, React, .NET, leadership, DevOps.</p>
          </motion.div>

          {/* Deposita */}
          <motion.div
            className="experience-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.4 }}
          >
            <h3>Deposita</h3>
            <p><strong>Role:</strong> Graduate Intern</p>
            <p><strong>Duration:</strong> Sept 2024 - October 2024</p>
            <p>
              <strong>Responsibilities:</strong> I worked with the testing team, completing over 100 UAT tests. I also collaborated with the Senior Java Developer, support, and data teams.
            </p>
            <p><em>Skills Gained:</em></p>
            <ul>
              <li><strong>Technical:</strong> Java (Spring Boot), Jira, Git/GitHub, SQL, UAT testing</li>
              <li><strong>Problem-Solving:</strong> Debugging and identifying test failures, analyzing test results</li>
              <li><strong>Collaboration:</strong> Working closely with developers to fix issues and ensure high product quality</li>
              <li><strong>Interpersonal:</strong> Enhanced teamwork, communication, and stakeholder reporting skills</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
