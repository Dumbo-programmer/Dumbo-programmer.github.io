"use client";

import React from "react";
import { motion } from "framer-motion";
import type { TimelineEntry } from "@/constants/education";
import { HiSparkles } from "react-icons/hi";

interface ImpactTimelineProps {
  entries: TimelineEntry[];
}

const ImpactTimeline = ({ entries }: ImpactTimelineProps) => {
  return (
    <div className="relative max-w-3xl mx-auto pl-10 md:pl-0">
      {/* central line */}
      <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/60 via-fuchsia-500/30 to-cyan-500/10" />

      {entries.map((entry, index) => (
        <motion.div
          key={entry.year}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: index * 0.15, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative pb-14 last:pb-0"
        >
          <div className="flex items-start gap-6">
            {/* ---- left side (desktop only) ---- */}
            <div className="hidden md:flex md:w-1/2 md:justify-end md:pr-12">
              {index % 2 === 0 ? (
                <span
                  className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-bold border ${
                    entry.isFuture
                      ? "bg-cyan-500/15 text-cyan-300 border-cyan-500/30"
                      : entry.highlight
                      ? "bg-purple-500/15 text-purple-300 border-purple-500/30"
                      : "bg-purple-500/10 text-purple-300/60 border-purple-500/20"
                  }`}
                >
                  {entry.isFuture && <HiSparkles className="text-xs" />}
                  {entry.year}
                </span>
              ) : (
                <div />
              )}
            </div>

            {/* ---- node ---- */}
            <div className="relative z-10 flex flex-col items-center flex-shrink-0 -ml-6 md:ml-0">
              <div
                className={`relative w-9 h-9 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                  entry.isFuture
                    ? "border-cyan-400 bg-cyan-500/15 shadow-[0_0_20px_#06b6d4]"
                    : entry.highlight
                    ? "border-purple-400 bg-purple-500/15 shadow-[0_0_20px_#a855f7]"
                    : "border-purple-500/40 bg-purple-500/10"
                }`}
              >
                <span
                  className={`text-xs ${
                    entry.isFuture
                      ? "text-cyan-300"
                      : entry.highlight
                      ? "text-purple-300"
                      : "text-purple-400/60"
                  }`}
                >
                  {entry.isFuture ? "✦" : entry.highlight ? "◆" : "●"}
                </span>
              </div>

              {/* pulse ring */}
              {(entry.highlight || entry.isFuture) && (
                <div
                  className="absolute inset-0 rounded-full animate-ping opacity-20 bg-purple-400"
                  style={{ animationDuration: "3s" }}
                />
              )}
            </div>

            {/* ---- content card ---- */}
            <div className="flex-1 min-w-0 md:w-1/2">
              {/* mobile year badge */}
              <div className="md:hidden mb-3">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
                    entry.isFuture
                      ? "bg-cyan-500/15 text-cyan-300 border-cyan-500/30"
                      : entry.highlight
                      ? "bg-purple-500/15 text-purple-300 border-purple-500/30"
                      : "bg-purple-500/10 text-purple-300/60 border-purple-500/20"
                  }`}
                >
                  {entry.isFuture && <HiSparkles className="text-xs" />}
                  {entry.year}
                </span>
                {entry.highlight && (
                  <span className="ml-2 text-[10px] uppercase tracking-widest text-fuchsia-400/70 font-semibold">
                    · Current
                  </span>
                )}
              </div>

              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.1, duration: 0.5 }}
                className={`relative p-5 md:p-6 rounded-xl border backdrop-blur-md transition-all duration-300 ${
                  entry.isFuture
                    ? "border-cyan-500/30 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 hover:shadow-[0_0_30px_#06b6d4]"
                    : entry.highlight
                    ? "border-purple-500/40 bg-gradient-to-br from-purple-500/10 to-fuchsia-500/5 hover:shadow-[0_0_30px_#a855f7]"
                    : "border-[#2A0E61] bg-white/[0.04] hover:bg-white/[0.07] hover:shadow-[0_0_20px_#8b5cf6]"
                }`}
              >
                {/* desktop year badge */}
                <div className="hidden md:flex items-center gap-2 mb-3">
                  {index % 2 !== 0 && (
                    <>
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
                          entry.isFuture
                            ? "bg-cyan-500/15 text-cyan-300 border-cyan-500/30"
                            : entry.highlight
                            ? "bg-purple-500/15 text-purple-300 border-purple-500/30"
                            : "bg-purple-500/10 text-purple-300/60 border-purple-500/20"
                        }`}
                      >
                        {entry.isFuture && <HiSparkles className="text-xs" />}
                        {entry.year}
                      </span>
                      {entry.highlight && (
                        <span className="text-[10px] uppercase tracking-widest text-fuchsia-400/70 font-semibold">
                          · Current
                        </span>
                      )}
                    </>
                  )}
                </div>

                {/* items */}
                <ul className="space-y-2">
                  {entry.items.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + i * 0.06 + 0.15, duration: 0.3 }}
                      className="flex items-start gap-2.5"
                    >
                      <span
                        className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                          entry.isFuture
                            ? "bg-cyan-400/60"
                            : entry.highlight
                            ? "bg-purple-400"
                            : "bg-purple-500/40"
                        }`}
                      />
                      <span
                        className={`text-sm leading-relaxed ${
                          entry.isFuture ? "text-gray-400 italic" : "text-gray-300"
                        }`}
                      >
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ImpactTimeline;
