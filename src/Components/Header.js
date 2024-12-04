import React from 'react';
import './Header.css';
import { Link } from 'react-scroll'; // Import Link from react-scroll

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="container">
          <a href="#about" className="brand">
            <img src={process.env.PUBLIC_URL +"/images/logo.PNG"} alt="Shiluvelo Makhubele Logo" className="logo" />
          </a>
          <ul className="nav-links">
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-50} // Adjust offset for fixed headers
              >
                About
              </Link>
            </li>
            <li>
              <Link to="education" smooth={true} duration={500} offset={-50}>
                Education
              </Link>
            </li>
            <li>
              <Link to="experience" smooth={true} duration={500} offset={-50}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500} offset={-50}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="footer" smooth={true} duration={500} offset={-50}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="courses" smooth={true} duration={500} offset={-50}>
                Courses
              </Link>
            </li>
            <li>
              <Link to="community" smooth={true} duration={500} offset={-50}>
                Community
              </Link>
            </li>
            <li>
              <Link to="research" smooth={true} duration={500} offset={-50}>
                Research
              </Link>
            </li>
            <li>
              <Link to="ongoing-projects" smooth={true} duration={500} offset={-50}>
                On-Going projects
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
