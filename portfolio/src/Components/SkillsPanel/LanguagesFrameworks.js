import React from "react"

export default function LanguagesFrameworks() {
  return(
    <div className="h-auto bg-white flex flex-col gap-2 justify-center items-center overflow-x-hidden my-16">
      <div data-aos="fade-down" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="flex h-auto w-auto p-2 mb-8 bg-orange-500 items-center justify-center">
        <h1 className="text-xl lg:text-3xl text-white font-bold tracking-wide">
          LANGUAGES & FRAMEWORKS
        </h1>  
      </div>
      <div className="grid grid-cols-3 grid-rows-3 gap-8 py-8 px-10 w-full font-roboto">
        <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="flex flex-col items-center justify-center gap-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png" alt="HTML5 logo" className="h-12"/>
          <span>HTML5</span>
        </div>
        <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="flex flex-col items-center justify-center gap-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="CSS logo" className="h-12"/>
          <span>CSS</span>
        </div>
        <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="flex flex-col items-center justify-center gap-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png" alt="Javascript logo" className="h-12"/>
          <span>JavaScript</span>
        </div>
        <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="flex flex-col items-center justify-center gap-2">
          <img src="https://banner2.cleanpng.com/20181128/cbr/kisspng-python-programming-basics-for-absolute-beginners-michigan-python-user-group-5-jul-2-18-5bfef921c53528.7857216715434365778078.jpg" alt="Python logo" className="h-12"/>
          <span>Python</span>
        </div>
        <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="flex flex-col items-center justify-center gap-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png" alt="C++ logo" className="h-12"/>
          <span>C++</span>
        </div>
        <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="flex flex-col items-center justify-center gap-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="React logo" className="h-12"/>
          <span>React</span>
        </div>
        <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="flex flex-col items-center justify-center gap-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1702px-Svelte_Logo.svg.png" alt="SvelteKit logo" className="h-12"/>
          <span>SvelteKit</span>
        </div>
        <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="flex flex-col items-center justify-center gap-2">
          <img src="https://logowik.com/content/uploads/images/tailwind-css3232.logowik.com.webp" alt="TailwindCSS logo" className="h-12"/>
          <span>TailwindCSS</span>
        </div>
        <div data-aos="zoom-in" data-aos-easing="sine" data-aos-duration="1000" data-aos-once="true" className="flex flex-col items-center justify-center gap-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png" alt="Bootstrap logo" className="h-12"/>
          <span>Bootstrap</span>
        </div>
      </div>
    </div>
  )
}