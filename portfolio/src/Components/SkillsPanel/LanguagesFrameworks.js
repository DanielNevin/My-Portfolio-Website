import React from "react"

export default function LanguagesFrameworks() {
  return(
    <div data-aos="fade-right" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="h-auto w-full flex flex-col gap-8 justify-center items-center overflow-x-hidden font-inter font-semibold text-[#0d0a07] bg-secondary rounded-2xl p-8 shadow-xl">
      <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="flex h-auto w-auto p-2 bg-primary items-center justify-center px-4 rounded-lg">
        <h1 className="text-md xl:text-lg 2xl:text-xl text-background font-bold tracking-wide text-center">
          LANGUAGES & FRAMEWORKS
        </h1>  
      </div>
      <div className="grid grid-cols-3 grid-rows-3 gap-8 w-full">
        <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" data-aos-delay="100" className="flex flex-col items-center justify-center gap-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png" alt="HTML5 logo" className="h-12 "/>
          <span>HTML5</span>
        </div>
        <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" data-aos-delay="200" className="flex flex-col items-center justify-center gap-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="CSS logo" className="h-12 "/>
          <span>CSS</span>
        </div>
        <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" data-aos-delay="300" className="flex flex-col items-center justify-center gap-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png" alt="Javascript logo" className="h-12 "/>
          <span>JavaScript</span>
        </div>
        <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" data-aos-delay="300" className="flex flex-col items-center justify-center gap-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" alt="Python logo" className="h-12 "/>
          <span>Python</span>
        </div>
        <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" data-aos-delay="400" className="flex flex-col items-center justify-center gap-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png" alt="C++ logo" className="h-12 "/>
          <span>C++</span>
        </div>
        <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" data-aos-delay="500" className="flex flex-col items-center justify-center gap-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="React logo" className="h-12 "/>
          <span>React</span>
        </div>
        <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" data-aos-delay="600" className="flex flex-col items-center justify-center gap-2">
          <img src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/events/Tailwind_CSS_Logo.svg_GkNDLAs.png" alt="TailwindCSS logo" className="h-12 "/>
          <span>TailwindCSS</span>
        </div>
        <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" data-aos-delay="700" className="flex flex-col items-center justify-center gap-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png" alt="Bootstrap logo" className="h-12 "/>
          <span>Bootstrap</span>
        </div>
        <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" data-aos-delay="800" className="flex flex-col items-center justify-center gap-2">
          <img src="https://global.discourse-cdn.com/standard17/uploads/threejs/original/2X/e/e4f86d2200d2d35c30f7b1494e96b9595ebc2751.png" alt="Three.js logo" className="h-12 "/>
          <span>Three.js</span>
        </div>
      </div>
    </div>
  )
}