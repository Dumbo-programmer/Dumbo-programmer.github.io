"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { requestTab } from "@/utils/tabs";

const proofPoints =
  "I'm a Bangladeshi student, aspiring physicist, and independent software developer passionate about aerospace engineering, applied mathematics, and scientific research. Through robotics, open-source projects, and STEM education initiatives, I work to make technical knowledge more accessible and build engineering opportunities in Bangladesh.";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center gap-12 px-5 sm:px-10 md:px-20 mt-28 sm:mt-32 md:mt-36 w-full z-[20]"
    >
      <div className="h-full w-full min-w-0 flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          animate="visible"
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5 shrink-0" />
          <p className="Welcome-text text-[12px] sm:text-[13px] text-center min-w-0">
            Physics &bull; Number Theory &bull; Competitive Programming &bull; STEM
          </p>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-4 mt-4 text-4xl sm:text-5xl md:text-6xl font-bold text-white max-w-[650px]"
        >
          <h1 id="hero-heading" className="m-0">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Tawhid
            </span>{" "}
            Bin Omar
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-200 leading-snug">
            I model everything into a problem to be solved.
          </p>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          initial="hidden"
          animate="visible"
          className="text-sm sm:text-base md:text-lg text-gray-300 max-w-[650px] leading-relaxed"
        >
          {proofPoints}
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1.2)}
          initial="hidden"
          animate="visible"
          className="flex gap-4 flex-wrap"
        >
          <button
            type="button"
            onClick={() => requestTab("projects", { scroll: true })}
            className="py-2.5 px-6 button-primary text-center text-white cursor-pointer rounded-lg text-sm sm:text-base border border-[#7042f8]/30 hover:border-[#7042f8]/60 transition"
          >
            See What I Build
          </button>
          <button
            type="button"
            onClick={() => requestTab("contact", { scroll: true })}
            className="py-2.5 px-6 text-center text-gray-200 cursor-pointer rounded-lg text-sm sm:text-base border border-[#2A0E61] bg-white/5 hover:text-white hover:border-cyan-400/50 hover:bg-white/10 transition"
          >
            Resume &amp; Contact
          </button>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        initial="hidden"
        animate="visible"
        className="w-full lg:w-auto flex justify-center items-center"
      >
        <div className="relative w-[220px] sm:w-[280px] lg:w-[340px]">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/30 to-cyan-500/20 blur-2xl" />
          <Image
            src="/perimg/tawhid-bin-omar-headshot.png"
            alt="Portrait of Tawhid Bin Omar"
            width={1024}
            height={1536}
            priority
            sizes="(max-width: 640px) 220px, (max-width: 1024px) 280px, 340px"
            className="relative w-full h-auto max-h-[440px] object-cover object-top rounded-2xl border border-[#7042f8]/40 shadow-[0_0_45px_#7042f850]"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
