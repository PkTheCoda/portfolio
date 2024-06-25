import React from 'react';
import { FaLinkedin, FaMailBulk, FaGithub, FaVolleyballBall, FaTableTennis, FaMusic, FaCamera } from 'react-icons/fa';
import { IoChatboxEllipses } from "react-icons/io5";
import mePicture from '../Images/mepicturebackup.jpg'
import mePicturenew from '../Images/pranavlatest.jpg'

export default function AboutMe() {
  return (
    <>
        <div class="relative overflow-hidden bg-orange-400 -skew-y-2 px-4 xl:px-0 pt-16 space-y-24" id='about'>


            <div class="relative skew-y-2">
                    <div class="lg:mx-auto lg:max-w-7xl flex flex-col lg:flex-row lg:gap-12 lg:px-8">
                        <div class="w-full lg:w-1/2 lg:my-0 my-12 mx-auto max-w-xl lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:order-1 order-2">

                            <div className='pl-0'>
                                <div>
                                    <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-white">
                                        <IoChatboxEllipses className='h-8 w-8 text-orange-900'/>
                                    </span>
                                </div>

                                <div class="mt-3 font-outfit">
                                    <h2 class="text-4xl mb-1 font-semibold tracking-wide text-white">
                                        A Bit <span className="text-[#7c2d12] underline">About Me.</span>
                                    </h2>
                                    <p className="px-4 text-gray-900 border-l-4 border-[#9d4d32] text-xl leading-relaxed font-outfit text-slate-900 my-4">
                                      <span className="text-[#7c2d12] font-semibold">Hi there!</span>{' '} 
                                        I'm Pranav, a 16 year old junior in highschool based out of Richmond, Virginia. 
                                        I started building simple websites in my sophomore year of highschool. 
                                        Ever since then, I absolute fell in love with web-development and have built + 
                                        shipped many different apps that have a focus on helping others {':)'}
                                      <br />
                                      <br />
                                      Here's a quick rundown of what I've done. I built{' '} 
                                      <a href="https://talem.org" target='_blank' className="underline text-[#7c2d12]">talem.org</a>, 
                                      a website that helps highschoolers find extracurriculars and internships. I created{' '}
                                      <a href="https://learntheweb.org" target='_blank' className="underline text-[#7c2d12]">learntheweb.org</a>,
                                      a website that teaches web-dev through self-paced courses + projects. 
                                      <br />
                                      <br />
                                      
                                      Nowadays, I'm working on my latest app 
                                      which helps web developers:{' '}
                                      <a href="https://desource.app" target='_blank' className="underline text-[#7c2d12]">desource.app</a>{' '}
                                      and I'm running{' '}
                                      <a href="https://thryvedesign.com" target='_blank' className="underline text-[#7c2d12]">my own web-dev agency</a>. 
                                      If you want to help out/connect, just{' '}
                                      <a href="mailto:pranavkonjeti@gmail.com" target='_blank' className="underline text-[#7c2d12]">shoot me an email</a>!

                                      

                                      {/* I love web development since it allows me to not only harness my creativity, but also 
                                      because I'm able to make an impact in my local and global community. It really is awesome
                                      because I can take anything that I imagine <span className="text-[#7c2d12] font-semibold">and turn 
                                      it into a reality.</span> */}
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
                        <div class="w-full lg:w-1/2 lg:order-2 order-1 flex items-center justify-center lg:justify-end">
                            <img loading="lazy"
                                class="rounded-xl w-5/6 lg:my-0 shadow-2xl ring-1 ring-black ring-opacity-5 rotate-2"
                            src={mePicturenew}/>
                        </div>
                        
                    </div>
                    
                    <div className="md:mt-16 mb-[7rem] font-outfit w-full px-4 xl:px-0 flex items-center justify-center relative flex-col">

                        <div class="pt-12 sm:pt-16 flex flex-col gap-y-8 bg-gray-900 px-10 rounded-xl ">
                            <div class="w-full px-4 mx-auto sm:px-6 lg:px-8">
                                <div class="max-w-4xl mx-auto text-center">
                                <h2 class="six-title font-semibold leading-9 text-white sm:leading-10">
                                    My Websites make <span className="underline main-gradient">Real Impacts</span>
                                </h2>
                                </div>
                            </div>
                            <div class=" sm:pb-16">
                                <div class="relative">
                                    <div class="absolute inset-0 h-1/2"></div>
                                    <div class="relative max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
                                        <div class="max-w-4xl mx-auto">
                                        <dl class="rounded-lg md:grid md:grid-cols-3">
                                            <div class="flex flex-col p-6 text-center border-none sm:border-0 sm:border-r">
                                            <dt class="order-2 mt-2 text-lg font-medium leading-6 text-gray-200" id="item-1">
                                                Views (Millions)
                                            </dt>
                                            <dd class="order-1 text-7xl font-semibold leading-none text-white" aria-describedby="item-1">
                                                2<span className="main-gradient">M+</span>
                                            </dd>
                                            </div>
                                            <div
                                            class="flex flex-col p-6 text-center border-none sm:border-0 sm:border-l sm:border-r">
                                            <dt class="order-2 mt-2 text-lg font-medium leading-6 text-gray-200">
                                                Visitors (Lifetime)
                                            </dt>
                                            <dd class="order-1 text-7xl font-semibold leading-none text-white">
                                                300<span className="main-gradient">k</span>
                                            </dd>
                                            </div>
                                            <div class="flex flex-col p-6 text-center border-none sm:border-0 sm:border-l">
                                            <dt class="order-2 mt-2 text-lg font-medium leading-6 text-gray-200">
                                                In Total Funding
                                            </dt>
                                            <dd class="order-1 text-7xl font-semibold leading-none text-white">
                                                <span className="main-gradient">$</span>4,000
                                            </dd>
                                            </div>
                                        </dl>
                                        </div>
                                        <p className='text-white text-center mt-2 italic'>**I got this data by combining the lifetime analytics on <b className='underline'>all my websites</b></p>
                                    </div>
                                    </div>
                            </div>
                        </div>                     

                      {/* <div className="flex flex-col gap-4 p-4 rounded-lg shadow-md bg-orange-200 text-white">
                          <div className='text-3xl md:text-3xl font-outfit font-semibold text-white text-start '>Hobbies/Extracurriculars</div>
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
                        </div> */}

                    </div>

                </div>
            </div>
    </>
  );
}
