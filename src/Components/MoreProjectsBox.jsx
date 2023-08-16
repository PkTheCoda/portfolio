import React from "react";
import { ArrowTopRightOnSquareIcon, AtSymbolIcon } from '@heroicons/react/24/outline'

function MoreProjectsBox() {
  return (
    <div className="flex justify-center">
        <div className="bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 text-white p-8 rounded-lg shadow-md w-full mx-4 md:mx-0 md:w-3/5">
            <h2 className="text-3xl font-bold mb-4 font-outfit">. . . And many more</h2>

            <p className="text-lg font-outfit">
                What you see above are not the only project's I've built! Infact, I'm currently working on a 
                startup project which aims to make school life easier for highschoolers. If you'd like to know 
                more information about that, please email me!
                <br />
                <br />
                For the full list of my projects, you can visit my Github!
            </p>

            <div className="flex justify-center space-x-4 mt-4">
                <a href="https://ecommerce-app-git-master-pkthecoda.vercel.app/" target="_blank" className="project-button text-lg bg-cyan-500 shadow-cyan-500/50">Visit Github <ArrowTopRightOnSquareIcon className="h-6 w-6 ml-2"/></a>
                <a href="https://github.com/PkTheCoda/ecommerce-app" target="_blank" className="project-button text-lg bg-cyan-500 shadow-cyan-500/50">Email Me! <AtSymbolIcon className="h-6 w-6 ml-2" /></a>
            </div>
        </div>

    </div>
  );
}

export default MoreProjectsBox;