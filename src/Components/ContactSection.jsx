import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaCoffee, FaYoutube} from "react-icons/fa";
import ContactForm from './ContactForm'

function ContactSection() {
  return (
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
        </div>
      </footer>
    </section>
  );
}

export default ContactSection;
