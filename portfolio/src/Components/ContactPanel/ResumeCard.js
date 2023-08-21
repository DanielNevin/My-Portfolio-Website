import React from "react";
import ResumePDF from '../../Resources/Resume/Daniel Nevin Resume August 2023.pdf'

export default function ResumeCard() {
  return(
    <div className="flex flex-col bg-background items-center justify-center gap-8 px-8 py-16 font-inter font-light rounded-lg text-[#0d0a07] shadow-2xl">
      <h1 className="text-3xl font-poppins font-bold tracking-wide text-primary">
        Say Hello!
      </h1>
      <p className="text-center">
        Currently open to new opportunities. For any further information about me or my work feel free to reach out!
      </p>
      <a href={ResumePDF} download='Daniel Nevin Resume' target="_blank">
        <button className="flex h-12 w-50 p-2 bg-accent border-4 border-accent items-center justify-center text-background font-bold tracking-wide text-xl lg:hover:bg-background lg:hover:border-accent lg:hover:text-accent lg:transition-colors px-6 rounded-lg">
          VIEW RESUME
        </button>
      </a>
      <div>
        <p className="text-center">
          You can contact me at
        </p>
        <button className="text-primary font-bold lg:hover:brightness-75" onClick={() => window.location = 'mailto:dnevin234@gmail.com'}>dnevin234@gmail.com</button>
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <p className="text-center">
          Or you can find me on Github and Linkedin
        </p>
        <div className="flex items-center justify-center gap-8">
          <a href="https://github.com/danielNevin">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" alt="Github logo" className="h-10" />
          </a>
          <a href="https://www.linkedin.com/in/daniel-nevin/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png" alt="Linkedin logo" className="h-10" />
          </a>
        </div>
      </div>
    </div>
  )
}