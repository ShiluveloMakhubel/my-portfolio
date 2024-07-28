// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>Shiluvelo A. Makhubele</h1>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
