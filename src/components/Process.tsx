import { Search, PenTool, Code2, Rocket } from "lucide-react";

export function Process() {
  const steps = [
    {
      num: "01",
      title: "Discovery & SEO Scoping",
      subtitle: "Business goals, keywords & tech stack",
      icon: Search,
      details:
        "Analyzing target audience, search intent keywords, architectural requirements, technology track selection (Next.js vs. WordPress), and sitemap content structure.",
      deliverable: "Scope & architecture blueprint",
    },
    {
      num: "02",
      title: "UI/UX & Creative Design",
      subtitle: "Figma wireframes, UI kits & poster designs",
      icon: PenTool,
      details:
        "Crafting intuitive responsive Figma mockups, design tokens, modular Canva templates, and high-converting product or service promotional poster concepts.",
      deliverable: "Approved interactive prototype",
    },
    {
      num: "03",
      title: "Full-Stack Development",
      subtitle: "Next.js App Router or custom WordPress",
      icon: Code2,
      details:
        "Clean, type-safe implementation with Server-Side Rendering (SSR), custom database schemas, API integrations, and continuous staging deployments on Vercel.",
      deliverable: "Live staging preview build",
    },
    {
      num: "04",
      title: "Core Web Vitals, SEO & Launch",
      subtitle: "90+ speed tuning, schema & deployment",
      icon: Rocket,
      details:
        "Rigorous performance tuning for 90+ Lighthouse scores, OpenGraph & JSON-LD schema implementation, zero-downtime hosting deployment, and 30-day post-launch care.",
      deliverable: "Live production site + code handover",
    },
  ];

  return (
    <section id="process" className="py-20 border-t border-border/80 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-accent">03 //</span>
            <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
              Engineering Workflow
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-text-primary tracking-tight mb-2">
            Website Development &amp; Delivery Process
          </h2>
          <p className="text-base text-text-muted max-w-2xl">
            A battle-tested 4-stage workflow designed to launch high-performance websites and creative assets on schedule, on budget, and fully optimized for Google search rankings.
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative rounded-xl bg-surface border border-border p-6 flex flex-col justify-between border-glow-hover transition-all duration-300 group"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-2xl font-bold text-accent">
                      {step.num}
                    </span>
                    <div className="p-2 rounded-md bg-surface-elevated border border-border text-text-muted group-hover:text-accent group-hover:border-accent/40 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-xl text-text-primary mb-1 group-hover:text-white transition-colors">
                    {step.title}
                  </h3>
                  <p className="font-mono text-xs text-text-muted mb-3">
                    {step.subtitle}
                  </p>
                  <p className="text-xs text-text-muted/90 leading-relaxed font-sans mb-6">
                    {step.details}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/80">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-text-subtle">Output:</span>
                    <span className="text-text-primary font-medium">{step.deliverable}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
