import Image from "next/image";
import { ArrowUpRight, ExternalLink, Globe, Sparkles, CheckCircle2 } from "lucide-react";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isNextJs = project.stack === "nextjs";

  return (
    <div className="group rounded-xl bg-surface border border-border overflow-hidden border-glow-hover transition-all duration-300 flex flex-col justify-between">
      {/* Top Browser Tab Bar */}
      <div className="bg-surface-elevated px-4 py-2.5 border-b border-border flex items-center justify-between gap-2">
        <div className="flex items-center gap-2.5 min-w-0">
          {/* Signal Orange Dot (Signature motif) */}
          <span className="w-2.5 h-2.5 rounded-full bg-accent shrink-0 shadow-sm shadow-accent/40" />
          
          {/* Monospace Domain */}
          <span className="font-mono text-xs text-text-primary truncate font-medium">
            {project.domain}
          </span>

          {/* Monospace Stack Tag */}
          <span className="font-mono text-[11px] text-text-muted shrink-0">
            {project.stackLabel}
          </span>
        </div>

        {/* Browser window mock buttons */}
        <div className="flex items-center gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
          <div className="w-2 h-2 rounded-full bg-border-subtle" />
          <div className="w-2 h-2 rounded-full bg-border-subtle" />
        </div>
      </div>

      {/* Project Visual / Browser Mockup Area with Real Screenshot */}
      <div className="relative p-4 sm:p-5 bg-bg/40 border-b border-border/60">
        <div className="rounded-lg bg-surface border border-border/80 overflow-hidden group-hover:border-border transition-colors">
          {/* Top simulated viewport status */}
          <div className="flex items-center justify-between px-3.5 py-2 border-b border-border/50 text-[11px] font-mono text-text-subtle bg-surface-elevated/60">
            <span className="flex items-center gap-1.5 truncate mr-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 shrink-0" />
              <span className="truncate">https://{project.domain}</span>
            </span>
            <span className="text-text-muted shrink-0">{project.metrics}</span>
          </div>

          {/* Project Screenshot Display */}
          {project.image ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block aspect-[2.1/1] overflow-hidden bg-bg/95 group/img"
              aria-label={`View live preview of ${project.title}`}
            >
              <Image
                src={project.image}
                alt={`${project.title} live screenshot`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain object-center group-hover/img:scale-[1.01] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end justify-between p-3 pointer-events-none">
                <span className="text-[11px] font-mono text-white bg-black/80 px-2 py-0.5 rounded border border-white/10 backdrop-blur-sm">
                  Click to open live build
                </span>
                <span className="text-[10px] font-mono text-accent bg-accent-muted px-2 py-0.5 rounded border border-accent/30 backdrop-blur-sm font-semibold">
                  PROD DEPLOYED
                </span>
              </div>
            </a>
          ) : (
            <div className="p-4 space-y-2.5">
              <div className="h-3 w-1/3 rounded bg-surface-elevated" />
              <div className="h-2 w-full rounded bg-surface-elevated/70" />
              <div className="h-2 w-4/5 rounded bg-surface-elevated/50" />
              <div className="pt-2 flex items-center gap-2">
                <span className="text-[10px] font-mono text-accent bg-accent-muted px-2 py-0.5 rounded">
                  PROD DEPLOYED
                </span>
                <span className="text-[10px] font-mono text-text-subtle">
                  {isNextJs ? "Vercel Edge Network" : "Optimized WP Architecture"}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Project Details */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="font-display font-bold text-xl text-text-primary group-hover:text-white transition-colors">
              {project.title}
            </h3>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md bg-surface-elevated border border-border text-text-muted hover:text-accent hover:border-accent transition-colors"
              aria-label={`Open ${project.title} live site in new tab`}
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <p className="text-sm text-text-muted leading-relaxed font-sans mb-4">
            {project.description}
          </p>

          {/* Highlights */}
          <div className="space-y-1.5 mb-5">
            {project.highlights.map((h, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-text-muted">
                <span className="text-accent shrink-0 font-mono">›</span>
                <span className="leading-tight">{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tags & Action Link */}
        <div className="pt-4 border-t border-border mt-auto">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded bg-surface-elevated border border-border/80 text-[11px] font-mono text-text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-accent hover:text-accent-hover font-semibold transition-colors group/link"
          >
            <span>Visit live site</span>
            <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}
