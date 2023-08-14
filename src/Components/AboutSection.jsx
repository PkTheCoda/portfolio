import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import mePicture from '../Images/mepicture.jpg'
import ButtonGradient from './ButtonGradient';


export default function AboutMe() {
  return (
    <section className="py-16 bg-white relative">
      <div className="container mx-auto max-w-[90rem] boxgrad relative">
        <h2 className="text-7xl font-semibold text-gray-800 mb-14 text-center font-outfit">A Bit <span className="main-gradient">About Me</span></h2>
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-8">
          <div className="lg:w-1/3 relative boxgrad">
            <img
              src={mePicture}
              alt="Profile"
              className="rounded-lg w-44 h-44 mx-auto lg:w-full lg:h-full shadow-red-500/50 shadow-lg"
            />
          </div>
          <div className="lg:w-2/3">
            <p className="text-2xl font-outfit text-gray-600">
              <span className="main-gradient">Hi there!</span> I'm Pranav, a passionate high schooler with an interest in web development. I love bringing ideas to life through code and constantly expanding my skillset. When I'm not coding, you can find me exploring new technologies, reading, and enjoying the outdoors.
            </p>
            <div className="flex mt-6 space-x-4 items-center justify-center gap-x-2">
              <a href="#" className="text-gray-600 hover:text-orange-400 w-14 bg-white shadow-lg shadow-red-500/50 flex justify-center p-4 rounded-lg">
                <FaLinkedin className="text-2xl" />
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-400 w-14 bg-white shadow-lg shadow-red-500/50 flex justify-center p-4 rounded-lg">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-400 w-14 bg-white shadow-lg shadow-red-500/50 flex justify-center p-4 rounded-lg">
                <FaGithub className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 grid gap-6 grid-cols-2">
          <div className="relative boxgrad w-full h-40"></div>
          <div className="relative boxgrad w-full h-40"></div>
        </div>
      </div>
    </section>
  );
}
