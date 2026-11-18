"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import CertificateCarousel from "@/components/sub/CertificateCarousel";
import Contact from "@/components/main/Contact";
import EducationImpactSection from "@/components/main/EducationImpactSection";
import LibrarySection from "@/components/main/LibrarySection";
import Projects from "@/components/main/Projects";
import Research from "@/components/main/Research";
import Writing from "@/components/main/Writing";
import {
  DEFAULT_TAB,
  TAB_EVENT,
  TAB_IDS,
  TabId,
  TabNavigationDetail,
  tabFromHash,
  requestTab,
} from "@/utils/tabs";

const tabLabels: Record<TabId, string> = {
  projects: "Projects",
  roles: "Roles & Leadership",
  notes: "Notes",
  certificates: "Certificates",
  writing: "Writing",
  contact: "Contact",
};

const CertificatesSection = () => (
  <section className="py-10" aria-labelledby="certificates-heading" id="certificates">
    <div className="text-center mb-6">
      <h2
        id="certificates-heading"
        className="text-[30px] sm:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
      >
        Certificates
      </h2>
      <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mt-2">
        A full archive of competition, research, and course certifications.
      </p>
    </div>
    <CertificateCarousel />
  </section>
);

const TabbedPortfolio = () => {
  const [active, setActive] = useState<TabId>(DEFAULT_TAB);
  const tabRefs = useRef<Partial<Record<TabId, HTMLButtonElement | null>>>({});

  useEffect(() => {
    const initial = tabFromHash(window.location.hash);
    setActive(initial);
    if (initial !== DEFAULT_TAB) {
      window.requestAnimationFrame(() => {
        document
          .getElementById(`panel-${initial}`)
          ?.scrollIntoView({ block: "start" });
      });
    }
  }, []);

  useEffect(() => {
    const syncFromHash = () => setActive(tabFromHash(window.location.hash));
    const onTabRequest = (event: Event) => {
      const detail = (event as CustomEvent<TabNavigationDetail>).detail;
      setActive(detail.tab);
    };
    const onPopState = () => syncFromHash();

    window.addEventListener("hashchange", syncFromHash);
    window.addEventListener("popstate", onPopState);
    window.addEventListener(TAB_EVENT, onTabRequest);
    return () => {
      window.removeEventListener("hashchange", syncFromHash);
      window.removeEventListener("popstate", onPopState);
      window.removeEventListener(TAB_EVENT, onTabRequest);
    };
  }, []);

  const selectTab = useCallback((tab: TabId, shouldScroll = false) => {
    setActive(tab);
    requestTab(tab, { replace: true });
    if (shouldScroll) {
      window.requestAnimationFrame(() => {
        document
          .getElementById(`panel-${tab}`)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
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
    selectTab(nextTab);
    tabRefs.current[nextTab]?.focus();
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div
        role="tablist"
        aria-label="Portfolio sections"
        aria-orientation="horizontal"
        onKeyDown={handleKeyDown}
        className="sticky top-[65px] z-40 -mx-4 sm:-mx-6 lg:-mx-8 mb-10 border-y border-[#2A0E61] bg-[#030014]/90 px-4 sm:px-6 lg:px-8 backdrop-blur-md"
      >
        <div className="scrollbar-hidden flex gap-2 overflow-x-auto py-3">
          {TAB_IDS.map((tab) => {
            const isActive = active === tab;
            return (
              <button
                key={tab}
                ref={(node) => {
                  tabRefs.current[tab] = node;
                }}
                id={`tab-${tab}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${tab}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => selectTab(tab, true)}
                className={`shrink-0 rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-[0_0_18px_#8b5cf655]"
                    : "border border-[#2A0E61] bg-white/5 text-gray-300 hover:border-purple-500/40 hover:text-white"
                }`}
              >
                {tabLabels[tab]}
              </button>
            );
          })}
        </div>
      </div>

      <div className="min-h-[55vh]">
        <section
          id="panel-projects"
          role="tabpanel"
          aria-labelledby="tab-projects"
          hidden={active !== "projects"}
          tabIndex={0}
          className="scroll-mt-36 focus:outline-none"
        >
          <Projects />
        </section>

        <section
          id="panel-roles"
          role="tabpanel"
          aria-labelledby="tab-roles"
          hidden={active !== "roles"}
          tabIndex={0}
          className="scroll-mt-36 focus:outline-none"
        >
          <Research />
        </section>

        <section
          id="panel-notes"
          role="tabpanel"
          aria-labelledby="tab-notes"
          hidden={active !== "notes"}
          tabIndex={0}
          className="scroll-mt-36 space-y-6 focus:outline-none"
        >
          <EducationImpactSection />
          <LibrarySection />
        </section>

        <section
          id="panel-certificates"
          role="tabpanel"
          aria-labelledby="tab-certificates"
          hidden={active !== "certificates"}
          tabIndex={0}
          className="scroll-mt-36 focus:outline-none"
        >
          <CertificatesSection />
        </section>

        <section
          id="panel-writing"
          role="tabpanel"
          aria-labelledby="tab-writing"
          hidden={active !== "writing"}
          tabIndex={0}
          className="scroll-mt-36 focus:outline-none"
        >
          <Writing />
        </section>

        <section
          id="panel-contact"
          role="tabpanel"
          aria-labelledby="tab-contact"
          hidden={active !== "contact"}
          tabIndex={0}
          className="scroll-mt-36 focus:outline-none"
        >
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default TabbedPortfolio;
