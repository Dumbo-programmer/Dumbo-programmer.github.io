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
  

]
const Research = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
<div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            Research & Publications
            {" "}
          </span>
          
        </motion.div>

      </div>
      {/*  Research Cards */}
      <div className="h-full w-full flex flex-wrap gap-10 px-10 justify-center">
        {researchData
          .slice(0, showAll ? researchData.length : 3)
          .map((research, index) => (
            <ResearchCard
            key={index}
            src={research.src}
            title={research.title}
            sub={research.sub}
            description={research.description}
            typeA={research.typeA} 
            tags={research.tags}
            />
          ))}
      </div>
  
      {/* Button */}
      {/* <button
        onClick={() => setShowAll(!showAll)}
        className="mt-10 px-6 py-3 text-white text-lg font-semibold bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full hover:opacity-80 transition"
      >
        {showAll ? "Show Less" : "Show More"}
      </button>*/}


</div>
    

    </div>

  );
};

export default Research;