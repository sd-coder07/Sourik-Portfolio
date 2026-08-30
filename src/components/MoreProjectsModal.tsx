"use client";

import { useState } from "react";
import Link from "next/link";
import { X, Layers, CheckCircle, ExternalLink, ArrowRight } from "lucide-react";
import { ADDITIONAL_WORDPRESS_PROJECTS } from "@/data/projects";

interface MoreProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MoreProjectsModal({ isOpen, onClose }: MoreProjectsModalProps) {
  const [searchTerm, setSearchTerm] = useState("");

  if (!isOpen) return null;

  const filtered = ADDITIONAL_WORDPRESS_PROJECTS.filter(
    (p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.scope.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-fadeInUp">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-surface border border-border rounded-xl shadow-2xl flex flex-col overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Modal Header */}
        <div className="bg-surface-elevated px-6 py-4 border-b border-border flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-accent" />
            <div>
              <h3 id="modal-title" className="font-display font-bold text-lg text-text-primary">
                WordPress Builds Catalog
              </h3>
              <p className="font-mono text-xs text-text-muted">
                25+ High-Volume Client Websites Shipped &amp; Maintained
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-md bg-surface border border-border text-text-muted hover:text-text-primary hover:border-text-muted transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search / Filter Bar */}
        <div className="p-4 sm:px-6 bg-bg/50 border-b border-border flex items-center gap-3">
          <input
            type="text"
            placeholder="Search projects by name, industry, or scope..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3.5 py-2 rounded-md bg-surface border border-border text-sm text-text-primary placeholder:text-text-subtle focus:outline-none focus:border-accent font-sans"
          />
          <div className="font-mono text-xs text-text-muted shrink-0 hidden sm:block">
            {filtered.length} of {ADDITIONAL_WORDPRESS_PROJECTS.length} builds
          </div>
        </div>

        {/* Project List */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg bg-surface-elevated/70 border border-border hover:border-border-subtle transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="space-y-1.5 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-display font-semibold text-base text-text-primary">
                    {item.title}
                  </span>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-bg border border-border text-text-muted">
                    {item.category}
                  </span>
                </div>
                <p className="text-xs text-text-muted font-sans leading-relaxed">
                  {item.scope}
                </p>
                <p className="text-xs font-mono text-accent/90 flex items-center gap-1.5">
                  <CheckCircle className="w-3 h-3 text-accent" />
                  <span>{item.outcome}</span>
                </p>
              </div>

              <div className="flex flex-wrap md:flex-col items-start md:items-end gap-2 shrink-0">
                <div className="flex flex-wrap gap-1">
                  {item.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-bg border border-border/80 text-[10px] font-mono text-text-subtle"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="text-center py-12 text-text-muted font-mono text-xs">
              No projects matching &ldquo;{searchTerm}&rdquo;
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-surface-elevated px-6 py-3.5 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-text-muted">
          <span>Need a similar high-speed WordPress solution for your brand?</span>
          <Link
            href="/contact"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-accent text-bg font-semibold hover:bg-accent-hover transition-colors"
          >
            <span>Start a project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
