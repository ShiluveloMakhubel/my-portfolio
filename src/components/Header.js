import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="container">
          <a href="#about" className="brand">Shiluvelo Makhubele</a>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href='#courses'>Courses</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
