"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import EducationTimeline from "../sub/EducationTimeline";
import AchievementCard from "../sub/AchievementCard";
import CertificateCarousel from "../sub/CertificateCarousel";
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
      src: "/bdpho.png",
      title: "Bangladesh Physics Olympiad",
      description: "2x regional champ, 2x nationalist, 1x national champ, IPHO national camper"
    },
       {   typeA: "image",
      src: "/bdoaa.png",
      title: "Bangladesh Olympiad on Astronomy and Astrophysics",
      description: "15th Nationally, IOAA camper"
    },
           {   typeA: "image",
      src: "/JMC_new.png",
      title: "Josephite Math Club",
      description: "President(2026-2027), Vice President & Head Of Academics (2024-2025), Academic Team Member(2022)"
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
          description: "Participated in the prestigious team based online physics competition and won 29th place out of 1584 teams, 10th nation wide"
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
            {
              typeA: "image",
              src: "/codeforces.png",
              title: "Codeforces",
              description: "Achieved a rating of 1300+ on Codeforces by solving various competitive programming problems."
            },
          
]
const leadershipData: { title: string; description: string }[] = [
  {
    title: "President (2026\u20132027) \u2014 Josephite Math Club",
    description:
      "President of the Josephite Math Club, and organizer of the 8th Josephite Math Mania \u2014 one of the biggest national math events in the country, with over 5000 participants and 22 events.",
  },
  {
    title: "Vice President & Head of Academics (2024\u20132025) \u2014 Josephite Math Club",
    description:
      "Served as Vice President & Head of Academics of the Josephite Math Club, and helped host over 6 national math events.",
  },
  {
    title: "Code in Place \u2014 Completed",
    description:
      "Completed Code in Place.",
  },
  {
    title: "BDOC \u2014 Finalist",
    description:
      "Finalist at the BDOC chemistry olympiad.",
  },
  {
    title: "Conrad Challenge",
    description:
      "Participated in the Conrad Challenge.",
  },
  {
    title: "Blue Ocean Challenge",
    description:
      "Participated in the Blue Ocean Challenge.",
  },
  {
    title: "NASA Space Apps Challenge",
    description:
      "Participated in the NASA Space Apps Challenge.",
  },
  {
    title: "Green Challenge",
    description:
      "Participated in the Green Challenge.",
  },
  {
    title: "KAIPHO \u2014 Silver Diploma",
    description:
      "Got a silver diploma at KAIPHO, hosted by Kazan National Research Technical University.",
  },
  {
    title: "Poetry Society \u2014 Recognition",
    description:
      "Got recognition from the Poetry Society for writing poems.",
  },
];

const Achievements = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="flex flex-col relative items-center justify-center min-h-screen w-full h-full py-20" id="achievements" aria-labelledby="achievements-heading">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          <h2 id="achievements-heading" className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Education & Achievements
          </h2>
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
              key={`achievement-${achievement.title.replace(/\s+/g, '-').toLowerCase()}-${index}`}
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
        aria-label={showAll ? "Show less achievements" : "Show more achievements"}
      >
        {showAll ? "Show Less" : "Show More"}
      </button>

      {/* 📜 Certificate Carousel */}
      <div className="w-full flex flex-col items-center mt-24">
        <h3 className="text-2xl md:text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Certificates
        </h3>
        <CertificateCarousel />
      </div>

      {/* 🏅 Leadership & Recognition */}
      <div className="w-full max-w-5xl mt-24 px-6">
        <h3 className="text-2xl md:text-3xl font-medium text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Leadership &amp; Recognition
        </h3>
        <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {leadershipData.map((item) => (
            <li
              key={item.title}
              className="p-5 rounded-lg border border-[#2A0E61] bg-white/5 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_25px_#8b5cf6]"
            >
              <h4 className="text-lg font-semibold text-white">{item.title}</h4>
              <p className="mt-2 text-gray-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
  
};

export default Achievements;

