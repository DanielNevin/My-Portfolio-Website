import React, { useState, useEffect } from "react";
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';

export default function ProjectCard(props) {
  return(
    <div className="flex flex-col gap-4 md:gap-8 items-center justify-center w-full font-inter overflow-y-hidden">
      <h1 data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="text-xl lg:text-3xl text-[#164e63] font-bold tracking-wide py-2 px-4">
        {props.title}
      </h1>
      <img data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="h-72 lg:h-auto lg:w-full object-cover rounded-lg border-2 border-[#f8820d]" src={props.imageSrc} />
      <p data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="text-[#0d0a07] font-light text-md leading-7 text-justify md:text-lg md:leading-8 xl:text-xl xl:leading-10">
        {props.description}
      </p>
      <div className="flex items-center justify-center gap-8 lg:scale-150">
        <a data-aos="fade-right" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="" href={props.githubLink}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" className="h-8 lg:hover:scale-125"/>
        </a>
        <a data-aos="fade-left" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" href={props.demoLink}>
          <OpenInBrowserIcon style={{transform: "scale(1.5)", color: "#0d0a07"}} />
        </a>
      </div>
    </div>
  )
}