import React from "react"

export default function Skills() {
  return(
    <div data-aos="fade-left" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" data-aos-delay="500" className=" flex flex-col gap-8 justify-center items-center overflow-x-hidden font-inter">
      <div className="flex flex-col gap-4 overflow-x-hidden text-md font-light">
        <ul className="text-[#0d0a07] text-md leading-7 md:text-lg md:leading-8 lg:text-xl text-justify lg:leading-8 list-disc list-inside md:list-outside md:px-5">
          <li>Honours degree in Mechatronics Engineering with a focus on Computer Vision, Autonomous Robotics, and Material Science.</li>
          <li>Almost 2 years experience as a Mechanical Design Engineer with an industrial refrigeration and stainless-steel product manufacturer, both in co-creative and self-driven capacities.</li>
          <li>Self-taught Front-End Web Developer across 19 self-driven projects via The Odin Project.</li>
          <li>Currently expanding my skills to the Back-End by building projects with Express.js and MongoDB.</li>
        </ul>
      </div>
    </div>
  )
}