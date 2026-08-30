import { Search, PenTool, Code2, Rocket } from "lucide-react";

export function Process() {
  const steps = [
    {
      num: "01",
      title: "Discover",
      subtitle: "Understand goals, audience, & content",
      icon: Search,
      details:
        "Clarifying key business objectives, target audience requirements, tech stack selection (Next.js vs. WordPress), and structural content hierarchy.",
      deliverable: "Scope & architecture brief",
    },
    {
      num: "02",
      title: "Design",
      subtitle: "Wireframe & visual direction",
      icon: PenTool,
      details:
        "Crafting intuitive UX wireframes, component layouts, and responsive design systems. Establishing typography, token palettes, and micro-interactions.",
      deliverable: "Approved visual system",
    },
    {
      num: "03",
      title: "Build",
      subtitle: "Develop in Next.js or WordPress, iterate with you",
      icon: Code2,
      details:
        "Clean, maintainable code implementation. Setting up SSR, APIs, or custom WordPress themes with weekly preview deployments and fast feedback loops.",
      deliverable: "Staging preview build",
    },
    {
      num: "04",
      title: "Launch & Support",
      subtitle: "Deploy, optimize, & ongoing care",
      icon: Rocket,
      details:
        "Production deployment to Vercel or cloud servers, domain & SSL configuration, Core Web Vitals speed tuning, and ongoing maintenance support.",
      deliverable: "Live site + handover",
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
              Workflow
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-text-primary tracking-tight mb-2">
            Engineered For Speed &amp; Certainty
          </h2>
          <p className="text-base text-text-muted max-w-2xl">
            A structured 4-step sequence designed to ship projects on time without communication overhead or unexpected bottlenecks.
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
