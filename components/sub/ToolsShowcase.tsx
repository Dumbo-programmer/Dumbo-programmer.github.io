import React from "react";
import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "@/constants";
import SkillDataProvider from "./SkillDataProvider";

type Skill = {
  skill_name: string;
  Image: string;
  width: number;
  height: number;
};

type Category =
  | "Languages"
  | "Web & Frontend"
  | "Systems & Embedded"
  | "Game Dev & Robotics"
  | "Machine Learning & Scientific Computing";

const CATEGORIES: Category[] = [
  "Languages",
  "Web & Frontend",
  "Systems & Embedded",
  "Game Dev & Robotics",
  "Machine Learning & Scientific Computing",
];

const CATEGORY_BY_SKILL: Record<string, Category> = {
  // Languages
  "Java Script": "Languages",
  "Type Script": "Languages",
  Go: "Languages",
  Swift: "Languages",
  Cpp: "Languages",
  C: "Languages",
  Ruby: "Languages",
  Java: "Languages",
  Python: "Languages",
  Csharp: "Languages",

  // Web & Frontend
  "Html 5": "Web & Frontend",
  Css: "Web & Frontend",
  "Tailwind Css": "Web & Frontend",
  "React Query": "Web & Frontend",
  "Next js 13": "Web & Frontend",
  "Framer Motion": "Web & Frontend",
  "Stripe Payment": "Web & Frontend",
  "Node js": "Web & Frontend",
  "Material UI": "Web & Frontend",
  React: "Web & Frontend",
  Redux: "Web & Frontend",
  "Express js": "Web & Frontend",
  "Mongo db": "Web & Frontend",
  "Fire base": "Web & Frontend",
  PostgreSQL: "Web & Frontend",
  "My SQL": "Web & Frontend",
  Prisma: "Web & Frontend",
  Graphql: "Web & Frontend",
  "React Native": "Web & Frontend",
  Vue: "Web & Frontend",
  Flutter: "Web & Frontend",
  Figma: "Web & Frontend",
  Git: "Web & Frontend",

  // Systems & Embedded
  Tauri: "Systems & Embedded",
  Docker: "Systems & Embedded",
  Arduino: "Systems & Embedded",
  QT: "Systems & Embedded",

  // Game Dev & Robotics
  Unity: "Game Dev & Robotics",
  UE4: "Game Dev & Robotics",
  Blender: "Game Dev & Robotics",
  Android: "Game Dev & Robotics",

  // Machine Learning & Scientific Computing
  PyTorch: "Machine Learning & Scientific Computing",
  OpenCV: "Machine Learning & Scientific Computing",
};

const allSkills: Skill[] = [
  ...Skill_data,
  ...Frontend_skill,
  ...Backend_skill,
  ...Full_stack,
  ...Other_skill,
];

const uniqueSkills = Array.from(
  new Map(
    allSkills.map((skill) => [skill.skill_name.toLowerCase(), skill])
  ).values()
);

const groupedSkills = CATEGORIES.reduce(
  (groups, category) => {
    groups[category] = uniqueSkills.filter(
      (skill) => CATEGORY_BY_SKILL[skill.skill_name] === category
    );
    return groups;
  },
  {} as Record<Category, Skill[]>
);

const ToolsShowcase = () => {
  return (
    <section id="skills" aria-labelledby="tools-heading" className="w-full py-4">
      <div className="card-surface p-6 sm:p-8">
        <div className="flex flex-wrap items-end justify-between gap-3 mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-purple-400 mb-2">
              Toolkit
            </p>
            <h2 id="tools-heading" className="section-title">
              Tools I have worked with
            </h2>
          </div>
          <span className="text-sm text-gray-400">
            {uniqueSkills.length} tools · 5 focus areas
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {CATEGORIES.map((category) => (
            <div
              key={category}
              className="rounded-xl border border-line/80 bg-ink/50 p-5"
            >
              <div className="flex items-center justify-between gap-3 mb-4">
                <h3 className="text-base font-semibold text-white">{category}</h3>
                <span className="text-xs text-gray-500">
                  {groupedSkills[category].length}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-5">
                {groupedSkills[category].map((skill, index) => (
                  <div
                    key={skill.skill_name}
                    className="flex flex-col items-center gap-2 text-center"
                    title={skill.skill_name}
                  >
                    <SkillDataProvider
                      src={skill.Image}
                      width={skill.width}
                      height={skill.height}
                      index={index}
                      alt={skill.skill_name}
                    />
                    <span className="text-[10px] text-gray-400 leading-tight max-w-[72px]">
                      {skill.skill_name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsShowcase;
