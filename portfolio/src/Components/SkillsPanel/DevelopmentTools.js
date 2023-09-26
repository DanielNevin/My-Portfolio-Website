import React, { useState } from "react";

export default function DevelopmentTools() {

  // Logic for controlling animation and styling changes based on user interaction
  const [gitHover, setGitHover] = useState(false);
  const [githubHover, setGithubHover] = useState(false);
  const [webpackHover, setWebpackHover] = useState(false);
  const [jestHover, setJestHover] = useState(false);
  const [npmHover, setNpmHover] = useState(false);
  const [vscodeHover, setVscodeHover] = useState(false);

  const handleGitHover = () => {
    setGitHover(true);
  }

  const handleGithubHover = () => {
    setGithubHover(true);
  }

  const handleWebpackHover = () => {
    setWebpackHover(true);
  }

  const handleJestHover = () => {
    setJestHover(true);
  }

  const handleNpmHover = () => {
    setNpmHover(true);
  }
  
  const handleVscodeHover = () => {
    setVscodeHover(true);
  }

  const handleMouseLeave = () => {
    setGitHover(false);
    setGithubHover(false);
    setWebpackHover(false);
    setJestHover(false);
    setNpmHover(false);
    setVscodeHover(false);
  }

  return (
    <div data-aos="fade-right" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="h-auto w-full flex flex-col gap-12 justify-center items-center overflow-x-hidden font-inter font-semibold text-[#0d0a07]">
      <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="flex h-auto w-auto items-center justify-center p-2 px-4 bg-primary rounded-md">
        <h1 className="text-xl xl:text-3xl text-white font-bold tracking-wide text-center">
          DEVELOPMENT TOOLS 
        </h1>  
      </div>
      <div className="flex flex-wrap justify-center gap-8 lg:gap-12 w-full px-4 font-bold">
        <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" data-aos-delay="100" className="flex flex-col items-center justify-center gap-2">
          <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="Git logo" className="h-12 xl:h-16 hover:translate-y-[-0.5rem] hover:scale-125 hover:drop-shadow-lg transition-all" onMouseEnter={handleGitHover} onMouseLeave={handleMouseLeave}/>
          <span id="Git" className={ `${ gitHover ? "opacity-100 scale-100" : "opacity-0 scale-75" } transition-all`}>Git</span>
        </div>
        <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" data-aos-delay="200" className="flex flex-col items-center justify-center gap-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" alt="GitHub logo" className="h-12 xl:h-16 hover:translate-y-[-0.5rem] hover:scale-125 hover:drop-shadow-lg transition-all" onMouseEnter={handleGithubHover} onMouseLeave={handleMouseLeave}/>
          <span id="GitHub" className={ `${ githubHover ? "opacity-100 scale-100" : "opacity-0 scale-75" } transition-all`}>GitHub</span>
        </div>
        <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" data-aos-delay="300" className="flex flex-col items-center justify-center gap-2">
          <img src="https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png" alt="Webpack logo" className="h-12 xl:h-16 hover:translate-y-[-0.5rem] hover:scale-125 hover:drop-shadow-lg transition-all" onMouseEnter={handleWebpackHover} onMouseLeave={handleMouseLeave}/>
          <span id="Webpack" className={ `${ webpackHover ? "opacity-100 scale-100" : "opacity-0 scale-75" } transition-all`}>Webpack</span>
        </div>
        <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" data-aos-delay="400" className="flex flex-col items-center justify-center gap-2">
          <img src="https://user-images.githubusercontent.com/10525473/50372432-95dcd880-0611-11e9-9432-58de9be26b3b.png" alt="Jest logo" className="h-12 xl:h-16 hover:translate-y-[-0.5rem] hover:scale-125 hover:drop-shadow-lg transition-all" onMouseEnter={handleJestHover} onMouseLeave={handleMouseLeave}/>
          <span id="Jest" className={ `${ jestHover ? "opacity-100 scale-100" : "opacity-0 scale-75" } transition-all`}>Jest</span>
        </div>
        <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" data-aos-delay="500" className="flex flex-col items-center justify-center gap-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/540px-Npm-logo.svg.png" alt="npm logo" className="h-12 xl:h-16 hover:translate-y-[-0.5rem] hover:scale-125 hover:drop-shadow-lg transition-all" onMouseEnter={handleNpmHover} onMouseLeave={handleMouseLeave}/>
          <span id="npm" className={ `${ npmHover ? "opacity-100 scale-100" : "opacity-0 scale-75" } transition-all`}>npm</span>
        </div>
        <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" data-aos-delay="600" className="flex flex-col items-center justify-center gap-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png" alt="VSCode logo" className="h-12 xl:h-16 hover:translate-y-[-0.5rem] hover:scale-125 hover:drop-shadow-lg transition-all" onMouseEnter={handleVscodeHover} onMouseLeave={handleMouseLeave}/>
          <span id="VSCode" className={ `${ vscodeHover ? "opacity-100 scale-100" : "opacity-0 scale-75" } transition-all`}>VSCode</span>
        </div>
      </div>
    </div>
  );
}