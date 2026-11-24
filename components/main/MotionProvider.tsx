"use client";

import React from "react";
import { MotionConfig } from "framer-motion";

/** Makes all framer-motion animations respect the OS reduced-motion setting. */
const MotionProvider = ({ children }: { children: React.ReactNode }) => (
  <MotionConfig reducedMotion="user">{children}</MotionConfig>
);

export default MotionProvider;
