import Link from "next/link";
import { CheckCircle2, Layers, Cpu, Globe2, Sparkles, ArrowRight } from "lucide-react";
import { ServiceItem } from "@/types";

interface ServiceCardProps {
  service: ServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const isNextJs = service.id === "nextjs";

  return (
    <div className="group relative rounded-xl bg-surface border border-border p-6 sm:p-8 flex flex-col justify-between border-glow-hover transition-all duration-300">
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between gap-4 mb-5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="font-mono text-xs text-text-muted">{service.tag}</span>
          </div>
          <div className="p-2 rounded-md bg-surface-elevated border border-border/80 text-text-muted group-hover:text-accent transition-colors">
            {isNextJs ? <Cpu className="w-5 h-5" /> : <Globe2 className="w-5 h-5" />}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-2xl text-text-primary mb-3">
          {service.title}
        </h3>

        {/* Summary */}
        <p className="text-sm text-text-muted leading-relaxed font-sans mb-6">
          {service.summary}
        </p>

        {/* Deliverables List */}
        <div className="space-y-3 mb-8">
          <h4 className="font-mono text-xs uppercase tracking-wider text-text-subtle font-semibold">
            Key Scope &amp; Deliverables
          </h4>
          <ul className="space-y-2.5">
            {service.deliverables.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-text-primary/90">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer / Capabilities Badges */}
      <div className="pt-6 border-t border-border">
        <div className="flex flex-wrap gap-2 mb-4">
          {service.capabilities.map((cap, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded bg-surface-elevated border border-border text-[11px] font-mono text-text-muted"
            >
              {cap}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between text-xs font-mono text-text-subtle">
          <span>{service.metrics}</span>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 text-accent hover:text-accent-hover font-medium transition-colors"
          >
            <span>Inquire</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
