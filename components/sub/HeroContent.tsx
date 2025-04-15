"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import LoadingScreen from "../main/LoadingScreen"; // Import the loading screen component

const HeroContent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for loading (adjust as needed)
    const timer = setTimeout(() => setIsLoading(false), 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />; // Show loading screen while loading
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          animate="visible"
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">An Ambitious Student</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Tawhid {" "}
            </span>
            Bin Omar
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          initial="hidden"
          animate="visible"
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I am a relentlessly curious student fueled by a passion for physics and programming — not merely as subjects, but as lenses through which I understand the world. 
          I seek out complexity not to conquer it, but to converse with it, to unravel its patterns and reimagine its possibilities. 
          Whether dissecting the elegance of quantum mechanics or crafting algorithms late into the night, I bring with me an unwavering devotion to deep work. For me, the pursuit of knowledge is not a task — it is a calling, one to which I willingly dedicate countless hours, driven not by obligation but by wonder.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          initial="hidden"
          animate="visible"
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Portfolio
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        initial="hidden"
        animate="visible"
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
