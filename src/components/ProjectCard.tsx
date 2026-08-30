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

      {/* Project Visual / Browser Mockup Area */}
      <div className="relative p-5 sm:p-6 bg-bg/40 border-b border-border/60">
        {/* Mock Preview Content */}
        <div className="rounded-lg bg-surface border border-border/80 p-4 relative overflow-hidden group-hover:border-border transition-colors">
          {/* Top simulated viewport status */}
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-border/50 text-[11px] font-mono text-text-subtle">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
              https://{project.domain}
            </span>
            <span className="text-text-muted">{project.metrics}</span>
          </div>

          {/* Mock content representation */}
          <div className="space-y-2.5">
            <div className="h-3 w-1/3 rounded bg-surface-elevated" />
            <div className="h-2 w-full rounded bg-surface-elevated/70" />
            <div className="h-2 w-4/5 rounded bg-surface-elevated/50" />
            
            {/* Visual tech indicator */}
            <div className="pt-2 flex items-center gap-2">
              <span className="text-[10px] font-mono text-accent bg-accent-muted px-2 py-0.5 rounded">
                PROD DEPLOYED
              </span>
              <span className="text-[10px] font-mono text-text-subtle">
                {isNextJs ? "Vercel Edge Network" : "Optimized WP Architecture"}
              </span>
            </div>
          </div>
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
