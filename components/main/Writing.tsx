"use client";

import Image from "next/image";
import React, { useMemo, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import {
  writingCategories,
  writingExcerpt,
  writingPieceUrl,
  writingPieces,
  type WritingCategory,
} from "@/constants/writing";

const recognitions = [
  {
    src: "/certis/qcwc.png",
    alt: "Queen’s Commonwealth Essay Competition Silver Award certificate",
    title: "Queen’s Commonwealth Essay Competition",
    detail: "Silver Award · 53,840 entries",
  },
  {
    src: "/certis/poet.png",
    alt: "Poetry Society recognition certificate for Tawhid Bin Omar",
    title: "Poetry Society Recognition",
    detail: "Recognised for poetry writing",
  },
];

const categoryStyles: Record<WritingCategory, string> = {
  Poetry: "text-purple-300 bg-purple-500/10 border-purple-500/30",
  Essay: "text-cyan-300 bg-cyan-500/10 border-cyan-500/30",
  "Short story": "text-amber-300 bg-amber-500/10 border-amber-500/30",
};

const categorySurfaces: Record<WritingCategory, string> = {
  Poetry:
    "bg-purple-500/[0.04] hover:bg-purple-500/[0.08] open:bg-purple-500/[0.08]",
  Essay:
    "bg-cyan-500/[0.04] hover:bg-cyan-500/[0.08] open:bg-cyan-500/[0.08]",
  "Short story":
    "bg-amber-500/[0.04] hover:bg-amber-500/[0.08] open:bg-amber-500/[0.08]",
};

const writingJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": "https://tawhid.is-a.dev/#writing-works",
    "name": "Writing by Tawhid Bin Omar",
    "description":
      "Poetry, essays, and short stories on love, loss, belonging, philosophy, and the people who shape us.",
    "url": "https://tawhid.is-a.dev/#writing",
    "inLanguage": "en",
    "numberOfItems": writingPieces.length,
    "itemListElement": writingPieces.map((piece, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "CreativeWork",
        "@id": `${writingPieceUrl(piece.id)}#work`,
        "name": piece.title,
        "headline": piece.title,
        "description": writingExcerpt(piece.body, 200),
        "abstract": writingExcerpt(piece.body, 200),
        "genre": piece.category,
        "inLanguage": "en",
        "url": writingPieceUrl(piece.id),
        "author": {
          "@id": "https://tawhid.is-a.dev/#person",
          "@type": "Person",
          "name": "Tawhid Bin Omar",
          "url": "https://tawhid.is-a.dev",
        },
        "isPartOf": { "@id": "https://tawhid.is-a.dev/#profile-page" },
      },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://tawhid.is-a.dev/#writing-breadcrumb",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://tawhid.is-a.dev",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Writing",
        "item": "https://tawhid.is-a.dev/#writing",
      },
    ],
  },
];

