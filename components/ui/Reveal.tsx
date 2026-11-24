"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/utils/motion";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/** Scroll-triggered reveal used consistently across sections. */
const Reveal = ({ children, className = "", delay = 0 }: Props) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
    variants={fadeUp}
    custom={delay}
    className={className}
  >
    {children}
  </motion.div>
);

export default Reveal;
