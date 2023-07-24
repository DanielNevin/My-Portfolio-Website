import React, { useRef } from 'react';
import Hero from './Components/HeroPanel/Hero';
import About from './Components/AboutPanel/About';
import Skills from './Components/SkillsPanel/Skills';
import Projects from './Components/ProjectsPanel/Projects';
import Contact from './Components/ContactPanel/Contact';

function App() {

  return (
    <div className="bg-black overflow-x-hidden">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
