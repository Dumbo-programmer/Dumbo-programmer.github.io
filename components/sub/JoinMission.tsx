"use client";

import React from "react";
import { motion } from "framer-motion";
import { HiMail, HiUserGroup, HiAcademicCap, HiGlobe } from "react-icons/hi";

interface CTAButton {
  icon: React.ReactNode;
  label: string;
  href: string;
  variant: "primary" | "secondary";
}

const buttons: CTAButton[] = [
  {
    icon: <HiUserGroup className="text-lg" />,
    label: "Become a Volunteer",
    href: "mailto:tawhidbinomar@gmail.com?subject=Volunteer%20-%20Education%20Initiative",
    variant: "primary",
  },
  {
    icon: <HiGlobe className="text-lg" />,
    label: "Partner With Me",
    href: "mailto:tawhidbinomar@gmail.com?subject=Partnership%20-%20Education%20Initiative",
    variant: "secondary",
  },
  {
    icon: <HiAcademicCap className="text-lg" />,
    label: "Contribute Resources",
    href: "mailto:tawhidbinomar@gmail.com?subject=Resource%20Contribution",
    variant: "secondary",
  },
  {
    icon: <HiMail className="text-lg" />,
    label: "Get In Touch",
    href: "mailto:tawhidbinomar@gmail.com?subject=Education%20Initiative",
    variant: "secondary",
  },
];

const JoinMission = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="group relative rounded-2xl border border-[#2A0E61] bg-gradient-to-br from-white/[0.03] via-transparent to-white/[0.01] backdrop-blur-md text-center overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_#8b5cf6] hover:border-purple-500/30"
    >
      {/* top accent */}
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent group-hover:via-purple-400/50 transition-all duration-700" />

      {/* glow orbs */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl group-hover:bg-purple-500/10 transition-all duration-700" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-all duration-700" />

      <div className="relative z-10 p-10 md:p-14 max-w-2xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 mb-4">
          Join the Mission
        </h3>

        <p className="text-gray-400 text-sm md:text-base mb-10 leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
          This work is larger than any one person. Whether you are a student eager to learn, a teacher
          looking for resources, a school seeking a partnership, or a professional who wants to give back —
          there is a place for you here. The goal of making high-quality STEM education accessible across
          Bangladesh requires a community. Let us build it together.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {buttons.map((btn) => (
            <a
              key={btn.label}
              href={btn.href}
              className={`group/btn inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                btn.variant === "primary"
                  ? "bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500 text-white shadow-[0_0_20px_#a855f7]/30 hover:shadow-[0_0_35px_#a855f7] hover:scale-105"
                  : "border border-[#2A0E61] text-gray-300 hover:border-purple-500/50 hover:text-white hover:bg-purple-500/10 hover:shadow-[0_0_20px_#a855f7] hover:scale-105"
              }`}
              aria-label={btn.label}
            >
              <span className="group-hover/btn:scale-110 group-hover/btn:text-purple-300 transition-all duration-300">
                {btn.icon}
              </span>
              <span>{btn.label}</span>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default JoinMission;
