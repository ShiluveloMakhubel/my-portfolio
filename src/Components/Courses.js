import React from 'react';
import { FaServer, FaCode, FaLock, FaNetworkWired } from 'react-icons/fa';
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
  }
];

const Courses = () => {
  return (
    <section id="courses" className="courses-section">
      <div className="container">
        <h2>Courses</h2>
        <div className="courses-list">
          {coursesData.map((course, index) => (
            <div key={index} className="course-item">
              {course.icon}
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <p><em>Skills Gained: {course.skills}</em></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
