import React from "react"

export default function Skills() {
  return(
    <div className="bg-white flex flex-col gap-8 justify-center items-center overflow-x-hidden font-inter">
      <div data-aos="fade-down" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="flex h-auto w-auto p-2 bg-orange-500 items-center justify-center">
        <h1 className="text-xl lg:text-3xl text-white font-bold tracking-wide">
          SKILLS
        </h1>
      </div>
      <div className="flex flex-col gap-4 overflow-x-hidden text-md font-light">
        <p data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="text-black text-md leading-7 text-justify md:text-lg md:leading-8 lg:text-xl lg:leading-10">
          Honours degree in Mechatronics Engineering where I studied Computer Vision, Autonomous Robotics, and Software Development for Hardware Applications
          1.5 years of Mechanical Design Engineering experience using industry standard drafting software
          Fully self taught Front End Web Developer via The Odin Project with a passion for Web Development
          Currently studying Node.js, Express.js, and MongoDB to extend my skills to the Back-End.
        </p>
      </div>
    </div>
  )
}