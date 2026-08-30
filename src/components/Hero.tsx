import Link from "next/link";
import { ArrowDown, ArrowUpRight, Terminal, Globe, Sparkles, CheckCircle2 } from "lucide-react";
import { StatChip } from "./StatChip";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start max-w-3xl">
          {/* Availability Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-surface border border-border text-xs font-mono text-text-primary mb-6 animate-fadeInUp">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-text-muted">status:</span>
            <span className="text-text-primary font-medium">available for freelance work</span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-text-primary leading-[1.15] tracking-tight mb-6 text-balance animate-fadeInUp">
            I build websites that ship —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-text-primary to-text-muted">
              Next.js for products,
            </span>{" "}
            <span className="underline decoration-accent/70 decoration-2 underline-offset-8">
              WordPress for business.
            </span>
          </h1>

          {/* Subhead */}
          <p className="text-base sm:text-lg text-text-muted leading-relaxed font-sans mb-8 max-w-2xl animate-fadeInUp">
            Full-stack developer with 1+ year building 25+ WordPress sites and modern Next.js applications for global clients. Currently building at{" "}
            <span className="text-text-primary font-medium">Dronahost</span>.
          </p>

          {/* Stat Chips */}
          <div className="flex flex-wrap gap-3 mb-10 animate-fadeInUp">
            <StatChip label="25+ WordPress sites" sublabel="Shipped & Active" />
            <StatChip label="1+ year experience" sublabel="Production Engineering" />
            <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-surface border border-border text-xs text-text-muted font-mono">
              <span className="text-accent">&gt;</span> Next.js 14 · SSR · REST APIs · AI
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 animate-fadeInUp">
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-accent text-bg font-mono text-sm font-semibold hover:bg-accent-hover active:scale-[0.98] transition-all shadow-md shadow-accent/20"
            >
              <span>See my work</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-surface border border-border text-text-primary font-mono text-sm font-medium hover:border-border-subtle hover:bg-surface-elevated transition-colors"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-4 h-4 text-text-muted" />
            </Link>
          </div>

          {/* Mini code/terminal bar */}
          <div className="mt-14 w-full p-3.5 rounded-lg bg-surface border border-border font-mono text-xs text-text-muted flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-accent" />
              <span>
                <span className="text-text-subtle">$</span> git status:{" "}
                <span className="text-text-primary">ready to build next project</span>
              </span>
            </div>
            <div className="flex items-center gap-4 text-[11px] text-text-subtle">
              <span>Stack: Next.js + WP</span>
              <span>•</span>
              <span>Fast Turnaround</span>
              <span>•</span>
              <span className="text-text-muted font-medium">Kolkata (IST / UTC+5:30)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
