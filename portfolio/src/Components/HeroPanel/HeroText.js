import React, { useState, useEffect } from "react";
import '@fontsource/roboto/300.css';
import { KeyboardDoubleArrowDown } from "@mui/icons-material";
import { ChevronRight } from "@mui/icons-material";
import $ from 'jquery';
import './Hero.css'

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

  useEffect(() => {
    // Wait for 2600ms and then set the animationFlag to true
    const timeoutId = setTimeout(() => {
      setAnimationFlag(true);
    }, 2600);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, [])

  useEffect(() => {
    // Wait for 5000ms and then set the animationFlag to true
    const timeoutId = setTimeout(() => {
      setScrollAnimationFlag(true);
    }, 5000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, [])

  return (
    <>
      <div className="h-full w-auto flex flex-col items-start justify-center gap-1 text-white text-6xl md:text-7xl lg:text-8xl xl:text-9xl absolute left-[15%] bottom-10 md:bottom-16 lg:bottom-8">
        <div className="flex flex-col lg:flex-row lg:gap-4">
          <span className={`animate-heroFirstNameFadeUp ease-out text-orange-500 font-inter tracking-wide ${ scrollAnimationFlag ? "slide-up" : "" } `}>
            DAN
          </span>
          <span className={`animate-heroLastNameFadeUp ease-out text-white font-inter tracking-wide ${ scrollAnimationFlag ? "slide-right-fast" : "" }`}>
            NEVIN
          </span>
        </div>
      </div>
      <div className="h-full w-auto flex items-center justify-start gap-2 text-white text-xl md:text-3xl lg:text-4xl font-poppins font-light absolute left-[calc(15%+0.3rem)] top-16 md:top-16 lg:top-16">
        <span className={`animate-heroFrontEndFadeLeft ease-out text-orange-500 tracking-wide ${ scrollAnimationFlag ? "slide-left-slow" : "" }`}>
          FRONT
        </span>
        <span className={`animate-heroFrontEndFadeLeft ease-out text-orange-500 tracking-wide ${ scrollAnimationFlag ? "slide-up-slow" : "" }`}>
          END
        </span>
        <span className={`animate-heroDeveloperFadeLeft ease-out text-white tracking-wide ${ scrollAnimationFlag ? "slide-down-slow" : "" }`}>
          DEVELOPER
        </span>
      </div>
      <div className={`flex w-full gap-10 text-white items-start justify-center lg:justify-end lg:px-[15%] absolute top-16 font-poppins font-light text-sm md:text-lg lg:text-xl lg:gap-20 ${ scrollAnimationFlag ? "tuck-up" : "" }`}>
        <div className="flex flex-col gap-2">
          <span className="hover:cursor-pointer animate-fade-down animate-duration-1000 animate-delay-[2600ms] lg:hover:text-orange-500 lg:transition-colors" onMouseEnter={handleAboutHover} onMouseLeave={handleMouseLeave} onClick={scrollToAbout}>
            ABOUT
          </span>
          {isAboutHovered &&
          <div className={ `flex items-center justify-center ${ animationFlag ? "animate-chevronFadeDown" : "opacity-0" }` }>
            <ChevronRight style={{ color: '#f97316', transform: 'scale(2) rotate(90deg)'}}/>
          </div> }
        </div>
        <div className="flex flex-col gap-2">
          <span className="hover:cursor-pointer animate-fade-down animate-duration-1000 animate-delay-[2800ms] lg:hover:text-orange-500 lg:transition-colors" onMouseEnter={handleProjectsHover} onMouseLeave={handleMouseLeave} onClick={scrollToProjects}>
            PROJECTS
          </span>
          {isProjectsHovered &&
          <div className={ `flex items-center justify-center ${ animationFlag ? "animate-chevronFadeDown" : "opacity-0" }` }>
            <ChevronRight style={{ color: '#f97316', transform: 'scale(2) rotate(90deg)'}}/>
          </div> }
        </div>
        <div className="flex flex-col gap-2">
          <span className="hover:cursor-pointer animate-fade-down animate-duration-1000 animate-delay-[3000ms] lg:hover:text-orange-500 lg:transition-colors" onMouseEnter={handleContactsHovered} onMouseLeave={handleMouseLeave} onClick={scrollToContact}>
            CONTACT
          </span>
          {isContactHovered &&
          <div className={ `flex items-center justify-center ${ animationFlag ? "animate-chevronFadeDown" : "opacity-0" }` }>
            <ChevronRight style={{ color: '#f97316', transform: 'scale(2) rotate(90deg)'}}/>
          </div> }
        </div>
      </div>
      <div className={ `flex w-full items-center justify-center absolute bottom-20 ${ animationFlag ? "animate-chevronFadeDown" : "opacity-0" } ${ scrollAnimationFlag ? "slide-down-slow" : "" } ` }>
        <KeyboardDoubleArrowDown style={{ color: 'white', transform: 'scale(2)'}}/>
      </div>

    </>

  )
}