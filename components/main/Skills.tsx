"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "@/constants";
import SkillText from "../sub/SkillText";

type Skill = {
  skill_name: string;
  Image: string;
  width: number;
  height: number;
};

type SkillCategory = {
  title: string;
  description: string;
  accent: string;
  skills: string[];
};

const CATEGORY_DEFS: SkillCategory[] = [
  {
    title: "Frontend & UI",
    description: "Interfaces, motion, and polished web experiences.",
    accent: "from-purple-500/30 to-fuchsia-500/10",
    skills: [
      "Html 5",
      "Css",
      "Java Script",
      "Type Script",
      "React",
      "Next js 13",
      "Vue",
      "Tailwind Css",
      "Material UI",
      "Redux",
      "React Query",
      "Framer Motion",
    ],
  },
  {
    title: "Backend & Data",
    description: "APIs, databases, and application infrastructure.",
    accent: "from-cyan-500/30 to-blue-500/10",
    skills: [
      "Node js",
      "Express js",
      "Mongo db",
      "PostgreSQL",
      "My SQL",
      "Prisma",
      "Graphql",
      "Fire base",
      "Stripe Payment",
    ],
  },
  {
    title: "Mobile, Desktop & DevOps",
    description: "Shipping products across platforms and environments.",
    accent: "from-emerald-500/25 to-teal-500/10",
    skills: [
      "React Native",
      "Flutter",
      "Android",
      "Tauri",
      "QT",
      "Docker",
      "Git",
    ],
  },
  {
    title: "Languages & Systems",
    description: "Low-level, performance, and general-purpose programming.",
    accent: "from-orange-500/25 to-amber-500/10",
    skills: ["C", "Cpp", "Csharp", "Java", "Python", "Go", "Ruby", "Swift"],
  },
  {
    title: "AI, Graphics & Hardware",
    description: "ML, creative tools, engines, and embedded exploration.",
    accent: "from-pink-500/25 to-violet-500/10",
    skills: [
      "PyTorch",
      "OpenCV",
      "Unity",
      "UE4",
      "Blender",
      "Arduino",
      "Figma",
    ],
  },
];

const allSkills: Skill[] = [
  ...Skill_data,
  ...Frontend_skill,
  ...Backend_skill,
  ...Full_stack,
  ...Other_skill,
];

const skillByName = new Map<string, Skill>();
for (const skill of allSkills) {
  if (!skillByName.has(skill.skill_name)) {
    skillByName.set(skill.skill_name, skill);
  }
}

const categories = CATEGORY_DEFS.map((category) => ({
  ...category,
  items: category.skills
    .map((name) => skillByName.get(name))
    .filter((skill): skill is Skill => Boolean(skill)),
})).filter((category) => category.items.length > 0);

const Skills = () => {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative overflow-hidden py-16 sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(112,66,248,0.16),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.12),transparent_35%)]" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-4 sm:px-6">
        <SkillText />

        <div className="mt-8 grid w-full gap-5 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category, categoryIndex) => (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: categoryIndex * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-[#2A0E61] bg-[#0300145e] p-5 shadow-lg shadow-[#2A0E61]/20 backdrop-blur-sm"
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${category.accent} opacity-70 transition-opacity duration-300 group-hover:opacity-100`}
              />
              <div className="relative">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {category.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-400">
                      {category.description}
                    </p>
                  </div>
                  <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-2.5 py-1 text-xs text-purple-200">
                    {category.items.length}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {category.items.map((skill) => (
                    <div
                      key={skill.skill_name}
                      title={skill.skill_name}
                      className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-gray-200 transition duration-200 hover:-translate-y-0.5 hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-white"
                    >
                      <div className="relative h-7 w-7 shrink-0">
                        <Image
                          src={skill.Image}
                          alt={skill.skill_name}
                          fill
                          sizes="28px"
                          className="object-contain"
                        />
                      </div>
                      <span className="whitespace-nowrap">{skill.skill_name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
