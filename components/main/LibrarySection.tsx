"use client";
import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { platformStats, featuredResources } from "@/constants/library";

const LibrarySection = () => {
  return (
    <section
      className="py-16 sm:py-20"
      id="open-problem-solving-library"
      aria-labelledby="library-heading"
    >
      <div className="section-shell">
        <SectionHeading
          id="library-heading"
          title="Open Problem Solving Library"
          description="Built so that no student in Bangladesh is held back by the cost of educational resources. Free, open-access, always."
          className="mb-10"
        />

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {platformStats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 backdrop-blur-sm"
            >
              <span className="text-lg">{stat.icon}</span>
              <span className="font-bold text-white">
                {stat.value.toLocaleString()}
              </span>
              <span className="text-sm text-gray-400">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredResources.slice(0, 3).map((item, idx) => (
            <Reveal key={idx} className="h-full" delay={idx * 0.08}>
              <a
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : undefined}
                rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="card-interactive flex h-full flex-col p-5"
                aria-label={`Featured resource: ${item.title}`}
              >
                <div className="mb-2 flex items-center gap-2">
                  <span className="chip chip-accent">
                    {item.type.replace("-", " ")}
                  </span>
                  <span className="text-xs text-gray-500">{item.subject}</span>
                </div>
                <h3 className="mb-1 text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="flex-1 text-xs leading-relaxed text-gray-400 line-clamp-3">
                  {item.description}
                </p>
                {item.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="chip text-[10px] text-gray-400">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="/notes"
            className="btn-primary"
            aria-label="Browse the full Open Problem Solving Library"
          >
            Browse the Library
          </a>
        </div>
      </div>
    </section>
  );
};

export default LibrarySection;
