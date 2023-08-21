import React, { useRef, useEffect, useState } from 'react';
import Hero from './Components/HeroPanel/Hero';
import About from './Components/AboutPanel/About';
import SkillsPanel from './Components/SkillsPanel/SkillsPanel';
import Projects from './Components/ProjectsPanel/Projects';
import ContactPanel from './Components/ContactPanel/ContactPanel';
import PanelSeparator from './Components/Miscellaneous/PanelSeparator';
import ProjectCard from './Components/ProjectsPanel/ProjectCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

import AboutMe from './Components/AboutPanel/AboutMe';

function App() {

  const [projects, setProjects] = useState([
    {
      index: 0,
      title: "NotReddit",
      imageSrc: "https://github.com/danielNevin/Odin-NotReddit/raw/main/notreddit/src/Resources/Screencap/NotReddit.png",
      githubLink: "https://github.com/danielNevin/Odin-NotReddit",
      demoLink: "https://danielNevin.github.io/Odin-NotReddit/",
      description: "A Reddit Copy developed as a submission for The Odin Project's capstone JavaScript project. NotReddit allows users to sign in, post content (text, links, and images), upvote/downvote other user posts, and comment on them. NotReddit was built using React, TailwindCSS, and Firebase using JavaScript"
    },
    {
      index: 1,
      title: "Where's Waldo",
      imageSrc: "https://github.com/danielNevin/Odin-Wheres-Waldo/raw/main/wheres-waldo/src/Resources/Screencap/wheresWaldoBackground.png",
      githubLink: "https://github.com/danielNevin/Odin-Wheres-Waldo",
      demoLink: "https://danielNevin.github.io/Odin-Wheres-Waldo/",
      description: "A Where's Waldo game with a persistent leaderboard, developed as a submission for The Odin Project's Where's Waldo JavaScript Project The project was built using React, TailwindCSS, and Firebase using JavaScript."
    },
    {
      index: 2,
      title: "Shopping Cart",
      imageSrc: "https://github.com/danielNevin/Odin-Shopping-Cart/raw/main/shopping-cart/src/Resources/Screencaps/shoppingCart.png",
      githubLink: "https://github.com/danielNevin/Odin-Shopping-Cart",
      demoLink: "https://danielNevin.github.io/Odin-Shopping-Cart/",
      description: "An interactive Online Merchant Storefront with a functional cart, developed as a submission for The Odin Project's Shopping Cart JavaScript Project. The project was built using React, React-Router, and TailwindCSS."
    }
  ])

  const projectCards = projects?.map((project, index) => {
    return(
      <ProjectCard key={index} index={project.index} title={project.title} imageSrc={project.imageSrc} githubLink={project.githubLink} demoLink={project.demoLink} description={project.description} /> 
    ) 
  })

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div id='body' className="bg-slate-100 overflow-x-hidden">
      <Hero />
      <div className='flex flex-col px-8 gap-8 py-16 md:px-36 lg:px-56 xl:px-64 2xl:px-[22rem] 3xl:px-[30rem] 4xl:px-[35rem] 5xl:px-[50rem]'>
        <div className='w-full flex justify-center pt-8'>
          <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="flex h-auto w-min p-2 bg-accent items-center justify-center px-4 rounded-lg headerText">
            <h1 className="text-xl lg:text-3xl text-center text-background font-bold tracking-wide w-max">
              ABOUT ME
            </h1>  
          </div>
        </div>
        <About />
        <div className='w-full flex justify-center pt-8'>
          <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="flex h-auto w-min p-2 bg-accent items-center justify-center px-4 rounded-lg headerText">
            <h1 className="text-xl lg:text-3xl text-center text-background font-bold tracking-wide w-max">
              SKILLS
            </h1>  
          </div>
        </div>
        <SkillsPanel />
        <div className='w-full flex justify-center pt-8'>
          <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="flex h-auto w-min p-2 bg-accent items-center justify-center px-4 rounded-lg headerText">
            <h1 className="text-xl lg:text-3xl text-center text-background font-bold tracking-wide w-max">
              FEATURED PROJECTS
            </h1>  
          </div>
        </div>
        {projectCards}
      </div>
      <ContactPanel />
    </div>
  );
}

export default App;
