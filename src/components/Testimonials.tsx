import { TESTIMONIALS } from "@/data/testimonials";
import { Quote, Star, CheckCircle2 } from "lucide-react";

interface TestimonialsProps {
  id?: string;
  limit?: number;
  showAll?: boolean;
  className?: string;
}

export function Testimonials({
  id = "testimonials",
  limit,
  showAll = true,
  className = "",
}: TestimonialsProps) {
  const testimonials = limit ? TESTIMONIALS.slice(0, limit) : TESTIMONIALS;

  return (
    <section
      id={id}
      className={`py-20 border-t border-border/80 scroll-mt-20 ${className}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs text-accent">04 //</span>
              <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
                Client Feedback &amp; Endorsements
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-text-primary tracking-tight mb-2">
              Client Reviews &amp; Production Proof
            </h2>
            <p className="text-sm sm:text-base text-text-muted max-w-xl">
              Honest feedback from founders, agency partners, and business owners who have shipped production Next.js web applications, WordPress websites, and visual marketing assets with me.
            </p>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-border text-xs font-mono text-text-muted self-start md:self-auto">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="text-text-primary font-semibold">5.0 Star Rating</span>
            <span className="text-text-subtle">• 25+ Shipped Sites</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-xl bg-surface border border-border p-6 flex flex-col justify-between hover:border-accent/50 transition-all duration-300 group"
            >
              <div>
                {/* Top Row: Badge & Quote Icon */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-[11px] text-accent font-semibold px-2.5 py-1 rounded bg-accent-muted border border-accent/20">
                    {t.projectBadge}
                  </span>
                  <Quote className="w-4 h-4 text-text-subtle group-hover:text-accent transition-colors shrink-0" />
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(t.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-sans mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Bottom: Author & Metric Info */}
              <div className="pt-4 border-t border-border/70 space-y-3">
                {t.metric && (
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-text-primary bg-surface-elevated px-2.5 py-1 rounded border border-border/60">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span className="truncate">{t.metric}</span>
                  </div>
                )}

                <div className="flex items-center gap-3">
                  {/* Initials Avatar */}
                  <div className="w-9 h-9 rounded-full bg-surface-elevated border border-border flex items-center justify-center font-mono font-bold text-xs text-text-primary shrink-0 group-hover:border-accent/40 transition-colors">
                    {t.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-display font-bold text-sm text-text-primary truncate">
                      {t.author}
                    </div>
                    <div className="text-[11px] text-text-muted font-mono truncate">
                      {t.role} · <span className="text-text-primary">{t.company}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
