"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { animate, motion, useMotionValue } from "framer-motion";

interface Certificate {
  file: string;
  title: string;
  caption: string;
}

const knownCertificates: Certificate[] = [
  { file: "bdoaawin.png", title: "BDOAA Astronomy Olympiad", caption: "Bangladesh Olympiad on Astronomy and Astrophysics award" },
  { file: "bdoc.png", title: "BDOC Chemistry Olympiad", caption: "Chemistry Olympiad finalist certificate" },
  { file: "blueocean.png", title: "Blue Ocean Challenge", caption: "Blue Ocean Challenge participation certificate" },
  { file: "cip.png", title: "Code in Place", caption: "Stanford Code in Place completion certificate" },
  { file: "conrad.png", title: "Conrad Challenge", caption: "Conrad Challenge participation certificate" },
  { file: "cr.png", title: "Certificate of Recognition", caption: "Recognition certificate from Tawhid’s archive" },
  { file: "iaac_hon.png", title: "IAAC Honorable Mention", caption: "International Astronomy and Astrophysics Competition honour" },
  { file: "iymc.png", title: "IYMC Certificate", caption: "International Youth Math Challenge certificate" },
  { file: "kaipho.png", title: "KAIPHO Silver Diploma", caption: "Kazan National Research Technical University silver diploma" },
  { file: "nasac.png", title: "NASA Space Apps Challenge", caption: "NASA Space Apps Challenge participation certificate" },
  { file: "pb177.png", title: "Physics Brawl", caption: "International Physics Brawl certificate" },
  { file: "pb29.png", title: "Physics Brawl — Top 29 Team", caption: "29th place out of 1,584 international teams" },
  { file: "pf_cert.png", title: "Programme Certificate", caption: "Programme completion certificate from Tawhid’s archive" },
  { file: "phiga.png", title: "PHIGA #1 Worldwide", caption: "1st place out of 1,211 participants worldwide" },
  { file: "qcwc.png", title: "Queen’s Commonwealth Essay Competition", caption: "Silver Award out of 53,840 entries" },
  { file: "poet.png", title: "Poetry Society Recognition", caption: "Recognition for poetry writing" },
];

const archivedFiles = [
  "image copy 10.png",
  "image copy 11.png",
  "image copy 12.png",
  "image copy 13.png",
  "image copy 14.png",
  "image copy 15.png",
  "image copy 16.png",
  "image copy 17.png",
  "image copy 18.png",
  "image copy 19.png",
  "image copy 2.png",
  "image copy 20.png",
  "image copy 21.png",
  "image copy 22.png",
  "image copy 23.png",
  "image copy 3.png",
  "image copy 4.png",
  "image copy 5.png",
  "image copy 6.png",
  "image copy 7.png",
  "image copy 8.png",
  "image copy 9.png",
  "image copy.png",
  "image.png",
];

const archivedCertificates: Certificate[] = archivedFiles.map((file) => ({
  file,
  title: file === "image.png" || file === "image copy.png"
    ? "Additional certificate"
    : `Additional certificate ${file.replace(/image copy\s?/i, "").replace(/\.png$/i, "")}`,
  caption: "Additional certificate from Tawhid Bin Omar’s archive.",
}));

const certificates: Certificate[] = [...knownCertificates, ...archivedCertificates];

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const CertificateCarousel = () => {
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLUListElement>(null);
  const x = useMotionValue(0);
  const [limit, setLimit] = useState(0);
  const [step, setStep] = useState(266);

  useEffect(() => {
    const el = viewport.current;
    const list = track.current;
    if (!el || !list) return;

    const measure = () => {
      const first = list.firstElementChild as HTMLElement | null;
      const second = list.children[1] as HTMLElement | undefined;
      if (first && second) {
        setStep(second.offsetLeft - first.offsetLeft);
      }
      setLimit(Math.max(0, list.scrollWidth - el.clientWidth));
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(el);
    observer.observe(list);
    return () => observer.disconnect();
  }, []);

  const scrollBy = useCallback(
    (direction: number) => {
      const target = clamp(x.get() - direction * step, -limit, 0);
      animate(x, target, { type: "spring", stiffness: 300, damping: 34 });
    },
    [limit, step, x]
  );

  const snapToNearest = useCallback(() => {
    if (!step) return;
    const target = clamp(Math.round(x.get() / step) * step, -limit, 0);
    animate(x, target, { type: "spring", stiffness: 300, damping: 34 });
  }, [limit, step, x]);

  return (
    <div className="w-full flex flex-col items-center py-6">
      <div
        ref={viewport}
        className="overflow-hidden"
        style={{ width: "100%", maxWidth: "1000px" }}
      >
        <motion.ul
          ref={track}
          drag="x"
          dragConstraints={{ left: -limit, right: 0 }}
          dragElastic={0.06}
          onDragEnd={snapToNearest}
          style={{ x }}
          className="flex list-none p-0 m-0 cursor-grab active:cursor-grabbing touch-pan-y select-none"
        >
          {certificates.map((certificate) => (
            <li
              key={certificate.file}
              className="shrink-0 w-[250px] m-2 overflow-hidden rounded-lg border border-[#2A0E61] bg-black/50 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_25px_#8b5cf6]"
            >
              <figure className="flex flex-col h-full">
                <div className="h-[200px] w-full flex items-center justify-center overflow-hidden">
                  <Image
                    src={`/certis/${certificate.file}`}
                    alt={`${certificate.title} — certificate earned by Tawhid Bin Omar`}
                    width={250}
                    height={200}
                    className="object-contain max-h-full max-w-full"
                    draggable={false}
                    loading="lazy"
                  />
                </div>
                <figcaption className="px-3 py-3 border-t border-[#2A0E61] bg-white/[0.03]">
                  <p className="text-sm font-semibold text-white leading-tight">
                    {certificate.title}
                  </p>
                  <p className="text-[11px] text-gray-400 mt-1 leading-snug">
                    {certificate.caption}
                  </p>
                </figcaption>
              </figure>
            </li>
          ))}
        </motion.ul>
      </div>

      <div className="flex gap-4 mt-8">
        <CarouselButton direction={-1} onClick={() => scrollBy(-1)} />
        <CarouselButton direction={1} onClick={() => scrollBy(1)} />
      </div>
    </div>
  );
};

interface ButtonProps {
  direction: number;
  onClick: () => void;
}

const CarouselButton = ({ direction, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={
        direction > 0
          ? "Scroll certificates forward"
          : "Scroll certificates backward"
      }
      className="relative z-10 h-10 w-10 rounded-full bg-white/5 border border-[#2A0E61] text-white text-lg leading-none flex items-center justify-center hover:shadow-[0_0_20px_#8b5cf6] hover:scale-110 transition-all duration-300"
    >
      {direction > 0 ? "\u203a" : "\u2039"}
    </button>
  );
};

export default CertificateCarousel;
