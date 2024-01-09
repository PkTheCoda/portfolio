import React from 'react';
import hiregrid1 from '../Images/hiregrid1.svg'
import hiregrid2 from '../Images/hiregrid2.svg'
import hiregrid3 from '../Images/hiregrid3.svg'
import hiregrid4 from '../Images/hiregrid4.svg'

const HireFeatures = () => {
    return (
      <div id="features" className='flex flex-col gap-y-8 px-5 xl:px-20 pb-20'>
          <div className="text-4xl lg:text-5xl xl:text-7xl font-semibold font-outfit">
              <span className="main-gradient">Everything you need</span> from a website.
          </div>
  
            <div className="w-full font-outfit flex lg:flex-row flex-col bg-[#fbeee6] rounded-xl overflow-hidden"> {/* Add overflow-hidden here */}
                <div className="w-full lg:w-1/2 flex flex-col gap-y-8 justify-center px-10 py-5">
                    <div className='text-4xl lg:text-6xl font-semibold text-gray-900'>Your Website deserves to be at the top 👑</div>
                    <div className="text-gray-700 text-xl tracking-wide">
                        We're all about giving your website the royal treatment 👑! While the designing and development are skillfully handled by me, 
                        ensuring a visually stunning and responsive digital presence, the actual content and text on the site will be 
                        created by an expert copywriter with SEO in mind. We believe in mixing style with strategy to boost your online swagger 
                        and get those clicks rolling in!
                    </div>
                </div>
                <div className='w-full lg:w-1/2 justify-end flex'>
                    <img src={hiregrid1} alt="" className="w-full relative -bottom-10 -right-10" />
                </div>
            </div>


            <div className="w-full gap-8 font-outfit flex lg:flex-row flex-col rounded-xl overflow-hidden"> {/* Add overflow-hidden here */}
                <div className="w-full lg:w-1/2 flex flex-col gap-y-8 bg-[#f7f7f7] rounded-xl py-10">
                    <div className='px-10 flex flex-col gap-y-4'>
                        <div className='text-4xl lg:text-6xl font-semibold text-gray-900'>Blazing Fast Speed</div>
                        <div className="text-gray-700 text-xl tracking-wide">
                            Whether you're making a website for your new business or a website to showcase your skills, we can assure you that it will be fast and user-accessible to all. Our websites will be optimized to load fast on all devices and be
                            accessible to all users on the web.
                        </div>
                    </div>
                    <img src={hiregrid2} alt="" className="w-full rounded-xl px-10" />
                    <div className="text-gray-500 text-lg tracking-wide px-10">
                        ****While I can't <i>guaruantee</i> perfect web scores, I can <b>guaruantee</b> that your website will load 
                        fast and flawlessly regardless of device constraints and whatnot!

                    
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col gap-y-8 bg-[#f7f7f7] rounded-xl py-10">
                    <div className='px-10 flex flex-col gap-y-4'>
                        <div className='text-4xl lg:text-6xl font-semibold text-gray-900'>Instant Response Time</div>
                        <div className="text-gray-700 text-xl tracking-wide">
                            What type of web-developer ghosts a client after a website is done? Definitely not me. If you have any questions 
                            or want to add something new to your website/fix something, you can be certain I'll respond in no time at no extra cost! <i>(Unless it's something massive which we'll talk over!)</i>
                        </div>
                    </div>
                    <img src={hiregrid3} alt="" className="w-full rounded-xl px-10" />
                </div>
            </div>

            <div className="w-full font-outfit flex flex-col lg:flex-row bg-[#fbeee6] rounded-xl overflow-hidden"> {/* Add overflow-hidden here */}
                <div className="w-full lg:w-1/2 flex flex-col gap-y-8 justify-center px-10 py-5">
                    <div className='text-4xl lg:text-6xl font-semibold text-gray-900'>Responsive down to the corner 🔬</div>
                    <div className="text-gray-700 text-xl tracking-wide">
                        Responsiveness is required for a great website to run properly. You can be certain that your website will be rendered properly regardless of what device a user loads it up on.
                        Try increasing/decreasing the size of your screen on this page; we'll do the exact same to your site as well!  
                    </div>
                </div>
                <div className='w-full lg:w-1/2 justify-end flex'>
                    <img src={hiregrid4} alt="" className="w-full relative " />
                </div>
            </div>


      </div>
    );
  };

export default HireFeatures;
