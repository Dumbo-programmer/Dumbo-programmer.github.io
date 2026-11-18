"use client";

import Image from "next/image";
import React, { useMemo, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
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
      <div className="text-center mb-10">
        <h2
          id="writing-heading"
          className="text-[30px] sm:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
        >
          Writing
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mt-2">
          Poetry, essays, and short stories on love, loss, belonging, philosophy, and the
          people who shape us.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {recognitions.map((item) => (
          <article
            key={item.title}
            className="flex items-center gap-5 rounded-xl border border-[#2A0E61] bg-white/5 backdrop-blur-md p-5"
          >
            <div className="relative w-24 h-28 shrink-0 rounded-lg overflow-hidden bg-black">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="96px"
                className="object-contain"
                loading="lazy"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-purple-300 text-sm mt-1">{item.detail}</p>
            </div>
          </article>
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
              className={`rounded-full px-4 py-2 text-xs sm:text-sm border transition ${
                category === item
                  ? "border-purple-500/50 bg-purple-500/15 text-white"
                  : "border-[#2A0E61] bg-white/5 text-gray-400 hover:text-white hover:border-purple-500/40"
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
            className="w-full rounded-full border border-[#2A0E61] bg-white/5 px-4 py-2 text-sm text-white placeholder-gray-500 focus:border-purple-500/50 focus:outline-none"
          />
        </label>
      </div>

      <p className="text-xs text-gray-500 mb-5">
        {filteredPieces.length} {filteredPieces.length === 1 ? "piece" : "pieces"}
      </p>

      <div className="space-y-4">
        {filteredPieces.map((piece) => (
          <details
            key={piece.id}
            id={`writing-${piece.id}`}
            aria-labelledby={`writing-title-${piece.id}`}
            className="group scroll-mt-36 rounded-2xl border border-[#2A0E61] bg-white/[0.04] backdrop-blur-md transition-colors open:border-purple-500/40"
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-6 marker:hidden">
              <div className="min-w-0">
                <span
                  className={`inline-block text-[10px] uppercase tracking-[0.2em] border px-2 py-1 rounded-full mb-3 ${categoryStyles[piece.category]}`}
                >
                  {piece.category}
                </span>
                <h3
                  id={`writing-title-${piece.id}`}
                  className="writing-serif text-xl sm:text-2xl font-semibold text-white"
                >
                  {piece.title}
                </h3>
                <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                  {writingExcerpt(piece.body, 160)}
                </p>
              </div>
              <ChevronDownIcon
                className="h-5 w-5 shrink-0 text-gray-400 transition-transform duration-300 group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <div className="border-t border-[#2A0E61]/70 px-6 pb-7 pt-6">
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
                className="inline-block mt-6 text-xs text-purple-300 hover:text-purple-200 underline decoration-purple-500/40 underline-offset-4"
              >
                Open standalone page for “{piece.title}”
              </a>
            </div>
          </details>
        ))}
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
