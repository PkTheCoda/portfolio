import React from "react";

import talem1 from "../Images/talem1.png";
import talem2 from "../Images/talem2.png";
import talem3 from "../Images/talem3.png";

import ecoeats1 from "../Images/ecoeats1.png";
import ecoeats2 from "../Images/ecoeats2.png";
import ecoeats3 from "../Images/ecoeats3.png";

import stella1 from "../Images/stellapic1.png";
import stella2 from "../Images/stellapic2.png";

import score1 from "../Images/score1.png";
import score2 from "../Images/score2.png";
import score3 from "../Images/score3.png";

import {
  FaEye,
  FaUser,
  FaMoneyBill,
  FaExternalLinkAlt,
  FaCode,
} from "react-icons/fa";

import MoreProjectsBox from "./MoreProjectsBox";

import {
  Carousel,
  IconButton,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

function CarouselCustomNavigation(props) {
  return (
    <Carousel
      className="rounded-t-md w-full h-max"
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

      {props.image2 && (
        <img
          src={props.image2}
          alt="image 2"
          className="h-full w-full object-cover"
        />
      )}

      {props.image3 && (
        <img
          src={props.image3}
          alt="image 3"
          className="h-full w-full object-cover"
        />
      )}
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
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "PostgreSQL",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
];

const scoreBuiltWith = [
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
    name: "TailwindCSS",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "NextJS",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
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
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
];

export function Projects() {
  return (
    <>
      {/* Project #1 */}
      <div className="rounded-xl flex flex-col justify-center items-center my-20 mx-0 md:mx-10 font-outfit" id="work">
        {/* <div className="text-4xl md:text-7xl font-bold text-center py-4 mb-10" id="work">
            My <span className="main-gradient">Projects:</span>
          </div> */}

        <div className="py-4 w-4/5 grid xl:grid-cols-2 mb-10">
          <h1 className="text-5xl md:text-7xl font-semibold text-gray-800">
            Let's have a look at{" "}
            <span className="main-gradient">My Projects</span>
          </h1>
          <div className="flex items-center xl:mt-0 mt-6 xl:justify-end text-lg lg:text-xl">
            <a
              href="https://github.com/PkTheCoda"
              target="_blank"
              class="relative w-full sm:w-1/2 md:w-1/3 inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out bg-orange-400 rounded-md shadow-md group"
            >
              <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-700 group-hover:translate-x-0 ease">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span class="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                See All My Projects
              </span>
              <span class="relative invisible">Button Text</span>
            </a>
          </div>
        </div>

        <div className="rounded-xl flex items-center flex-col relative">
          <div className="flex flex-col gap-y-1 mb-4 w-4/5">
            <h2 className="text-3xl md:text-5xl font-semibold">
              <span className="text-blue-500 drop-shadow-2xl text-base">
                01
              </span>
              Talem - Extracurriculars
            </h2>
            <h4 className="text-gray-700 text-xl md:text-2xl flex">
              <TooltipCustomStyles
                title="About Talem"
                description="Talem was an app created by Pranav to help highschoolers find the right extracurriculars and internships fast."
              />
              Extracurricular/Internship Finder
            </h4>
          </div>

          <div className="flex flex-col w-11/12 lg:w-4/5 justify-around shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] rounded-md">
            <CarouselCustomNavigation
              image1={talem1}
              image2={talem2}
              image3={talem3}
            />

            <div className="rounded-b-lg bg-[#e17948ee] px-4 md:px-10 items-center justify-center flex flex-col">
              
              <div className="grid grid-cols-1 lg:grid-cols-2 w-full py-6 gap-8">
                <div className="w-full bg-white rounded-md p-6 text-sm md:text-lg lg:text-xl py-4">
                  Talem is an advanced platform enabling high school students to
                  discover tailored extracurriculars and internships. With a
                  vast database and over 15 filtering options, users can easily
                  navigate opportunities. The website boasts a seamless
                  integration of backend and frontend, designed using
                  TailwindCSS.
                </div>
                <div className="bg-white p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3 rounded-md">
                  {talemBuiltWith.map((technology, index) => (
                    <a
                      key={index}
                      href={technology.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-900 rounded-md font-normal text-xl text-gray-300 font-outfit flex flex-row lg:flex-col xl:flex-row justify-center items-center"
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

              <div className="w-full mb-8 gap-8 grid grid-cols-1 lg:grid-cols-2">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white rounded-md py-2 flex lg:flex-row flex-col gap-2 text-center items-center justify-center">
                    <div className="p-2 bg-orange-100 rounded-full">
                      <FaEye className="text-orange-800" />
                    </div>
                    <h2 className="text-lg">1 Million+ Visits</h2>
                  </div>

                  <div className="bg-white rounded-md py-2 flex lg:flex-row flex-col gap-2 text-center items-center justify-center">
                    <div className="p-2 bg-orange-100 rounded-full">
                      <FaUser className="text-orange-800" />
                    </div>
                    <h2 className="text-lg">300-600 DAU</h2>
                  </div>

                  <div className="bg-white rounded-md py-2 flex lg:flex-row flex-col gap-2 text-center items-center justify-center">
                    <div className="p-2 bg-orange-100 rounded-full">
                      <FaMoneyBill className="text-orange-800" />
                    </div>
                    <h2 className="text-lg">$3k Raised</h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <a
                    href="https://talem.org"
                    target="_blank"
                    class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out bg-blue-200 rounded-md shadow-md group"
                  >
                    <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
                      <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span class="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease gap-2">
                      <FaExternalLinkAlt /> Visit Website
                    </span>
                    <span class="relative invisible">Button Text</span>
                  </a>
                  <a
                    href="https://github.com/PkTheCoda/talem-app"
                    target="_blank"
                    class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out bg-orange-200 rounded-md shadow-md group"
                  >
                    <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-500 group-hover:translate-x-0 ease">
                      <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span class="absolute flex items-center justify-center w-full h-full text-[#6b4d01ee] transition-all duration-300 transform group-hover:translate-x-full ease gap-2">
                      <FaCode /> View Repo
                    </span>
                    <span class="relative invisible">Button Text</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project #2 */}
      <div className="rounded-xl flex flex-col my-20 mx-0 md:mx-10 relative">
        <div className="rounded-xl flex items-center flex-col relative">
          <div className="flex flex-col gap-y-1 mb-4 w-4/5">
            <h2 className="text-3xl md:text-5xl font-semibold font-outfit ">
              <span className="text-blue-500 drop-shadow-2xl text-base">
                02{" "}
              </span>{" "}
              Score1600 -{" "}
              <span className="text-amber-800">Ace your Digital SAT</span>
            </h2>
            <h4 className="text-gray-700 text-xl md:text-2xl font-outfit flex">
              <TooltipCustomStyles
                title="About Learntheweb"
                description="Score1600 is an SAT Tutoring website that I started with a group of friends! We're all (almost) near perfect-scores, so we decided to help out others and created this tutoring platform!"
              />
              An SAT Tutoring Platform
            </h4>
          </div>

          <div className="flex flex-col w-11/12 lg:w-4/5 justify-around shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] rounded-md">
            <CarouselCustomNavigation
              image1={score1}
              image2={score2}
              image3={score3}
            />

            <div className="rounded-b-lg font-outfit bg-[#e17948ee] px-10 items-center justify-center flex flex-col">
              <div className="grid grid-cols-1 lg:grid-cols-2 w-full py-6 gap-8">
                <div className="w-full bg-white rounded-md p-6 text-sm md:text-lg lg:text-xl py-4">
                  Score1600 is an SAT tutoring service started up by me and a
                  few of my close friends. We're all (almost) perfect-scorers
                  and though that it would benefit others to learn from us! We
                  offer a few free sessions before taking paid tutoring. I
                  personally <b>love this website</b> because I use a lot of
                  design techniques I learned from looking at other sites {":)"}
                </div>
                <div className="bg-white p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3 rounded-md">
                  {scoreBuiltWith.map((technology, index) => (
                    <a
                      key={index}
                      href={technology.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-900 rounded-md font-normal text-xl text-gray-300 font-outfit flex flex-row lg:flex-col xl:flex-row justify-center items-center"
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

              <div className="w-full mb-8 gap-8 grid grid-cols-1 lg:grid-cols-2">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white rounded-md py-2 flex lg:flex-row flex-col gap-2 text-center items-center justify-center">
                    <div className="p-2 bg-orange-100 rounded-full">
                      <FaEye className="text-orange-800" />
                    </div>
                    <h2 className="text-lg">No Stats</h2>
                  </div>

                  <div className="bg-white rounded-md py-2 flex lg:flex-row flex-col gap-2 text-center items-center justify-center">
                    <div className="p-2 bg-orange-100 rounded-full">
                      <FaUser className="text-orange-800" />
                    </div>
                    <h2 className="text-lg">No Stats</h2>
                  </div>

                  <div className="bg-white rounded-md py-2 flex lg:flex-row flex-col gap-2 text-center items-center justify-center">
                    <div className="p-2 bg-orange-100 rounded-full">
                      <FaMoneyBill className="text-orange-800" />
                    </div>
                    <h2 className="text-lg">No Stats</h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <a
                    href="https://score1600.com"
                    target="_blank"
                    class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out bg-blue-200 rounded-md shadow-md group"
                  >
                    <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
                      <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span class="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease gap-2">
                      <FaExternalLinkAlt /> Visit Website
                    </span>
                    <span class="relative invisible">Button Text</span>
                  </a>
                  <a
                    href="#"
                    class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out bg-orange-200 rounded-md shadow-md group"
                  >
                    <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-500 group-hover:translate-x-0 ease">
                      <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span class="absolute flex items-center justify-center w-full h-full text-[#6b4d01ee] transition-all duration-300 transform group-hover:translate-x-full ease gap-2">
                      <FaCode /> Repo Coming Soon!
                    </span>
                    <span class="relative invisible">Button Text</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* This is stella */}
      {/* <div className="rounded-xl flex flex-col my-20 mx-0 md:mx-10 relative">


              <div className="rounded-xl flex items-center flex-col relative">
              <div className="flex flex-col gap-y-1 mb-4 w-4/5">
                  <h2 className="text-3xl md:text-5xl font-semibold font-outfit "><span className="text-blue-500 drop-shadow-2xl text-base">02 </span> Stella - <span className="text-gradient-full">Volunteering made Easy</span></h2>
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
          </div> */}

      {/* Project #3 */}
      <div className="rounded-xl flex flex-col my-20 mx-0 md:mx-10 relative">
        <div className="rounded-xl flex items-center flex-col relative">
          <div className="flex flex-col gap-y-1 mb-4 w-4/5">
            <h2 className="text-3xl md:text-5xl font-semibold font-outfit ">
              <span className="text-blue-500 drop-shadow-2xl text-base">
                03{" "}
              </span>
              EcoEats
            </h2>
            <h4 className="text-gray-700 text-xl md:text-2xl font-outfit flex">
              <TooltipCustomStyles
                title="About EcoEats"
                description="EcoEats is a novel app that aims to help solve food waste. The actual was mainly built with the help of friends, but the website was created + programmed by me!"
              />
              Nonprofit Application + Website
            </h4>
          </div>

          <div className="flex flex-col w-11/12 lg:w-4/5 justify-around shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] rounded-md">
            <CarouselCustomNavigation
              image1={ecoeats1}
              image2={ecoeats2}
              image3={ecoeats3}
            />

            <div className="rounded-b-lg font-outfit bg-[#e17948ee] px-10 items-center justify-center flex flex-col">
              <div className="grid grid-cols-1 lg:grid-cols-2 w-full py-6 gap-8">
                <div className="w-full bg-white rounded-md p-6 text-sm md:text-lg lg:text-xl py-4">
                  EcoEats is a revolutionary food donation app streamlining the
                  process of connecting donors with surplus food to recipients
                  in need. It makes donating and receiving food easy, addressing
                  both food waste and hunger challenges in communities. This is
                  the first project that was really more on the app-dev side.
                  The website was made by me, but the actual app was built with a
                  group of my friends!
                </div>
                <div className="bg-white p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3 rounded-md">
                  {ecoeatsbuiltwith.map((technology, index) => (
                    <a
                      key={index}
                      href={technology.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-900 rounded-md font-normal text-xl text-gray-300 font-outfit flex flex-row lg:flex-col xl:flex-row justify-center items-center"
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

              <div className="w-full mb-8 gap-8 grid grid-cols-1 lg:grid-cols-2">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white rounded-md py-2 flex lg:flex-row flex-col gap-2 text-center items-center justify-center">
                    <div className="p-2 bg-orange-100 rounded-full">
                      <FaEye className="text-orange-800" />
                    </div>
                    <h2 className="text-lg">60k Visits</h2>
                  </div>

                  <div className="bg-white rounded-md py-2 flex lg:flex-row flex-col gap-2 text-center items-center justify-center">
                    <div className="p-2 bg-orange-100 rounded-full">
                      <FaUser className="text-orange-800" />
                    </div>
                    <h2 className="text-lg">26k~ Uniques</h2>
                  </div>

                  <div className="bg-white rounded-md py-2 flex lg:flex-row flex-col gap-2 text-center items-center justify-center">
                    <div className="p-2 bg-orange-100 rounded-full">
                      <FaMoneyBill className="text-orange-800" />
                    </div>
                    <h2 className="text-lg">$500 Raised</h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <a
                    href="https://ecoeats.us"
                    target="_blank"
                    class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out bg-blue-200 rounded-md shadow-md group"
                  >
                    <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
                      <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span class="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease gap-2">
                      <FaExternalLinkAlt /> Visit Website
                    </span>
                    <span class="relative invisible">Button Text</span>
                  </a>
                  <a
                    href="https://github.com/pkthecoda/ecoeats"
                    target="_blank"
                    class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out bg-orange-200 rounded-md shadow-md group"
                  >
                    <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-500 group-hover:translate-x-0 ease">
                      <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span class="absolute flex items-center justify-center w-full h-full text-[#6b4d01ee] transition-all duration-300 transform group-hover:translate-x-full ease gap-2">
                      <FaCode /> Visit Repo
                    </span>
                    <span class="relative invisible">Button Text</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project #3 */}
      {/* <div className="rounded-xl flex flex-col my-20 mx-0 md:mx-10 relative">


            <div className="rounded-xl flex items-center flex-col relative">
            <div className="flex flex-col gap-y-1 mb-4 w-4/5">
                <h2 className="text-3xl md:text-5xl font-semibold font-outfit "><span className="text-blue-500 drop-shadow-2xl text-base">03</span> learntheweb.org</h2>
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
