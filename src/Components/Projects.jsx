import React from "react";
import talem1 from '../Images/talem1.png'
import talem2 from '../Images/talem2.png'
import talem3 from '../Images/talem3.png'
import { Carousel, IconButton } from "@material-tailwind/react";
 
function CarouselCustomNavigation(props) {
  return (
    <Carousel
      className="rounded-md w-full h-max shadow-lg"
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="black"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="black"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-black" : "w-4 bg-black"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src={props.image1}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={props.image2}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src={props.image3}
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}

const talemBuiltWith = [
    {
      name: "HTML",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "ReactJS",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Firebase",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    {
      name: "React Router",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", // Replace with actual image link
    },
    {
      name: "TailwindCSS",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    },
    {
      name: "Radix UI",
      link: "https://static-00.iconduck.com/assets.00/brand-radix-ui-icon-1536x2048-78tvytqz.png", // Replace with actual image link
    },
  ];
  

export function Projects() {
  return (

    <div className="rounded-xl flex flex-col my-20 mx-10 relative">
      <div className="text-7xl font-bold text-center font-outfit main-gradient py-4 mb-10">Projects I've Built:</div>
      <div className="flex flex-col gap-y-1 mb-4 mx-20">
        <h2 className="text-5xl font-bold font-outfit"><span className="text-blue-500 drop-shadow-2xl text-base">01</span>Talem - Extracurriculars</h2>
        <h4 className="text-gray-700 text-2xl font-outfit">Extracurricular/Internship Finder</h4>
      </div>

      <div className="rounded-xl flex items-center justify-center flex-col mx-20 relative">
  
        <div className="flex flex-col w-full justify-around">
          <CarouselCustomNavigation 
              image1={talem1}
              image2={talem2}
              image3={talem3}
          />
  
          <div className="w-full lg:w-full mt-4 lg:px-8 flex justify-between items-center py-4 gap-x-10 ">
            <div className="w-1/2 p-4 bg-white relative boxgrad rounded-xl">
              <div className="font-outfit text-4xl">Summary:</div>
              <div className="font-outfit text-gray-700 text-xl mt-2">
                Talem is a state-of-the-art website that allows high schoolers to find the perfect extracurriculars and internships for them.
                Talem has a massive database of internships and extracurriculars and allows users to filter through them with over 15 different filtering options.
                The website has a fully integrated backend and beautiful frontend made with TailwindCSS.
              </div>
            </div>
  
            <div className="flex flex-col gap-y-2 p-4 bg-white relative boxgrad rounded-xl w-1/2">
              <div className="font-outfit text-4xl ">Technologies Used:</div>
              <div className="flex flex-wrap gap-2 mt-2">
                {talemBuiltWith.map((technology, index) => (
                    <a
                    key={index}
                    href={technology.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-200 rounded-md font-normal text-xl text-gray-600 font-outfit flex items-center"
                    >
                    <img
                        src={technology.link}
                        alt={technology.name}
                        className="w-6 h-6 mr-2"
                    />
                    {technology.name}
                    </a>
                ))}
              </div>

            </div>
          </div>
          
          <div className="flex justify-center space-x-4">
              <a className="p-2 bg-red-500 text-2xl text-white font-outfit rounded-xl px-4 shadow-lg shadow-red-500/50 transition transform hover:scale-105 cursor-pointer">View Code</a>
              <a className="p-2 bg-red-500 text-2xl text-white font-outfit rounded-xl px-4 shadow-lg shadow-red-500/50 transition transform hover:scale-105 cursor-pointer">Visit Live</a>
        </div>

        </div>
      </div>
    </div>
  );
}

