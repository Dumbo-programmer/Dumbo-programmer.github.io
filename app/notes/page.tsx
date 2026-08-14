"use client";
import React, { useState, useMemo, useEffect } from "react";
import { featuredResources, librarySubjects } from "@/constants/library";
import type { LibraryResource, ResourceType } from "@/constants/library";

const SUBJECT_IDS = librarySubjects.map((s) => ({
  label: s.title,
  id: s.title.toLowerCase().replace(/\s+/g, "-"),
  icon: s.icon,
}));

const GRADIENT = "from-purple-400 to-pink-400";

const TYPE_LABELS: Record<ResourceType, string> = {
  article: "Article",
  handout: "Handout",
  notes: "Notes",
  "problem-set": "Problem Set",
  research: "Research",
  book: "Book",
};

const TYPE_FILTERS: { label: string; id: ResourceType | "all" }[] = [
  { label: "All", id: "all" },
  { label: "Articles", id: "article" },
  { label: "Handouts", id: "handout" },
  { label: "Notes", id: "notes" },
  { label: "Problem Sets", id: "problem-set" },
  { label: "Research", id: "research" },
  { label: "Books", id: "book" },
];

const GRADE_FILTERS = [
  { label: "Grades 3–5", id: "grade-3-5" },
  { label: "Grades 6–8", id: "grade-6-8" },
  { label: "Grades 9–10", id: "grade-9-10" },
  { label: "Grades 11–12", id: "grade-11-12" },
  { label: "Undergrad+", id: "undergrad" },
];

const OLYMPIAD_FILTERS = [
  { label: "BdMO", id: "bdmo" },
  { label: "BdPhO", id: "bdpho" },
  { label: "IMO", id: "imo" },
  { label: "IPhO", id: "ipho" },
  { label: "IAAC", id: "iaac" },
  { label: "IOI", id: "ioi" },
  { label: "Programming", id: "prog-olympiad" },
];

const TAG_LIMIT = 16;

interface FlatResource {
  subject: string;
  section: string;
  item: LibraryResource;
}

const ALL_RESOURCES: FlatResource[] = librarySubjects.flatMap((subject) =>
  subject.sections.flatMap((section) =>
    section.items.map((item) => ({ subject: subject.title, section: section.name, item }))
  )
);

const TYPE_STYLES: Record<ResourceType, string> = {
  article: "text-cyan-400 bg-cyan-500/10",
  handout: "text-purple-400 bg-purple-500/10",
  notes: "text-emerald-400 bg-emerald-500/10",
  "problem-set": "text-amber-400 bg-amber-500/10",
  research: "text-pink-400 bg-pink-500/10",
  book: "text-blue-400 bg-blue-500/10",
};

const TYPE_BADGE_STYLES: Record<ResourceType, string> = {
  article: "text-cyan-300",
  handout: "text-purple-300",
  notes: "text-emerald-300",
  "problem-set": "text-amber-300",
  research: "text-pink-300",
  book: "text-blue-300",
};

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

function TypeBadge({ type }: { type: ResourceType }) {
  return (
    <span
      className={`shrink-0 text-[10px] uppercase tracking-wider rounded px-1.5 py-0.5 ${TYPE_STYLES[type]}`}
    >
      {TYPE_LABELS[type]}
    </span>
  );
}

function LanguageBadge({ language }: { language: LibraryResource["language"] }) {
  if (language === "en") return null;
  return (
    <span className="shrink-0 text-[10px] uppercase tracking-wider rounded px-1.5 py-0.5 text-orange-400 bg-orange-500/10">
      {language === "bn" ? "বাংলা" : "En / বাংলা"}
    </span>
  );
}

function TagChip({ tag, active, onClick }: { tag: string; active?: boolean; onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`text-[11px] px-2.5 py-1 rounded-full border transition-all duration-150 ${
        active
          ? "border-purple-500/60 bg-purple-500/15 text-purple-300"
          : "border-white/[0.08] bg-white/[0.02] text-gray-400 hover:text-white hover:border-purple-500/30"
      }`}
    >
      #{tag}
    </button>
  );
}

