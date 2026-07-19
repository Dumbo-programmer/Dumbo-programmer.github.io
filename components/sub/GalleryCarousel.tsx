"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Image from "next/image";
import type { GallerySlide } from "@/constants/education";

interface GalleryCarouselProps {
  slides: GallerySlide[];
  autoPlayInterval?: number;
}

const GalleryCarousel = ({ slides, autoPlayInterval = 5000 }: GalleryCarouselProps) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  const slideCount = slides.length;

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent((index + slideCount) % slideCount);
    },
    [current, slideCount]
  );

  const goNext = useCallback(() => goTo(current + 1), [current, goTo]);
  const goPrev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(goNext, autoPlayInterval);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPaused, goNext, autoPlayInterval]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") goPrev();
    if (e.key === "ArrowRight") goNext();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 600 : -600, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -600 : 600, opacity: 0 }),
  };

  const slide = slides[current];

  return (
    <div
      className="group relative w-full overflow-hidden rounded-2xl border border-[#2A0E61] bg-white/5 backdrop-blur-md"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="Educational outreach gallery"
    >
      <div
        className="relative h-[320px] sm:h-[400px] md:h-[480px] w-full"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={slide.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${slide.gradient}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${current + 1} of ${slideCount}: ${slide.title}`}
          >
            {slide.image ? (
              <Image
                src={slide.image}
                alt={slide.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
                priority={current === 0}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                {slide.icon}
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            <div className="relative z-10 self-end w-full p-6 sm:p-8 md:p-10">
              <span className="inline-block text-xs uppercase tracking-widest text-purple-300 bg-purple-500/20 px-3 py-1 rounded-full mb-3 backdrop-blur-sm">
                {slide.organization}
              </span>
              <span className="inline-block text-xs text-gray-400 ml-3">{slide.date}</span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-2">
                {slide.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 mt-2 max-w-2xl leading-relaxed">
                {slide.caption}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={goPrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-700 transition-all duration-300 hover:shadow-[0_0_15px_#a855f7]"
          aria-label="Previous slide"
        >
          <HiChevronLeft className="text-xl" />
        </button>
        <button
          onClick={goNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-700 transition-all duration-300 hover:shadow-[0_0_15px_#a855f7]"
          aria-label="Next slide"
        >
          <HiChevronRight className="text-xl" />
        </button>
      </div>

      <div className="flex justify-center gap-2.5 py-4 bg-black/30 backdrop-blur-sm">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`rounded-full transition-all duration-500 ${
              index === current
                ? "w-8 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 shadow-[0_0_8px_#a855f7]"
                : "w-2 h-2 bg-gray-600/60 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryCarousel;
