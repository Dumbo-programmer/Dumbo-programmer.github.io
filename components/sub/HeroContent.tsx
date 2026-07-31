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

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-5 sm:px-10 md:px-20 mt-16 sm:mt-24 md:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          animate="visible"
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <p className="Welcome-text text-[13px]">Physics &bull; Number Theory &bull; Competitive Programming &bull; STEM</p>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6 mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <h1 id="hero-heading" className="m-0">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Tawhid
            </span>
            {" "}Bin Omar
          </h1>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          initial="hidden"
          animate="visible"
          className="text-sm sm:text-base md:text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I am driven by an obsessive curiosity about how things work — from the quantum structure of spacetime and the elegant patterns hiding in prime numbers to the perfect efficiency of a well-designed algorithm. Physics, number theory, and competitive programming are not just subjects I study; they are lenses through which I see the world. Every problem solved, every theorem understood, every algorithm optimized — each is a small victory against the vast unknown.
        </motion.p>

        <motion.p
          variants={slideInFromLeft(0.9)}
          initial="hidden"
          animate="visible"
          className="text-sm sm:text-base md:text-lg text-gray-400 my-5 max-w-[600px]"
        >
          That same drive extends to building. I believe a student in Bangladesh should have the same access to high-quality STEM education as one anywhere in the world. This belief powers the Open Problem Solving Library, Olympiad mentorship programs, custom game engines, and assistive robotics. I don&apos;t just learn physics and programming; I use them to create infrastructure that makes complex ideas accessible, learning free, and opportunity independent of geography or wealth.
        </motion.p>

        <motion.p
          variants={slideInFromLeft(1)}
          initial="hidden"
          animate="visible"
          className="text-sm sm:text-base md:text-lg text-gray-400 my-5 max-w-[600px] italic"
        >
          This site is not a portfolio of what I have built. It is a window into why.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1.2)}
          initial="hidden"
          animate="visible"
          className="flex gap-4 flex-wrap"
        >
          <a
            href="#projects"
            className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] text-sm sm:text-base"
          >
            See What I Build
          </a>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        initial="hidden"
        animate="visible"
        className="w-full h-full hidden lg:flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="Technology and development icons illustration"
          height={650}
          width={650}
          priority
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
