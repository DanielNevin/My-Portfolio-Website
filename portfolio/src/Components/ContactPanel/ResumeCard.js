import React from "react";

export default function ResumeCard() {
  return(
    <div className="flex flex-col bg-[#f4f0eb] items-center justify-center gap-8 px-8 py-16 font-inter font-light rounded-lg text-[#0d0a07]">
      <h1 className="text-3xl font-poppins font-bold tracking-wide text-[#f8820d]">
        Say Hello!
      </h1>
      <p className="text-center">
        Currently open to new opportunities. For any further information about me or my work feel free to reach out!
      </p>
      <a href="/Resume/Daniel Nevin Resume July 2023.pdf" download>
        <button className="flex h-12 w-auto p-2 bg-[#164e63] items-center justify-center text-[#f4f0eb] font-bold tracking-wide text-xl lg:hover:bg-[#f4f0eb] lg:hover:border-4 lg:hover:border-[#164e63] lg:hover:text-[#164e63] lg:transition-colors px-6 rounded-lg">
          VIEW RESUME
        </button>
      </a>
      <div>
        <p className="text-center">
          You can contact me at
        </p>
        <button onClick={() => window.location = 'mailto:dnevin234@gmail.com'}>dnevin234@gmail.com</button>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-center">
          Or you can find me on Github and Linkedin
        </p>
        <div className="flex items-center justify-center gap-4">
          <a href="https://github.com/dnevin234">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" alt="Github logo" className="h-12" />
          </a>
          <a href="https://www.linkedin.com/in/daniel-nevin/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png" alt="Linkedin logo" className="h-12" />
          </a>
        </div>
      </div>
    </div>
  )
}