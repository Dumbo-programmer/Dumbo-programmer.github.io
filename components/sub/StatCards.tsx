"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Statistic } from "@/constants/education";

interface StatCardsProps {
  statistics: Statistic[];
}

const CountUp = ({ value, prefix, suffix, duration = 2000 }: { value: number; prefix?: string; suffix: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = value;
    const increment = end / (duration / 16);
    let timer: ReturnType<typeof requestAnimationFrame>;

    const step = () => {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        timer = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    timer = requestAnimationFrame(step);
    return () => cancelAnimationFrame(timer);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {prefix && <span className="text-gray-400">{prefix} </span>}
      <span>{count.toLocaleString()}</span>
      {suffix}
    </span>
  );
};

const StatCards = ({ statistics }: StatCardsProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-3 md:gap-4">
      {statistics.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ delay: index * 0.08, duration: 0.5 }}
          className="relative flex flex-col items-center text-center py-5 px-2 rounded-xl border border-[#2A0E61] bg-white/5 backdrop-blur-md overflow-hidden group transition-all duration-500 hover:shadow-[0_0_30px_#8b5cf6] hover:border-purple-500/30"
        >
          {/* top accent */}
          <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-purple-500/0 to-transparent transition-all duration-500 group-hover:via-purple-400" />

          {/* icon container */}
          <div className="relative mb-3">
            <div className="absolute inset-0 bg-purple-500/10 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/15 to-purple-500/5 border border-purple-500/10 flex items-center justify-center text-purple-400 group-hover:text-purple-300 group-hover:border-purple-500/30 group-hover:scale-110 transition-all duration-500">
              {stat.icon}
            </div>
          </div>

          {/* number */}
          <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 mb-0.5">
            <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
          </div>

          {/* label */}
          <div className="text-[11px] sm:text-xs text-gray-500 leading-tight max-w-[90px]">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default StatCards;
