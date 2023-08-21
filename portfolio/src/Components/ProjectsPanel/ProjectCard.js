import React, { useState, useEffect } from "react";
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ProjectCard(props) {

  const [animationType, setAnimationType] = useState();

  useEffect(() => {
    if (props.index % 2) {
      setAnimationType("fade-left")
    } else {
      setAnimationType("fade-right")
    }
    AOS.refresh();
  }, [])

  return(
    <div data-aos={`${animationType}`} data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" data-aos-anchor-placement="top-center" className="flex flex-col items-center justify-center w-full font-inter overflow-y-hidden bg-secondary rounded-2xl shadow-xl gap-8 py-8 px-8 md:px-16">
      <div data-aos="fade-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" data-aos-delay="500" className="flex h-auto w-auto p-2 bg-primary items-center justify-center px-4 rounded-lg">
        <h1 className="text-xl lg:text-3xl text-background font-bold tracking-wide">
          {props.title}
        </h1>
      </div>
      <img data-aos="fade-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" data-aos-delay="500" className="h-72 lg:h-auto lg:w-full object-cover rounded-xl" src={props.imageSrc} />
      <p data-aos="fade-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="text-[#0d0a07] font-light text-md leading-7 text-justify md:text-lg md:leading-8 xl:text-xl xl:leading-9">
        {props.description}
      </p>
      <div className="flex items-center justify-center gap-8">
        <a data-aos="fade-right" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" data-aos-delay="300" href={props.githubLink}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" className="h-[1.6rem]"/>
        </a>
        <a data-aos="fade-left" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" data-aos-delay="300" href={props.demoLink}>
          <OpenInBrowserIcon style={{transform: "scale(1.5)", color: "#0d0a07"}} />
        </a>
      </div>
    </div>
  )
}