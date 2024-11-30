import React from 'react';
import { FaServer, FaCode, FaLock, FaNetworkWired } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Courses.css';

const coursesData = [
  {
    title: "COS330 Operating Systems",
    description: "This course introduces the principles of operating systems and their implementation.",
    skills: "Process management, Memory management, File systems, Concurrent programming",
    icon: <FaServer className="course-icon" />
  },
  {
    title: "COS341 Compiler Construction",
    description: "This course covers the design and implementation of compilers.",
    skills: "Lexical analysis, Syntax analysis, Semantic analysis, Code generation",
    icon: <FaCode className="course-icon" />
  },
  {
    title: "COS342 Cybersecurity",
    description: "In-depth study of cybersecurity principles, practices, and technologies.",
    skills: "Network security, Cryptography, Ethical hacking",
    icon: <FaLock className="course-icon" />
  },
  {
    title: "COS344 Computer Networks",
    description: "This course covers the principles of computer networking and the protocols used in modern networks.",
    skills: "Network protocols, Network architecture, Network security",
    icon: <FaNetworkWired className="course-icon" />
  },
  {
    title: "COS301 Software Engineering",
    description: "The module exposes students to problems associated with software development on an industrial scale",
    skills: "Teamwork, Communication,Software Architecture, Software development Methodologies and lifecycle,Technical skills",
    icon: <FaNetworkWired className="course-icon" />
  }
];

const Courses = () => {
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
      id="courses"
      className="courses-section"
    >
      <div className="container">
        <h2>Courses</h2>
        <div className="courses-list">
          {coursesData.map((course, index) => (
            <motion.div
              key={index}
              className="course-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.1 * index }}
            >
              {course.icon}
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <p><em>Skills Gained: {course.skills}</em></p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Courses;
