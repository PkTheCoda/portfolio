import React from 'react';
import { FaLinkedin, FaMailBulk, FaGithub, FaVolleyballBall, FaTableTennis, FaMusic, FaCamera } from 'react-icons/fa';
import { IoChatboxEllipses } from "react-icons/io5";
import mePicture from '../Images/mepicture.jpg'

export default function AboutMe() {
  return (
    <>


        <div class="relative overflow-hidden bg-orange-400 pt-16 space-y-24 my-10">
          {/* <div className='bg-white lg:block hidden shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] shadow-orange-600/50 absolute top-4 px-4 ml-4 md:px-10 py-4 md:py-8 rounded-lg -rotate-6'>
              <FaVolleyballBall className='text-xl md:text-4xl text-orange-700'/>
          </div>

          <div className='bg-white lg:block hidden shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] shadow-blue-600/50 absolute -top-20 right-10 px-4 md:px-10 py-4 md:py-8 rounded-lg rotate-6'>
              <FaTableTennis className='text-xl md:text-4xl text-blue-700'/>
          </div>

          <div className="bg-white lg:block hidden shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] shadow-green-600/50 absolute bottom-0 left-10 px-4 md:px-10 py-4 md:py-8 rounded-lg rotate-6">
              <FaMusic className="text-xl md:text-4xl text-green-500" />
          </div>

          <div className="bg-white lg:block hidden shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] shadow-purple-600/50 absolute bottom-0 right-10 px-4 md:px-10 py-4 md:py-8 rounded-lg -rotate-6">
              <FaCamera className="text-xl md:text-4xl text-purple-500" />
          </div> */}

            <div class="relative">
                    <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
                        <div class="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">

                            <div>
                                <div>
                                    <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-white">
                                        <IoChatboxEllipses className='h-8 w-8 text-orange-900'/>
                                    </span>
                                </div>

                                <div class="mt-3 font-outfit ">
                                    <h2 class="text-4xl mb-1 font-bold tracking-wide text-white">
                                        A Bit <span className="text-orange-900">About Me.</span>
                                    </h2>
                                    <p className="text-xl leading-relaxed font-outfit text-white">
                                      <span className="text-black">Hi there!</span> I'm Pranav, a 16 year old and junior in highschool based out of Richmond, Virginia. Ever since I was a kid, I have always been fascinated with how diverse the web was -- and that passion has led me to pursue web development.
                                      <br />
                                      <br />
                                      I love web development since it allows me to not only harness my creativity, but also because I'm able to make an impact in my local and global community. It really is awesome because I can take anything that I imagine <span className="text-orange-900 font-bold">and turn it into a reality.</span>
                                    </p>

                                    <div className="flex mt-6 space-x-4 items-center  gap-x-2">
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
                        </div>
                        <div class="mt-12 sm:mt-16 lg:mt-0">
                            <div class="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                                <img loading="lazy" width="647" height="486"
                                    class="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                    src={mePicture}/>
                            </div>
                        </div>
                        
                    </div>
                    <div className="md:mt-16 mb-[7rem] h-[8rem] w-full flex items-center justify-center relative flex-col">
                      

                      <div className="flex flex-col gap-4 p-4 rounded-lg shadow-md bg-orange-200 text-white">
                          <div className='text-3xl md:text-3xl font-outfit font-bold text-white text-start '>Hobbies/Extracurriculars</div>
                            <div className="flex-col flex gap-4 md:flex-row font-outfit">
                              

                                <div className="bg-white p-4 rounded-lg shadow-md text-gray-800 transition transform hover:scale-105">
                                    <p className="font-semibold">Freelancing</p>
                                    <p className="text-sm">I freelance websites for a bit of money!</p>
                                </div>

                                <div className="bg-white p-4 rounded-lg shadow-md text-gray-800 transition transform hover:scale-105">
                                    <p className="font-semibold">Playing Volleyball</p>
                                    <p className="text-sm">I play varsity volleyball for my school team!</p>
                                </div>

                                <div className="bg-white p-4 rounded-lg shadow-md text-gray-800 transition transform hover:scale-105">
                                    <p className="font-semibold">Hanging out with Friends</p>
                                    <p className="text-sm">Yes, I have friends. Shocker 🙄</p>
                                </div>

                                <div className="bg-white p-4 rounded-lg shadow-md text-gray-800 transition transform hover:scale-105">
                                    <p className="font-semibold">Listening to Music</p>
                                    <p className="text-sm">The best way to escape reality!</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
    </>
  );
}
