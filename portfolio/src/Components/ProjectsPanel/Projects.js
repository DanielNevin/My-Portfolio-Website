import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {

  const [projects, setProjects] = useState([
    {
      title: "NotReddit",
      imageSrc: "https://github.com/danielNevin/Odin-NotReddit/raw/main/notreddit/src/Resources/Screencap/NotReddit.png",
      githubLink: "https://github.com/danielNevin/Odin-NotReddit",
      demoLink: "https://danielNevin.github.io/Odin-NotReddit/",
      description: "A Reddit Copy developed as a submission for The Odin Project's capstone JavaScript project. NotReddit allows users to sign in, post content (text, links, and images), upvote/downvote other user posts, and comment on them. NotReddit was built using React, TailwindCSS, and Firebase using JavaScript"
    },
    {
      title: "Where's Waldo",
      imageSrc: "https://github.com/danielNevin/Odin-Wheres-Waldo/raw/main/wheres-waldo/src/Resources/Screencap/wheresWaldoBackground.png",
      githubLink: "https://github.com/danielNevin/Odin-Wheres-Waldo",
      demoLink: "https://danielNevin.github.io/Odin-Wheres-Waldo/",
      description: "This Web App is my shot at building a Where's Waldo game with a persistent leaderboard as a submission for The Odin Project's Where's Waldo JavaScript Project The project was built using React, TailwindCSS, and Firebase using JavaScript."
    },
    {
      title: "Shopping Cart",
      imageSrc: "https://github.com/danielNevin/Odin-Shopping-Cart/raw/main/shopping-cart/src/Resources/Screencaps/shoppingCart.png",
      githubLink: "https://github.com/danielNevin/Odin-Shopping-Cart",
      demoLink: "https://danielNevin.github.io/Odin-Shopping-Cart/",
      description: "This Web App is my shot at building an interactive Online Merchant Storefront with a functional cart as a submission for The Odin Project's Shopping Cart JavaScript Project. The project was built using React, React-Router, and TailwindCSS."
    }
  ])

  const projectCards = projects?.map((project, index) => {
    return(
      <ProjectCard key={index} title={project.title} imageSrc={project.imageSrc} githubLink={project.githubLink} demoLink={project.demoLink} description={project.description} /> 
    ) 
  })

  return (
    <div id="projects" className="h-auto bg-white flex flex-col gap-8 justify-center items-center overflow-x-hidden font-inter">
      <div data-aos="fade-down" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="flex h-auto w-auto p-2 bg-orange-500 items-center justify-center">
        <h1 className="text-xl lg:text-3xl text-white font-bold tracking-wide">
          FEATURED PROJECTS
        </h1>  
      </div>
      <div className="flex flex-col gap-16 md:gap-24 lg:gap-32">
        {projectCards}
      </div>
    </div>
  )
}