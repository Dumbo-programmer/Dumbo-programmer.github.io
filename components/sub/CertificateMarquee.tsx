"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";

export interface CertificateItem {
  src: string;
  title: string;
  caption?: string;
  href?: string;
}

interface CertificateMarqueeProps {
  items: CertificateItem[];
  direction?: "left" | "right";
  speed?: number;
  className?: string;
}

const CertificateMarquee = ({
  items,
  direction = "left",
  speed = 45,
  className = "",
}: CertificateMarqueeProps) => {
  const viewportRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const [repeats, setRepeats] = useState(2);
  const [groupWidth, setGroupWidth] = useState(0);

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const group = groupRef.current;
    if (!viewport || !group) return;

    const measure = () => {
      const width = group.offsetWidth;
      if (!width) return;
      setGroupWidth(width);
      setRepeats(Math.max(2, Math.ceil(viewport.clientWidth / width) + 1));
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    observer.observe(group);
    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  const duration = groupWidth > 0 ? groupWidth / speed : 40;

  const renderGroup = (copy: number) => (
    <div
      key={`group-${copy}`}
      ref={copy === 0 ? groupRef : undefined}
      className="flex shrink-0 items-stretch gap-6 pr-6"
      aria-hidden={copy > 0}
    >
      {items.map((item, index) => (
        <figure
          key={`${item.src}-${index}`}
          className="w-[240px] sm:w-[280px] shrink-0 flex flex-col overflow-hidden rounded-xl border border-[#2A0E61] bg-white/5 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_25px_#8b5cf6]"
        >
          <div className="h-[220px] sm:h-[260px] w-full flex items-center justify-center overflow-hidden bg-black/60">
            <Image
              src={item.src}
              alt={`${item.title} certificate`}
              width={280}
              height={260}
              className="object-contain h-full w-full"
              loading={copy === 0 && index < 4 ? "eager" : "lazy"}
            />
          </div>
          <figcaption className="p-4 flex flex-col gap-1 flex-1">
            <span className="text-sm font-semibold text-white">{item.title}</span>
            {item.caption && (
              <span className="text-xs text-gray-400 leading-relaxed">
                {item.caption}
              </span>
            )}
          </figcaption>
        </figure>
      ))}
    </div>
  );

  return (
    <div
      ref={viewportRef}
      className={`marquee-viewport relative w-full overflow-hidden ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label="Certificates"
    >
      <div
        className="marquee-track flex w-max"
        data-direction={direction}
        style={
          {
            "--marquee-distance": `${groupWidth}px`,
            "--marquee-duration": `${duration}s`,
          } as React.CSSProperties
        }
      >
        {Array.from({ length: repeats }, (_, copy) => renderGroup(copy))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#030014] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#030014] to-transparent" />
    </div>
  );
};

export default CertificateMarquee;
