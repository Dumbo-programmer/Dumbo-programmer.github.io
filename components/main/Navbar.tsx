"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { HiMail, HiMenu, HiX } from "react-icons/hi";
import {
  HiOutlineBookOpen,
  HiOutlineCodeBracket,
  HiOutlineEnvelope,
  HiOutlinePencilSquare,
  HiOutlineTrophy,
  HiOutlineUserGroup,
} from "react-icons/hi2";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  DEFAULT_TAB,
  TAB_EVENT,
  TAB_IDS,
  TAB_LABELS,
  type TabId,
  type TabNavigationDetail,
  requestTab,
  tabFromHash,
} from "@/utils/tabs";

const headerLabels: Record<TabId, string> = {
  projects: "Projects",
  roles: "Roles",
  notes: "Notes",
  achievements: "Achievements",
  writing: "Writing",
  contact: "Contact",
};

const tabIcons: Record<TabId, React.ReactNode> = {
  projects: <HiOutlineCodeBracket size={16} aria-hidden="true" />,
  roles: <HiOutlineUserGroup size={16} aria-hidden="true" />,
  notes: <HiOutlineBookOpen size={16} aria-hidden="true" />,
  achievements: <HiOutlineTrophy size={16} aria-hidden="true" />,
  writing: <HiOutlinePencilSquare size={16} aria-hidden="true" />,
  contact: <HiOutlineEnvelope size={16} aria-hidden="true" />,
};

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
  const [active, setActive] = useState<TabId>(DEFAULT_TAB);
  const [menuOpen, setMenuOpen] = useState(false);
  const tabRefs = useRef<Partial<Record<TabId, HTMLAnchorElement | null>>>({});

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const syncFromHash = () => {
      const hash = window.location.hash;
      setActive(hash ? tabFromHash(hash) : DEFAULT_TAB);
    };
    const onTabRequest = (event: Event) => {
      setActive((event as CustomEvent<TabNavigationDetail>).detail.tab);
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    window.addEventListener("popstate", syncFromHash);
    window.addEventListener(TAB_EVENT, onTabRequest);
    return () => {
      window.removeEventListener("hashchange", syncFromHash);
      window.removeEventListener("popstate", syncFromHash);
      window.removeEventListener(TAB_EVENT, onTabRequest);
    };
  }, []);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    tab: TabId
  ) => {
    setMenuOpen(false);
    if (typeof window === "undefined" || window.location.pathname !== "/") return;

    event.preventDefault();
    setActive(tab);
    requestTab(tab, { scroll: true });
  };

  const handleTabKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const currentIndex = TAB_IDS.indexOf(active);
    let nextIndex: number | null = null;

    if (event.key === "ArrowRight") nextIndex = (currentIndex + 1) % TAB_IDS.length;
    if (event.key === "ArrowLeft")
      nextIndex = (currentIndex - 1 + TAB_IDS.length) % TAB_IDS.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = TAB_IDS.length - 1;

    if (nextIndex === null) return;
    event.preventDefault();
    const nextTab = TAB_IDS[nextIndex];
    setActive(nextTab);
    requestTab(nextTab, { replace: true });
    tabRefs.current[nextTab]?.focus();
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-3 sm:px-6 lg:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-1 sm:px-[10px]">
        <a
          href="/#projects"
          onClick={(event) => handleNavClick(event, "projects")}
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
          <div
            role="tablist"
            aria-label="Portfolio sections"
            aria-orientation="horizontal"
            onKeyDown={handleTabKeyDown}
            className="flex items-center justify-between w-auto border border-[#7042f861] bg-[#0300145e] mx-[15px] px-[15px] xl:px-[20px] py-[8px] xl:py-[10px] rounded-full text-gray-200 gap-4 xl:gap-6"
          >
            {TAB_IDS.map((tab) => {
              const isActive = active === tab;
              return (
                <a
                  key={tab}
                  ref={(node) => {
                    tabRefs.current[tab] = node;
                  }}
                  id={`tab-${tab}`}
                  href={`/#${tab}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${tab}`}
                  aria-label={`Navigate to ${TAB_LABELS[tab]}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={(event) => handleNavClick(event, tab)}
                  className={`inline-flex items-center gap-1.5 cursor-pointer transition duration-300 whitespace-nowrap text-xs xl:text-sm ${
                    isActive
                      ? "text-white shadow-[0_0_12px_#8b5cf655]"
                      : "text-gray-300 hover:text-[#b49bff]"
                  }`}
                >
                  <span className={isActive ? "text-purple-300" : "text-gray-400"}>
                    {tabIcons[tab]}
                  </span>
                  <span>{headerLabels[tab]}</span>
                </a>
              );
            })}
          </div>
        </nav>

        <div className="hidden lg:flex flex-row gap-5 items-center">
          {headerSocials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target={social.external ? "_blank" : undefined}
              rel={social.external ? "noopener noreferrer" : undefined}
              aria-label={
                social.name === "Email"
                  ? "Email Tawhid Bin Omar"
                  : `Visit ${social.name} profile`
              }
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
          {TAB_IDS.map((tab) => (
            <a
              key={tab}
              href={`/#${tab}`}
              aria-current={active === tab ? "page" : undefined}
              className={`inline-flex items-center gap-3 text-2xl transition duration-300 ${
                active === tab
                  ? "text-purple-300"
                  : "text-gray-200 hover:text-[#7042f8]"
              }`}
              onClick={(event) => handleNavClick(event, tab)}
            >
              <span className="[&>svg]:h-6 [&>svg]:w-6">{tabIcons[tab]}</span>
              <span>{TAB_LABELS[tab]}</span>
            </a>
          ))}
          <div className="flex flex-row gap-6 mt-4">
            {headerSocials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target={social.external ? "_blank" : undefined}
                rel={social.external ? "noopener noreferrer" : undefined}
                aria-label={
                  social.name === "Email"
                    ? "Email Tawhid Bin Omar"
                    : `Visit ${social.name} profile`
                }
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
