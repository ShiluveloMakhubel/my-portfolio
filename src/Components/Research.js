import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';  
import './Research.css'; // Import the updated CSS file

const Research = () => {
  return (
    <section id="research" className="research-section">
      <div className="container">
        <h2>Honours Research: Developing Digital Evidence Gathering Techniques for IoT Devices</h2>
        <p>
          My research focuses on digital forensic readiness for Internet of Things (IoT) devices, specifically examining Apple's HomeKit ecosystem. This study develops techniques for gathering, securing, and analyzing digital evidence from IoT devices, with an emphasis on pre-incident collection using the prototype tool "SecureCollect" which I developed
        </p>
        
        <div className="research-details">
          <h3>Key Research Areas:</h3>
          <ul>
            <li><strong>Security Vulnerabilities:</strong> Identifying potential threats within IoT ecosystems and exploring mitigation strategies through forensic readiness.</li>
            <li><strong>Data Extraction:</strong> Developing methodologies to extract and process data from Apple’s Home app and connected devices for digital forensic analysis.</li>
            <li><strong>Challenges & Opportunities:</strong> Addressing challenges such as data encryption, proprietary protocols, and cloud storage for IoT device forensics.</li>
            <li><strong>SecureCollect Prototype:</strong> A custom prototype developed for secure data collection and transmission from IoT devices to support forensic readiness in smart home environments.</li>
          </ul>
        </div>
        
        <div className="tools-section">
          <h3>Tools and Technologies Used:</h3>
          <ul>
            <li><strong>HomeKit and Apple’s Home app:</strong> The core system for managing IoT devices in the HomeKit ecosystem.</li>
            <li><strong>Homebridge:</strong> Open-source software enabling the integration of non-HomeKit-compatible devices with Apple's ecosystem.</li>
            <li><strong>ISO/IEC 27043 Digital Forensics Process:</strong> Framework for the digital forensics process used to collect, preserve, and analyze evidence in IoT environments.</li>
            <li><strong>SecureCollect:</strong> A custom-built prototype used for data collection, security analysis, and experimentation within IoT environments.</li>
            <li><strong>React & Node.js:</strong> Technologies used for the development of web-based forensic tools and data extraction platforms.</li>
            <li><strong>MongoDB:</strong> Database used for storing data from IoT devices and analyzing logs for forensic investigation.</li>
            <li><strong>Python:</strong> Utilized for scripting and automation of data collection, extraction, and analysis.</li>
            <li><strong>Wireshark:</strong> Network protocol analyzer used to capture and inspect data traffic between IoT devices for security and forensic analysis.</li>
            <li><strong>Virtual Machines:</strong> Employed to simulate different IoT environments, including Homebridge-enabled devices for testing forensic processes.</li>
          </ul>
        </div>

        <div className="research-outcomes">
          <h3>Research Outcomes:</h3>
          <ul>
            <li>Improved techniques for extracting digital evidence from Apple’s Home app and non-HomeKit-compatible devices.</li>
            <li>Identification of gaps in forensic readiness, particularly in managing non-HomeKit-compatible devices.</li>
            <li>Development of the SecureCollect prototype, enhancing IoT device data collection and security analysis for forensic investigations.</li>
            <li>Recommendations for improving forensic practices within the IoT ecosystem, particularly regarding data encryption, cloud-based storage, and device interoperability.</li>
          </ul>
        </div>

        <div className="download-section">
          <h3>Download Full Research</h3>
          <p>Click the button below to download the full research paper in PDF format:</p>
          <a href="/Full-article.pdf" download className="download-btn">
            Download Full Research
          </a>
        </div>
      </div>
    </section>
  );
};

export default Research;
