import React from "react";

import talem1 from '../Images/talem1.png'
import talem2 from '../Images/talem2.png'
import talem3 from '../Images/talem3.png'

import ecoeats1 from '../Images/ecoeats1.png'
import ecoeats2 from '../Images/ecoeats2.png'
import ecoeats3 from '../Images/ecoeats3.png'

import stella1 from '../Images/stellapic1.png'
import stella2 from '../Images/stellapic2.png'

import MoreProjectsBox from "./MoreProjectsBox";

import { Carousel, IconButton, Tooltip, Typography } from "@material-tailwind/react";
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline'
 
function CarouselCustomNavigation(props) {
  return (
    <Carousel
      className="rounded-md w-full h-max shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]"
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
        <div className="absolute bottom-4 left-2/4 z-40 flex -translate-x-2/4 gap-2">
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

      {props.image2 && 
        <img
          src={props.image2}
          alt="image 2"
          className="h-full w-full object-cover"
        />
      }

      {props.image3 && 
        <img
          src={props.image3}
          alt="image 3"
          className="h-full w-full object-cover"
        />
      }
    </Carousel>
  );
}

function TooltipCustomStyles(props) {
    return (
      <Tooltip
        placement="bottom"
        className="border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10"
        content={
          <div className="w-80">
            <Typography color="blue-gray" className="font-inter font-bold">
              {props.title}
            </Typography>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal font-inter opacity-80"
            >
              {props.description}
            </Typography>
          </div>
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          className="h-5 w-5 cursor-pointer text-blue-gray-500 mt-1.5 mr-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
          />
        </svg>
      </Tooltip>
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
        name: "JavaScript",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
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
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Radix UI",
      link: "https://static-00.iconduck.com/assets.00/brand-radix-ui-icon-1536x2048-78tvytqz.png", // Replace with actual image link
    },
];

const stellaBuiltWith = [
  {
    name: "HTML",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "ReactJS",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "PrismaDB",
    link: "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/287/square_480/prismaHD.png",
  },
  {
    name: "TailwindCSS",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Daisy UI",
    link: "https://raw.githubusercontent.com/saadeghi/daisyui/master/src/docs/static/images/daisyui-logo/favicon-192.png", 
  },
  {
    name: "NextJS",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
  },
  {
    name: "PostgreSQL",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
  }
];
  
const learnthewebBuiltWith = [
    {
      name: "Wordpress",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
    },
    {
      name: "HTML",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
        name: "JavaScript",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "PHP",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
];

const ecoeatsbuiltwith = [
    {
      name: "HTML",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JS",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
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
      name: "TailwindCSS",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Flutter",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    },
    {
      name: "NextJS",
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
    },
];
  

export function Projects() {
  return (
    <>
        {/* Project #1 */}
        <div className="rounded-xl flex flex-col my-20 mx-0 md:mx-10">
        <div className="text-4xl md:text-7xl font-bold text-center font-outfit py-4 mb-10" id="work">My <span className="main-gradient">Projects:</span></div>


        <div className="rounded-xl flex items-center flex-col relative">
        <div className="flex flex-col gap-y-1 mb-4 w-4/5">
            <h2 className="text-3xl md:text-5xl font-bold font-outfit "><span className="text-blue-500 drop-shadow-2xl text-base">01</span>Talem - Extracurriculars</h2>
            <h4 className="text-gray-700 text-xl md:text-2xl font-outfit flex">
                <TooltipCustomStyles 
                    title="About Talem"
                    description="Talem was an app created by Pranav to help highschoolers find the right extracurriculars and internships fast."
                />
                Extracurricular/Internship Finder
            </h4>
        </div>
    
            <div className="flex flex-col w-4/5 justify-around">
            <CarouselCustomNavigation 
                image1={talem1}
                image2={talem2}
                image3={talem3}
            />
    
            <div className="w-full mt-4 flex md:flex-row flex-col lg:px-8 justify-between items-center py-4 gap-y-4 md:gap-y-0 gap-x-10">
                <div className="projects-shadow">
                    <div className="projects-font">Summary:</div>
                    <div className="font-outfit text-gray-700 text-xl mt-2">
                        Talem is an advanced platform enabling high school students to discover tailored extracurriculars and internships. 
                        With a vast database and over 15 filtering options, users can easily navigate opportunities. 
                        The website boasts a seamless integration of backend and frontend, designed using TailwindCSS.
                    </div>
                </div>
    
                <div className="projects-shadow">
                    <div className="projects-font">Technologies Used:</div>
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
            
            <div className="flex justify-center space-x-4 mt-4">
                <a href="https://talem.vercel.app/" target="_blank" className="project-button">Visit Live <ArrowTopRightOnSquareIcon className="h-8 w-8 ml-2"/></a>
                <a href="https://github.com/PkTheCoda/talem-app" target="_blank" className="project-button">View Code <CodeBracketIcon className="h-8 w-8 ml-2" /></a>
            </div>

            </div>
        </div>
        </div>

        {/* Project #2 */}
        <div className="rounded-xl flex flex-col my-20 mx-0 md:mx-10 relative">


            <div className="rounded-xl flex items-center flex-col relative">
            <div className="flex flex-col gap-y-1 mb-4 w-4/5">
                <h2 className="text-3xl md:text-5xl font-bold font-outfit "><span className="text-blue-500 drop-shadow-2xl text-base">02 </span> Stella - <span className="text-gradient-full">Volunteering made Easy</span></h2>
                <h4 className="text-gray-700 text-xl md:text-2xl font-outfit flex">
                    <TooltipCustomStyles 
                        title="About Learntheweb"
                        description="Stella is a SaaS that aims to connect students with volunteer opportunities in their area. It's currently a work in progress. Contact Pranav for more information."
                    />
                    SaaS App - Currently a Work In Progress
                </h4>
            </div>
        
                <div className="flex flex-col w-4/5 justify-around">
                <CarouselCustomNavigation 
                    image1={stella1}
                    image2={stella2}
                />
        
                <div className="w-full mt-4 flex md:flex-row flex-col lg:px-8 justify-between items-center py-4 gap-y-4 md:gap-y-0 gap-x-10">
                    <div className="projects-shadow">
                    <div className="projects-font">Summary:</div>
                    <div className="font-outfit text-gray-700 text-xl mt-2">
                        Stella™ is an up and coming SaaS that focuses on connecting students with available businesses for 
                        volunteering opportunities. It's currently a Work-In-Progress, but will be finished and shipped in the 
                        coming weeks! The website is built with a React frontend coupled with PrismaDB and PostgreSQL for the backend.
                    </div>
                    </div>
        
                    <div className="projects-shadow">
                    <div className="projects-font">Technologies Used:</div>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {stellaBuiltWith.map((technology, index) => (
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
                
                <div className="flex justify-center space-x-4 mt-4 cursor-auto">
                    <button className="project-button">Launching Mid-Feb!</button>
                </div>

                </div>
            </div>
        </div>



        {/* Project #3 */}
        <div className="rounded-xl flex flex-col my-20 mx-0 md:mx-10 relative">

            <div className="rounded-xl flex items-center flex-col relative">
                <div className="flex flex-col gap-y-1 mb-4 w-4/5">
                    <h2 className="text-3xl md:text-5xl font-bold font-outfit "><span className="text-blue-500 drop-shadow-2xl text-base">03 </span>EcoEats</h2>
                    <h4 className="text-gray-700 text-xl md:text-2xl font-outfit flex">
                        <TooltipCustomStyles 
                            title="About EcoEats"
                            description="EcoEats is a novel app that aims to help solve food waste. The actual was mainly built with the help of friends, but the website was created + programmed by me!"
                        />
                        Nonprofit Application + Website
                    </h4>
                </div>

                    <div className="flex flex-col w-4/5 justify-around">
                    <CarouselCustomNavigation 
                        image1={ecoeats1}
                        image2={ecoeats2}
                        image3={ecoeats3}
                    />

                    <div className="w-full mt-4 flex md:flex-row flex-col lg:px-8 justify-between items-center py-4 gap-y-4 md:gap-y-0 gap-x-10">
                    <div className="projects-shadow">
                    <div className="projects-font">Summary:</div>
                    <div className="font-outfit text-gray-700 text-xl mt-2">
                      EcoEats is a revolutionary food donation app streamlining the process of connecting donors with surplus food to recipients in need. It makes donating and receiving food easy, addressing both food waste and hunger challenges in communities.
                      This is the first project that was really more on the app-dev side. The website was made by me, but the actual app was built by a group of my friends!
                    </div>
                    </div>
        
                    <div className="projects-shadow">
                    <div className="projects-font">Technologies Used:</div>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {ecoeatsbuiltwith.map((technology, index) => (
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
                
                <div className="flex justify-center space-x-4 mt-4 cursor-auto">
                    <a href="#" className="project-button">Coming Soon Enough 😉 
                      {/* <ArrowTopRightOnSquareIcon className="h-8 w-8 ml-2"/>  */}
                    </a>
                </div>

                </div>
            </div>
        </div>

        {/* Project #3 */}
        {/* <div className="rounded-xl flex flex-col my-20 mx-0 md:mx-10 relative">


            <div className="rounded-xl flex items-center flex-col relative">
            <div className="flex flex-col gap-y-1 mb-4 w-4/5">
                <h2 className="text-3xl md:text-5xl font-bold font-outfit "><span className="text-blue-500 drop-shadow-2xl text-base">03</span> learntheweb.org</h2>
                <h4 className="text-gray-700 text-xl md:text-2xl font-outfit flex">
                    <TooltipCustomStyles 
                        title="About Learntheweb"
                        description="Learntheweb was created by Pranav when he realized how lacking basic computer science education was throughout the standardized school system."
                    />
                    Online Programming Nonprofit
                </h4>
            </div>
        
                <div className="flex flex-col w-4/5 justify-around">
                <CarouselCustomNavigation 
                    image1={ltw1}
                    image2={ltw2}
                    image3={ltw3}
                />
        
                <div className="w-full mt-4 flex md:flex-row flex-col lg:px-8 justify-between items-center py-4 gap-y-4 md:gap-y-0 gap-x-10">
                    <div className="projects-shadow">
                    <div className="projects-font">Summary:</div>
                    <div className="font-outfit text-gray-700 text-xl mt-2">
                        learntheweb.org is a free online learning platform designed to make coding easy and accessible to people of all 
                        ages and backgrounds. Learntheweb uses features like content-rich lessons, live workshops, and interactive 
                        projects to help you better understand how to program! The website is built with a wordpress front-end, along 
                        with PHP and CSS
                    </div>
                    </div>
        
                    <div className="projects-shadow">
                    <div className="projects-font">Technologies Used:</div>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {learnthewebBuiltWith.map((technology, index) => (
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
                
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="https://learntheweb.org/" target="_blank" className="project-button">Visit Live <ArrowTopRightOnSquareIcon className="h-8 w-8 ml-2"/></a>
                </div>

                </div>
            </div>
        </div> */}

        <MoreProjectsBox />

    </>
  );
}

