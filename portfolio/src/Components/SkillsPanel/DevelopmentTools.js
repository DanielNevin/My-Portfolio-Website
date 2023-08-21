import React from "react";

export default function DevelopmentTools() {

  return (
    <div data-aos="fade-left" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="h-auto w-full flex flex-col gap-8 justify-center items-center overflow-x-hidden font-inter font-semibold text-[#0d0a07] bg-secondary rounded-2xl p-8 shadow-xl">
      <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="flex h-auto w-auto p-2 bg-primary items-center justify-center px-4 rounded-lg">
        <h1 className="text-md xl:text-lg 2xl:text-xl text-background font-bold tracking-wide text-center">
          DEVELOPMENT TOOLS 
        </h1>  
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-8 w-full">
        <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" data-aos-delay="100" className="flex flex-col items-center justify-center gap-2">
          <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="Git logo" className="h-12 "/>
          <span>Git</span>
        </div>
        <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" data-aos-delay="200" className="flex flex-col items-center justify-center gap-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" alt="Github logo" className="h-12 "/>
          <span>Github</span>
        </div>
        <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" data-aos-delay="300" className="flex flex-col items-center justify-center gap-2">
          <img src="https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png" alt="Webpack logo" className="h-12 "/>
          <span>Webpack</span>
        </div>
        <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" data-aos-delay="400" className="flex flex-col items-center justify-center gap-2">
          <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/firebase_logo_icon_171157.png" alt="Firebase logo" className="h-12 "/>
          <span>Firebase</span>
        </div>
        <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" data-aos-delay="500" className="flex flex-col items-center justify-center gap-2">
          <img src="https://user-images.githubusercontent.com/10525473/50372432-95dcd880-0611-11e9-9432-58de9be26b3b.png" alt="Jest logo" className="h-12 "/>
          <span>Jest</span>
        </div>
        <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" data-aos-delay="600" className="flex flex-col items-center justify-center gap-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/540px-Npm-logo.svg.png" alt="npm logo" className="h-12 "/>
          <span>npm</span>
        </div>
        <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" data-aos-delay="700" className="flex flex-col items-center justify-center gap-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png" alt="VSCode logo" className="h-12 "/>
          <span>VSCode</span>
        </div>
      </div>
    </div>
  );
}