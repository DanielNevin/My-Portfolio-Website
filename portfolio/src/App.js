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

import AboutMe from './Components/AboutPanel/AboutMe';

function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div id='body' className="bg-[#f4f0eb] overflow-x-hidden">
      <Hero />
      <div className='flex flex-col px-8 gap-16 py-16 md:px-36 md:gap-24 md:py-24 lg:px-56 lg:gap-32 lg:py-32 xl:px-64 2xl:px-[22rem] 3xl:px-[26rem] 4xl:px-[35rem]'>
        <AboutMe />
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
