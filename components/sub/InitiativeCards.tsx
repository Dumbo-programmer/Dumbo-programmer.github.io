"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Initiative } from "@/constants/education";

interface InitiativeCardsProps {
  initiatives: Initiative[];
}

const InitiativeCards = ({ initiatives }: InitiativeCardsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
      {initiatives.map((initiative, index) => (
        <motion.div
          key={initiative.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ delay: index * 0.05, duration: 0.4 }}
          className="group relative rounded-xl border border-[#2A0E61] bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_#8b5cf6] hover:scale-[1.03] hover:border-purple-500/40"
        >
          {/* top accent gradient */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500/0 to-transparent transition-all duration-500 group-hover:via-purple-400 group-hover:shadow-[0_0_12px_#a855f7]" />

          {/* hover background glow */}
          <div className="absolute -inset-1 bg-gradient-to-br from-purple-500/0 via-transparent to-cyan-500/0 opacity-0 group-hover:opacity-10 transition-all duration-700 blur-xl" />

          <div className="relative z-10 p-5">
            {/* icon with glow */}
            <div className="relative mb-4 w-fit">
              <div className="absolute inset-0 bg-purple-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
              <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:text-purple-300 group-hover:border-purple-500/40 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_15px_#a855f7]">
                {initiative.icon}
              </div>
            </div>

            <h3 className="text-white font-semibold text-sm mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-cyan-300 transition-all duration-500">
              {initiative.title}
            </h3>

            <p className="text-gray-400 text-xs leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
              {initiative.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default InitiativeCards;
