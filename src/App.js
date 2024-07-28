// src/App.js
import React from 'react';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Education from './Components/Education';
import Contact from './Components/Contact';
import Skills from './Components/Skills'
import Courses from './Components/Courses';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Education />
      <Projects />
      <Skills/>
      <Courses/>
      <Contact />

      
    </div>
  );
};

export default App;