function FilterPill({
  label,
  active,
  onClick,
  accent = "purple",
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  accent?: "purple" | "cyan";
}) {
  const activeClasses =
    accent === "purple"
      ? "border-purple-500/60 bg-purple-500/15 text-purple-300 shadow-[0_0_12px_#a855f733]"
      : "border-cyan-500/60 bg-cyan-500/15 text-cyan-300 shadow-[0_0_12px_#06b6d433]";
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-200 ${
        active ? activeClasses : "border-white/[0.06] bg-white/[0.02] text-gray-400 hover:text-white hover:border-white/20"
      }`}
    >
      {label}
    </button>
  );
}

function ResourceCard({ r, showSubject }: { r: FlatResource; showSubject: boolean }) {
  const { item } = r;
  return (
    <a
      href={item.link}
      target={item.link.startsWith("http") ? "_blank" : undefined}
      rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
      className="flex flex-col border border-white/[0.06] rounded-lg bg-white/[0.02] p-4 transition-all duration-200 hover:bg-white/[0.06] hover:border-purple-500/30 hover:shadow-[0_0_20px_#a855f726]"
      aria-label={`View ${item.title}`}
    >
      <div className="flex items-center gap-2 mb-1.5">
        {showSubject && (
          <span className="shrink-0 text-[10px] uppercase tracking-wider text-gray-400 bg-white/[0.04] px-1.5 py-0.5 rounded">
            {r.subject}
          </span>
        )}
        <TypeBadge type={item.type} />
        <LanguageBadge language={item.language} />
      </div>
      <h4 className="text-sm font-medium text-gray-200 hover:text-purple-300 transition-colors leading-snug mb-1">
        {item.title}
      </h4>
      <p className="text-gray-600 text-xs leading-relaxed flex-1 line-clamp-2">{item.description}</p>
      {item.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-2.5">
          {item.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="text-[10px] text-gray-500 bg-white/[0.03] px-1.5 py-0.5 rounded">
              #{tag}
            </span>
          ))}
          {item.tags.length > 4 && (
            <span className="text-[10px] text-gray-600 px-1 py-0.5">+{item.tags.length - 4} more</span>
          )}
        </div>
      )}
    </a>
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
                          <span className={`shrink-0 text-[9px] uppercase tracking-wider mt-0.5 ${TYPE_BADGE_STYLES[item.type]}`}>
                            {TYPE_LABELS[item.type]}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <p className="text-gray-600 text-xs leading-relaxed line-clamp-2 flex-1">
                            {item.description}
                          </p>
                          {item.language === "bn" && (
                            <span className="shrink-0 text-[10px] text-orange-400/80">বাংলা</span>
                          )}
                        </div>
                        {item.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-1">
                            {item.tags.slice(0, 3).map((tag) => (
                              <span key={tag} className="text-[9px] text-gray-600 bg-white/[0.03] px-1 py-0.5 rounded">
                                #{tag}
                              </span>
                            ))}
                          </div>
                        )}
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

export default function NotesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeType, setActiveType] = useState<ResourceType | "all">("all");
  const [activeGrade, setActiveGrade] = useState<string | "all">("all");
  const [activeOlympiad, setActiveOlympiad] = useState<string | "all">("all");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q");
    if (q) setSearchQuery(q);
    const type = params.get("type");
    if (type && TYPE_FILTERS.some((t) => t.id === type)) setActiveType(type as ResourceType);
    const grade = params.get("grade");
    if (grade && GRADE_FILTERS.some((g) => g.id === grade)) setActiveGrade(grade);
    const olympiad = params.get("olympiad");
    if (olympiad && OLYMPIAD_FILTERS.some((o) => o.id === olympiad)) setActiveOlympiad(olympiad);
    const tag = params.get("tag");
    if (tag) setActiveTag(tag);
  }, []);

  useEffect(() => {
    const url = new URL(window.location.href);
    const sync = (key: string, value: string) => {
      if (value) url.searchParams.set(key, value);
      else url.searchParams.delete(key);
    };
    sync("q", searchQuery.trim());
    sync("type", activeType !== "all" ? activeType : "");
    sync("grade", activeGrade !== "all" ? activeGrade : "");
    sync("olympiad", activeOlympiad !== "all" ? activeOlympiad : "");
    sync("tag", activeTag ?? "");
    window.history.replaceState({}, "", url.toString());
  }, [searchQuery, activeType, activeGrade, activeOlympiad, activeTag]);

  const hasFilters =
    searchQuery.trim() !== "" ||
    activeType !== "all" ||
    activeGrade !== "all" ||
    activeOlympiad !== "all" ||
    activeTag !== null;

  const popularTags = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const r of ALL_RESOURCES) {
      for (const tag of r.item.tags) counts[tag] = (counts[tag] || 0) + 1;
    }
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .map(([tag]) => tag)
      .slice(0, TAG_LIMIT);
  }, []);

  const filteredResources = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return ALL_RESOURCES.filter((r) => {
      if (q) {
        const haystack = [
          r.item.title,
          r.item.description,
          r.subject,
          r.section,
          TYPE_LABELS[r.item.type],
          r.item.language,
          ...r.item.tags,
          ...r.item.grade,
          ...(r.item.olympiad ?? []),
        ]
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      if (activeType !== "all" && r.item.type !== activeType) return false;
      if (activeGrade !== "all" && !r.item.grade.includes(activeGrade)) return false;
      if (activeOlympiad !== "all" && !(r.item.olympiad ?? []).includes(activeOlympiad)) return false;
      if (activeTag && !r.item.tags.includes(activeTag)) return false;
      return true;
    });
  }, [searchQuery, activeType, activeGrade, activeOlympiad, activeTag]);

  const clearFilters = () => {
    setSearchQuery("");
    setActiveType("all");
    setActiveGrade("all");
    setActiveOlympiad("all");
    setActiveTag(null);
  };

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
                "keywords": item.tags,
                "learningResourceType": TYPE_LABELS[item.type],
                "inLanguage": item.language === "bn" ? "bn" : item.language === "both" ? "en, bn" : "en",
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
        <div className="max-w-md mx-auto mb-6">
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-600 text-sm">🔍</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search resources, topics, tags..."
              className="w-full pl-9 pr-3.5 py-2 text-sm rounded-full border border-white/10 bg-white/[0.04] text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/40 focus:ring-1 focus:ring-purple-500/20 transition-all"
              aria-label="Search educational resources"
            />
          </div>
        </div>

        {/* Browse by type */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <span className="text-[11px] uppercase tracking-wider text-gray-500 mr-1">Browse:</span>
          {TYPE_FILTERS.map((t) => (
            <FilterPill
              key={t.id}
              label={t.label}
              active={activeType === t.id}
              onClick={() => setActiveType(t.id)}
            />
          ))}
        </div>

        {/* Grade & Olympiad filters */}
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-[11px] uppercase tracking-wider text-gray-500 mr-1">By Grade:</span>
            <FilterPill
              label="All Grades"
              active={activeGrade === "all"}
              onClick={() => setActiveGrade("all")}
              accent="cyan"
            />
            {GRADE_FILTERS.map((g) => (
              <FilterPill
                key={g.id}
                label={g.label}
                active={activeGrade === g.id}
                onClick={() => setActiveGrade(g.id)}
                accent="cyan"
              />
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-[11px] uppercase tracking-wider text-gray-500 mr-1">Olympiads:</span>
            <FilterPill
              label="All"
              active={activeOlympiad === "all"}
              onClick={() => setActiveOlympiad("all")}
            />
            {OLYMPIAD_FILTERS.map((o) => (
              <FilterPill
                key={o.id}
                label={o.label}
                active={activeOlympiad === o.id}
                onClick={() => setActiveOlympiad(o.id)}
              />
            ))}
          </div>
        </div>

        {/* Popular tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <span className="text-[11px] uppercase tracking-wider text-gray-500 mr-1">Topics:</span>
          {popularTags.map((tag) => (
            <TagChip
              key={tag}
              tag={tag}
              active={activeTag === tag}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            />
          ))}
        </div>

        {hasFilters ? (
          <>
            {/* Filtered Results */}
            <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
              <p className="text-gray-400 text-sm">
                {filteredResources.length} resource{filteredResources.length !== 1 ? "s" : ""} found
                {searchQuery.trim() && (
                  <>
                    {" "}for &ldquo;<span className="text-purple-300">{searchQuery.trim()}</span>&rdquo;
                  </>
                )}
              </p>
              <button
                type="button"
                onClick={clearFilters}
                className="text-xs px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-gray-300 hover:text-white hover:border-purple-500/40 transition-all"
              >
                Clear all filters ✕
              </button>
            </div>

            {filteredResources.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-500 text-sm">No resources match your current filters.</p>
                <p className="text-gray-600 text-xs mt-2">
                  Try removing a filter or searching for a broader term.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {filteredResources.map((r, i) => (
                  <ResourceCard key={`${r.subject}-${r.section}-${r.item.title}-${i}`} r={r} showSubject />
                ))}
              </div>
            )}
          </>
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
                    className="flex flex-col border border-white/[0.06] rounded-lg bg-white/[0.02] p-4 transition-all duration-200 hover:bg-white/[0.06] hover:border-purple-500/30"
                    aria-label={`Featured: ${item.title}`}
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <TypeBadge type={item.type} />
                      <LanguageBadge language={item.language ?? "en"} />
                      <span className="text-[10px] text-gray-600 ml-auto">{item.subject}</span>
                    </div>
                    <h4 className="text-sm font-medium text-gray-200 mb-1 leading-snug">{item.title}</h4>
                    <p className="text-gray-600 text-xs leading-relaxed flex-1 line-clamp-2">
                      {item.description}
                    </p>
                    {item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-2.5">
                        {item.tags.slice(0, 4).map((tag) => (
                          <span key={tag} className="text-[10px] text-gray-500 bg-white/[0.03] px-1.5 py-0.5 rounded">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
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
          </>
        )}

        {/* Footer */}
        <div className="mt-16 text-center border-t border-white/[0.06] pt-6">
          <p className="text-gray-600 text-xs leading-relaxed max-w-xl mx-auto">
            Built because a student in Bangladesh should have the same access to quality STEM education
            as a student anywhere else. All materials free, open-access, and yours to use.
          </p>
        </div>
      </div>
    </main>
  );
}
