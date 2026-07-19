"use client";
import React, { useState, useMemo } from "react";
import { featuredResources, librarySubjects } from "@/constants/library";
import type { LibraryResource } from "@/constants/library";

const SUBJECT_IDS = librarySubjects.map((s) => ({
  label: s.title,
  id: s.title.toLowerCase().replace(/\s+/g, "-"),
  icon: s.icon,
}));

const GRADIENT = "from-purple-400 to-pink-400";

function SubjectNav() {
  return (
    <nav className="flex flex-wrap justify-center gap-2 mb-10" aria-label="Subject navigation">
      {SUBJECT_IDS.map((n) => (
        <a
          key={n.id}
          href={`/notes#${n.id}`}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] text-sm text-gray-300 hover:text-white hover:border-purple-500/40 hover:shadow-[0_0_15px_#a855f733] transition-all duration-200"
          aria-label={`Jump to ${n.label}`}
        >
          <span className="text-base">{n.icon}</span>
          <span>{n.label}</span>
        </a>
      ))}
    </nav>
  );
}

function SubjectCard({ subject, index }: { subject: (typeof librarySubjects)[number]; index: number }) {
  const hasContent = subject.sections.some((s) => s.items.length > 0);

  return (
    <section
      id={subject.title.toLowerCase().replace(/\s+/g, "-")}
      className="w-full scroll-mt-28"
      aria-labelledby={`subject-${index}`}
    >
      <h2
        id={`subject-${index}`}
        className={`text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${GRADIENT} mb-1 flex items-center gap-3`}
      >
        <span className="text-4xl md:text-5xl">{subject.icon}</span>
        {subject.title}
      </h2>
      <p className="text-gray-500 text-sm mb-6 ml-1">{subject.description}</p>

      {!hasContent && (
        <div className="text-center py-12 border border-dashed border-white/5 rounded-lg">
          <p className="text-gray-600 text-sm">Resources coming soon</p>
        </div>
      )}

      {hasContent && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {subject.sections.map(
            (section, sIdx) =>
              section.items.length > 0 && (
                <div
                  key={sIdx}
                  className="border border-white/[0.06] rounded-lg bg-white/[0.02] p-3.5"
                >
                  <h3 className="text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2 uppercase tracking-widest">
                    {section.name}
                  </h3>
                  <div className="space-y-1">
                    {section.items.map((item, iIdx) => (
                      <a
                        key={iIdx}
                        href={item.link}
                        target={item.link.startsWith("http") ? "_blank" : undefined}
                        rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="block px-2.5 py-2 rounded bg-white/[0.04] hover:bg-white/[0.08] transition-colors"
                        aria-label={`View ${item.title}`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <span className="text-sm font-medium text-gray-200 hover:text-purple-300 transition-colors leading-snug">
                            {item.title}
                          </span>
                          {item.link.endsWith(".pdf") && (
                            <span className="shrink-0 text-[10px] text-gray-600 mt-0.5">PDF</span>
                          )}
                          {item.link.startsWith("http") && (
                            <span className="shrink-0 text-[10px] text-gray-600 mt-0.5">ext</span>
                          )}
                        </div>
                        <p className="text-gray-600 text-xs leading-relaxed mt-0.5 line-clamp-2">
                          {item.description}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              )
          )}
        </div>
      )}
    </section>
  );
}

function SearchResults({ query }: { query: string }) {
  const q = query.toLowerCase().trim();

  const results = useMemo(() => {
    const matches: { subject: string; section: string; item: LibraryResource }[] = [];
    for (const subject of librarySubjects) {
      for (const section of subject.sections) {
        for (const item of section.items) {
          if (
            item.title.toLowerCase().includes(q) ||
            item.description.toLowerCase().includes(q)
          ) {
            matches.push({ subject: subject.title, section: section.name, item });
          }
        }
      }
    }
    return matches;
  }, [q]);

  if (results.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500 text-sm">No resources found for &ldquo;{query}&rdquo;</p>
      </div>
    );
  }

  return (
    <div>
      <p className="text-gray-500 text-xs mb-4">{results.length} result{results.length !== 1 ? "s" : ""}</p>
      <div className="space-y-3">
        {results.map((r, i) => (
          <a
            key={i}
            href={r.item.link}
            target={r.item.link.startsWith("http") ? "_blank" : undefined}
            rel={r.item.link.startsWith("http") ? "noopener noreferrer" : undefined}
            className="block border border-white/[0.06] rounded-lg bg-white/[0.02] p-4 hover:bg-white/[0.05] transition-colors"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] uppercase tracking-wider text-purple-400 bg-purple-500/10 px-1.5 py-0.5 rounded">
                {r.subject}
              </span>
              <span className="text-[10px] text-gray-600">{r.section}</span>
            </div>
            <h4 className="text-sm font-medium text-gray-200 mb-0.5">{r.item.title}</h4>
            <p className="text-gray-600 text-xs">{r.item.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function NotesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "name": "Open Problem Solving Library",
        "description": "Free mathematics, physics, competitive programming, and astronomy resources for learners, educators, and Olympiad students in Bangladesh.",
        "url": "https://tawhid.is-a.dev/notes",
        "sameAs": ["https://tawhid.is-a.dev"],
        "knowsAbout": ["Mathematics", "Physics", "Computer Science", "Competitive Programming", "Astronomy", "STEM Education", "Olympiad Preparation", "Problem Solving"],
        "educationalLevel": ["Beginner", "Intermediate", "Advanced"],
        "audience": { "@type": "Audience", "audienceType": ["Students", "Educators", "Olympiad Participants", "Researchers", "Parents", "Self-learners"] },
        "teaches": ["Mathematics", "Physics", "Computer Science", "Astronomy", "Problem Solving", "Critical Thinking", "Computational Thinking"],
      },
      {
        "@type": "WebSite",
        "url": "https://tawhid.is-a.dev",
        "name": "Open Problem Solving Library",
        "publisher": { "@type": "Person", "name": "Tawhid Bin Omar", "url": "https://tawhid.is-a.dev" },
        "inLanguage": ["en", "bn"],
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://tawhid.is-a.dev/notes?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "CollectionPage",
        "name": "Open Problem Solving Library",
        "description": "A comprehensive open-access library of educational resources including problem sets, olympiad training materials, research papers, and learning guides in mathematics, physics, competitive programming, and astronomy for Bangladesh and beyond.",
        "url": "https://tawhid.is-a.dev/notes",
        "isPartOf": { "@type": "WebSite", "name": "Open Problem Solving Library", "url": "https://tawhid.is-a.dev" },
        "inLanguage": ["en", "bn"],
        "about": [
          { "@type": "Thing", "name": "Mathematics", "description": "Algebra, geometry, number theory, combinatorics, calculus, and analysis" },
          { "@type": "Thing", "name": "Physics", "description": "Classical mechanics, electromagnetism, quantum physics, relativity, and astrophysics" },
          { "@type": "Thing", "name": "Competitive Programming", "description": "Algorithms, data structures, and problem-solving techniques" },
          { "@type": "Thing", "name": "Astronomy", "description": "Astrophysics, cosmology, observational astronomy, and planetary science" },
        ],
        "hasPart": [
          ...librarySubjects.flatMap((subject) =>
            subject.sections.flatMap((section) =>
              section.items.map((item) => ({
                "@type": "LearningResource",
                "name": item.title,
                "description": item.description,
                "url": item.link.startsWith("http") ? item.link : `https://tawhid.is-a.dev${item.link}`,
                "about": { "@type": "Thing", "name": subject.title },
                "teaches": subject.title,
                "inLanguage": item.title.includes("[Bangla]") ? "bn" : "en",
                "audience": {
                  "@type": "Audience",
                  "audienceType": ["Students", "Olympiad Participants", "Self-learners"],
                },
                "educationalLevel": ["Intermediate", "Advanced"],
                "encodingFormat": item.link.endsWith(".pdf") ? "application/pdf" : "text/html",
              }))
            )
          ),
        ],
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://tawhid.is-a.dev" },
          { "@type": "ListItem", "position": 2, "name": "Open Problem Solving Library", "item": "https://tawhid.is-a.dev/notes" },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen w-full pt-28 pb-16 px-4 md:px-6" id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-3 leading-tight">
            Open Problem Solving Library
          </h1>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Free mathematics, physics, competitive programming, and astronomy resources for learners,
            educators, and Olympiad students.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-600 text-sm">🔍</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search resources..."
              className="w-full pl-9 pr-3.5 py-2 text-sm rounded-full border border-white/10 bg-white/[0.04] text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/40 focus:ring-1 focus:ring-purple-500/20 transition-all"
              aria-label="Search educational resources"
            />
          </div>
        </div>

        {/* Search Results */}
        {searchQuery.trim() ? (
          <SearchResults query={searchQuery} />
        ) : (
          <>
            {/* Subject Navigation */}
            <SubjectNav />

            {/* Featured Resources */}
            <section aria-labelledby="featured-heading" className="mb-12">
              <h3 id="featured-heading" className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4 uppercase tracking-widest">
                Featured Resources
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {featuredResources.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="border border-white/[0.06] rounded-lg bg-white/[0.02] p-4 transition-all duration-200 hover:bg-white/[0.06] hover:border-purple-500/30 flex flex-col"
                    aria-label={`Featured: ${item.title}`}
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[10px] uppercase tracking-wider text-purple-400/80 bg-purple-500/10 px-1.5 py-0.5 rounded">
                        {item.type.replace("-", " ")}
                      </span>
                      <span className="text-[10px] text-gray-600">{item.subject}</span>
                    </div>
                    <h4 className="text-sm font-medium text-gray-200 mb-1 leading-snug">{item.title}</h4>
                    <p className="text-gray-600 text-xs leading-relaxed flex-1 line-clamp-2">
                      {item.description}
                    </p>
                  </a>
                ))}
              </div>
            </section>

            {/* Subject Sections */}
            <div className="space-y-14">
              {librarySubjects.map((subject, index) => (
                <SubjectCard key={subject.title} subject={subject} index={index} />
              ))}
            </div>

            {/* Footer */}
            <div className="mt-16 text-center border-t border-white/[0.06] pt-6">
              <p className="text-gray-600 text-xs leading-relaxed max-w-xl mx-auto">
                Open Problem Solving Library — free STEM resources I had created for myself and others.
                All materials freely available for learning, teaching, and research.
              </p>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
