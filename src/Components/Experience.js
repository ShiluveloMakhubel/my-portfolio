import React from 'react';
import './Experience.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
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
    id="experience"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="experience-section"
    >
      <h2>Experience</h2>
      <div className="experience-list">
        {/* Enaex */}
        <div className="experience-item">
          <h3>Enaex</h3>
          <p><strong>Role:</strong> Graduate Trainee</p>
          <p><strong>Duration:</strong> Nov 2023 - Feb 2024</p>
          <p><strong>Participated as part of a bursary program to learn</strong></p>
          <p><em>Skills Gained:</em></p>
          <ul>
            <li><strong>Adaptability:</strong> Quickly learned processes and adjusted to new environments</li>
            <li><strong>Time Management:</strong> Prioritized tasks efficiently to meet deadlines</li>
          </ul>
        </div>

        {/* NVS System Update */}
        <div className="experience-item">
          <h3>NVS System Update</h3>
          <p><strong>Role:</strong> Full-Stack Developer</p>
          <p><strong>Duration:</strong> Jan 2024 - Mar 2024</p>
          <p><strong>Responsibilities:</strong> Updated the NVS system, a provider of pre-employment and background screening solutions. Worked with React, .NET, and DevOps pipelines.</p>
          <p><em>Skills Gained:</em> Full-stack development, React, .NET, leadership, DevOps.</p>
        </div>

        {/* Deposita */}
        <div className="experience-item">
          <h3>Deposita</h3>
          <p><strong>Role:</strong> Graduate Intern</p>
          <p><strong>Duration:</strong> Sept 2024 - October 2024</p>
          <p><strong>Responsibilities:</strong> I worked with the testing team, completing over 100 UAT tests. I also collaborated with the Senior Java Developer, support, and data teams.</p>
          <p><em>Skills Gained:</em></p>
          <ul>
            <li><strong>Technical:</strong> Java (Spring Boot), Jira, Git/GitHub, SQL, UAT testing</li>
            <li><strong>Problem-Solving:</strong> Debugging and identifying test failures, analyzing test results</li>
            <li><strong>Collaboration:</strong> Working closely with developers to fix issues and ensure high product quality</li>
            <li><strong>Interpersonal:</strong> Enhanced teamwork, communication, and stakeholder reporting skills</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
