"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import ResearchCard from "../sub/ResearchCard";

const researchData: {
  typeA?: "image" | "video";
  src: string;
  title: string;
  sub: string;
  description: string;
  tags?: string[];
  link?: string;
}[] = [
  {
    typeA: "image",
    src: "/JMC_new.png",
    title: "Josephite Math Club — President",
    link: "#",
    sub: "President (2026–2027)",
    description:
      "Leading a math club serving 700+ students through Olympiad training, weekly workshops, and national contests — including the 8th Josephite Math Mania with 5,000+ participants across 22 events.",
    tags: ["Leadership", "700+ students", "National contests", "Olympiad training"],
  },
  {
    typeA: "image",
    src: "/pyxl.png",
    title: "Pyxl Chronicles",
    link: "https://pyxl-chronicles.itch.io",
    sub: "Lead Game Developer",
    description:
      "Led a 6-developer studio that launched an indie horror game with 230+ early players, using a custom engine with AI systems, procedural generation, and 50–80% performance gains. The engine powered 4 additional trending Android games with 10k+ active players combined.",
    tags: ["Game Development", "Custom Engine", "AI", "Performance", "Android"],
  },
  {
    typeA: "image",
    src: "/ongko.png",
    title: "Ongko",
    link: "#",
    sub: "Academic Team Member",
    // TODO: Add Ongko's exact reach metric (students/cohorts) here when available;
    // the repository does not contain a verified number yet.
    description:
      "Contributing to Olympiad preparation and academic excellence programs across mathematics and physics cohorts.",
    tags: ["Education", "Math Olympiad", "Physics Olympiad", "Academic Excellence"],
  },
  {
    typeA: "image",
    src: "/team.png",
    title: "Team Nokkhotropoth",
    sub: "Mechanical Engineering Department Lead",
    description:
      "Co-founded and co-led a 4-member robotics-for-good R&D team for accessibility, healthcare, and disaster response. Designed and deployed 10+ autonomous assistive systems, including robotic canes, HUD captioning glasses, spatial-audio hearing aids, and communication wearables.",
    tags: ["Robotics", "Assistive Systems", "Embedded Systems", "UN SDG"],
  },
  {
    typeA: "image",
    src: "/gonit.png",
    title: "Prothom Alo Gonit Ishkul",
    sub: "Academic Team Member",
    description:
      "Maintain a bilingual math problem-solving platform with 100+ auto-gradable problems, timed tests, instant rational-answer grading, saved reviews, leaderboards, contests, and offline support in Bangla and English.",
    tags: ["Mathematics Education", "React", "TypeScript", "Bangla + English"],
  },
];

const Research = () => {
  return (
    <section
      className="flex flex-col items-center justify-center py-4"
      id="current-roles"
      aria-labelledby="roles-heading"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromTop}
        className="w-full px-6 text-[30px] sm:text-[40px] font-medium text-center text-gray-200 mb-10"
      >
        <h2
          id="roles-heading"
          className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
        >
          Roles &amp; Leadership
        </h2>
      </motion.div>

      <div className="h-full w-full flex flex-wrap gap-8 px-2 justify-center">
        {researchData.map((research) => (
          <ResearchCard
            key={research.title}
            src={research.src}
            title={research.title}
            sub={research.sub}
            description={research.description}
            typeA={research.typeA}
            tags={research.tags}
            link={research.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Research;
