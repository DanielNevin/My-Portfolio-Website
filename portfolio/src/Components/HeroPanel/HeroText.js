import React, { useState, useEffect } from "react";
import '@fontsource/roboto/300.css';
import { KeyboardDoubleArrowDown } from "@mui/icons-material";
import { ChevronRight } from "@mui/icons-material";
import $ from 'jquery';
import '../../index'

export default function HeroText() {

  const [animationFlag, setAnimationFlag] = useState(false);
  const [scrollAnimationFlag, setScrollAnimationFlag] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [isProjectsHovered, setIsProjectsHovered] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);

  const handleAboutHover = () => {
    setIsAboutHovered(true);
  }

  const handleProjectsHover = () => {
    setIsProjectsHovered(true);
  }

  const handleContactsHovered = () => {
    setIsContactHovered(true);
  }

  const handleMouseLeave = () => {
    setIsAboutHovered(false);
    setIsProjectsHovered(false);
    setIsContactHovered(false);
  }

  const scrollToAbout = () => {
    let about = document.getElementById('about')
    about?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    let projects = document.getElementById('projects')
    projects?.scrollIntoView({ top: -50, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    let contact = document.getElementById('contact')
    contact?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAboutClick = () => {
    scrollToAbout();
    handleMouseLeave();
  };

  const handleProjectsClick = () => {
    scrollToProjects();
    handleMouseLeave();
  };

  const handleContactClick = () => {
    scrollToContact();
    handleMouseLeave();
  };

  useEffect(() => {
    // Wait for 2600ms and then set the animationFlag to true
    const timeoutId = setTimeout(() => {
      setAnimationFlag(true);
    }, 2600);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, [])

  return (
    <>
      <div className="h-full w-auto flex flex-col items-start justify-center gap-1 text-background text-6xl md:text-7xl lg:text-8xl xl:text-9xl absolute left-[15%] bottom-10 md:bottom-16 lg:bottom-8">
        <div className="flex flex-col lg:flex-row lg:gap-4">
          <span className={`animate-heroFirstNameFadeUp ease-out text-accent font-inter tracking-wide`}>
            DANIEL
          </span>
          <span className={`animate-heroLastNameFadeUp ease-out text-background font-inter tracking-wide`}>
            NEVIN
          </span>
        </div>
      </div>
      <div className="h-full w-auto flex items-center justify-start gap-2 text-background text-xl md:text-3xl lg:text-4xl font-poppins font-light absolute left-[calc(15%+0.3rem)] top-16 md:top-16 lg:top-16">
        <span className={`animate-heroFrontEndFadeLeft ease-out text-accent tracking-wide`}>
          FRONT
        </span>
        <span className={`animate-heroFrontEndFadeLeft ease-out text-accent tracking-wide`}>
          END
        </span>
        <span className={`animate-heroDeveloperFadeLeft ease-out text-background tracking-wide`}>
          DEVELOPER
        </span>
      </div>
      <div className={`flex w-full gap-10 text-background items-start justify-center lg:justify-end lg:px-[15%] absolute top-16 font-poppins font-light text-sm md:text-lg lg:text-xl lg:gap-20`}>
        <div className="flex flex-col">
          <span className="hover:cursor-pointer animate-fade-down animate-duration-1000 animate-delay-[2600ms] lg:hover:text-accent lg:transition-colors" onMouseEnter={handleAboutHover} onMouseLeave={handleMouseLeave} onClick={handleAboutClick}>
            ABOUT
          </span>
          {isAboutHovered &&
          <div className={ `flex items-center justify-center ${ animationFlag ? "animate-chevronFadeDown" : "opacity-0" }` }>
            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" className="fill-accent scale-75">
              <path d="M480-171 227.13-423.87l55.109-55.108 197.761 199 198.761-199 54.109 55.108L480-171Zm0-284.739L227.13-708.37l55.109-54.347 197.761 199 198.761-199 54.109 54.347L480-455.739Z"/>
            </svg>
          </div> }
        </div>
        <div className="flex flex-col">
          <span className="hover:cursor-pointer animate-fade-down animate-duration-1000 animate-delay-[2800ms] lg:hover:text-accent lg:transition-colors" onMouseEnter={handleProjectsHover} onMouseLeave={handleMouseLeave} onClick={handleProjectsClick}>
            PROJECTS
          </span>
          {isProjectsHovered &&
          <div className={ `flex items-center justify-center ${ animationFlag ? "animate-chevronFadeDown" : "opacity-0" }` }>
            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" className="fill-accent scale-75">
              <path d="M480-171 227.13-423.87l55.109-55.108 197.761 199 198.761-199 54.109 55.108L480-171Zm0-284.739L227.13-708.37l55.109-54.347 197.761 199 198.761-199 54.109 54.347L480-455.739Z"/>
            </svg>
          </div> }
        </div>
        <div className="flex flex-col">
          <span className="hover:cursor-pointer animate-fade-down animate-duration-1000 animate-delay-[3000ms] lg:hover:text-accent lg:transition-colors" onMouseEnter={handleContactsHovered} onMouseLeave={handleMouseLeave} onClick={handleContactClick}>
            CONTACT
          </span>
          {isContactHovered &&
          <div className={ `flex items-center justify-center ${ animationFlag ? "animate-chevronFadeDown" : "opacity-0" }` }>
            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" className="fill-accent scale-75">
              <path d="M480-171 227.13-423.87l55.109-55.108 197.761 199 198.761-199 54.109 55.108L480-171Zm0-284.739L227.13-708.37l55.109-54.347 197.761 199 198.761-199 54.109 54.347L480-455.739Z"/>
            </svg>
          </div> }
        </div>
      </div>
      <div className={ `flex w-full items-center justify-center absolute bottom-20 ${ animationFlag ? "animate-chevronFadeDown" : "opacity-0" }` }>
        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" className="fill-accent scale-125">
          <path d="M480-171 227.13-423.87l55.109-55.108 197.761 199 198.761-199 54.109 55.108L480-171Zm0-284.739L227.13-708.37l55.109-54.347 197.761 199 198.761-199 54.109 54.347L480-455.739Z"/>
        </svg>
      </div>

    </>

  )
}