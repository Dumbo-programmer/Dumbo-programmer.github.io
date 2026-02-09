"use client";  
import React, { useState } from "react";
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
    src: "/pyxl.png",
    title: "Pyxl Chronicles",
    link: "https://pyxl-chronicles.itch.io",
    sub: 'Lead Game Developer',
    description: `Led a 6-developer studio to design and launch an indie horror game with 230+ early players. Built a custom game engine combining 2D mechanics with realistic 3D visuals, implementing AI systems, procedural content generation, and performance-optimized rendering. Improved performance by 50–80% through custom optimization strategies. Managed the full development pipeline—80+ builds, 200+ commits, CI/CD automation, profiling, and cross-platform deployment (Windows/Linux). Leveraged the engine to create 4 additional trending Android games, with more than 10k+ active players.`,
    tags: ["Game Development", "Indie Horror", "Custom Game Engine", "Procedural Generation", "AI", "Performance Optimization", "CI/CD", "Cross-Platform", "Android"], 
  },
  {
    typeA: "image",
    src: "/ongko.png",
    title: "Ongko",
    link: "#",
    sub: 'Academic Team Member',
    description: "Working as an academic team member at Ongko, contributing to educational initiatives and academic excellence.",
    tags: ["Education", "Math Olympiad", "Team Collaboration", "Physics Olympiad", "Math Organization"],
  },
  {
    typeA: "image",
    src: "/team.png",
    title: "Team Nokkhotropoth",
    sub: 'Mechanical Engineering Department Lead',
    description: `Co-founded and co-led a 4-member Robotics-for-Good R&D team (robotics-for-good) tackling accessibility, healthcare, and disaster response in underdeveloped regions. Designed and deployed 10–15 autonomous assistive systems, including robotic canes, HUD captioning glasses, spatial-audio hearing aids, and communication wearables. Led system integration, testing, documentation, and alignment with UN Sustainable Development Goals.`,
    tags: ["Mechanical Engineering", "Mechatronics", "Robotics", "Robotics-for-Good", "Assistive Systems", "UN SDG", "R&D"],
  },
]
const Research = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="flex flex-col items-center justify-center py-20" id="current-projects" aria-labelledby="research-heading">
      <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
        <div className="absolute w-auto h-auto top-0 z-[5]">
          <motion.div
            variants={slideInFromTop}
            className="text-[40px] font-medium text-center text-gray-200"
          >
            <h2 id="research-heading" className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Current Projects
            </h2>
          
        </motion.div>

      </div>
      {/*  Research Cards */}
      <div className="h-full w-full flex flex-wrap gap-10 px-10 justify-center">
        {researchData
          .slice(0, showAll ? researchData.length : 3)
          .map((research, index) => (
            <ResearchCard
              key={`research-${research.title.replace(/\s+/g, '-').toLowerCase()}-${index}`}
              src={research.src}
              title={research.title}
              sub={research.sub}
              description={research.description}
              typeA={research.typeA} 
              tags={research.tags}
            />
          ))}
      </div>
      </div>
    </section>
  );
};

export default Research;