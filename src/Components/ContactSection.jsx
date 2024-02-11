import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaCoffee} from "react-icons/fa";

function ContactSection() {
  return (
    <section className="bg-[#FFA726] pt-8" id="contact">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 font-outfit text-white">Get in Touch</h2>
        <p className="text-lg text-white mb-8 font-inter px-10 lg:px-60">
          I'm always open to any questions or queries! Whether you want to work on a project together, debate the 
          superiority of cats over dogs, or just say hi - let's make this conversation awesome!
        </p>

        <div className="flex flex-wrap justify-center gap-4">
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
            href="https://ko-fi.com/pranavk"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-500 text-white px-6 py-3 rounded-md text-lg font-outfit flex items-center gap-2 transition transform hover:scale-110"
          >
            <FaCoffee />
            Donate!
          </a>
        </div>
      </div>

      <footer className="bg-[#efa237] mt-16 py-8 text-center">
        <p className="text-white text-lg font-outfit">
          Built with ❤️ by <a href="mailto:pranavkonjeti@gmail.com" target="_blank" className="text-purple-500 underline">Pranav Konjeti</a> using <span className="text-purple-500">React, TailwindCSS, Material Tailwind</span> <br />
          This portfolio is a complete rehaul of my <a href="https://pranavkold.vercel.app" target="_blank" className="text-purple-500 underline">old one</a>. Have Suggestions? Email me!
          

        </p>
        <div className="mt-4 flex justify-center gap-4">
          <a
            href="https://github.com/pkthecoda"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-purple-500 text-2xl hover:text-purple-800 transition transform hover:scale-125" />
          </a>
          <a
            href="https://www.linkedin.com/in/pranav-konjeti"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-purple-500 text-2xl hover:text-purple-800 transition transform hover:scale-125" />
          </a>
          <a
            href="mailto:pranavkonjeti@gmail.com"
          >
            <FaEnvelope className="text-purple-500 text-2xl hover:text-purple-800 transition transform hover:scale-125" />
          </a>
        </div>
      </footer>
    </section>
  );
}

export default ContactSection;
