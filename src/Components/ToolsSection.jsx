import React from "react";

const projectStarterPack = [
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", 
    text: "ReactJS",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", 
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
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        text: "TailwindCSS"
    }
];

const miscellaneous = [
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", 
      text: "Git",
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg", 
      text: "Webpack",
    },
    {
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", 
      text: "Firebase",
    },
    {
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg", 
        text: "npm",
    },
    {
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
        text: "Wordpress"
    }
];

function Column({ title, tools }) {
    return (
        <>
            <div className="border h-max p-4 rounded-lg shadow-md flex flex-col flex-wrap gap-4 items-center bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-orange-400 to-[#FB7185]">
                <div className="text-4xl m-4 text-center bg-white shadow-lg rounded-lg w-max p-2 font-outfit text-black">{title}:</div>
                <div className="flex flex-wrap gap-4 justify-center">
                    {tools.map((tool, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md p-6 rounded-lg text-center w-max h-max"
                        >
                            <img
                            src={tool.image}
                            alt={tool.text}
                            className="w-[8rem] h-20 mx-auto mb-4"
                            />
                            <p className="text-lg font-semibold">{tool.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
  }

export default function ToolsSection() {
  return (
    <>
      <div className="h-max my-20 relative">
        <div className="text-center text-7xl font-outfit font-bold text-gray-800">
          My <span className="main-gradient">Toolbox</span>
        </div>
      </div>
      <div className="my-10 flex items-center justify-center flex-col mx-10">
        <h3 className="text-3xl text-center font-outfit font-bold">My <span className="text-orange-600 underline">Current</span> Project Starterpack:</h3>
        <div className="flex justify-center gap-y-4 flex-wrap space-x-10  py-10 px-4 md:px-20 w-full rounded-lg">
          {projectStarterPack.map((tool, index) => (
            <div
              key={index}
              className="bg-white shadow-[0_0_15px_-2px] shadow-red-500/50 p-6 rounded-lg text-center w-40"
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

      <h3 className="text-3xl mb-6 text-center font-outfit font-bold flex justify-center">
        <div className="p-4 bg-red-500 w-max text-white rounded-md shadow-lg">All Technologies:</div>
      </h3>
      <div className="flex flex-col md:grid md:grid-cols-3 gap-8 mx-10">
          <Column title="Languages" tools={languages} />
          <Column title="Technologies" tools={technologies} />
          <Column title="Miscellaneous" tools={miscellaneous} />
      </div>

      <div className="blur-3xl">
        <div
                className="absolute blur-3xl left-[calc(20%+3rem)] aspect-[1155/678] z-50 w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#933131] from-50% to-[#ef8717] to-40% via-[#b9c510] opacity-30 sm:left-[calc(1%+7rem)] sm:top-[-120rem] sm:w-[80.1875rem] sm:h-[60rem]"
                style={{
                clipPath:
                    'polygon(28.29% 33.22%, 37.29% 26.17%, 48.49% 23.83%, 60.42% 26.17%, 66.84% 29.32%, 70.23% 35.62%, 72.52% 47%, 71.96% 53.49%, 70.23% 61.27%, 63% 64.64%, 51.44% 69.65%, 39.01% 67.54%, 28.29% 57.52%, 23.56% 43.63%)',
                }}
            />
      </div>

    </>
  );
}
