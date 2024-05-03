import React from "react";
import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline'
import { IoChatboxEllipses } from "react-icons/io5";

const projectStarterPack = [
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", 
    text: "ReactJS",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", 
    text: "TailwindCSS",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", 
    text: "NextJS",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    text: "TypeScript"
  },
];

const miscellaneous = [
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", 
      text: "HTML",
      color: "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-blue-400 bg-blue-100/20"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", 
      text: "Vanilla CSS",
      color: "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-blue-400 bg-blue-100/20"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", 
      text: "JavaScript ",
      color: "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-blue-400 bg-blue-100/20"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", 
      text: "ReactJS",
      color: "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-gray-400 bg-gray-100/20"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", 
      text: "NodeJS",
      color: "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-gray-400 bg-gray-100/20"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", 
      text: "Bootstrap",
      color: "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-gray-400 bg-gray-100/20"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", 
      text: "Redux",
      color: "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-gray-400 bg-gray-100/20"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      text: "TailwindCSS",
      color: "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-gray-400 bg-gray-100/20"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", 
      text: "Git",
      color: "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-green-400 bg-green-100/20"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg", 
      text: "Webpack",
      color: "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-green-400 bg-green-100/20"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", 
      text: "Firebase",
      color: "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-green-400 bg-green-100/20"
    },
    {
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg", 
        text: "npm",
        color: "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-green-400 bg-green-100/20"
    },
    {
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
        text: "Wordpress",
        color: "transition transform duration-300 border-2 border-transparent hover:border-2 hover:border-green-400 bg-green-100/20"
    },
    
];

function Column({tools }) {
    return (
        <>
          <div className="flex flex-wrap justify-center gap-6 lg:gap-10 ">
            {tools.map((tool, index) => (
                <div className="flex transition transform duration-300 hover:scale-[1.01] flex-wrap p-1 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-pink-500 via-red-500 to-yellow-500 rounded-xl items-center justify-center">
                  <div
                      key={index}
                      className={`bg-white border p-10 rounded-lg text-center`}
                  >
                      <img
                      src={tool.image}
                      alt={tool.text}
                      className="w-[8rem] h-20 mx-auto mb-4"
                      />
                      <p className="text-lg font-semibold font-outfit">{tool.text}</p>
                  </div>
                </div>
            ))}
          </div>
        </>
    );
  }

export default function ToolsSection() {
  return (
    <>
    
      <div className="h-max mt-20 relative">
        <div className="text-center text-4xl md:text-5xl lg:text-7xl font-outfit font-semibold text-gray-800 flex items-center gap-x-5 justify-center">
          <div>
            <span class="flex h-16 w-16 items-center justify-center rounded-full bg-orange-900">
                <WrenchScrewdriverIcon className='h-8 w-8 text-white'/>
            </span>
          </div>
          <div>My <div className="main-gradient" id="tools">Toolbox</div> </div>
        </div>
      </div>

      <div className="my-10 flex items-center justify-center flex-col container mx-auto rounded-xl bg-orange-400 py-10">
        <h3 className="four-title text-center font-outfit font-semibold text-white">My <span className="underline">Current</span> Project Starterpack:</h3>
        <div className="flex justify-center gap-8 flex-wrap  py-10 px-4 md:px-20 w-full rounded-lg">
          {projectStarterPack.map((tool, index) => (
            <div
              key={index}
              className="bg-white shadow-sm relative z-[30] p-6 rounded-lg text-center w-max"
            >
              <img
                src={tool.image}
                alt={tool.text}
                className="w-max px-4 h-20 mx-auto mb-4"
              />
              <p className="text-lg font-semibold font-outfit text-gray-800">{tool.text}</p>
            </div>
          ))}

          <div
            className="bg-white shadow-sm relative z-[30] p-6 rounded-lg text-center w-max"
          >
            <div className="p-4 hidden sm:block bg-white shadow-md rounded-md gap-y-2 absolute text-white -top-6 -right-24">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" 
                alt="Supabase" 
                className="w-20"
              />
              <p className="text-md font-semibold font-outfit text-gray-800">Or Supabase</p>
            </div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
              className="w-max px-4 h-20 mx-auto mb-4"
            />
            <p className="text-lg font-semibold font-outfit text-gray-800">Firebase</p>
          </div>

        </div>
      </div>



      <h3 class="flex items-center w-full p-20">
        <span class="flex-grow bg-orange-300 rounded h-1"></span>
        <button class="font-outfit mx-4 five-title">My Skills/Technologies</button>
        <span class="flex-grow bg-orange-300 rounded h-1"></span>
    </h3>
      <div className="flex mx-2 lg:mx-10">
          <Column title="Miscellaneous" tools={miscellaneous} />
      </div>



    </>
  );
}
