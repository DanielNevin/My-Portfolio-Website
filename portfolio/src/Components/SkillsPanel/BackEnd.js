import React, { useState } from "react";

export default function BackEnd() {

  // Logic for controlling animation and styling changes based on user interaction
  const [pythonHover, setPythonHover] = useState(false);
  const [firebaseHover, setFirebaseHover] = useState(false);
  const [nodeHover, setNodeHover] = useState(false);
  const [mongoHover, setMongoHover] = useState(false);

  const handlePythonHover = () => {
    setPythonHover(true);
  }

  const handleFirebaseHover = () => {
    setFirebaseHover(true);
  }

  const handleNodeHover = () => {
    setNodeHover(true);
  }

  const handleMongoHover = () => {
    setMongoHover(true);
  }

  const handleMouseLeave = () => {
    setPythonHover(false);
    setFirebaseHover(false);
    setNodeHover(false);
    setMongoHover(false);
  }

  return (
    <div data-aos="fade-left" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="h-auto w-full flex flex-col gap-12 justify-center items-center overflow-x-hidden font-inter font-semibold text-[#0d0a07]">
      <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="flex h-auto w-auto items-center justify-center p-2 px-4 bg-primary rounded-md">
        <h1 className="text-xl xl:text-3xl text-white font-bold tracking-wide text-center">
          BACK-END
        </h1>  
      </div>
      <div className="flex flex-wrap justify-center gap-8 lg:gap-12 w-full px-4 font-bold">
        <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" data-aos-delay="400" className="flex flex-col items-center justify-center gap-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" alt="Python logo" className="h-12 xl:h-16 hover:translate-y-[-0.5rem] hover:scale-125 hover:drop-shadow-lg transition-all" onMouseEnter={handlePythonHover} onMouseLeave={handleMouseLeave}/>
          <span id="Python" className={ `${ pythonHover ? "opacity-100 scale-100" : "opacity-0 scale-75" } transition-all`}>Python</span>
        </div>
        <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" data-aos-delay="300" className="flex flex-col items-center justify-center gap-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" alt="Node logo" className="h-12 xl:h-16 hover:translate-y-[-0.5rem] hover:scale-125 hover:drop-shadow-lg transition-all" onMouseEnter={handleNodeHover} onMouseLeave={handleMouseLeave}/>
          <span id="Node.js" className={ `${ nodeHover ? "opacity-100 scale-100" : "opacity-0 scale-75" } transition-all`}>Node.js</span>
        </div>
        <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" data-aos-delay="200" className="flex flex-col items-center justify-center gap-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png" alt="MongoDB logo" className="h-12 xl:h-16 hover:translate-y-[-0.5rem] hover:scale-125 hover:drop-shadow-lg transition-all" onMouseEnter={handleMongoHover} onMouseLeave={handleMouseLeave}/>
          <span id="MongoDB" className={ `${ mongoHover ? "opacity-100 scale-100" : "opacity-0 scale-75" } transition-all`}>MongoDB</span>
        </div>
        <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" data-aos-delay="100" className="flex flex-col items-center justify-center gap-2">
          <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/firebase_logo_icon_171157.png" alt="Firebase logo" className="h-12 xl:h-16 hover:translate-y-[-0.5rem] hover:scale-125 hover:drop-shadow-lg transition-all" onMouseEnter={handleFirebaseHover} onMouseLeave={handleMouseLeave}/>
          <span id="Firebase" className={ `${ firebaseHover ? "opacity-100 scale-100" : "opacity-0 scale-75" } transition-all`}>Firebase</span>
        </div>
      </div>
    </div>
  );
}