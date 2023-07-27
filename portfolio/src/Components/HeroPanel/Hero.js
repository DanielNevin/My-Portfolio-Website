import React from "react";
import '@fontsource/roboto/300.css';
import HeroText from "./HeroText";
import HeroBackground from "./HeroBackground";

export default function Hero() {

  return (
    <div className="h-screen overflow-x-hidden">
      <HeroBackground />
      <HeroText />
    </div>
  )
}