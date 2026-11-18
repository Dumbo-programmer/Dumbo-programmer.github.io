import React from "react";
import { HiDownload, HiMail } from "react-icons/hi";
import {
  FaDev,
  FaDiscord,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaItchIo,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { SiCodeforces, SiLeetcode, SiX } from "react-icons/si";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/Dumbo-programmer",
    icon: <FaGithub size={20} aria-hidden="true" />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/tawhidbinomar/",
    icon: <FaLinkedinIn size={20} aria-hidden="true" />,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/tawhiddayo/",
    icon: <FaFacebookF size={20} aria-hidden="true" />,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/acutepierce",
    icon: <FaInstagram size={20} aria-hidden="true" />,
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/tawhid_omar",
    icon: <SiX size={20} aria-hidden="true" />,
  },
  {
    name: "Dev.to",
    href: "https://dev.to/dumbo_programmer",
    icon: <FaDev size={20} aria-hidden="true" />,
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/Dumbo-programmer/",
    icon: <SiLeetcode size={20} aria-hidden="true" />,
  },
  {
    name: "Codeforces",
    href: "https://codeforces.com/profile/Dumbo-programmer",
    icon: <SiCodeforces size={20} aria-hidden="true" />,
  },
  {
    name: "Pyxl Chronicles (itch.io)",
    href: "https://pyxl-chronicles.itch.io",
    icon: <FaItchIo size={20} aria-hidden="true" />,
  },
  {
    name: "Discord",
    href: "https://discord.com/users/707079802531872769",
    icon: <FaDiscord size={20} aria-hidden="true" />,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@tawhidbinomar",
    icon: <FaYoutube size={20} aria-hidden="true" />,
  },
];

const Contact = () => {
  return (
    <section className="w-full py-10" id="contact" aria-labelledby="contact-heading">
      <div className="max-w-3xl mx-auto text-center">
        <h2
          id="contact-heading"
          className="text-[30px] sm:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
        >
          Contact
        </h2>
        <p className="text-gray-400 text-sm sm:text-base mt-3">
          collaborations, research conversations, or questions about free STEM resources.
        </p>

        <address className="not-italic mt-6">
          <a
            href="mailto:tawhidbinomar@gmail.com"
            className="text-lg text-white hover:text-purple-300 transition break-all"
          >
            tawhidbinomar@gmail.com
          </a>
        </address>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a
            href="mailto:tawhidbinomar@gmail.com?subject=Collaboration"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-sm font-semibold hover:opacity-90 transition"
          >
            <HiMail aria-hidden="true" />
            Collaborate
          </a>
          <a
            href="mailto:tawhidbinomar@gmail.com?subject=Get%20in%20Touch"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#2A0E61] bg-white/5 text-gray-200 text-sm font-semibold hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition"
          >
            <HiMail aria-hidden="true" />
            Get in Touch
          </a>
        </div>

        <div className="mt-10">
          <p className="text-xs uppercase tracking-[0.2em] text-purple-400 mb-4">
            Find me elsewhere
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${social.name}`}
                title={social.name}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#2A0E61] bg-white/5 text-gray-300 transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-white hover:scale-110"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 mt-8 text-sm text-cyan-300 hover:text-cyan-200 underline decoration-cyan-500/40 underline-offset-4 transition"
        >
          <HiDownload aria-hidden="true" />
          Download resume (PDF)
        </a>
      </div>
    </section>
  );
};

export default Contact;
