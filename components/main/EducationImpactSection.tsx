"use client";

import React from "react";
import {
  sectionTitle,
  sectionSubtitle,
  statistics,
  timelineEntries,
  initiatives,
} from "@/constants/education";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
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
      className="w-full py-16 sm:py-20"
      id="education-impact"
      aria-labelledby="education-impact-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="section-shell">
        <SectionHeading
          id="education-impact-heading"
          title={sectionTitle}
          description={sectionSubtitle}
          className="mb-12"
        />

        <Reveal delay={0.04}>
          <article className="mx-auto mb-14 max-w-4xl" aria-label="Impact narrative">
            <div className="card-surface p-6 sm:p-8">
              <p className="text-gray-300 text-sm sm:text-base leading-8">
                I build learning infrastructure because a student’s postal code should not
                decide what they can become. In Bangladesh, motivated students often lack
                structured material between school textbooks and Olympiad-level thinking.
                The{" "}
                <a
                  href="/notes"
                  className="animated-underline pb-0.5 text-purple-300 transition-colors hover:text-purple-200"
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
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mb-14">
            <h3 className="subhead mb-8 text-center">Impact by the Numbers</h3>
            <StatCards statistics={statistics} />
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mb-14">
            <h3 className="subhead mb-8 text-center">The Journey So Far</h3>
            <ImpactTimeline entries={timelineEntries} />
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <section aria-label="Core STEM initiatives">
            <h3 className="subhead mb-8 text-center">Core Initiatives</h3>
            <InitiativeCards initiatives={initiatives} />
          </section>
        </Reveal>
      </div>
    </section>
  );
};

export default EducationImpactSection;
