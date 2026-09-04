"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { MoreProjectsModal } from "@/components/MoreProjectsModal";
import { FEATURED_PROJECTS } from "@/data/projects";
import { ArrowRight, Layers, Code2, Globe2 } from "lucide-react";

type FilterType = "all" | "nextjs" | "wordpress";

export function WorkDirectory() {
  const [filter, setFilter] = useState<FilterType>("all");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = FEATURED_PROJECTS.filter((project) => {
    if (filter === "all") return true;
    return project.stack === filter;
  });

  const filterOptions: { label: string; value: FilterType; count: number; icon: any }[] = [
    { label: "All Works", value: "all", count: FEATURED_PROJECTS.length, icon: Layers },
    {
      label: "Next.js Applications",
      value: "nextjs",
      count: FEATURED_PROJECTS.filter((p) => p.stack === "nextjs").length,
      icon: Code2,
    },
    {
      label: "WordPress Websites",
      value: "wordpress",
      count: FEATURED_PROJECTS.filter((p) => p.stack === "wordpress").length,
      icon: Globe2,
    },
  ];

  return (
    <>
      {/* Filter Header Row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-accent">02 //</span>
            <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
              Portfolio &amp; Case Studies
            </span>
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-text-primary tracking-tight mb-3">
            Shipped Production Websites &amp; Case Studies
          </h1>
          <p className="text-base text-text-muted max-w-2xl leading-relaxed">
            Full-stack Next.js web applications, e-commerce stores, and client WordPress websites engineered for sub-second load times, 90+ Core Web Vitals, and maximum Google search visibility.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg bg-surface border border-border self-start md:self-auto">
          {filterOptions.map((opt) => {
            const isActive = filter === opt.value;
            const Icon = opt.icon;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => setFilter(opt.value)}
                className={`px-3.5 py-2 rounded-md text-xs font-mono transition-all flex items-center gap-2 ${
                  isActive
                    ? "bg-accent text-bg font-semibold shadow-sm shadow-accent/20"
                    : "text-text-muted hover:text-text-primary hover:bg-surface-elevated"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{opt.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? "bg-bg/20 text-bg font-bold" : "bg-surface-elevated text-text-subtle"
                  }`}
                >
                  {opt.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Work Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}

        {/* Closing 20+ WordPress Projects Card */}
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
                Over 25+ live client websites delivered across real estate, healthcare clinics, logistics, fitness, corporate B2B, and education sectors — consistently hitting 90+ Core Web Vitals.
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

      {/* Modal Lightbox */}
      <MoreProjectsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
