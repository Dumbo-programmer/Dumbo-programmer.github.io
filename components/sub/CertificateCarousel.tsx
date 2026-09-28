"use client";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { animate, motion, useMotionValue } from "framer-motion";

const certificates = [
  "bdoaawin.png",
  "bdoc.png",
  "blueocean.png",
  "cip.png",
  "conrad.png",
  "cr.png",
  "iaac_hon.png",
  "iymc.png",
  "kaipho.png",
  "nasac.png",
  "pb177.png",
  "pb29.png",
  "pf_cert.png",
  "phiga.png",
  "poet.png",
];

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
    <div className="w-full flex flex-col items-center py-10">
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
          {certificates.map((file) => (
            <li
              key={file}
              className="shrink-0 w-[250px] h-[200px] m-2 flex items-center justify-center overflow-hidden rounded-lg border border-[#2A0E61] bg-black/50 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_25px_#8b5cf6]"
            >
              <Image
                src={`/certis/${file}`}
                alt={file.replace(/\.[^.]+$/, "").replace(/[_-]/g, " ")}
                width={250}
                height={200}
                className="object-contain max-h-full max-w-full"
                draggable={false}
                loading="lazy"
              />
            </li>
          ))}
        </motion.ul>
      </div>

      <div className="flex gap-4 mt-10">
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
