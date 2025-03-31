import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
<div className="relative z-[10] bg-transparent text-gray-200 shadow-lg p-5">
<div className="w-full flex flex-col items-center justify-center">
        <div className="w-full flex flex-row items-center justify-around flex-wrap">
          
          {/* Community Section */}
          <div className="min-w-[200px] flex flex-col items-center">
            <div className="font-bold text-lg">Community</div>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-2 cursor-pointer hover:text-red-500 transition"
            >
              <FaYoutube size={20} />
              <span className="ml-2">YouTube</span>
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-2 cursor-pointer hover:text-gray-400 transition"
            >
              <RxGithubLogo size={20} />
              <span className="ml-2">GitHub</span>
            </a>
            <a
              href="https://discord.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-2 cursor-pointer hover:text-blue-500 transition"
            >
              <RxDiscordLogo size={20} />
              <span className="ml-2">Discord</span>
            </a>
          </div>

          {/* Social Media Section */}
          <div className="min-w-[200px] flex flex-col items-center">
            <div className="font-bold text-lg">Social Media</div>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-2 cursor-pointer hover:text-pink-500 transition"
            >
              <RxInstagramLogo size={20} />
              <span className="ml-2">Instagram</span>
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-2 cursor-pointer hover:text-blue-400 transition"
            >
              <RxTwitterLogo size={20} />
              <span className="ml-2">Twitter</span>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-2 cursor-pointer hover:text-blue-700 transition"
            >
              <RxLinkedinLogo size={20} />
              <span className="ml-2">LinkedIn</span>
            </a>
          </div>

          {/* About Section */}
          <div className="min-w-[200px] flex flex-col items-center">
            <div className="font-bold text-lg">About</div>
            <a
              href="#sponsor"
              className="flex items-center my-2 cursor-pointer hover:text-yellow-400 transition"
            >
              <span className="ml-2">Donate</span>
            </a>
            <a
              href="#about-me"
              className="flex items-center my-2 cursor-pointer hover:text-green-400 transition"
            >
              <span className="ml-2">More About Me</span>
            </a>
            <a
              href="mailto:tawhidbinomar@gmail.com"
              className="flex items-center my-2 cursor-pointer hover:text-gray-300 transition"
            >
              <span className="ml-2">tawhidbinomar@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-5 text-sm text-center">
          &copy; Tawhid 2025 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
