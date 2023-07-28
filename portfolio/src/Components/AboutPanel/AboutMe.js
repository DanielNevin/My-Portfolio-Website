import React from "react";

export default function AboutMe() {

  return (
    <>
      <div id="about" className="h-auto flex justify-center items-center overflow-x-hidden">
        <div className="h-full flex flex-col items-center justify-start gap-8 font-inter font-medium">
          <div data-aos="fade-down" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="flex h-auto w-auto p-2 bg-[#164e63] items-center justify-center px-4 rounded-lg">
            <h1 className="text-xl lg:text-3xl text-[#f4f0eb] font-bold tracking-wide">
              ABOUT ME
            </h1>  
          </div>
          <p data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="text-[#0d0a07] text-md font-light leading-7 text-justify md:text-lg md:leading-8 lg:text-xl lg:leading-10">
            Hi, I'm Dan, a Mechanical Design Engineer turned Front-End Developer based in Sydney, Australia.
            I have a passion for the creative process of developing visually appealing designs and implementing dynamic, interactive user interfaces.
            As a Web Developer, I am addicted to learning new concepts, technologies, and tools that continuously help me improve my skills.
            Outside of Software Development, you can find me hitting the gym, drooling over European cars, and enjoying the sights and sounds of Sydney.
          </p>
        </div>
      </div>
    </>
  )
}