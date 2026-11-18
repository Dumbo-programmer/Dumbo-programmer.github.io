"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import {
  sectionTitle,
  sectionSubtitle,
  statistics,
  timelineEntries,
  initiatives,
} from "@/constants/education";
import StatCards from "@/components/sub/StatCards";
import ImpactTimeline from "@/components/sub/ImpactTimeline";
import InitiativeCards from "@/components/sub/InitiativeCards";

const EducationImpactSection = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://tawhid.is-a.dev/#math-club",
        "name": "Josephite Math Club",
        "description":
          "Mathematics and programming club led by President Tawhid Bin Omar, serving 700+ students through workshops, Olympiad mentoring, and national contests.",
        "url": "https://tawhid.is-a.dev/#roles",
      },
      {
        "@type": "ItemList",
        "name": "Core STEM education initiatives by Tawhid Bin Omar",
        "itemListElement": initiatives.map((initiative, i) => ({
          "@type": "EducationalOccupationalProgram",
          "position": i + 1,
          "name": initiative.title,
          "description": initiative.description,
          "provider": { "@id": "https://tawhid.is-a.dev/#person" },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "BDT",
          },
        })),
      },
      {
        "@type": "ItemList",
        "name": "Educational outreach timeline — Tawhid Bin Omar",
        "itemListElement": timelineEntries.flatMap((entry) =>
          entry.items.map((item, i) => ({
            "@type": "CreativeWork",
            "position": i + 1,
            "name": `${entry.year}: ${item}`,
            "creator": { "@id": "https://tawhid.is-a.dev/#person" },
          }))
        ),
      },
    ],
  };

  return (
    <section
      className="flex flex-col items-center justify-center py-4 w-full"
      id="education-impact"
      aria-labelledby="education-impact-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="w-full max-w-6xl px-2 sm:px-4">
        <motion.div variants={slideInFromTop} className="text-center mb-12">
          <h2
            id="education-impact-heading"
            className="text-[30px] sm:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-3"
          >
            {sectionTitle}
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            {sectionSubtitle}
          </p>
        </motion.div>

        <article className="max-w-4xl mx-auto mb-14" aria-label="Impact narrative">
          <div className="rounded-2xl border border-[#2A0E61] bg-white/[0.04] backdrop-blur-md p-6 sm:p-8">
            <p className="text-gray-300 text-sm sm:text-base leading-8">
              I build learning infrastructure because a student’s postal code should not
              decide what they can become. In Bangladesh, motivated students often lack
              structured material between school textbooks and Olympiad-level thinking.
              The{" "}
              <a
                href="/notes"
                className="text-purple-300 hover:text-purple-200 underline decoration-purple-500/50 underline-offset-4 transition"
              >
                Open Problem Solving Library
              </a>{" "}
              is my answer: free handouts, problem sets, articles, and research in
              mathematics, physics, programming, and astronomy. I have authored 1,000+
              original problems across competitions and camps; the published library
              currently holds 26 problem sets from one contributor. As President of the
              Josephite Math Club, I lead programs serving 700+ students, mentor
              Olympiad aspirants, and organize national contests including the 8th
              Josephite Math Mania with 5,000+ participants. I measure impact not by
              downloads, but by students who learn to attack unfamiliar problems with
              confidence.
            </p>
          </div>
        </article>

        <div className="mb-14">
          <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-8 text-center">
            Impact by the Numbers
          </h3>
          <StatCards statistics={statistics} />
        </div>

        <div className="mb-14">
          <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-8 text-center">
            The Journey So Far
          </h3>
          <ImpactTimeline entries={timelineEntries} />
        </div>

        <section aria-label="Core STEM initiatives">
          <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-8 text-center">
            Core Initiatives
          </h3>
          <InitiativeCards initiatives={initiatives} />
        </section>
      </div>
    </section>
  );
};

export default EducationImpactSection;
