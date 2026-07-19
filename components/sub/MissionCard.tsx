"use client";

import React from "react";
import { motion } from "framer-motion";
import { HiHeart } from "react-icons/hi";

const MissionCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="group relative rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-500/[0.08] via-transparent to-purple-500/[0.02] backdrop-blur-md overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_#8b5cf6]"
    >
      {/* animated border glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 rounded-2xl border border-purple-500/20" />
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-purple-500/10 via-transparent to-purple-500/5 blur-sm" />
      </div>

      {/* subtle inner glow */}
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />

      <div className="relative z-10 p-8 md:p-10 max-w-3xl mx-auto text-center">
        {/* icon */}
        <div className="relative mb-6 mx-auto w-fit">
          <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-700" />
          <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/25 flex items-center justify-center text-purple-400 group-hover:text-purple-300 group-hover:border-purple-400/50 group-hover:scale-110 transition-all duration-500">
            <HiHeart className="text-2xl" />
          </div>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 mb-6">
          Why This Matters
        </h3>

        <div className="space-y-4 text-left text-gray-300 text-sm md:text-base leading-relaxed">
          <p>
            Education, at its best, is not about transferring information from one mind to another. It is about
            creating the conditions for curiosity to flourish, for questions to be asked without fear, and for
            young people to discover that they are capable of far more than they imagined.
          </p>
          <p>
            In Bangladesh, access to quality STEM education remains deeply uneven. A student in a well-resourced
            school may have opportunities that a student in an underfunded one can only dream of. This gap is not
            a reflection of ability — it is a reflection of circumstance. And circumstance can be changed.
          </p>
          <p>
            The objective is not merely to teach mathematics or physics or programming. It is to help students
            become independent thinkers who can identify problems, reason through them, and create solutions —
            whether in science, technology, or everyday life. A student who learns to solve a geometry problem
            with clarity and persistence has learned something that transcends the subject itself.
          </p>
          <p>
            Every workshop, every handout, every mentoring session is an investment in that idea. The goal is
            not recognition. It is to build, one student at a time, a culture of scientific thinking and
            problem solving that will outlast any individual effort.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default MissionCard;
