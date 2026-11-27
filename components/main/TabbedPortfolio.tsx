"use client";

import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Achievements from "@/components/main/Achievements";
import CertificateCarousel from "@/components/sub/CertificateCarousel";
import Contact from "@/components/main/Contact";
import EducationImpactSection from "@/components/main/EducationImpactSection";
import LibrarySection from "@/components/main/LibrarySection";
import PhotoGallery from "@/components/main/PhotoGallery";
import Projects from "@/components/main/Projects";
import Research from "@/components/main/Research";
import Skills from "@/components/main/Skills";
import Writing from "@/components/main/Writing";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  DEFAULT_TAB,
  TAB_EVENT,
  TabId,
  TabNavigationDetail,
  tabFromHash,
} from "@/utils/tabs";

const AchievementsSection = () => (
  <section className="py-16 sm:py-20" aria-labelledby="achievements-heading">
    <SectionHeading
      id="achievements-heading"
      title="Achievements"
      description="Competition results, research milestones, selected honours, and the full certificate archive."
      className="mb-10"
    />

    <Achievements />

    <div
      id="certificates"
      className="mt-14 scroll-mt-36"
      aria-labelledby="certificates-heading"
    >
      <SectionHeading
        as="h3"
        id="certificates-heading"
        title="Certificates"
        description="A full archive of competition, research, and course certifications."
        className="mb-6"
      />
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
      window.requestAnimationFrame(() => {
        const target =
          document.getElementById(id) ??
          document.getElementById(`panel-${tabFromHash(hash)}`);
        target?.scrollIntoView({ block: "start" });
      });
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

  const renderPanel = (
    tab: TabId,
    children: React.ReactNode,
    className = ""
  ) => (
    <section
      id={`panel-${tab}`}
      role="tabpanel"
      aria-labelledby={`tab-${tab}`}
      hidden={active !== tab}
      tabIndex={0}
      className={`scroll-mt-36 focus:outline-none ${className}`}
    >
      <motion.div
        initial={false}
        animate={{ opacity: active === tab ? 1 : 0, y: active === tab ? 0 : 10 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );

  return (
    <div className="section-shell pb-20">
      <div className="min-h-[55vh]">
        {renderPanel(
          "projects",
          <>
            <Skills />
            <Projects />
          </>
        )}
        {renderPanel("roles", <Research />)}
        {renderPanel(
          "notes",
          <>
            <EducationImpactSection />
            <LibrarySection />
          </>,
          "space-y-6"
        )}
        {renderPanel("gallery", <PhotoGallery />)}
        {renderPanel("achievements", <AchievementsSection />)}
        {renderPanel("writing", <Writing />)}
        {renderPanel("contact", <Contact />)}
      </div>
    </div>
  );
};

export default TabbedPortfolio;
