import sample1 from '../Images/stellapic1.png'
import sample2 from '../Images/ecoeats1.png'
import sample3 from '../Images/acely1.png'
import sample4 from '../Images/score1.png'
import desource1 from '../Images/desource2.png'

export default function ExtraProjectBottom() {
    return (
        <div className='flex flex-col font-outfit bg-[#e3c091] py-16'>
            
            <div className='text-6xl font-semibold tracking-tight text-center text-[#704421]'>
                <h1 className=''>Some Other Projects </h1>
                <h1 className="block">I've Built/Working On:</h1>
            </div>

            <div className="py-10 max-w-5xl px-2 gap-6 mx-auto flex flex-col gap-y-14 h-full items-center">

                <a target='_blank' href='https://score1600.com' className="grid md:grid-cols-2 gap-8 p-8 rounded-xl h-full shadow-md cursor-pointer bg-[#ffedd5]">
                    <div className="p-4 gap-y-2 flex flex-col text-black justify-center">
                        <h1 className="five-title text-blue-700 underline">
                            Score1600.com
                        </h1>
                        <h3 className='paragraph-responsive text-balance leading-6 font-light text-gray-800'>
                            Score1600 is an SAT tutoring service started with a group of friends. I personally LOVE 
                            this website - I focused heavily on design + color theme while making it. 
                            <br />
                            <br />
                            P.S: If you are interested in getting SAT tutoring, we offer one free class. All of our 
                            tutors have <span className="font-medium">either a perfect score in one subject (800) or above a 1550</span>.
                        </h3>
                    </div>
                    <div className="flex items-center">
                        <img src={sample4} alt="Image of another project of mine" className='rounded-md shadow-lg' />
                    </div>
                </a>

                <a target='_blank' href='#' className=" grid md:grid-cols-2 gap-8 h-full shadow-md cursor-pointer bg-[#ffedd5] p-8 rounded-xl">
                    <div className="flex items-center">
                        <img src={sample2} alt="Image of another project of mine" className='rounded-md shadow-lg' />
                    </div>
                    <div className="p-4 gap-y-2 flex flex-col text-black justify-center">
                        <h1 className="five-title">
                            EcoEats
                        </h1>
                        <h3 className='paragraph-responsive text-balance leading-6 font-light text-gray-800'>
                            EcoEats is a revolutionary app that connects food banks and charities with food. The App 
                            was created with a group of friends, however, I built the showcase website for the app! It 
                            was a pretty fun project and I did learn quite a bit! Currently the website is not up, but will 
                            be soon!
                        </h3>
                    </div>
                </a>


                <a target='_blank' href='#' className=" grid md:grid-cols-2 gap-8 p-8 rounded-xl h-full shadow-md cursor-pointer bg-[#ffedd5]">
                    <div className="p-4 gap-y-2 flex flex-col text-black justify-center">
                        <h1 className="five-title">
                            Acely
                        </h1>
                        <h3 className='paragraph-responsive text-balance leading-6 font-light text-gray-800'>
                            Acely is (kind of) an older project (2~ months in the works). You can think of it as 
                            a questionbank of AP-exam style questions + AI-powered answers. (yes, AI. You can be shocked now)
                            Anyways, I'm super excited about this project! We'll be releasing it by the end of the summer with 
                            5 AP subjects (CSA, HUG, Physics 1, and Calc AB/BC) and expanding throughout the school year
                        </h3>
                    </div>
                    <div className="flex items-center">
                        <img src={sample3} alt="Image of another project of mine" className='rounded-md shadow-lg' />
                    </div>
                </a>

            </div>

        </div>
    )
}