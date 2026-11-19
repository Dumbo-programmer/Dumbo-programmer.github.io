"use client";

import React, { useCallback, useEffect, useState } from "react";
import Achievements from "@/components/main/Achievements";
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
  TabId,
  TabNavigationDetail,
  tabFromHash,
} from "@/utils/tabs";

const AchievementsSection = () => (
  <section className="py-10" aria-labelledby="achievements-heading">
    <div className="text-center mb-6">
      <h2
        id="achievements-heading"
        className="text-[30px] sm:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
      >
        Achievements
      </h2>
      <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mt-2">
        Competition results, research milestones, selected honours, and the full
        certificate archive.
      </p>
    </div>

    <Achievements />

    <div
      id="certificates"
      className="mt-14 scroll-mt-36"
      aria-labelledby="certificates-heading"
    >
      <h3
        id="certificates-heading"
        className="text-center text-xl sm:text-2xl font-semibold text-white mb-4"
      >
        Certificates
      </h3>
      <p className="text-center text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-6">
        A full archive of competition, research, and course certifications.
      </p>
      <CertificateCarousel />
    </div>
  </section>
);

const TabbedPortfolio = () => {
  const [active, setActive] = useState<TabId>(DEFAULT_TAB);

  const scrollToHashTarget = useCallback((hash: string) => {
    const id = hash.replace(/^#/, "");
    if (!id) return;
    window.requestAnimationFrame(() => {
      const target =
        document.getElementById(id) ??
        document.getElementById(`panel-${tabFromHash(hash)}`);
      target?.scrollIntoView({ block: "start" });
    });
  }, []);

  useEffect(() => {
    const initialHash = window.location.hash;
    const initial = tabFromHash(initialHash);
    setActive(initial);
    if (initial !== DEFAULT_TAB) {
      scrollToHashTarget(initialHash);
    }
  }, [scrollToHashTarget]);

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash;
      setActive(tabFromHash(hash));
      if (hash) scrollToHashTarget(hash);
    };
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
  }, [scrollToHashTarget]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
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
          id="panel-achievements"
          role="tabpanel"
          aria-labelledby="tab-achievements"
          hidden={active !== "achievements"}
          tabIndex={0}
          className="scroll-mt-36 focus:outline-none"
        >
          <AchievementsSection />
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
