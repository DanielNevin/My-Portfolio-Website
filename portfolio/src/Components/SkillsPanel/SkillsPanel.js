import React from "react";
import LanguagesFrameworks from "./LanguagesFrameworks";
import DevelopmentTools from "./DevelopmentTools";
import Skills from "./Skills";

export default function SkillsPanel() {

  return(
    <div className="flex flex-col gap-16 md:gap-24 lg:gap-32">
      <Skills />
      <div className="flex flex-col xl:grid xl:grid-cols-2 items-center justify-center gap-16 md:gap-24 lg:gap-32 xl:items-start">
        <LanguagesFrameworks />
        <DevelopmentTools />
      </div>
    </div>

  )
}