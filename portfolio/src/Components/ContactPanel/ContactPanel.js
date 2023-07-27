import React from "react";
import ResumeCard from "./ResumeCard";
import HeroBackground from "../HeroPanel/HeroBackground";

export default function ContactPanel() {
  return (
    <>
      <div id="contact" className="bg-zinc-800 h-auto flex flex-col items-center justify-center">
        <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="px-8 py-24 md:w-2/3 lg:w-1/3">
          <ResumeCard />
        </div>
      </div>
    </>
  )
}