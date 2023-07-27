import React from "react";

export default function ResumeCard() {
  return(
    <div className="flex flex-col bg-white items-center justify-center gap-8 px-8 py-16 font-roboto">
      <h1 className="text-3xl font-poppins font-bold tracking-wide text-orange-500">
        Say Hello!
      </h1>
      <p className="text-center">
        Currently open to new opportunities. For any further information about me or my work feel free to reach out!
      </p>
      <a href="/Resume/Daniel Nevin Resume July 2023.pdf" download>
        <button className="flex h-12 w-48 p-2 bg-orange-500 items-center justify-center text-white font-bold tracking-wide text-xl lg:hover:bg-white lg:hover:border-4 lg:hover:border-orange-500 lg:hover:text-orange-500 lg:transition-colors">
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
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Github logo" className="h-12" />
          </a>
          <a href="https://www.linkedin.com/in/daniel-nevin/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png" alt="Linkedin logo" className="h-12" />
          </a>
        </div>
      </div>
    </div>
  )
}