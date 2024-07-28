// src/components/Projects.js
import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>2023 Mini‑project: Dating App</h3>
          <p>
            Created a dating app using Angular/Ionic. Skills Gained: Front‑end development, UI/UX design, API integration, matching algorithms, chat functionality.
          </p>
        </div>
        <div className="project-item">
          <h3>2023 Capstone Project: Event Organizer App</h3>
          <p>
            Built an Event Organizer app with Angular/Ionic, NestJS, and MongoDB. Skills Gained: Full‑stack development, RESTful API creation, JWT, MongoDB data modelling, event scheduling, user management, DevOps, Agile methodology.
          </p>
        </div>
        <div className="project-item">
          <h3>2024 NVS System Project</h3>
          <p>
            Worked on updating the system for NVS, a provider of pre-employment and background screening solutions. Skills Gained: Full‑stack development, React, .NET, leadership, DevOps.
          </p>
        </div>
        <div className="project-item">
          <h3>2024 COS72O (Computer Security) Project</h3>
          <p>
            Built a cloud-based application with security features using AWS's EC2 instance. Skills Gained: Full‑stack development, React, OAuth 2.0, Node.js, AWS DynamoDB, AWS EC2, AWS Inspector, logging.
          </p>
        </div>
        <div className="project-item">
          <h3>2022 COS214 Project: War Simulator</h3>
          <p>
            Implemented a generic war simulator using various design patterns. Skills Gained: Design patterns, UML diagrams, documentation, C++, teamwork.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
