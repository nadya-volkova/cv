import React from "react";
import { FaTelegram, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#373741] text-white py-8">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-6">
            <a
              href="mailto:nadezhda.volk.2005@gmail.com"
              className="text-2xl text-white hover:text-gray-300"
            >
              <MdEmail />
            </a>
            <a
              href="https://t.me/volko_ff"
              className="text-2xl text-white hover:text-gray-300"
            >
              <FaTelegram />
            </a>
            <a
              href="https://github.com/nadya-volkova"
              className="text-2xl text-white hover:text-gray-300"
            >
              <FaGithub />
            </a>
          </div>
          <p className="text-base">&copy; 2024 Volkova Nadezhda</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
