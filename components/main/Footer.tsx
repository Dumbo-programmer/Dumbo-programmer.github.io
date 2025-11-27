import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { FaSlack } from "react-icons/fa";

const Footer = () => {
  return (
<div className="relative z-[10] bg-transparent text-gray-200 shadow-lg p-5">
<div className="w-full flex flex-col items-center justify-center">
        <div className="w-full flex flex-row items-center justify-around flex-wrap">
          
          {/* Community Section */}
          <div className="min-w-[200px] flex flex-col items-center">
            <div className="font-bold text-lg">Community</div>
            <a
              href="https://app.slack.com/client/T0266FRGM/C0266FRGT"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-2 cursor-pointer hover:text-red-500 transition"
            >
              <FaSlack size={20} />
              <span className="ml-2">Slack</span>
            </a>
            <a
              href="https://github.com/Dumbo-programmer/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-2 cursor-pointer hover:text-gray-500 transition"
            >
              <RxGithubLogo size={20} />
              <span className="ml-2">GitHub</span>
            </a>
            <a
              href="https://discord.com/users/707079802531872769"
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
              href="https://www.instagram.com/renisudesu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-2 cursor-pointer hover:text-pink-500 transition"
            >
              <RxInstagramLogo size={20} />
              <span className="ml-2">Instagram</span>
            </a>
            <a
              href="https://x.com/tawhid_omar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-2 cursor-pointer hover:text-blue-400 transition"
            >
              <RxTwitterLogo size={20} />
              <span className="ml-2">Twitter</span>
            </a>
            <a
              href="https://www.linkedin.com/in/tawhid-omar-7a0320212/"
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
              href="https://buymeacoffee.com/tawhid"
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
              className="flex items-center my-2 cursor-pointer hover:text-teal-300 transition"
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
