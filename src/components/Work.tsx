"use client";

import { useState } from "react";
import { FEATURED_PROJECTS } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { MoreProjectsModal } from "./MoreProjectsModal";
import { Layers, ArrowRight, Sparkles } from "lucide-react";

type FilterType = "all" | "nextjs" | "wordpress";

export function Work() {
  const [filter, setFilter] = useState<FilterType>("all");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = FEATURED_PROJECTS.filter((project) => {
    if (filter === "all") return true;
    return project.stack === filter;
  });

  const filterOptions: { label: string; value: FilterType; count: number }[] = [
    { label: "All Works", value: "all", count: FEATURED_PROJECTS.length },
    {
      label: "Next.js",
      value: "nextjs",
      count: FEATURED_PROJECTS.filter((p) => p.stack === "nextjs").length,
    },
    {
      label: "WordPress",
      value: "wordpress",
      count: FEATURED_PROJECTS.filter((p) => p.stack === "wordpress").length,
    },
  ];

  return (
    <section id="work" className="py-20 border-t border-border/80 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs text-accent">02 //</span>
              <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
                Client Projects &amp; Case Studies
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-text-primary tracking-tight mb-2">
              Shipped Production Websites &amp; Web Applications
            </h2>
            <p className="text-sm sm:text-base text-text-muted max-w-xl">
              Verified client deliverables shipped to live production. Explore custom Next.js web applications, e-commerce stores, and WordPress business websites engineered for speed, conversion, and high Google search visibility.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-lg bg-surface border border-border self-start md:self-auto">
            {filterOptions.map((opt) => {
              const isActive = filter === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setFilter(opt.value)}
                  className={`px-3.5 py-1.5 rounded-md text-xs font-mono transition-all flex items-center gap-2 ${
                    isActive
                      ? "bg-accent text-bg font-semibold shadow-sm shadow-accent/20"
                      : "text-text-muted hover:text-text-primary hover:bg-surface-elevated"
                  }`}
                >
                  <span>{opt.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? "bg-bg/20 text-bg" : "bg-surface-elevated text-text-subtle"
                    }`}
                  >
                    {opt.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

          {/* Closing "+20 More WordPress Projects" Tile (Always accessible or when filtering all/wp) */}
          {(filter === "all" || filter === "wordpress") && (
            <div className="group rounded-xl bg-surface border border-dashed border-border p-8 flex flex-col justify-between hover:border-accent/60 transition-all duration-300 min-h-[340px]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent" />
                    <span className="font-mono text-xs text-text-muted">
                      [wordpress catalog]
                    </span>
                  </div>
                  <Layers className="w-5 h-5 text-accent" />
                </div>

                <h3 className="font-display font-bold text-2xl text-text-primary mb-3 group-hover:text-white transition-colors">
                  +20 More WordPress Client Projects
                </h3>

                <p className="text-sm text-text-muted leading-relaxed font-sans mb-6">
                  Over 25+ client websites delivered across real estate, medical clinics, logistics, fitness, e-commerce, and education sectors.
                </p>

                <div className="grid grid-cols-2 gap-2 text-xs font-mono text-text-muted mb-6">
                  <div className="p-2.5 rounded bg-surface-elevated border border-border">
                    <span className="text-accent font-semibold block text-sm">25+</span>
                    <span>Live Sites Shipped</span>
                  </div>
                  <div className="p-2.5 rounded bg-surface-elevated border border-border">
                    <span className="text-accent font-semibold block text-sm">90+</span>
                    <span>Core Web Vitals</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full py-3 px-4 rounded-md bg-surface-elevated border border-border text-xs font-mono font-semibold text-text-primary hover:border-accent hover:text-accent flex items-center justify-center gap-2 transition-colors group-hover:bg-surface"
              >
                <span>Browse Full WordPress Directory (20+ Builds)</span>
                <ArrowRight className="w-4 h-4 text-accent" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modal Lightbox */}
      <MoreProjectsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
