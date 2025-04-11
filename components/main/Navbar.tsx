import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        {/* Logo */}
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
    
        </a>

        {/* Navbar Links */}
        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a
              href="#about-me"
              className="cursor-pointer transition duration-300 hover:text-[#7042f8]"
            >
              About
            </a>
            <a
              href="#skills"
              className="cursor-pointer transition duration-300 hover:text-[#7042f8]"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="cursor-pointer transition duration-300 hover:text-[#7042f8]"
            >
              Projects
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex flex-row gap-5">
  {Socials.map((social) => (
    <a
      key={social.name}
      href={social.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={social.src}
        alt={social.name}
        width={24}
        height={24}
        className="cursor-pointer transition-transform duration-300 hover:scale-110 hover:opacity-80"
      />
    </a>
  ))}
</div>
      </div>
    </div>
  );
}

export default Navbar;
