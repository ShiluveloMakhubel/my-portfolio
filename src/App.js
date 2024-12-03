import React from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Courses from './Components/Courses';
import Footer from './Components/Footer';
import Research from './Components/Research'
import Experience from './Components/Experience';
import ParticlesBackground from './Components/ParticlesBackground';
import Project from './Components/Project'
import OngoingProjects from './Components/OngoingProjects'
import './App.css';


const App = () => {
  return (
    <div className="App">
       
      <ParticlesBackground
        id="tsparticles"
        className="particles-container"
        options={{
          particles: {
            number: {
              value: 100,
            },
            size: {
              value: 3,
            },
            links: {
              enable: true,
              distance: 150,
            },
          },
        }}
      />
      <Header />
      <About />
      <Education />
      <Experience/>
      <Projects />
      <Skills />
      <Courses />
      <Project/>
      <OngoingProjects/>
      <Research
       />
      <Footer />
    </div>
  );
};

export default App;
