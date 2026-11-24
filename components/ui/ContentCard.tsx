import Image from "next/image";
import React from "react";

interface ContentCardProps {
  title: string;
  href?: string;
  ariaLabel?: string;
  media?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

/** Shared card shell: one surface, one hover treatment, correct semantics. */
const ContentCard = ({
  title,
  href,
  ariaLabel,
  media,
  children,
  className = "",
}: ContentCardProps) => {
  const classes = `card-interactive flex h-full w-full flex-col overflow-hidden text-left ${className}`;

  if (href && href !== "#") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel ?? `${title} details`}
        className={classes}
      >
        {media}
        {children}
      </a>
    );
  }

  return (
    <article aria-label={ariaLabel ?? title} className={classes}>
      {media}
      {children}
    </article>
  );
};

interface MediaPanelProps {
  src: string;
  alt: string;
  typeA?: "image" | "video";
  className?: string;
}

export const MediaPanel = ({
  src,
  alt,
  typeA = "image",
  className = "",
}: MediaPanelProps) => (
  <div
    className={`card-media flex h-44 w-full shrink-0 items-center justify-center overflow-hidden border-b border-line/60 bg-black/50 ${className}`}
  >
    {typeA === "video" ? (
      <video
        src={src}
        className="h-full w-full object-contain"
        controls
        muted
        loop
        preload="metadata"
        aria-label={alt}
      />
    ) : (
      <Image
        src={src}
        alt={alt}
        width={300}
        height={200}
        className="h-full w-full object-contain"
        loading="lazy"
      />
    )}
  </div>
);

export const Chip = ({
  children,
  accent = false,
  className = "",
}: {
  children: React.ReactNode;
  accent?: boolean;
  className?: string;
}) => (
  <span className={`chip ${accent ? "chip-accent" : ""} ${className}`}>
    {children}
  </span>
);

export default ContentCard;
