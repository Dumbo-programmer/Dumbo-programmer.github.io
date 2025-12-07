"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import EducationTimeline from "../sub/EducationTimeline";
import AchievementCard from "../sub/AchievementCard";
const achievementData: {
  typeA?: "image" | "video";
  src: string;
  title: string;
  description: string;
  tags?: string[];
  link?: string;
}[] = [
  {
    typeA: "image",
    src: "/grepper.jpeg",
    title: "Grepper code answers",
    description: "Helped 54117 Developers find answers to 85850 problems."
    },
    {
      typeA: "image",
      src: "/dev.png",
      title: "Dev.to Blogs",
      description: "Wrote over 50 blogs with over 1300 followers and 78k post views"
      },
      {
        typeA: "image",
        src: "/arcade.png",
        title: "HackClub Arcade",
        description: "Hack Club is a global nonprofit network of high school computer hackers, makers and coders founded in 2014 by Zach Latta. Participated in HackClub's summer hackathon Arcade and made more than 20 projects."
        },
        {
          typeA: "image",
          src: "/pb.jpg",
          title: "Physics Brawl",
          description: "Participated in the prestigious team based online physics competition and won 40th place out of 1584 teams, 10th in National."
          },
          {
          typeA: "image",
          src: "/phiga.png",
          title: "PHIGA Physics Competition",
          description: "Achieved 1st place out of 1,211 participants worldwide in the PHIGA International Gamefied Physics Competition."
          },
             {  typeA: "image",
          src: "/iaac.png",
          title: "International Astronomy and Astrophysics Competition",
          description: "Silver honor and special recognition for well typesetted solution"
          },
          {  typeA: "image",
          src: "/nsac.png",
          title: "Nasa Space Apps Challenge",
          description: "Created AI/ML model to identify exoplanets from datasets."
          },
          {
            typeA: "image",
            src: "/lc.png",
            title: "Leet Code",
            description: "Solved 200+ problems and still solving, on LeetCode and ranked in top 7% of all users(12.2 million)."
            },  
]
const Achievements = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="flex flex-col relative items-center justify-center min-h-screen w-full h-full py-20">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Education & Achievements
          </span>
        </motion.div>
      </div>
  
      {/* 📚 Education Timeline Here */}
      <EducationTimeline />
  
      {/* 🏆 Achievement Cards */}
      <div className="h-full w-full flex flex-wrap gap-10 px-10 justify-center">
        {achievementData
          .slice(0, showAll ? achievementData.length : 3)
          .map((achievement, index) => (
            <AchievementCard
              key={index}
              src={achievement.src}
              title={achievement.title}
              description={achievement.description}
              typeA={achievement.typeA}
            />
          ))}
      </div>
  
      {/* Button */}
      <button
        onClick={() => setShowAll(!showAll)}
        className="mt-10 px-6 py-3 text-white text-lg font-semibold bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full hover:opacity-80 transition"
      >
        {showAll ? "Show Less" : "Show More"}
      </button>
    </div>
  );
  
};

export default Achievements;

