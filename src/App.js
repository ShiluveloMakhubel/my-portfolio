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
import DataStructuresVisualization from './Components/DataStructuresVisualization'
import ParticlesBackground from './Components/ParticlesBackground';
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
      <Research
       />
       <DataStructuresVisualization/>
      <Footer />
    </div>
  );
};

export default App;
