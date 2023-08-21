import React from "react";
import LanguagesFrameworks from "./LanguagesFrameworks";
import DevelopmentTools from "./DevelopmentTools";
import Skills from "./Skills";

export default function SkillsPanel() {

  return(
    <div className="flex flex-col items-center gap-8">
      <Skills />
      <div className="flex flex-col w-full xl:grid xl:grid-cols-2 items-center justify-center gap-8 md:gap-8 lg:gap-8 xl:items-start">
        <LanguagesFrameworks />
        <DevelopmentTools />
      </div>
    </div>

  )
}