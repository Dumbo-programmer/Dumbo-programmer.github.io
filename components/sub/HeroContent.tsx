"use client";

import React from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { fadeUp } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { requestTab } from "@/utils/tabs";

const proofPoints =
  "I'm a Bangladeshi student, aspiring physicist, and independent software developer passionate about aerospace engineering, applied mathematics, and scientific research. Through robotics, open-source projects, and STEM education initiatives, I work to make technical knowledge more accessible and build engineering opportunities in Bangladesh.";

const HeroContent = () => {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const portraitY = useTransform(scrollYProgress, [0, 0.3], [0, prefersReducedMotion ? 0 : -40]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center gap-12 px-5 sm:px-10 md:px-20 mt-28 sm:mt-32 md:mt-36 w-full z-[20]"
    >
      <div className="h-full w-full min-w-0 flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div variants={fadeUp} custom={0.04} className="flex">
          <span className="eyebrow">
            <SparklesIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
            Physics &bull; Number Theory &bull; Competitive Programming &bull; STEM
          </span>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={0.12}
          className="mt-2 flex max-w-[650px] flex-col gap-4"
        >
          <h1 id="hero-heading" className="text-display font-semibold text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-accent-cyan">
              Tawhid
            </span>{" "}
            Bin Omar
          </h1>
          <p className="text-subhead font-medium text-gray-200">
            I model everything into a problem to be solved.
          </p>
        </motion.div>

        <motion.p
          variants={fadeUp}
          custom={0.2}
          className="text-sm sm:text-base md:text-lg text-gray-300 max-w-[650px] leading-relaxed"
        >
          {proofPoints}
        </motion.p>

        <motion.div
          variants={fadeUp}
          custom={0.28}
          className="flex gap-4 flex-wrap"
        >
          <button
            type="button"
            onClick={() => requestTab("projects", { scroll: true })}
            className="btn-primary"
          >
            See What I Build
          </button>
          <button
            type="button"
            onClick={() => requestTab("contact", { scroll: true })}
            className="btn-secondary"
          >
            Resume &amp; Contact
          </button>
        </motion.div>
      </div>

      <motion.div
        variants={fadeUp}
        custom={0.18}
        className="w-full lg:w-auto flex justify-center items-center"
      >
        <motion.div
          style={{ y: portraitY }}
          className="relative w-[220px] sm:w-[280px] lg:w-[340px]"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/30 to-cyan-500/20 blur-2xl" />
          <Image
            src="/perimg/tawhid-bin-omar-headshot.png"
            alt="Portrait of Tawhid Bin Omar"
            width={1024}
            height={1536}
            priority
            sizes="(max-width: 640px) 220px, (max-width: 1024px) 280px, 340px"
            className="relative h-auto max-h-[440px] w-full rounded-2xl border border-line-accent/40 object-cover object-top shadow-glow"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
