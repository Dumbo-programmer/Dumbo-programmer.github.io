"use client";

import React from "react";
import { motion } from "framer-motion";
import { HiEye } from "react-icons/hi";

const VisionCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="group relative rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/[0.08] via-transparent to-cyan-500/[0.02] backdrop-blur-md overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_#06b6d4]"
    >
      {/* animated border glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 rounded-2xl border border-cyan-500/20" />
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-cyan-500/10 via-transparent to-cyan-500/5 blur-sm" />
      </div>

      {/* subtle inner glow */}
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      <div className="relative z-10 p-8 md:p-10 max-w-3xl mx-auto text-center">
        {/* icon */}
        <div className="relative mb-6 mx-auto w-fit">
          <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-700" />
          <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 border border-cyan-500/25 flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 group-hover:border-cyan-400/50 group-hover:scale-110 transition-all duration-500">
            <HiEye className="text-2xl" />
          </div>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-purple-400 mb-6">
          Looking Forward
        </h3>

        <div className="space-y-4 text-left text-gray-300 text-sm md:text-base leading-relaxed">
          <p>
            The long-term aspiration is to help build an open educational ecosystem for Bangladesh — one where
            high-quality learning resources are freely available, where teachers are supported with curricula and
            training, and where every student, regardless of where they live or what school they attend, has a
            genuine opportunity to develop their potential in STEM.
          </p>
          <p>
            This means developing openly licensed textbooks and problem sets in both English and Bangla. It means
            creating structured pathways from foundational mathematics to advanced Olympiad-level problem solving.
            It means training teachers and club leaders who can carry this work into their own communities. And it
            means building platforms and tools — like the Open Problem Solving Library — that make these resources
            discoverable and accessible to anyone with an internet connection.
          </p>
          <p>
            None of this will happen overnight. But every resource published, every workshop delivered, and every
            student who discovers the joy of solving a difficult problem brings this vision closer. The work is
            open, the invitation is standing, and the door is open to anyone who shares this commitment to
            building a stronger culture of learning in Bangladesh.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default VisionCard;
