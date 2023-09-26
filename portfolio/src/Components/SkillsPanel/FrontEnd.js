import React, { useEffect, useState } from "react"

export default function FrontEnd() {

  // Logic for controlling animation and styling changes based on user interaction
  const [htmlHover, setHtmlHover] = useState(false)
  const [cssHover, setCssHover] = useState(false);
  const [jsHover, setJsHover] = useState(false);
  const [cHover, setCHover] = useState(false);
  const [reactHover, setReactHover] = useState(false);
  const [tailwindHover, setTailwindHover] = useState(false);
  const [bootstrapHover, setBootstrapHover] = useState(false);
  const [threeHover, setThreeHover] = useState(false);

  const handleHtmlHover = () => {
    setHtmlHover(true);
  }

  const handleCssHover = () => {
    setCssHover(true);
  }

  const handleJsHover = () => {
    setJsHover(true);
  }

  const handleCHover = () => {
    setCHover(true);
  }

  const handleReactHover = () => {
    setReactHover(true);
  }

  const handleTailwindHover = () => {
    setTailwindHover(true);
  }

  const handleBootstrapHover = () => {
    setBootstrapHover(true);
  }

  const handleThreeHover = () => {
    setThreeHover(true);
  }

  const handleMouseLeave = () => {
    setHtmlHover(false);
    setCssHover(false);
    setJsHover(false);
    setCHover(false);
    setReactHover(false);
    setTailwindHover(false);
    setBootstrapHover(false);
    setThreeHover(false);
  }

  const handleLess1024 = () => {
    setHtmlHover(true);
    setCssHover(true);
    setJsHover(true);
    setCHover(true);
    setReactHover(true);
    setTailwindHover(true);
    setBootstrapHover(true);
    setThreeHover(true);
  }

  useEffect(() => {
    if (window.innerWidth <= 1024) {

    }
  }, [])
  
  return(
    <div data-aos="fade-right" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="h-auto w-full flex flex-col gap-12 justify-center items-center overflow-x-hidden font-inter font-semibold text-[#0d0a07]">
      <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="flex h-auto w-auto items-center justify-center p-2 px-4 bg-primary rounded-md">
        <h1 className="text-xl xl:text-3xl text-white font-bold tracking-wide text-center">
          FRONT-END
        </h1>  
      </div>
      <div className="flex flex-wrap justify-center gap-8 lg:gap-12 w-full px-4 font-bold">
        <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" data-aos-delay="100" className="flex flex-col items-center justify-center gap-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png" alt="HTML5 logo" className="h-12 xl:h-16 hover:translate-y-[-0.5rem] hover:scale-125 hover:drop-shadow-lg transition-all" onMouseEnter={handleHtmlHover} onMouseLeave={handleMouseLeave}/>
          <span id="HTML5" className={ `${ htmlHover ? "opacity-100 scale-100" : "opacity-0 scale-75" } transition-all`}>HTML5</span>
        </div>
        <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" data-aos-delay="200" className="flex flex-col items-center justify-center gap-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="CSS logo" className="h-12 xl:h-16 hover:translate-y-[-0.5rem] hover:scale-125 hover:drop-shadow-lg transition-all" onMouseEnter={handleCssHover} onMouseLeave={handleMouseLeave}/>
          <span id="CSS" className={ `${ cssHover ? "opacity-100 scale-100" : "opacity-0 scale-75" } transition-all`}>CSS</span>
        </div>
        <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" data-aos-delay="300" className="flex flex-col items-center justify-center gap-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png" alt="Javascript logo" className="h-12 xl:h-16 hover:translate-y-[-0.5rem] hover:scale-125 hover:drop-shadow-lg transition-all" onMouseEnter={handleJsHover} onMouseLeave={handleMouseLeave}/>
          <span id="JavaScript" className={ `${ jsHover ? "opacity-100 scale-100" : "opacity-0 scale-75" } transition-all`}>JavaScript</span>
        </div>
        <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" data-aos-delay="400" className="flex flex-col items-center justify-center gap-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png" alt="C++ logo" className="h-12 xl:h-16 hover:translate-y-[-0.5rem] hover:scale-125 hover:drop-shadow-lg transition-all" onMouseEnter={handleCHover} onMouseLeave={handleMouseLeave}/>
          <span id="C++" className={ `${ cHover ? "opacity-100 scale-100" : "opacity-0 scale-75" } transition-all`}>C++</span>
        </div>
        <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" data-aos-delay="500" className="flex flex-col items-center justify-center gap-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="React logo" className="h-12 xl:h-16 hover:translate-y-[-0.5rem] hover:scale-125 hover:drop-shadow-lg transition-all" onMouseEnter={handleReactHover} onMouseLeave={handleMouseLeave}/>
          <span id="React" className={ `${ reactHover ? "opacity-100 scale-100" : "opacity-0 scale-75" } transition-all`}>React</span>
        </div>
        <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" data-aos-delay="600" className="flex flex-col items-center justify-center gap-2">
          <img src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg" alt="TailwindCSS logo" className="h-12 xl:h-16 hover:translate-y-[-0.5rem] hover:scale-125 hover:drop-shadow-lg transition-all" onMouseEnter={handleTailwindHover} onMouseLeave={handleMouseLeave}/>
          <span id="Tailwind" className={ `${ tailwindHover ? "opacity-100 scale-100" : "opacity-0 scale-75" } transition-all`}>Tailwind</span>
        </div>
        <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" data-aos-delay="700" className="flex flex-col items-center justify-center gap-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png" alt="Bootstrap logo" className="h-12 xl:h-16 hover:translate-y-[-0.5rem] hover:scale-125 hover:drop-shadow-lg transition-all" onMouseEnter={handleBootstrapHover} onMouseLeave={handleMouseLeave}/>
          <span id="Bootstrap" className={ `${ bootstrapHover ? "opacity-100 scale-100" : "opacity-0 scale-75" } transition-all`}>Bootstrap</span>
        </div>
        <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" data-aos-delay="800" className="flex flex-col items-center justify-center gap-2">
          <img src="https://global.discourse-cdn.com/standard17/uploads/threejs/original/2X/e/e4f86d2200d2d35c30f7b1494e96b9595ebc2751.png" alt="Three.js logo" className="h-12 xl:h-16 hover:translate-y-[-0.5rem] hover:scale-125 hover:drop-shadow-lg transition-all" onMouseEnter={handleThreeHover} onMouseLeave={handleMouseLeave}/>
          <span id="Three.js" className={ `${ threeHover ? "opacity-100 scale-100" : "opacity-0 scale-75" } transition-all`}>Three.js</span>
        </div>
      </div>
    </div>
  )
}