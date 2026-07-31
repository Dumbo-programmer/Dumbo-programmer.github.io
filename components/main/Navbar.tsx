"use client";
import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { href: "/#about-me", label: "Why" },
  { href: "/#projects", label: "Projects" },
  { href: "/#achievements", label: "Achievements" },
  { href: "/#education-impact", label: "Impact" },
  { href: "/#current-projects", label: "Research" },
  { href: "/notes", label: "Library" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 sm:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="/#about-me"
          className="h-auto w-auto flex flex-row items-center"
          aria-label="Tawhid Bin Omar — Home"
        >
          <Image
            src="/NavLogo.png"
            alt="Tawhid Bin Omar portfolio logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
            priority
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex h-full flex-row items-center" aria-label="Primary">
          <div className="flex items-center justify-between w-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="cursor-pointer transition duration-300 hover:text-[#7042f8] text-sm whitespace-nowrap"
                aria-label={`Navigate to ${link.label}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Social Icons (desktop) */}
        <div className="hidden md:flex flex-row gap-5">
          {Socials.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${social.name} profile`}
            >
              <Image
                src={social.src}
                alt={`${social.name} icon`}
                width={24}
                height={24}
                className="cursor-pointer transition-transform duration-300 hover:scale-110 hover:opacity-80"
              />
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-white p-2 z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 top-0 left-0 w-full h-full bg-[#030014] z-40 flex flex-col items-center justify-center gap-8">
          <button
            className="absolute top-5 right-5 text-white p-2"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            <HiX size={28} />
          </button>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-2xl text-gray-200 hover:text-[#7042f8] transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-row gap-6 mt-4">
            {Socials.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${social.name} profile`}
                onClick={() => setMenuOpen(false)}
              >
                <Image
                  src={social.src}
                  alt={`${social.name} icon`}
                  width={28}
                  height={28}
                  className="cursor-pointer transition-transform duration-300 hover:scale-110 hover:opacity-80"
                />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
