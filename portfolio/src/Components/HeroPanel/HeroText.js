import React, { useState, useEffect } from "react";
import '@fontsource/roboto/300.css';
import { KeyboardDoubleArrowDown } from "@mui/icons-material";

export default function HeroText() {

  const [animationFlag, setAnimationFlag] = useState(false);

  useEffect(() => {
    // Wait for 4000ms and then set the animationFlag to true
    const timeoutId = setTimeout(() => {
      setAnimationFlag(true);
    }, 2600);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, [])

  return (
    <>
      <div className="h-screen w-[calc(100%-2.5rem)] flex flex-col items-start justify-center gap-1 text-white text-6xl absolute left-[2.3rem] bottom-10">
        <span className="animate-heroFirstNameFadeUp ease-out text-orange-500 font-poppins">
          DANIEL
        </span>
        <span className="animate-heroLastNameFadeUp ease-out text-white font-poppins">
          NEVIN
        </span>
      </div>
      <div className="h-screen w-[calc(100%-2.5rem)] flex items-center justify-start gap-2 text-white text-xl font-poppins font-light absolute left-10 top-12">
        <span className="animate-heroFrontEndFadeLeft ease-out text-orange-500">
          FRONT END
        </span>
        <span className="animate-heroDeveloperFadeLeft ease-out text-white">
          DEVELOPER
        </span>
      </div>
      <div className="flex w-screen gap-8 text-white items-center justify-center absolute top-16 font-poppins font-light text-sm">
        <span className="hover:cursor-pointer animate-fade-down animate-duration-1000 animate-delay-[2600ms]">
          ABOUT
        </span>
        <span className="hover:cursor-pointer animate-fade-down animate-duration-1000 animate-delay-[2800ms]">
          PROJECTS
        </span>
        <span className="hover:cursor-pointer animate-fade-down animate-duration-1000 animate-delay-[2800ms]">
          CONTACT
        </span>
      </div>
      <div className={ `flex w-screen items-center justify-center absolute bottom-20 ${ animationFlag ? "animate-chevronFadeDown" : "opacity-0" }` }>
        <KeyboardDoubleArrowDown style={{ color: 'white', transform: 'scale(2)'}}/>
      </div>

    </>

  )
}