const Writing = () => {
  const [category, setCategory] = useState<"All" | WritingCategory>("All");
  const [query, setQuery] = useState("");

  const filteredPieces = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return writingPieces.filter((piece) => {
      const matchesCategory = category === "All" || piece.category === category;
      const matchesQuery =
        !normalizedQuery ||
        piece.title.toLowerCase().includes(normalizedQuery) ||
        piece.body.toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <section className="w-full py-10" id="writing" aria-labelledby="writing-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(writingJsonLd) }}
      />
      <SectionHeading
        id="writing-heading"
        title="Writing"
        description="Poetry, essays, and short stories on love, loss, belonging, philosophy, and the people who shape us."
        className="mb-10"
      />

      <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {recognitions.map((item, index) => (
          <Reveal
            key={item.title}
            className="lg:col-span-2"
            delay={index * 0.06}
          >
            <article className="card-interactive flex h-full items-center gap-5 p-5">
              <div className="relative h-28 w-24 shrink-0 overflow-hidden rounded-lg bg-black">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="96px"
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-purple-300">{item.detail}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="flex flex-col gap-4 mb-8 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap justify-center gap-2" role="group" aria-label="Filter writing by category">
          {writingCategories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              aria-pressed={category === item}
              className={`rounded-full border px-4 py-2 text-xs transition sm:text-sm ${
                category === item
                  ? "border-accent/50 bg-accent/[0.15] text-white"
                  : "border-line bg-surface text-gray-400 hover:border-accent/40 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <label className="relative w-full md:max-w-xs">
          <span className="sr-only">Search writing</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search writing..."
            className="w-full rounded-full border border-line bg-surface px-4 py-2 text-sm text-white placeholder-gray-500 focus:border-accent/50 focus:outline-none"
          />
        </label>
      </div>

      <p className="text-xs text-gray-500 mb-5">
        {filteredPieces.length} {filteredPieces.length === 1 ? "piece" : "pieces"}
      </p>

      <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {filteredPieces.map((piece, index) => {
          const isFeature = piece.category !== "Poetry" || index % 6 === 0;
          return (
            <Reveal
              key={piece.id}
              className={`min-w-0 ${isFeature ? "lg:col-span-2" : ""}`}
              delay={Math.min(index, 12) * 0.03}
            >
              <details
                id={`writing-${piece.id}`}
                aria-labelledby={`writing-title-${piece.id}`}
                className={`group scroll-mt-36 overflow-hidden rounded-2xl border border-line backdrop-blur-sm transition-[border-color,background-color,box-shadow] duration-300 hover:border-line-accent/60 hover:shadow-glow open:border-accent/40 open:shadow-glow ${categorySurfaces[piece.category]}`}
              >
                <summary
                  className={`flex cursor-pointer list-none flex-col justify-between gap-4 p-5 marker:hidden sm:p-6 ${
                    isFeature ? "lg:min-h-[14rem]" : "lg:min-h-[11rem]"
                  }`}
                >
                  <div className="min-w-0">
                    <span
                      className={`inline-block rounded-full border px-2 py-1 text-[10px] uppercase tracking-[0.2em] ${categoryStyles[piece.category]}`}
                    >
                      {piece.category}
                    </span>
                    <h3
                      id={`writing-title-${piece.id}`}
                      className={`writing-serif mt-3 font-semibold text-white ${
                        isFeature ? "text-2xl sm:text-3xl" : "text-xl"
                      }`}
                    >
                      {piece.title}
                    </h3>
                    <p
                      className={`mt-2 text-sm text-gray-500 ${
                        isFeature ? "line-clamp-3" : "line-clamp-2"
                      }`}
                    >
                      {writingExcerpt(piece.body, isFeature ? 220 : 160)}
                    </p>
                  </div>
                  <div className="flex justify-end">
                    <ChevronDownIcon
                      className="h-5 w-5 shrink-0 text-gray-400 transition-transform duration-300 group-open:rotate-180 group-open:text-accent-light"
                      aria-hidden="true"
                    />
                  </div>
                </summary>
                <div className="border-t border-line/70 px-5 pb-6 pt-5 sm:px-6">
                  <div
                    className={`whitespace-pre-line text-gray-300 ${
                      piece.category === "Poetry"
                        ? "writing-serif text-[15px] leading-8"
                        : "text-[15px] leading-8"
                    }`}
                  >
                    {piece.body.trim()}
                  </div>
                  <a
                    href={writingPieceUrl(piece.id)}
                    className="animated-underline mt-6 pb-0.5 text-xs text-purple-300 transition-colors hover:text-purple-200"
                  >
                    Open standalone page for “{piece.title}”
                  </a>
                </div>
              </details>
            </Reveal>
          );
        })}
      </div>

      {filteredPieces.length === 0 && (
        <p className="text-center text-gray-500 text-sm py-12">
          No writing matches those filters.
        </p>
      )}
    </section>
  );
};

export default Writing;
