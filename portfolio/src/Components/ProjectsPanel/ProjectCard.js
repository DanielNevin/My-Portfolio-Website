import React, { useState, useEffect, useRef } from "react";
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ProjectCard(props) {

  const [animationType, setAnimationType] = useState();
  const [isLeft, setIsLeft] = useState(false);
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  // Determines the desired animation direction and element rendering pattern based on whether the project has an odd or even index in the list
  useEffect(() => {
    if (props.index % 2) {
      setAnimationType("fade-right");
      setIsLeft(true);
    } else {
      setAnimationType("fade-left");
    }
    AOS.refresh();
  }, [])

  return(
    <>
    {((windowSize.current[0] > 1200)) ? (
      (isLeft) ? // Even index desktop project card
        <div data-aos={`${animationType}`} data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" data-aos-anchor-placement="top-center" className="grid grid-cols-1 grid-rows-7 lg:grid-rows-7 xl:grid-cols-3 xl:grid-rows-5 xl:h-[35rem] w-full shadow-lg">
          <div className="h-full w-full col-span-1 row-span-2 lg:row-span-3 xl:col-span-2 xl:row-span-5">
            <img className="object-cover h-full" src={props.imageSrc} />
          </div>
          <div className="h-full w-full col-span-1 row-span-1 flex items-center justify-center bg-primary drop-shadow-xl">
            <h1 data-aos="fade-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true" data-aos-anchor-placement="top-center" className="xl:absolute text-3xl text-white font-bold tracking-wide">
              {props.title}
            </h1>
          </div>
          <div className="h-full w-full col-span-1 row-span-2 xl:row-span-3 flex flex-col items-center justify-start p-8 bg-white shadow-inner">
            <p data-aos="fade-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-delay="750" data-aos-once="true" data-aos-anchor-placement="top-center" className="text-[#0d0a07] font-light text-md text-justify leading-6 xl:leading-7">
              {props.description}
            </p> 
          </div>
          <div className="h-full w-full col-span-1 row-span-1 flex items-center justify-center gap-16 bg-white">
            <a data-aos="fade-right" data-aos-easing="sine" data-aos-duration="1000" data-aos-delay="750" data-aos-once="true" data-aos-anchor-placement="bottom-bottom" href={props.githubLink}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" className="h-[1.6rem]"/>
            </a>
            <a data-aos="fade-left" data-aos-easing="sine" data-aos-duration="1000" data-aos-delay="750" data-aos-once="true" data-aos-anchor-placement="bottom-bottom" href={props.demoLink}>
              <OpenInBrowserIcon style={{transform: "scale(1.5)", color: "#0d0a07"}} />
            </a>
          </div>
        </div>
      : // Odd index desktop project card
        <div data-aos={`${animationType}`} data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" data-aos-anchor-placement="top-center" className="grid grid-cols-1 grid-rows-7 lg:grid-rows-7 xl:grid-cols-3 xl:grid-rows-5 xl:h-[35rem] w-full shadow-lg">
          <div className="h-full w-full col-span-1 row-span-1 flex items-center justify-center bg-primary drop-shadow-xl">
            <h1 data-aos="fade-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true" data-aos-anchor-placement="top-center" className="xl:absolute text-3xl text-white font-bold tracking-wide">
              {props.title}
            </h1>
          </div>
          <div className="h-full w-full col-span-1 row-span-2 lg:row-span-3 xl:col-span-2 xl:row-span-5">
            <img className="object-cover h-full" src={props.imageSrc} />
          </div>
          <div className="h-full w-full col-span-1 row-span-2 xl:row-span-3 flex flex-col items-center justify-start p-8 bg-white shadow-inner">
            <p data-aos="fade-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-delay="750" data-aos-once="true" data-aos-anchor-placement="top-center" className="text-[#0d0a07] font-light text-md text-justify leading-6 xl:leading-7">
              {props.description}
            </p> 
          </div>
          <div className="h-full w-full col-span-1 row-span-1 flex items-center justify-center gap-16 bg-white">
            <a data-aos="fade-right" data-aos-easing="sine" data-aos-duration="1000" data-aos-delay="750" data-aos-once="true" data-aos-anchor-placement="bottom-bottom" href={props.githubLink}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" className="h-[1.6rem]"/>
            </a>
            <a data-aos="fade-left" data-aos-easing="sine" data-aos-duration="1000" data-aos-delay="750" data-aos-once="true" data-aos-anchor-placement="bottom-bottom" href={props.demoLink}>
              <OpenInBrowserIcon style={{transform: "scale(1.5)", color: "#0d0a07"}} />
            </a>
          </div>
        </div> )
      : // Mobile project card
        <div data-aos={`${animationType}`} data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" data-aos-anchor-placement="top-center" className="flex flex-col h-auto w-full shadow-lg">
          <div className="h-24 md:h-32 w-full flex items-center justify-center bg-primary drop-shadow-xl">
            <h1 data-aos="fade-in" data-aos-easing="sine" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" data-aos-anchor-placement="top-center" className="absolute text-3xl text-white font-bold tracking-wide">
              {props.title}
            </h1>
          </div>
          <div className="h-full w-full col-span-1 row-span-2 lg:row-span-3 xl:col-span-2 xl:row-span-5">
            <img className="object-cover h-full" src={props.imageSrc} />
          </div>
          <div className="h-auto w-full flex flex-col items-center justify-start p-8 bg-white">
            <p data-aos="fade-in" data-aos-easing="sine" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" data-aos-anchor-placement="bottom-bottom" className="text-[#0d0a07] font-light text-md text-justify leading-6 xl:leading-7">
              {props.description}
            </p> 
          </div>
          <div className="h-full w-full flex items-center justify-center gap-16 pb-8 bg-white">
            <a data-aos="fade-right" data-aos-easing="sine" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" data-aos-anchor-placement="bottom-bottom" href={props.githubLink}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" className="h-[1.6rem]"/>
            </a>
            <a data-aos="fade-left" data-aos-easing="sine" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" data-aos-anchor-placement="bottom-bottom" href={props.demoLink}>
              <OpenInBrowserIcon style={{transform: "scale(1.5)", color: "#0d0a07"}} />
            </a>
          </div>
        </div>
      }
    </>
  )
}