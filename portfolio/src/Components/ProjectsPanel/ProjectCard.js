import React, { useState, useEffect } from "react";
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';

export default function ProjectCard(props) {
  return(
    <div className="flex flex-col items-center justify-center w-full lg:px-0 px-12 gap-4 lg:gap-12 font-roboto bg-white mb-16">
      <h1 data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="text-xl lg:text-3xl text-orange-500 font-bold tracking-wide py-2 px-4">
        {props.title}
      </h1>
      <img data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="h-72 lg:h-auto lg:w-full object-cover pb-4" src={props.imageSrc} />
      <p data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="text-black text-md leading-7 text-justify px-4 md:text-lg md:leading-8 lg:text-xl lg:leading-10">
        {props.description}
      </p>
      <div className="flex items-center justify-center gap-8 lg:scale-150">
        <a data-aos="fade-right" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" href={props.githubLink}>
          <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" className="h-8"/>
        </a>
        <a data-aos="fade-left" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" href={props.demoLink}>
          <OpenInBrowserIcon style={{transform: "scale(1.3)", color: "black"}} />
        </a>
      </div>
    </div>
  )
}