import React from "react";
import { ArrowTopRightOnSquareIcon, AtSymbolIcon } from '@heroicons/react/24/outline'

function MoreProjectsBox() {
  return (
    <div className="flex justify-center">
        <div className="bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 text-white p-8 rounded-lg shadow-md w-full mx-4 lg:mx-0 lg:w-3/5">
            <h2 className="text-3xl font-bold mb-4 font-outfit">Too many more to count 😵‍💫</h2>

            <p className="text-lg font-outfit">
                What you see above are not the only project's I've built! I'm currently working on a website
                to help students with AP Exams. Think of it like Khan-Academy, but targetted towards Highschoolers and AP classes. Personally, 
                I think it'll be the next big thing! 
                Check out my Github or drop me an email to learn more!

            </p>

            <div className="flex justify-center space-x-4 mt-4">
                <a href="https://github.com/PkTheCoda" target="_blank" className="project-button text-lg bg-cyan-500 shadow-cyan-500/50">Visit Github <ArrowTopRightOnSquareIcon className="h-6 w-6 ml-2"/></a>
                <a href="mailto:pranavkonjeti@gmail.com" target="_blank" className="project-button text-lg bg-cyan-500 shadow-cyan-500/50">Email Me! <AtSymbolIcon className="h-6 w-6 ml-2" /></a>
            </div>
        </div>

    </div>
  );
}

export default MoreProjectsBox;