import React from 'react';
import { FaLinkedin, FaMailBulk, FaGithub, FaVolleyballBall, FaTableTennis, FaMusic, FaCamera } from 'react-icons/fa';
import mePicture from '../Images/mepicture.jpg'

export default function AboutMe() {
  return (
    <section className="py-16 bg-white relative" id="about">
      <div className="container mx-auto max-w-[95rem] h-max">
        <h2 className="text-4xl md:text-7xl font-semibold text-gray-800 mb-14 text-center font-outfit z-10">A Bit <span className="main-gradient">About Me</span></h2>
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-8">
          <div className="lg:w-1/3 lg:px-0 px-10">
            <img
              src={mePicture}
              alt="Profile"
              className="rounded-lg lg:ml-2 w-full h-auto lg:mx mx-auto lg:h-full shadow-red-500/50 shadow-lg"
            />
          </div>
          <div className="lg:w-2/3 lg:mx-0 mx-4 mt-10">
            <p className="text-2xl font-outfit text-gray-600">
              <span className="bold-grad-text">Hi there!</span> I'm Pranav, a rising junior in highschool based out of Richmond, Virginia. Ever since I was a kid, I have always been fascinated with how diverse the web was -- and that passion has led me to pursue web development.
              <br />
              <br />
              I love web development since it allows me to express my creativity in limitless ways, transforming abstract ideas into visually stunning and interactive digital experiences that captivate and engage others!
            </p>
            <div className="flex mt-6 space-x-4 items-center justify-center gap-x-2">
              <a href="https://www.linkedin.com/in/pranav-konjeti/" target='_blank' className="contact-buttons-about">
                <FaLinkedin className="text-2xl" />
              </a>
              <a href="mailto:pranavkonjeti@gmail.com" className="contact-buttons-about">
                <FaMailBulk className="text-2xl" />
              </a>
              <a href="https://github.com/PkTheCoda" target='_blank' className="contact-buttons-about">
                <FaGithub className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="my-40 md:mt-16 mb-[7rem] h-[8rem] w-full flex items-center justify-center relative flex-col">
            <div className='text-3xl md:text-5xl font-outfit my-4 p-4 font-bold main-gradient'>Stuff I like doing: </div>
            <div className="flex gap-4 p-4 rounded-lg shadow-md bg-gradient-to-tr mx-4 from-pink-500 via-red-500 to-yellow-500 text-white">
                <div className="flex-col flex gap-4 md:flex-row font-outfit">

                    <div className="bg-white p-4 rounded-lg shadow-md text-gray-800 transition transform hover:scale-105">
                        <p className="font-semibold">Coding and Web Development</p>
                        <p className="text-sm">This is kind of obvious. I love to make websites!</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-md text-gray-800 transition transform hover:scale-105">
                        <p className="font-semibold">Playing Volleyball</p>
                        <p className="text-sm">I play varsity volleyball for my school team!</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-md text-gray-800 transition transform hover:scale-105">
                        <p className="font-semibold">Hanging out with Friends</p>
                        <p className="text-sm">Yes believe it or not I have friends 🙄</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-md text-gray-800 transition transform hover:scale-105">
                        <p className="font-semibold">Listening to Music</p>
                        <p className="text-sm">The best way to escape reality!</p>
                    </div>

                </div>
            </div>
        </div>

        <div className='bg-white shadow-[0_0_15px_-1px] shadow-orange-600/50 absolute top-0 px-4 ml-4 md:px-10 py-4 md:py-8 rounded-lg -rotate-6'>
            <FaVolleyballBall className='text-xl md:text-4xl text-orange-700'/>
        </div>

        <div className='bg-white shadow-[0_0_15px_-1px] shadow-blue-600/50 absolute top-0 right-10 px-4 md:px-10 py-4 md:py-8 rounded-lg rotate-6'>
            <FaTableTennis className='text-xl md:text-4xl text-blue-700'/>
        </div>

        <div className="bg-white shadow-[0_0_15px_-1px] shadow-green-600/50 absolute bottom-0 left-10 px-4 md:px-10 py-4 md:py-8 rounded-lg rotate-6">
            <FaMusic className="text-xl md:text-4xl text-green-500" />
        </div>

        <div className="bg-white shadow-[0_0_15px_-1px] shadow-purple-600/50 absolute bottom-0 right-10 px-4 md:px-10 py-4 md:py-8 rounded-lg -rotate-6">
            <FaCamera className="text-xl md:text-4xl text-purple-500" />
        </div>

      </div>
    </section>
  );
}
