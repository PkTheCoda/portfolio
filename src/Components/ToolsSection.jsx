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
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    text: "Firebase"
  }
];

const languages = [
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", 
      text: "HTML",
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", 
      text: "Vanilla CSS",
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", 
      text: "JavaScript ",
    },
    {
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        text: "Java"
    },
];

const technologies = [
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", 
      text: "ReactJS",
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", 
      text: "NodeJS",
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", 
      text: "Bootstrap",
    },
    {
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", 
        text: "Redux",
    },
    {
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        text: "TailwindCSS"
    }
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
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        text: "Java",
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
    
      <div className="h-max my-20 relative">
        <div className="text-center text-4xl md:text-5xl lg:text-7xl font-outfit font-bold text-gray-800 flex items-center gap-x-5 justify-center">
          <div>
            <span class="flex h-16 w-16 items-center justify-center rounded-full bg-orange-900">
                <WrenchScrewdriverIcon className='h-8 w-8 text-white'/>
            </span>
          </div>
          <div>My <div className="main-gradient" id="tools">Toolbox</div> </div>
        </div>
      </div>

      <div className="my-10 flex items-center justify-center flex-col mx-2 lg:mx-10">
        <h3 className="text-3xl md:text-4xl text-center font-outfit font-bold">My <span className="text-orange-600 underline">Current</span> Project Starterpack:</h3>
        <div className="flex justify-around gap-4 flex-wrap  py-10 px-4 md:px-20 w-full rounded-lg">
          {projectStarterPack.map((tool, index) => (
            <div
              key={index}
              className="bg-white relative boxgradlight z-[30] p-6 rounded-lg text-center w-max"
            >
              <img
                src={tool.image}
                alt={tool.text}
                className="w-max px-4 h-20 mx-auto mb-4"
              />
              <p className="text-lg font-semibold font-outfit">{tool.text}</p>
            </div>
          ))}
        </div>
      </div>



      <h3 class="flex items-center w-full p-20">
        <span class="flex-grow bg-orange-300 rounded h-1"></span>
        <button class="mx-3 text-md font-medium text-2xl font-outfit tracking-tight md:text-3xl lg:text-6xl rounded-full">My Skills/Technologies</button>
        <span class="flex-grow bg-orange-300 rounded h-1"></span>
    </h3>
      <div className="flex mx-2 lg:mx-10">
          <Column title="Miscellaneous" tools={miscellaneous} />
      </div>



    </>
  );
}
