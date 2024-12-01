import React from 'react';
import { motion } from 'framer-motion';
import './Project.css'; // Add appropriate styles
import image1 from './images/IMG_2762.JPG';
import image2 from './images/IMG_2766.JPG';
import image3 from './images/IMG_2771.JPG';
import image4 from './images/IMG_2803.JPG';
import image5 from './images/IMG_2807.JPG';
import image6 from './images/IMG_2912.JPG';
import image7 from './images/IMG_2915.JPG';
import image8 from './images/IMG_3044.JPG';
import image9 from './images/IMG_3046.JPG';

const Project = () => {
  return (
    <motion.section
      id="community"
      className="community-section"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div className="container">
        <h2>Community Outreach: JCP Project</h2>

        <div className="introduction">
          <h3>What is JCP?</h3>
          <p>
            The JCP module is designed to help students develop an understanding of their experiences in a team-based environment, as well as the broader implications of their academic knowledge on the community. Through reflection, students enhance their sense of civic responsibility while engaging in projects aligned with the United Nations' 17 Sustainable Development Goals (SDGs).
          </p>
          <h3>Vision for a JCP Project</h3>
          <p>
            The JCP program gives students the opportunity to develop interpersonal and technical skills by collaborating with team members from various disciplines and with non-technical members of the community. The ultimate aim is to foster long-term sustainable engagement with communities and promote upliftment.
          </p>
          <h3>Structure of JCP</h3>
          <p>
            The JCP module is a compulsory service-learning module for the EBIT Faculty at the University of Pretoria. It involves:
          </p>
          <ul>
            <li>
              Two 40-hour parts: Global awareness through Sustainable Development Goals (SDGs) and hands-on community work.
            </li>
            <li>
              Personal and professional development lectures, including self-awareness and communication skills training.
            </li>
            <li>
              Team collaboration on community projects aimed at producing measurable outcomes while fostering reflection and feedback.
            </li>
          </ul>
        </div>

        <div className="project-details">
          <h3>Project Highlights</h3>
          <ul>
            <li><strong>Project Name:</strong> Joint Community-based Project (EBIT Faculty of the University of Pretoria)</li>
            <li><strong>Location:</strong> An orphanage in Sunnyside, Pretoria</li>
            <li><strong>Objective:</strong> Repainted walls and floors, improving living conditions for more than 20 kids.</li>
            <li><strong>Impact:</strong> Enhanced the living environment, creating a better space for the children.</li>
          </ul>
        </div>

        <div className="gallery">
          <h3>Gallery</h3>
          <p>Here are some highlights from the project:</p>
          <div className="gallery-grid">
            <img src={image1} alt="Project highlight 1" />
            <img src={image2} alt="Project highlight 2" />
            <img src={image3} alt="Project highlight 3" />
            <img src={image4} alt="Project highlight 4" />
            <img src={image5} alt="Project highlight 5" />
            <img src={image6} alt="Project highlight 6" />
            <img src={image7} alt="Project highlight 7" />
            <img src={image8} alt="Project highlight 8" />
            <img src={image9} alt="Project highlight 9" />
          </div>
        </div>

        <div className="skills-gained">
          <h3>Skills Gained</h3>
          <ul>
            <li>Teamwork and collaboration</li>
            <li>Project planning and execution</li>
            <li>Problem-solving in real-world contexts</li>
            <li>Communication with diverse stakeholders</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default Project;
