"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import {
  sectionTitle,
  sectionSubtitle,
  gallerySlides,
  statistics,
  timelineEntries,
  initiatives,
} from "@/constants/education";
import GalleryCarousel from "@/components/sub/GalleryCarousel";
import StatCards from "@/components/sub/StatCards";
import ImpactTimeline from "@/components/sub/ImpactTimeline";
import InitiativeCards from "@/components/sub/InitiativeCards";
import MissionCard from "@/components/sub/MissionCard";
import VisionCard from "@/components/sub/VisionCard";
import JoinMission from "@/components/sub/JoinMission";

const EducationImpactSection = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://tawhid.is-a.dev/#person",
        "name": "Tawhid Bin Omar",
        "alternateName": ["Tawhid", "Ren", "Dumbo-programmer"],
        "url": "https://tawhid.is-a.dev",
        "image": "https://tawhid.is-a.dev/tawhid.png",
        "jobTitle": [
          "STEM Educator",
          "Full Stack Developer",
          "Physics Olympiad Champion",
          "President of St. Joseph Higher Secondary School Math Club",
        ],
        "description":
          "Tawhid Bin Omar — Bangladesh STEM educator, President of St. Joseph Higher Secondary School Math Club, Physics Olympiad champion (BdPhO National Champion, PHIGA #1 worldwide), creator of the Open Problem Solving Library. Teaching mathematics, programming, and physics through workshops, literacy school outreach, Olympiad mentoring, and open educational resources across Dhaka, Bangladesh.",
        "knowsAbout": [
          "STEM Education Bangladesh",
          "Mathematics Olympiad Training",
          "Physics Olympiad Training",
          "Competitive Programming Education",
          "Problem Solving Pedagogy",
          "Open Educational Resources",
          "Bangladesh Education",
          "Teacher Training",
          "Curriculum Development",
        ],
        "alumniOf": [
          { "@type": "EducationalOrganization", "name": "St. Joseph Higher Secondary School", "@id": "https://tawhid.is-a.dev/#st-joseph" },
          { "@type": "EducationalOrganization", "name": "St. Joseph Literacy School", "@id": "https://tawhid.is-a.dev/#literacy-school" },
        ],
        "affiliation": [
          { "@type": "Organization", "name": "Bangladesh Physics Olympiad (BdPhO)" },
          { "@type": "Organization", "name": "PHIGA International Physics Competition" },
        ],
        "sameAs": [
          "https://github.com/Dumbo-programmer",
          "https://www.linkedin.com/in/tawhidbinomar/",
          "https://www.facebook.com/tawhiddayo/",
          "https://instagram.com/renscule",
          "https://leetcode.com/u/Dumbo-programmer/",
          "https://codeforces.com/profile/Dumbo-programmer",
        ],
      },
      {
        "@type": "EducationalOrganization",
        "@id": "https://tawhid.is-a.dev/#math-club",
        "name": "St. Joseph Higher Secondary School Math Club",
        "description":
          "Mathematics and programming club at St. Joseph Higher Secondary School in Dhaka, Bangladesh, led by President Tawhid Bin Omar. Organizes Math Bootcamp, problem-solving workshops, Olympiad training, and inter-school math competitions.",
        "url": "https://tawhid.is-a.dev/#education-impact",
        "founder": { "@id": "https://tawhid.is-a.dev/#person" },
        "memberOf": { "@type": "Organization", "name": "St. Joseph Higher Secondary School" },
        "teaches": ["Mathematics", "Programming", "Problem Solving", "Physics"],
        "audience": { "@type": "Audience", "audienceType": "Secondary School Students in Bangladesh" },
        "location": { "@type": "Place", "address": { "@type": "PostalAddress", "addressLocality": "Dhaka", "addressCountry": "BD" } },
      },
      {
        "@type": "ItemList",
        "name": "STEM Education Initiatives by Tawhid Bin Omar",
        "description":
          "Current educational outreach initiatives led by Tawhid Bin Omar including literacy school STEM programs, programming workshops, mathematics workshops, Olympiad mentorship, the Open Problem Solving Library, Bangla educational articles, teacher resources, student research, free STEM handouts, and open educational resources.",
        "itemListElement": initiatives.map((initiative, i) => ({
          "@type": "EducationalOccupationalProgram",
          "position": i + 1,
          "name": initiative.title,
          "description": initiative.description,
          "provider": { "@id": "https://tawhid.is-a.dev/#person" },
          "educationalProgramMode": "InPerson",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "BDT", "availability": "https://schema.org/InStock" },
        })),
      },
      {
        "@type": "ItemList",
        "name": "Educational Outreach Timeline — Tawhid Bin Omar",
        "description":
          "Timeline of Tawhid Bin Omar's STEM education journey: from joining St. Joseph Higher Secondary School Math Club in 2022 to launching the Open Problem Solving Library and leading 40+ teaching sessions across Bangladesh.",
        "itemListElement": timelineEntries.flatMap((entry) =>
          entry.items.map((item, i) => ({
            "@type": "CreativeWork",
            "position": i + 1,
            "name": `${entry.year}: ${item}`,
            "dateCreated": entry.year.match(/^\d{4}$/) ? `${entry.year}-01-01` : undefined,
            "creator": { "@id": "https://tawhid.is-a.dev/#person" },
          }))
        ),
      },
      {
        "@type": "BreadcrumbList",
        "name": "Education Impact Section Breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://tawhid.is-a.dev" },
          { "@type": "ListItem", "position": 2, "name": "Projects", "item": "https://tawhid.is-a.dev/#projects" },
          { "@type": "ListItem", "position": 3, "name": sectionTitle, "item": "https://tawhid.is-a.dev/#education-impact" },
          { "@type": "ListItem", "position": 4, "name": "Research", "item": "https://tawhid.is-a.dev/#current-projects" },
        ],
      },
    ],
  };

  return (
    <section
      className="flex flex-col items-center justify-center py-20 w-full"
      id="education-impact"
      aria-labelledby="education-impact-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={slideInFromTop}
          className="text-center mb-16"
        >
          <h2
            id="education-impact-heading"
            className="text-[32px] sm:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4"
          >
            {sectionTitle}
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            {sectionSubtitle}
          </p>
        </motion.div>

        {/* Hero Gallery */}
        <div className="mb-20">
          <GalleryCarousel slides={gallerySlides} autoPlayInterval={5500} />
        </div>

        {/* Story Section */}
        <article className="mb-20" aria-label="Beyond the Classroom — STEM Education Story">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-8 text-center">
              Beyond the Classroom — A STEM Education Journey in Bangladesh
            </h3>
            <div className="space-y-4 text-gray-300 text-sm md:text-base leading-relaxed">
              <p>
                Education is more than preparing students for examinations. It is about helping them think
                independently, ask meaningful questions, and solve unfamiliar problems with confidence and
                creativity. This belief drives every workshop, every mentoring session, and every educational
                resource I create as a STEM educator in Dhaka, Bangladesh.
              </p>
              <p>
                Through mathematics workshops, programming classes, literacy-school outreach, Olympiad
                mentoring, and open educational resources, I am working toward making high-quality STEM
                education accessible to every student in Bangladesh — regardless of geography, school
                resources, or financial background. From the St. Joseph Higher Secondary School Math Club
                to the St. Joseph Literacy School, every program is designed to build genuine problem-solving
                ability, not just exam performance.
              </p>
              <p>
                As President of the St. Joseph Higher Secondary School Math Club, I launched the Math
                Bootcamp, hosted 6+ mathematics events and competitions, and created over 1,000 original
                problems to challenge and develop students across Dhaka. I also serve as Head of Academics
                and Vice President, training teachers and designing curricula that emphasize conceptual
                understanding over rote memorization — a key need in Bangladesh STEM education reform.
              </p>
              <p>
                Through the Open Problem Solving Library, I publish free, open-access educational resources
                in mathematics, physics, competitive programming, and astronomy — available to anyone with
                an internet connection. These resources serve students preparing for the Bangladesh Physics
                Olympiad (BdPhO), the International Astronomy and Astrophysics Competition (IAAC), and
                national mathematics Olympiads, as well as students who simply want to learn beyond their
                school syllabus.
              </p>
              <p>
                Progress is measured not in awards, but in the growing number of young people who discover
                that they can think for themselves and solve problems they have never seen before. The
                long-term vision is to help build an open educational ecosystem for Bangladesh where
                knowledge is freely available, where curiosity is encouraged, and where every student has
                the opportunity to learn beyond the confines of any syllabus or textbook — and to become
                the next generation of problem solvers, scientists, and innovators that Bangladesh needs.
              </p>
            </div>
          </motion.div>
        </article>

        {/* Statistics */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-12 text-center">
            Impact by the Numbers — STEM Education in Bangladesh
          </h3>
          <StatCards statistics={statistics} />
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-12 text-center"
          >
            The Journey So Far — Tawhid Bin Omar&apos;s STEM Education Timeline
          </motion.h3>
          <ImpactTimeline entries={timelineEntries} />
        </div>

        {/* Current Initiatives */}
        <section className="mb-20" aria-label="Current STEM education initiatives by Tawhid Bin Omar">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-12 text-center"
          >
            Current Initiatives
          </motion.h3>
          <InitiativeCards initiatives={initiatives} />
        </section>

        {/* Mission + Vision side by side on large screens */}
        <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <MissionCard />
          <VisionCard />
        </div>

        {/* Join the Mission */}
        <JoinMission />
      </div>
    </section>
  );
};

export default EducationImpactSection;
