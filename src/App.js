import React from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Education from './Components/Education';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import Courses from './Components/Courses';
import Footer from './Components/Footer';
import Research from './Components/Research'
import Experience from './Components/Experience';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Education />
      <Experience/>
      <Projects />
      <Skills />
      <Courses />
      <Research
       />
      <Footer />
    </div>
  );
};

export default App;
