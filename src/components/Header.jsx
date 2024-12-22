import React from "react";
import { FaTelegram, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Header = () => {
  return (
    <header className="bg-[#373741] text-white py-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-8">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white mb-4 lg:mb-0">
          <img
            src="./images/photo.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center lg:text-left flex-1 lg:ml-6">
          <h1 className="text-4xl font-bold">VOLKOVA NADEZHDA</h1>
          <p className="text-lg mt-2">Frontend Developer</p>
        </div>
        <div className="flex flex-col items-center lg:items-end space-y-2 mt-4 lg:mt-0">
          <div className="flex space-x-4">
            <a
              href="mailto:nadezhda.volk.2005@gmail.com"
              className="flex items-center text-white hover:text-gray-300"
            >
              <MdEmail className="w-6 h-6" />
            </a>
            <a
              href="https://t.me/volko_ff"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <FaTelegram className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/nadya-volkova"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <FaGithub className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
