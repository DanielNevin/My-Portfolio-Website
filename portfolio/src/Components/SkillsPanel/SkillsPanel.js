import React from "react";
import FrontEnd from "./FrontEnd";
import DevelopmentTools from "./DevelopmentTools";
import BackEnd from "./BackEnd";
import Skills from "./Skills";

export default function SkillsPanel() {

  return(
    <div className="flex flex-col items-center gap-24">
      <Skills />
      <div className="flex flex-col w-full items-center justify-center gap-8 lg:gap-16">
        <FrontEnd />
        <BackEnd />
        <DevelopmentTools />
      </div>
    </div>

  )
}