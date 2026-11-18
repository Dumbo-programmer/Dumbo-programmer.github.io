"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { HiMail, HiMenu, HiX } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { requestTab, tabFromHash } from "@/utils/tabs";

const navLinks = [
  { href: "/#projects", label: "Projects" },
  { href: "/#roles", label: "Roles" },
  { href: "/#notes", label: "Notes" },
  { href: "/#certificates", label: "Certificates" },
  { href: "/#writing", label: "Writing" },
  { href: "/#contact", label: "Contact" },
];

const headerSocials = [
  {
    name: "GitHub",
    href: "https://github.com/Dumbo-programmer",
    icon: <FaGithub size={20} aria-hidden="true" />,
    external: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/tawhidbinomar/",
    icon: <FaLinkedin size={20} aria-hidden="true" />,
    external: true,
  },
  {
    name: "Email",
    href: "mailto:tawhidbinomar@gmail.com",
    icon: <HiMail size={21} aria-hidden="true" />,
    external: false,
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setMenuOpen(false);
    if (typeof window === "undefined" || window.location.pathname !== "/") return;
    const hash = href.includes("#") ? `#${href.split("#")[1]}` : "";
    if (!hash) return;
    event.preventDefault();
    requestTab(tabFromHash(hash), { scroll: true });
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-3 sm:px-6 lg:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-1 sm:px-[10px]">
        <a
          href="/#projects"
          onClick={(event) => handleNavClick(event, "/#projects")}
          className="h-auto w-auto flex flex-row items-center"
          aria-label="Tawhid Bin Omar — Home"
        >
          <Image
            src="/NavLogo.png"
            alt="Tawhid Bin Omar portfolio logo"
            width={70}
            height={70}
            className="w-11 h-11 sm:w-[60px] sm:h-[60px] object-contain cursor-pointer hover:animate-slowspin"
            priority
          />
        </a>

        <nav className="hidden lg:flex h-full flex-row items-center" aria-label="Primary">
          <div className="flex items-center justify-between w-auto border border-[#7042f861] bg-[#0300145e] mx-[15px] px-[15px] xl:px-[20px] py-[8px] xl:py-[10px] rounded-full text-gray-200 gap-4 xl:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                className="cursor-pointer transition duration-300 hover:text-[#7042f8] text-xs xl:text-sm whitespace-nowrap"
                aria-label={`Navigate to ${link.label}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="hidden lg:flex flex-row gap-5 items-center">
          {headerSocials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target={social.external ? "_blank" : undefined}
              rel={social.external ? "noopener noreferrer" : undefined}
              aria-label={social.name === "Email" ? "Email Tawhid Bin Omar" : `Visit ${social.name} profile`}
              className="text-gray-200 hover:text-[#b49bff] transition-transform duration-300 hover:scale-110"
            >
              {social.icon}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="lg:hidden text-white p-2 z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <HiX size={28} aria-hidden="true" />
          ) : (
            <HiMenu size={28} aria-hidden="true" />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 top-0 left-0 w-full h-full bg-[#030014] z-40 flex flex-col items-center justify-center gap-6 sm:gap-8 py-24 px-6 overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-2xl text-gray-200 hover:text-[#7042f8] transition duration-300"
              onClick={(event) => handleNavClick(event, link.href)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-row gap-6 mt-4">
            {headerSocials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target={social.external ? "_blank" : undefined}
                rel={social.external ? "noopener noreferrer" : undefined}
                aria-label={social.name === "Email" ? "Email Tawhid Bin Omar" : `Visit ${social.name} profile`}
                onClick={() => setMenuOpen(false)}
                className="text-gray-200 hover:text-[#b49bff]"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
