import React from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Education from './Components/Education';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import Courses from './Components/Courses';
import './App.css';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Courses />
      <Footer />
    </div>
  );
};

export default App;
