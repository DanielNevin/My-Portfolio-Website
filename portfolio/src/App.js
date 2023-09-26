import React, { useRef, useEffect, useState } from 'react';
import Hero from './Components/HeroPanel/Hero';
import About from './Components/AboutPanel/About';
import SkillsPanel from './Components/SkillsPanel/SkillsPanel';
import ContactPanel from './Components/ContactPanel/ContactPanel';
import ProjectCard from './Components/ProjectsPanel/ProjectCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {

  // Array of projects that are rendered via the ProjectCard Component
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

  // Iterating through the above array to render all the Featured Projects
  const projectCards = projects?.map((project, index) => {
    return(
      <ProjectCard key={index} index={project.index} title={project.title} imageSrc={project.imageSrc} githubLink={project.githubLink} demoLink={project.demoLink} description={project.description} /> 
    ) 
  })

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div id='body' className="bg-slate-50 overflow-x-hidden">
      <Hero />
      <div id="about" className='flex flex-col px-8 py-16 gap-16 xsm:px-16 sm:px-24 md:px-36 md:gap-24 md:py-48 lg:px-48 xl:px-65 xl:gap-48 2xl:px-[18rem] 3xl:px-[24rem] 4xl:px-[32rem] 5xl:px-[45rem]'>
        <div className='w-full flex flex-col justify-center xl:pt-8'>
          <div className="flex h-auto w-min py-8 items-center justify-center rounded-lg">
            <h1 data-aos="fade-right" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="text-4xl lg:text-6xl text-accent font-bold tracking-wider w-max">
              <span data-aos="fade-down" data-aos-duration="500" data-aos-once="true" data-aos-easing="sine">A</span>
              <span data-aos="fade-down" data-aos-duration="500" data-aos-delay="100" data-aos-once="true" data-aos-easing="sine">B</span>
              <span data-aos="fade-down" data-aos-duration="500" data-aos-delay="200" data-aos-once="true" data-aos-easing="sine">O</span>
              <span data-aos="fade-down" data-aos-duration="500" data-aos-delay="300" data-aos-once="true" data-aos-easing="sine">U</span>
              <span data-aos="fade-down" data-aos-duration="500" data-aos-delay="400" data-aos-once="true" data-aos-easing="sine">T</span>
              <span data-aos="fade-down" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" data-aos-easing="sine">&nbsp;</span>
              <span data-aos="fade-down" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" data-aos-easing="sine">&nbsp;</span>
              <span data-aos="fade-down" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" data-aos-easing="sine">M</span>
              <span data-aos="fade-down" data-aos-duration="500" data-aos-delay="600" data-aos-once="true" data-aos-easing="sine">E</span>
            </h1>
          </div>
          <About />
        </div>
        <div className='w-full flex flex-col justify-center xl:pt-8'>
          <div className="flex h-auto w-min py-8 items-center justify-center rounded-lg">
            <h1 data-aos="fade-right" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="text-4xl lg:text-6xl text-accent font-bold tracking-wider w-max">
              <span data-aos="fade-down" data-aos-duration="500" data-aos-once="true" data-aos-easing="sine">S</span>
              <span data-aos="fade-down" data-aos-duration="500" data-aos-delay="100" data-aos-once="true" data-aos-easing="sine">K</span>
              <span data-aos="fade-down" data-aos-duration="500" data-aos-delay="200" data-aos-once="true" data-aos-easing="sine">I</span>
              <span data-aos="fade-down" data-aos-duration="500" data-aos-delay="300" data-aos-once="true" data-aos-easing="sine">L</span>
              <span data-aos="fade-down" data-aos-duration="500" data-aos-delay="400" data-aos-once="true" data-aos-easing="sine">L</span>
              <span data-aos="fade-down" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" data-aos-easing="sine">S</span>
            </h1>
          </div>
          <SkillsPanel />
        </div>
        <div id='projects' className='w-full flex flex-col justify-center gap-16'>
          <div className="flex flex-col xsm:flex-row h-auto w-min items-center justify-center rounded-lg">
            <h1 data-aos="fade-right" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="text-4xl lg:text-6xl text-accent font-bold tracking-wider w-max">
              <span data-aos="fade-down" data-aos-duration="500" data-aos-once="true" data-aos-easing="sine">F</span>
              <span data-aos="fade-down" data-aos-duration="500" data-aos-delay="100" data-aos-once="true" data-aos-easing="sine">E</span>
              <span data-aos="fade-down" data-aos-duration="500" data-aos-delay="200" data-aos-once="true" data-aos-easing="sine">A</span>
              <span data-aos="fade-down" data-aos-duration="500" data-aos-delay="300" data-aos-once="true" data-aos-easing="sine">T</span>
              <span data-aos="fade-down" data-aos-duration="500" data-aos-delay="400" data-aos-once="true" data-aos-easing="sine">U</span>
              <span data-aos="fade-down" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" data-aos-easing="sine">R</span>
              <span data-aos="fade-down" data-aos-duration="500" data-aos-delay="600" data-aos-once="true" data-aos-easing="sine">E</span>
              <span data-aos="fade-down" data-aos-duration="500" data-aos-delay="700" data-aos-once="true" data-aos-easing="sine">D</span>
              <span data-aos="fade-down" data-aos-duration="500" data-aos-delay="700" data-aos-once="true" data-aos-easing="sine">&nbsp;</span>
            </h1>
            <h1 data-aos="fade-right" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="text-4xl lg:text-6xl text-accent font-bold tracking-wider w-max">
              <span data-aos="fade-down" data-aos-duration="500" data-aos-delay="800" data-aos-once="true" data-aos-easing="sine">P</span>
              <span data-aos="fade-down" data-aos-duration="500" data-aos-delay="900" data-aos-once="true" data-aos-easing="sine">R</span>
              <span data-aos="fade-down" data-aos-duration="500" data-aos-delay="1000" data-aos-once="true" data-aos-easing="sine">O</span>
              <span data-aos="fade-down" data-aos-duration="500" data-aos-delay="1100" data-aos-once="true" data-aos-easing="sine">J</span>
              <span data-aos="fade-down" data-aos-duration="500" data-aos-delay="1200" data-aos-once="true" data-aos-easing="sine">E</span>
              <span data-aos="fade-down" data-aos-duration="500" data-aos-delay="1300" data-aos-once="true" data-aos-easing="sine">C</span>
              <span data-aos="fade-down" data-aos-duration="500" data-aos-delay="1400" data-aos-once="true" data-aos-easing="sine">T</span>
              <span data-aos="fade-down" data-aos-duration="500" data-aos-delay="1500" data-aos-once="true" data-aos-easing="sine">S</span>
            </h1>
          </div>
          <div className='flex flex-col gap-16 xl:gap-48'>
            {projectCards}
          </div>
        </div>
      </div>
      <ContactPanel />
    </div>
  );
}

export default App;
