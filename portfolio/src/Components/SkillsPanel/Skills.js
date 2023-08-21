import React from "react"

export default function Skills() {
  return(
    <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className=" flex flex-col gap-8 justify-center items-center overflow-x-hidden font-inter bg-secondary rounded-2xl p-8 md:p-12 shadow-xl">
      <div className="flex flex-col gap-4 overflow-x-hidden text-md font-light">
        <ul className="text-[#0d0a07] text-md leading-7 md:text-lg md:leading-8 lg:text-xl text-justify lg:leading-9 list-disc list-inside md:list-outside md:px-5">
          <li>Honours degree in Mechatronics Engineering with a focus on Computer Vision, Autonomous Robotics, and Software Development for Hardware Applications.</li>
          <li>1.5 years of experience in Mechanical Design Engineering, utilizing industry-standard Design & Drafting software.</li>
          <li>Self-taught Front-End Web Developer via The Odin Project, passionate about Web Development.</li>
          <li>Currently expanding my skills to the Back-End by learning Node.js, Express.js, and MongoDB.</li>
        </ul>
      </div>
    </div>
  )
}