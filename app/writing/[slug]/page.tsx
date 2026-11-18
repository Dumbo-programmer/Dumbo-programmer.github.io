import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  writingExcerpt,
  writingPieceUrl,
  writingPieces,
  type WritingCategory,
} from "@/constants/writing";

type WritingPageProps = {
  params: { slug: string };
};

export const dynamicParams = false;

export function generateStaticParams() {
  return writingPieces.map((piece) => ({ slug: piece.id }));
}

export function generateMetadata({ params }: WritingPageProps): Metadata {
  const piece = writingPieces.find((item) => item.id === params.slug);

  if (!piece) {
    return { title: "Writing not found" };
  }

  const description = writingExcerpt(piece.body, 155);
  const path = `/writing/${piece.id}`;

  return {
    title: piece.title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${piece.title} — Writing by Tawhid Bin Omar`,
      description,
      url: path,
      siteName: "Tawhid Bin Omar — Open Problem Solving Library",
      locale: "en_US",
      type: "article",
      images: [
        {
          url: "https://tawhid.is-a.dev/og-image.png",
          width: 1200,
          height: 630,
          alt: `${piece.title} — writing by Tawhid Bin Omar`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${piece.title} — Writing by Tawhid Bin Omar`,
      description,
      images: ["https://tawhid.is-a.dev/og-image.png"],
      creator: "@tawhid_omar",
    },
    category:
      piece.category === "Poetry"
        ? "literature"
        : piece.category === "Essay"
          ? "philosophy"
          : "fiction",
  };
}

const categoryStyles: Record<WritingCategory, string> = {
  Poetry: "text-purple-300 bg-purple-500/10 border-purple-500/30",
  Essay: "text-cyan-300 bg-cyan-500/10 border-cyan-500/30",
  "Short story": "text-amber-300 bg-amber-500/10 border-amber-500/30",
};

export default function WritingPiecePage({ params }: WritingPageProps) {
  const piece = writingPieces.find((item) => item.id === params.slug);

  if (!piece) {
    notFound();
  }

  const index = writingPieces.findIndex((item) => item.id === piece.id);
  const previousPiece = index > 0 ? writingPieces[index - 1] : null;
  const nextPiece =
    index < writingPieces.length - 1 ? writingPieces[index + 1] : null;
  const canonicalUrl = writingPieceUrl(piece.id);
  const wordCount = piece.body.trim().split(/\s+/).filter(Boolean).length;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "@id": `${canonicalUrl}#work`,
      "name": piece.title,
      "headline": piece.title,
      "description": writingExcerpt(piece.body, 200),
      "abstract": writingExcerpt(piece.body, 200),
      "text": piece.body,
      "wordCount": wordCount,
      "genre": piece.category,
      "inLanguage": "en",
      "isAccessibleForFree": true,
      "license": "https://tawhid.is-a.dev/license",
      "url": canonicalUrl,
      "mainEntityOfPage": { "@id": `${canonicalUrl}#webpage` },
      "author": {
        "@id": "https://tawhid.is-a.dev/#person",
        "@type": "Person",
        "name": "Tawhid Bin Omar",
        "url": "https://tawhid.is-a.dev",
      },
      "creator": { "@id": "https://tawhid.is-a.dev/#person" },
      "isPartOf": { "@id": "https://tawhid.is-a.dev/#writing-works" },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      "url": canonicalUrl,
      "name": `${piece.title} — Writing by Tawhid Bin Omar`,
      "description": writingExcerpt(piece.body, 155),
      "inLanguage": "en",
      "isPartOf": { "@id": "https://tawhid.is-a.dev/#website" },
      "about": { "@id": `${canonicalUrl}#work` },
      "author": { "@id": "https://tawhid.is-a.dev/#person" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
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
          {
            "@type": "ListItem",
            "position": 3,
            "name": piece.title,
            "item": canonicalUrl,
          },
        ],
      },
    },
  ];

  return (
    <main
      id="main-content"
      className="relative min-h-screen w-full px-4 pb-20 pt-28 sm:px-6 lg:px-8"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-3xl">
        <nav aria-label="Breadcrumb" className="mb-8 text-xs text-gray-500">
          <Link href="/" className="hover:text-purple-300">
            Home
          </Link>
          <span aria-hidden="true" className="mx-2">
            /
          </span>
          <Link href="/#writing" className="hover:text-purple-300">
            Writing
          </Link>
          <span aria-hidden="true" className="mx-2">
            /
          </span>
          <span className="text-gray-300">{piece.title}</span>
        </nav>

        <header className="mb-10 text-center">
          <span
            className={`inline-block border px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] ${categoryStyles[piece.category]}`}
          >
            {piece.category}
          </span>
          <h1 className="writing-serif mt-5 text-3xl font-semibold text-white sm:text-4xl">
            {piece.title}
          </h1>
          <p className="mt-3 text-sm text-gray-500">
            {wordCount} words · by{" "}
            <Link href="/" className="text-purple-300 hover:text-purple-200">
              Tawhid Bin Omar
            </Link>
          </p>
        </header>

        <div className="rounded-2xl border border-[#2A0E61] bg-white/[0.04] px-6 py-8 backdrop-blur-md sm:px-10 sm:py-10">
          <div
            className={`whitespace-pre-line text-[15px] leading-8 text-gray-300 ${
              piece.category === "Poetry" ? "writing-serif" : ""
            }`}
          >
            {piece.body.trim()}
          </div>
        </div>

        <nav
          aria-label="Writing navigation"
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
        >
          {previousPiece ? (
            <Link
              href={`/writing/${previousPiece.id}`}
              className="rounded-full border border-[#2A0E61] bg-white/5 px-5 py-3 text-sm text-gray-300 hover:border-purple-500/40 hover:text-white"
            >
              ← {previousPiece.title}
            </Link>
          ) : (
            <span />
          )}
          <Link
            href="/#writing"
            className="rounded-full border border-purple-500/40 bg-purple-500/10 px-5 py-3 text-sm text-purple-200 hover:bg-purple-500/20"
          >
            All writing
          </Link>
          {nextPiece ? (
            <Link
              href={`/writing/${nextPiece.id}`}
              className="rounded-full border border-[#2A0E61] bg-white/5 px-5 py-3 text-sm text-gray-300 hover:border-purple-500/40 hover:text-white"
            >
              {nextPiece.title} →
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </article>
    </main>
  );
}
