import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <section
      className="relative flex flex-col h-full w-full overflow-hidden"
      id="about-me"
      aria-labelledby="hero-heading"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="hero-video rotate-180 absolute left-1/2 top-20 md:top-28 z-[1] h-[125%] w-screen max-w-none -translate-x-1/2 object-cover object-center opacity-80"
        aria-hidden="true"
      >
        <source src="/blackhole-loop.webm" type="video/webm" />
      </video>
      <div
        className="hero-video-fade pointer-events-none absolute inset-0 z-[2]"
        aria-hidden="true"
      />
      <HeroContent />
    </section>
  );
};

export default Hero;
