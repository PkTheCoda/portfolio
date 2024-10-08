import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaCoffee, FaYoutube} from "react-icons/fa";
import ContactForm from './ContactForm'
import { BiSolidCoffeeAlt } from "react-icons/bi";

function ContactSection() {
  return (
    <div className="relative">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="block w-full relative -bottom-2">
        <path
          fill="#FFA726"
          fillOpacity="1"
          d="M0,192L34.3,208C68.6,224,137,256,206,277.3C274.3,299,343,309,411,272C480,235,549,149,617,138.7C685.7,128,754,192,823,229.3C891.4,267,960,277,1029,277.3C1097.1,277,1166,267,1234,245.3C1302.9,224,1371,192,1406,176L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
      <section className="bg-[#FFA726] pt-8" id="contact">
        <div className="container mx-auto text-center px-2 font-outfit">
          <h2 className="text-4xl font-semibold mb-4 text-white">Get in Touch</h2>
          <p className="text-lg text-white mb-4 px-10 lg:px-60">
            Have a question or a project in mind? Don't hesitate to reach out! Whether it's discussing potential collaborations or 
            simply saying hello, I'm here and ready to chat.
          </p>

          <ContactForm />

          {/* <div className="flex flex-wrap bg-gray-900 rounded-b-md w-1/2 mx-auto py-4 pb-10 justify-center gap-4">
            <a
              href="mailto:pranavkonjeti@gmail.com"
              className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-outfit flex items-center gap-2 transition transform hover:scale-110"
            >
              <FaEnvelope />
              Email
            </a>
            <a
              href="https://github.com/pkthecoda"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-6 py-3 rounded-md text-lg font-outfit flex items-center gap-2 transition transform hover:scale-110"
            >
              <FaGithub />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/pranav-konjeti"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-800 text-white px-6 py-3 rounded-md text-lg font-outfit flex items-center gap-2 transition transform hover:scale-110"
            >
              <FaLinkedin />
              LinkedIn
            </a>
            <a
              href="https://youtube.com/@pranavkonjeti"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-900 text-white px-6 py-3 rounded-md text-lg font-outfit flex items-center gap-2 transition transform hover:scale-110"
            >
              <FaYoutube />
              Youtube
            </a>
          </div> */}
        </div>

        <footer className="bg-[#efa237] mt-16 py-8 text-center">
          <p className="text-white text-lg font-outfit px-2">
            Built with ❤️ by <a href="mailto:pranavkonjeti@gmail.com" target="_blank" className="text-purple-500 underline">Pranav Konjeti</a> using <span className="text-purple-500">React, TailwindCSS, Material Tailwind</span> <br />
            This portfolio is a complete rehaul of my <a href="https://pranavkold.vercel.app" target="_blank" className="text-purple-500 underline">old one</a>. Have Suggestions? Email me!
            

          </p>

          {/* <div className="grid grid-cols-2 lg:grid-cols-4 rounded-b-md w-5/6 md:w-1/2 mx-auto pt-4 justify-center gap-4">
            <a
              href="mailto:pranavkonjeti@gmail.com"
              className="bg-blue-500 text-white justify-center px-6 py-3 rounded-md font-outfit flex items-center gap-2 transition transform hover:scale-110"
            >
              <FaEnvelope />
              Email
            </a>
            <a
              href="https://github.com/pkthecoda"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white justify-center px-6 py-3 rounded-md font-outfit flex items-center gap-2 transition transform hover:scale-110"
            >
              <FaGithub />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/pranav-konjeti"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-800 text-white justify-center px-6 py-3 rounded-md font-outfit flex items-center gap-2 transition transform hover:scale-110"
            >
              <FaLinkedin />
              LinkedIn
            </a>
            <a
              href="https://youtube.com/@pranavkonjeti"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-900 text-white justify-center px-6 py-3 rounded-md font-outfit flex items-center gap-2 transition transform hover:scale-110"
            >
              <FaYoutube />
              Youtube
            </a>
          </div> */}

          <div className="mt-4 flex justify-center gap-4">
            <a
              href="https://github.com/pkthecoda"
              target="_blank"
                className="p-3 bg-purple-100 rounded-full transition transform hover:scale-105"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-purple-500 text-2xl hover:text-purple-800" />
            </a>
            <a
              href="https://www.linkedin.com/in/pranav-konjeti"
              target="_blank"
                className="p-3 bg-purple-100 rounded-full transition transform hover:scale-105"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-purple-500 text-2xl hover:text-purple-800" />
            </a>
            <a
              className="p-3 bg-purple-100 rounded-full transition transform hover:scale-105"
              href="mailto:pranavkonjeti@gmail.com"
            >
              <FaEnvelope className="text-purple-500 text-2xl hover:text-purple-800" />
            </a>
            <a
              href="https://www.youtube.com/@pranavkonjeti"
                className="p-3 bg-purple-100 rounded-full transition transform hover:scale-105"
              target="_blank"
            >
              <FaYoutube className="text-purple-500 text-2xl hover:text-purple-800" />
            </a>
            <a
              href="https://buymeacoffee.com/pranavkonjeti"
                className="p-3 bg-purple-100 rounded-full transition transform hover:scale-105"
              target="_blank"
            >
              <BiSolidCoffeeAlt className="text-purple-500 text-2xl hover:text-purple-800" />
            </a>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default ContactSection;
