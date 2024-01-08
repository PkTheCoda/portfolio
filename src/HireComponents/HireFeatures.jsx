import React from 'react';
import hiregrid1 from '../Images/hiregrid1.svg'
import hiregrid2 from '../Images/hiregrid2.svg'
import hiregrid3 from '../Images/hiregrid3.svg'
import hiregrid4 from '../Images/hiregrid4.svg'

const HireFeatures = () => {
    return (
      <div className='flex flex-col gap-y-8 px-60 pb-60'>
          <div className="text-7xl font-semibold font-outfit">
              <span className="main-gradient">Everything you need</span> from a website.
          </div>
  
            <div className="w-full font-outfit flex bg-[#fbeee6] rounded-xl overflow-hidden"> {/* Add overflow-hidden here */}
                <div className="w-1/2 flex flex-col gap-y-8 justify-center px-10">
                    <div className='text-5xl font-semibold text-gray-900'>Your Website deserves to be at the top 👑</div>
                    <div className="text-gray-700 text-2xl tracking-wide">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum quis quae explicabo nesciunt perspiciatis, illo nemo soluta voluptatibus commodi ab nobis eligendi quo ea nam esse ipsa accusamus. Aut, itaque.</div>
                </div>
                <div className='w-1/2 justify-end flex'>
                    <img src={hiregrid1} alt="" className="w-full relative -bottom-10 -right-10" />
                </div>
            </div>


            <div className="w-full gap-x-8 font-outfit flex rounded-xl overflow-hidden"> {/* Add overflow-hidden here */}
                <div className="w-1/2 flex flex-col gap-y-8 bg-[#f7f7f7] rounded-xl py-10">
                    <div className='px-10 flex flex-col gap-y-4'>
                        <div className='text-6xl font-semibold text-gray-900'>Blazing Fast Speed</div>
                        <div className="text-gray-700 text-2xl tracking-wide">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum quis quae explicabo nesciunt perspiciatis, illo nemo soluta voluptatibus commodi ab nobis eligendi quo ea nam esse ipsa accusamus. Aut, itaque.
                        </div>
                    </div>
                    <img src={hiregrid2} alt="" className="w-full rounded-xl px-10" />
                    <div className="text-gray-500 text-xl tracking-wide px-10">
                        ****While I can't <i>guaruantee</i> perfect web scores, I can <b>guaruantee</b> that your website will load 
                        fast and flawlessly regardless of device constraints and whatnot!

                    
                    </div>
                </div>
                <div className="w-1/2 flex flex-col gap-y-8 bg-[#f7f7f7] rounded-xl py-10">
                    <div className='px-10 flex flex-col gap-y-4'>
                        <div className='text-6xl font-semibold text-gray-900'>Instant Response Time</div>
                        <div className="text-gray-700 text-2xl tracking-wide">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum quis quae explicabo nesciunt perspiciatis, illo nemo soluta voluptatibus commodi ab nobis eligendi quo ea nam esse ipsa accusamus. Aut, itaque.
                        </div>
                    </div>
                    <img src={hiregrid3} alt="" className="w-full rounded-xl px-10" />
                </div>
            </div>

            <div className="w-full font-outfit flex bg-[#fbeee6] rounded-xl overflow-hidden"> {/* Add overflow-hidden here */}
                <div className="w-1/2 flex flex-col gap-y-8 justify-center px-10">
                    <div className='text-5xl font-semibold text-gray-900'>Responsive down to the corner 🔬</div>
                    <div className="text-gray-700 text-2xl tracking-wide">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum quis quae explicabo nesciunt perspiciatis, illo nemo soluta voluptatibus commodi ab nobis eligendi quo ea nam esse ipsa accusamus. Aut, itaque.</div>
                </div>
                <div className='w-1/2 justify-end flex'>
                    <img src={hiregrid4} alt="" className="w-full relative " />
                </div>
            </div>


      </div>
    );
  };

export default HireFeatures;
