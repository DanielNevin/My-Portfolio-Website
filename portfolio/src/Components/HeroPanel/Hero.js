import React from "react";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import '@fontsource/roboto/300.css';
import HeroText from "./HeroText";
import HeroBackground from "./HeroBackground";

export default function Hero() {

  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <HeroBackground />
      <HeroText />
    </div>
  )
}