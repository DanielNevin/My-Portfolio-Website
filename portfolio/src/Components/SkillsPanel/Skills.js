import React, { useState, useEffect } from "react";
import HeroBackground from "../HeroPanel/HeroBackground";

export default function Skills() {

  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center bg-slate-200 transition-all overflow-x-hidden">
        <div className="flex items-center justify-center bg-white rounded-full animate-hero-logo-fade-up ease-in-out transition-all">
          <div className="flex items-center justify-center text-3xl text-orange-500 tracking-widest h-full w-full p-10 rounded-full opacity-0 animate-heroLogoSpin animate-delay-2000">
            DN
          </div>
        </div>
      </div>
    </>
  );
}