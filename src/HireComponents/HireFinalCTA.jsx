export default function HireFinalCTA() {
    return (
      <>
        <div className="relative px-5 lg:px-10 xl:px-20 flex justify-center mb-20">
          {/* Add the shadow blob */}
          <div className="hidden lg:block flex gap-x-20 absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl">
          <div
              className="relative aspect-[1155/678] w-[40rem] bg-gradient-to-tr from-[#de8c52] from-30% to-[#4133d8] via-[#d21d23] opacity-50 "
              style={{
                clipPath:
                  'polygon(12.58% 16.91%, 24.76% 10.52%, 36.95% 16.91%, 47.44% 10.52%, 66.68% 6.99%, 76.59% 16.91%, 84.33% 16.91%, 88.89% 37.91%, 91.64% 60.12%, 83.35% 62.08%, 76.59% 71.88%, 66.93% 72.68%, 57.43% 76.31%, 47.04% 81.23%, 38.05% 69.73%, 23.1% 76.31%, 18.66% 63.16%, 9.36% 53.87%, 5.81% 28.54%)',
              }}
            />
          </div>
  
          <div className="bg-[#171717] text-white text-center w-full text-5xl font-semibold rounded-xl py-20 flex flex-col gap-y-4 items-center font-outfit px-5 xl:px-20 relative ">
            <div className="block z-30">And the best part?</div>
            <div className="text-5xl block z-30 text-[#f53c80]">You don't pay a dime <span className="text-[#1bc1f7] ">until</span> the website is done.
            </div>
            <div className="text-xl font-light w-full px-0 xl:px-20 block z-30">
              That's right, you don't need to pay at all until you see the website. So how does this benefit us? Well, you don't need to worry about
              paying for something that you don't like, and if you choose to not pay, I have another stellar portfolio site! It's really a win-win.
              Of course, if you don't pay, you don't get the site. But trust me, when you see the site, the last thing on your mind is not paying 😉
            </div>
            <button className="bg-[#f53c80] z-50 px-3 transition transform duration-300 hover:scale-105 py-2 rounded-xl text-xl font-normal">
              Let's Do This!
            </button>
          </div>
        </div>
      </>
    );
  }
  