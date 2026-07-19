"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import { platformStats, featuredResources } from "@/constants/library";

const LibrarySection = () => {
  return (
    <section
      className="flex flex-col items-center justify-center py-20"
      id="open-problem-solving-library"
      aria-labelledby="library-heading"
    >
      <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
        <div className="absolute w-auto h-auto top-0 z-[5]">
          <motion.div variants={slideInFromTop} className="text-[40px] font-medium text-center text-gray-200">
            <h2
              id="library-heading"
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
            >
              Open Problem Solving Library
            </h2>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-20 mb-8">
          {platformStats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#2A0E61] bg-white/5 backdrop-blur-sm"
            >
              <span className="text-lg">{stat.icon}</span>
              <span className="text-white font-bold">{stat.value.toLocaleString()}</span>
              <span className="text-gray-400 text-sm">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Featured Cards */}
        <div className="h-full w-full flex flex-wrap gap-6 px-10 justify-center mt-4">
          {featuredResources.slice(0, 3).map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target={item.link.startsWith("http") ? "_blank" : undefined}
              rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
              className="w-full max-w-sm border border-[#2A0E61] rounded-lg bg-white/5 backdrop-blur-md p-5 transition-all duration-300 hover:shadow-[0_0_25px_#8b5cf6] hover:scale-105 flex flex-col"
              aria-label={`Featured resource: ${item.title}`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs uppercase tracking-wider text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-full">
                  {item.type.replace("-", " ")}
                </span>
                <span className="text-xs text-gray-500">{item.subject}</span>
              </div>
              <h3 className="text-white font-semibold mb-1 text-base">{item.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed flex-1 line-clamp-3">
                {item.description}
              </p>
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="/notes"
          className="mt-8 px-8 py-3 text-white text-lg font-semibold bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full hover:opacity-80 transition"
          aria-label="Browse the full Open Problem Solving Library"
        >
          Browse the Library →
        </a>
      </div>
    </section>
  );
};

export default LibrarySection;
