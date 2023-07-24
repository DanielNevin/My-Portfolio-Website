import React from "react";

export default function About() {
  return (
    <>
      <div className="h-auto bg-white flex justify-center items-center overflow-x-hidden">
        <div className="h-full flex flex-col items-center justify-start px-8 py-16 gap-4">
          <h1 className="w-full flex items-start text-3xl pb-4 text-black font-bold motion-safe::animate-sweep-up">About Me</h1>
          <p className="text-black text-lg text-justify px-8">
            I’m a Mechanical Design Engineer turned Front End Developer based out of Sydney, Australia. I love the creative process of developing visually appealing designs and implementing dynamic, interactive user interfaces. I’m addicted to learning new concepts, technologies, and tools that help me improve as a Web Developer. Outside of Developing you can find me hitting the gym, drooling over European cars, and experiencing what Sydney has to offer.
          </p>
        </div>
      </div>
    </>
  )
}