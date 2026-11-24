"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import SectionHeading from "@/components/ui/SectionHeading";

const SkillText = () => {
  return (
    <motion.div
      variants={slideInFromTop}
      initial="hidden"
      animate="visible"
      className="w-full"
    >
      <SectionHeading
        id="skills-heading"
        eyebrow="Tools"
        title="Tools I have worked with"
        description="Learning is a journey meant to be pursued"
        className="mb-10"
      />
    </motion.div>
  );
};

export default SkillText;
