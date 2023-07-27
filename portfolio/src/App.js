import React, { useRef, useEffect, useState } from 'react';
import Hero from './Components/HeroPanel/Hero';
import About from './Components/AboutPanel/About';
import SkillsPanel from './Components/SkillsPanel/SkillsPanel';
import Projects from './Components/ProjectsPanel/Projects';
import ContactPanel from './Components/ContactPanel/ContactPanel';
import PanelSeparator from './Components/Miscellaneous/PanelSeparator';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div id='body' className="bg-white overflow-x-hidden">
      <Hero />
      <div className='bg-white md:mx-36 flex flex-col lg:mx-56 xl:mx-72 2xl:mx-[20rem] 3xl:mx-[25rem] 4xl:mx-[30rem]'>
        <About />
        <PanelSeparator />
        <SkillsPanel />
        <PanelSeparator />
        <Projects />
      </div>
      <ContactPanel />
    </div>
  );
}

export default App;
