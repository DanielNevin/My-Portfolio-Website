import React from "react";

export default function AboutMe() {

  return (
    <>
      <div className="h-auto bg-white flex justify-center items-center overflow-x-hidden">
        <div className="h-full flex flex-col items-center justify-start gap-4 font-roboto font-medium">
          <div data-aos="fade-down" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="flex h-auto w-auto p-2 mb-8 bg-orange-500 items-center justify-center">
            <h1 className="text-xl lg:text-3xl text-white font-bold tracking-wide">
              ABOUT ME
            </h1>  
          </div>
          <p data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="text-black text-md leading-7 text-justify px-4 md:text-lg md:leading-8 lg:text-xl lg:leading-10">
            Hi I'm Dan. I’m a Mechanical Design Engineer turned Front End Developer based out of Sydney, Australia. 
            I love the creative process of developing visually appealing designs and implementing dynamic, interactive user interfaces. 
            I’m addicted to learning new concepts, technologies, and tools that help me improve as a Web Developer. 
            Outside of Developing you can find me hitting the gym, drooling over European cars, and experiencing what Sydney has to offer.
          </p>
        </div>
      </div>
    </>
  )
}