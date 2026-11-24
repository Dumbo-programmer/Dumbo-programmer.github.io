import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
  RxTwitterLogo,
} from "react-icons/rx";
import { FaDev, FaFacebook, FaYoutube } from "react-icons/fa";

const footerLink =
  "flex items-center gap-2 py-1.5 text-sm text-gray-400 transition-colors hover:text-accent-light";

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-line/60 bg-ink/60 py-12 text-gray-200">
      <div className="section-shell">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          <div className="flex flex-col items-start">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Community
            </h2>
            <a
              href="https://github.com/Dumbo-programmer/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Tawhid Bin Omar's GitHub profile"
              className={footerLink}
            >
              <RxGithubLogo size={18} aria-hidden="true" />
              GitHub
            </a>
            <a
              href="https://dev.to/dumboprogrammer"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Tawhid Bin Omar's Dev.to profile"
              className={footerLink}
            >
              <FaDev size={18} aria-hidden="true" />
              Dev.to
            </a>
            <a
              href="https://discord.com/users/707079802531872769"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Tawhid Bin Omar on Discord"
              className={footerLink}
            >
              <RxDiscordLogo size={18} aria-hidden="true" />
              Discord
            </a>
          </div>

          <div className="flex flex-col items-start">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Social Media
            </h2>
            <a
              href="https://www.facebook.com/tawhiddayo/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Tawhid Bin Omar on Facebook"
              className={footerLink}
            >
              <FaFacebook size={18} aria-hidden="true" />
              Facebook
            </a>
            <a
              href="https://www.instagram.com/acutepierce"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Tawhid Bin Omar on Instagram"
              className={footerLink}
            >
              <RxInstagramLogo size={18} aria-hidden="true" />
              Instagram
            </a>
            <a
              href="https://x.com/tawhid_omar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Tawhid Bin Omar on X"
              className={footerLink}
            >
              <RxTwitterLogo size={18} aria-hidden="true" />
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/tawhidbinomar/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Tawhid Bin Omar on LinkedIn"
              className={footerLink}
            >
              <RxLinkedinLogo size={18} aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href="https://www.youtube.com/@tawhidbinomar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Tawhid Bin Omar on YouTube"
              className={footerLink}
            >
              <FaYoutube size={18} aria-hidden="true" />
              YouTube
            </a>
          </div>

          <div className="flex flex-col items-start">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Resources
            </h2>
            <a href="/notes" className={footerLink}>
              Open Problem Solving Library
            </a>
          </div>

          <div className="flex flex-col items-start">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h2>
            <address className="not-italic flex flex-col items-start">
              <a
                href="mailto:tawhidbinomar@gmail.com"
                aria-label="Send email to tawhidbinomar@gmail.com"
                className={footerLink}
              >
                tawhidbinomar@gmail.com
              </a>
            </address>
            <a
              href="https://buymeacoffee.com/tawhid"
              target="_blank"
              rel="noopener noreferrer"
              className={footerLink}
            >
              Donate
            </a>
            <a href="/resume.pdf" className={footerLink}>
              Resume
            </a>
          </div>
        </div>

        <p className="mt-12 border-t border-line/50 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Tawhid Bin Omar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
