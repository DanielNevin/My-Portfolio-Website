import React from "react"

export default function Skills() {
  return(
    <div className=" flex flex-col gap-8 justify-center items-center overflow-x-hidden font-inter">
      <div data-aos="fade-down" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="flex h-auto w-auto p-2 bg-[#164e63] items-center justify-center px-4 rounded-lg">
        <h1 className="text-xl lg:text-3xl text-[#f4f0eb] font-bold tracking-wide">
          SKILLS
        </h1>
      </div>
      <div className="flex flex-col gap-4 overflow-x-hidden text-md font-light">
        <ul data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="text-[#0d0a07] text-md leading-7 text-justify md:text-lg md:leading-8 lg:text-xl lg:leading-10 list-disc list-outside px-4">
          <li>Honours degree in Mechatronics Engineering with a focus on Computer Vision, Autonomous Robotics, and Software Development for Hardware Applications.</li>
          <li>1.5 years of experience in Mechanical Design Engineering, utilizing industry-standard Design & Drafting software.</li>
          <li>Self-taught Front-End Web Developer via The Odin Project, passionate about Web Development.</li>
          <li>Currently expanding my skills to the Back-End by learning Node.js, Express.js, and MongoDB.</li>
        </ul>
      </div>
    </div>
  )
}