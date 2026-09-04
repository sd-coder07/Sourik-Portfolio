"use client";

import { useState } from "react";
import Link from "next/link";
import { POSTER_DEMO_WORKS } from "@/data/services";
import { 
  Sparkles, 
  ShoppingBag, 
  BriefcaseBusiness, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";

type PosterCategoryFilter = "all" | "product" | "service";

export function PosterShowcase() {
  const [posterFilter, setPosterFilter] = useState<PosterCategoryFilter>("all");

  const filteredPosters = POSTER_DEMO_WORKS.filter((item) => {
    if (posterFilter === "all") return true;
    return item.category === posterFilter;
  });

  return (
    <section id="poster-demo-works" className="pt-8 mb-24 scroll-mt-24">
      <div className="p-8 sm:p-10 rounded-2xl bg-surface/80 border border-border shadow-xl relative overflow-hidden">
        {/* Subtle background glow effect */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="font-mono text-xs text-accent uppercase tracking-widest">
                Creative Showcase
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl text-text-primary tracking-tight mb-3">
              Poster Making Demo Works (Product &amp; Service Advertising)
            </h2>
            <p className="text-sm sm:text-base text-text-muted max-w-2xl leading-relaxed">
              Custom promotional graphics engineered for conversions. We produce tailored visual advertising for both <strong>product-based</strong> brands (e-commerce launches, cosmetics, electronics, festive flash sales) and <strong>service-based</strong> companies (consulting agencies, SaaS masterclasses, corporate events, educational programs).
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-lg bg-surface-elevated border border-border self-start md:self-auto shrink-0">
            <button
              type="button"
              onClick={() => setPosterFilter("all")}
              className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all flex items-center gap-1.5 ${
                posterFilter === "all"
                  ? "bg-accent text-bg font-semibold"
                  : "text-text-muted hover:text-text-primary"
              }`}
            >
              <span>All Posters</span>
              <span className="text-[10px] opacity-80">({POSTER_DEMO_WORKS.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setPosterFilter("product")}
              className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all flex items-center gap-1.5 ${
                posterFilter === "product"
                  ? "bg-accent text-bg font-semibold"
                  : "text-text-muted hover:text-text-primary"
              }`}
            >
              <ShoppingBag className="w-3 h-3" />
              <span>Product-Based</span>
            </button>

            <button
              type="button"
              onClick={() => setPosterFilter("service")}
              className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all flex items-center gap-1.5 ${
                posterFilter === "service"
                  ? "bg-accent text-bg font-semibold"
                  : "text-text-muted hover:text-text-primary"
              }`}
            >
              <BriefcaseBusiness className="w-3 h-3" />
              <span>Service-Based</span>
            </button>
          </div>
        </div>

        {/* Demo Posters Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {filteredPosters.map((poster) => {
            const isProduct = poster.category === "product";
            return (
              <div
                key={poster.id}
                className="group rounded-xl bg-surface-elevated border border-border hover:border-accent/60 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Visual Graphic Placeholder Preview Frame */}
                <div className="relative aspect-[4/3] bg-bg/70 border-b border-border flex flex-col items-center justify-center p-6 text-center group-hover:bg-bg/50 transition-colors">
                  <div className="w-14 h-14 rounded-2xl bg-surface border border-border flex items-center justify-center text-accent mb-3 group-hover:scale-105 group-hover:border-accent/40 transition-all">
                    {isProduct ? (
                      <ShoppingBag className="w-6 h-6" />
                    ) : (
                      <BriefcaseBusiness className="w-6 h-6" />
                    )}
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface border border-border text-[11px] font-mono text-text-muted">
                    <Sparkles className="w-3 h-3 text-accent" />
                    <span>Demo Graphic Slot</span>
                  </div>

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-mono font-medium border ${
                        isProduct
                          ? "bg-amber-500/10 border-amber-500/30 text-amber-300"
                          : "bg-cyan-500/10 border-cyan-500/30 text-cyan-300"
                      }`}
                    >
                      {poster.categoryLabel}
                    </span>
                  </div>

                  {/* Dimension Tag */}
                  {poster.dimensions && (
                    <div className="absolute bottom-3 right-3 text-[10px] font-mono text-text-subtle bg-surface/80 px-2 py-0.5 rounded border border-border/50">
                      {poster.dimensions}
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-lg text-text-primary mb-2 group-hover:text-white transition-colors">
                      {poster.title}
                    </h3>
                    <p className="text-xs text-text-muted leading-relaxed font-sans mb-4">
                      {poster.description}
                    </p>
                  </div>

                  {/* Tools / Software Used */}
                  <div className="pt-3 border-t border-border/60 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {poster.toolsUsed.map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded bg-surface border border-border text-[10px] font-mono text-text-subtle"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <span className="font-mono text-[11px] text-accent">
                      Ready for artwork
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ready to Order Custom Posters CTA Strip */}
        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-muted">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
            <span>Need custom poster designs for an upcoming product launch or service campaign?</span>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-accent text-bg font-semibold hover:bg-accent-hover transition-colors shrink-0"
          >
            <span>Request Poster Design</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
