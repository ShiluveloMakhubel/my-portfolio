import React from 'react';
import './Header.css';
import logo from './images/logo.PNG';


const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="container">
          <a href="#about" className="brand">
            <img src={logo} alt="Shiluvelo Makhubele Logo" className="logo" />
            
          </a>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href='#courses'>Courses</a></li>
            <li><a href='#Research'>Research</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
