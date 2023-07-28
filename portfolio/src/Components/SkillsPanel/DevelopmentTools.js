import React, { useState, useEffect } from "react";

export default function DevelopmentTools() {

  return (
    <div className="h-auto w-full bg-white flex flex-col gap-8 justify-center items-center overflow-x-hidden font-inter">
      <div data-aos="fade-down" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="flex h-auto w-auto p-2 bg-orange-500 items-center justify-center">
        <h1 className="text-md xl:text-lg 2xl:text-xl text-white font-bold tracking-wide text-center">
          DEVELOPMENT TOOLS 
        </h1>  
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-8 w-full">
        <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="flex flex-col items-center justify-center gap-2">
          <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="Git logo" className="h-12"/>
          <span>Git</span>
        </div>
        <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="flex flex-col items-center justify-center gap-2">
          <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Github logo" className="h-12"/>
          <span>Github</span>
        </div>
        <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="flex flex-col items-center justify-center gap-2">
          <img src="https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png" alt="Webpack logo" className="h-12"/>
          <span>Webpack</span>
        </div>
        <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="flex flex-col items-center justify-center gap-2">
          <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/firebase_logo_icon_171157.png" alt="Firebase logo" className="h-12"/>
          <span>Firebase</span>
        </div>
        <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="flex flex-col items-center justify-center gap-2">
          <img src="https://user-images.githubusercontent.com/10525473/50372432-95dcd880-0611-11e9-9432-58de9be26b3b.png" alt="Jest logo" className="h-12"/>
          <span>Jest</span>
        </div>
        <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="flex flex-col items-center justify-center gap-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/540px-Npm-logo.svg.png" alt="npm logo" className="h-12"/>
          <span>npm</span>
        </div>
      </div>
    </div>
  );
}