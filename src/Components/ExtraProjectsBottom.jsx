import sample1 from '../Images/stellapic1.png'
import sample2 from '../Images/ecoeats1.png'
import sample3 from '../Images/acely1.png'

export default function ExtraProjectBottom() {
    return (
        <div className='flex flex-col font-outfit '>
            
            <div className='text-6xl font-semibold tracking-tight text-center'>
                <h1>Some Other Projects </h1>
                <h1 className="main-gradient">I'm Working On:</h1>
            </div>

            <div className="py-10 max-w-6xl px-2 gap-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full items-center">
                <div className="bg-gray-400 rounded-md p-1 bg-black h-full flex flex-col transition300scale">
                    <div className="rounded-t-lg">
                        <img src={sample1} alt="Image of another project of mine" className='rounded-t-md' />
                    </div>
                    <div className="p-4 gap-y-2 bg-white rounded-b-md flex flex-col justify-between flex-grow">
                        <h1 className="four-title">
                            Stella
                        </h1>
                        <h3 className='paragraph-responsive'>
                            Website aimed to help students find volunteering opportunities near them.
                        </h3>
                    </div>
                </div>

                <a target='_blank' href='https://ecoeats.us' className="bg-gray-400 rounded-md p-1 bg-black h-full flex flex-col transition300scale cursor-pointer">
                    <div className="rounded-t-lg">
                        <img src={sample2} alt="Image of another project of mine" className='rounded-t-md' />
                    </div>
                    <div className="p-4 gap-y-2 bg-white rounded-b-md flex flex-col justify-end flex-grow">
                        <h1 className="four-title">
                            EcoEats
                        </h1>
                        <h3 className='paragraph-responsive'>
                            App aimed to help combat food waste by connecting food banks and restaurants.
                        </h3>
                    </div>
                </a>

                <div className="bg-gray-400 rounded-md p-1 bg-black h-full flex flex-col transition300scale">
                    <div className="rounded-t-lg">
                        <img src={sample3} alt="Image of another project of mine" className='rounded-t-md' />
                    </div>
                    <div className="p-4 gap-y-2 bg-white rounded-b-md flex flex-col justify-end flex-grow">
                        <h1 className="four-title">
                            Acely
                        </h1>
                        <h3 className='paragraph-responsive'>
                            EdTech Startup I'm working on aimed to help students with AP Exams. Coming soon 😉
                        </h3>
                    </div>
                </div>
            </div>

        </div>
    )
}