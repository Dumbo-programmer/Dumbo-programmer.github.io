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
<footer className="relative z-[10] bg-transparent text-gray-200 shadow-lg p-5">
<div className="w-full flex flex-col items-center justify-center">
        <div className="w-full flex flex-row items-center justify-around flex-wrap">
          
          {/* Community Section */}
          <div className="min-w-[200px] flex flex-col items-center">
            <div className="font-bold text-lg">Community</div>
            <a
              href="https://github.com/Dumbo-programmer/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Tawhid Bin Omar's GitHub profile"
              className="flex items-center my-2 cursor-pointer hover:text-gray-500 transition"
            >
              <RxGithubLogo size={20} />
              <span className="ml-2">GitHub</span>
            </a>
            <a
              href="https://dev.to/dumbo_programmer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-2 cursor-pointer hover:text-gray-500 transition"
            >
              <RxGithubLogo size={20} />
              <span className="ml-2">Dev.to</span>
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
              href="https://www.instagram.com/renscule"
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
              href="https://www.linkedin.com/in/tawhidbinomar/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-2 cursor-pointer hover:text-blue-700 transition"
            >
              <RxLinkedinLogo size={20} />
              <span className="ml-2">LinkedIn</span>
            </a>
            <a
              href="https://www.youtube.com/@tawhidbinomar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-2 cursor-pointer hover:text-red-500 transition"
            >
              <FaYoutube size={20} />
              <span className="ml-2">YouTube</span>
            </a>
          </div>

          {/* About Section */}
          <div className="min-w-[200px] flex flex-col items-center">
            <div className="font-bold text-lg">Portfolio</div>
            <a
              href="/#about-me"
              className="flex items-center my-2 cursor-pointer hover:text-purple-400 transition"
            >
              <span className="ml-2">About Me</span>
            </a>
            <a
              href="/#projects"
              className="flex items-center my-2 cursor-pointer hover:text-purple-400 transition"
            >
              <span className="ml-2">Projects</span>
            </a>
            <a
              href="/#achievements"
              className="flex items-center my-2 cursor-pointer hover:text-purple-400 transition"
            >
              <span className="ml-2">Achievements</span>
            </a>
            <a
              href="/#education-impact"
              className="flex items-center my-2 cursor-pointer hover:text-purple-400 transition"
            >
              <span className="ml-2">Education Impact</span>
            </a>
            <a
              href="/notes"
              className="flex items-center my-2 cursor-pointer hover:text-purple-400 transition"
            >
              <span className="ml-2">Open Problem Solving Library</span>
            </a>
          </div>

          {/* Contact Section */}
          <div className="min-w-[200px] flex flex-col items-center">
            <div className="font-bold text-lg">Contact</div>
            <address className="not-italic flex flex-col items-center">
              <a
                href="mailto:tawhidbinomar@gmail.com"
                aria-label="Send email to tawhidbinomar@gmail.com"
                className="flex items-center my-2 cursor-pointer hover:text-teal-300 transition"
              >
                <span className="ml-2">tawhidbinomar@gmail.com</span>
              </a>
            </address>
            <a
              href="https://buymeacoffee.com/tawhid"
              className="flex items-center my-2 cursor-pointer hover:text-yellow-400 transition"
            >
              <span className="ml-2">Donate</span>
            </a>
            <a
              href="/resume.pdf"
              className="flex items-center my-2 cursor-pointer hover:text-green-400 transition"
            >
              <span className="ml-2">Resume</span>
            </a>
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-5 text-sm text-center">
          &copy; {new Date().getFullYear()} Tawhid Bin Omar. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
