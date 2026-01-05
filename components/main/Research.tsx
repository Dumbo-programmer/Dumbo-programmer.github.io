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
    description: "We create distinctive narrative styled horror games that immerse players in captivating stories. As the lead game developer, I oversee the technical aspects of game creation, ensuring seamless gameplay and innovative mechanics.",
    tags: ["Game Development", "Narrative Design", "Horror Games", "Unity"], 
  },{
      typeA: "image",
    src: "/team.png",
    title: "Team Nokkhotropoth",
    sub: 'Mechanical Engineering Department Lead',
    description: "Nokkhotropoth is a student-run team that focuses on designing and building unmanned aerial vehicles (UAVs) and participating in national and international competitions. As the Mechanical Engineering Department Lead, I am responsible for overseeing the design, analysis, and fabrication of the mechanical components of our robots.",
    tags: ["Mechanical Engineering", "Mechatronics", "Robotics", "Team Leadership"],
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
              Current Project
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