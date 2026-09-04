import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  ArrowLeft, 
  ArrowRight, 
  Search, 
  PenTool, 
  Code2, 
  Rocket, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Clock, 
  Sparkles, 
  Layers, 
  MessageSquare, 
  FileCode2, 
  Gauge, 
  Cpu 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Website Development Process & Workflow | Next.js & WordPress — Sourik Das",
  description:
    "Explore our 5-phase website engineering workflow: Discovery & Technical Scoping, Figma UI/UX Wireframing, Full-Stack Next.js & WordPress Development, 90+ Core Web Vitals QA, and Zero-Downtime Deployment.",
  keywords: [
    "Website development workflow",
    "Next.js development process",
    "WordPress development lifecycle",
    "UI UX design wireframing Figma",
    "Core Web Vitals optimization process",
    "Technical SEO audit workflow",
    "Freelance web developer process",
    "Custom web application delivery",
  ],
  alternates: {
    canonical: "/process",
  },
  openGraph: {
    title: "Website Development Process & Workflow | Next.js & WordPress — Sourik Das",
    description:
      "A battle-tested 5-stage engineering workflow: Discovery, Figma UI/UX, Full-Stack Development, 90+ Core Web Vitals QA, and Zero-Downtime Deployment.",
    url: "https://sourikdas.dev/process",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development Process & Workflow | Next.js & WordPress — Sourik Das",
    description:
      "A battle-tested 5-stage engineering workflow: Discovery, Figma UI/UX, Full-Stack Development, 90+ Core Web Vitals QA, and Zero-Downtime Deployment.",
  },
};

const phases = [
  {
    step: "01",
    title: "Discovery, Technical Scoping & SEO Strategy",
    tag: "Phase 01 // Foundation",
    duration: "Days 1 — 3",
    icon: Search,
    overview:
      "Every high-ranking, high-converting project starts with technical alignment. We analyze your business goals, target audience search intent, sitemap architecture, and determine the optimal technology track (Full-Stack Next.js vs. Turnkey WordPress vs. Graphic Design).",
    activities: [
      "In-depth requirements breakdown, target keyword mapping & business goal alignment",
      "Architecture & tech stack evaluation (Next.js 14 App Router vs. WordPress vs. Headless)",
      "Information architecture, sitemap planning, and database entity-relationship modeling",
      "Milestone definition, timeline scheduling, and transparent deliverable commitments",
    ],
    deliverables: [
      "Technical Architecture & Tech Stack Specification",
      "Project Scope, Timeline & Milestone Agreement",
      "Sitemap & Information Architecture Blueprint",
    ],
    tools: ["Notion", "FigJam", "Postman", "GitHub"],
  },
  {
    step: "02",
    title: "UI/UX Wireframing & Design Systems (Figma / Canva)",
    tag: "Phase 02 // Visual Architecture",
    duration: "Days 4 — 8",
    icon: PenTool,
    overview:
      "Translating ideas into intuitive, conversion-engineered user interfaces. We craft responsive Figma UI mockups, modular Canva brand kits, interactive prototypes, and high-impact poster concepts before writing a single line of production code.",
    activities: [
      "Low-fidelity wireframing and user journey conversion optimization",
      "Design system creation: color tokens, typography scales, spacing & micro-interactions",
      "High-fidelity desktop & mobile responsive UI mockups in Figma with auto-layout",
      "Poster making concepts: Product feature spotlight variants & service promotional layouts",
    ],
    deliverables: [
      "Clickable Interactive Figma Prototype",
      "Production-Ready Design System Tokens",
      "Approved Visual Assets & Graphic Creative Deck",
    ],
    tools: ["Figma", "Canva", "Adobe Photoshop", "Illustrator"],
  },
  {
    step: "03",
    title: "Full-Stack Development & Iterative Sprints",
    tag: "Phase 03 // Engineering",
    duration: "Weeks 2 — 4",
    icon: Code2,
    overview:
      "Transforming approved design mockups into clean, maintainable, and type-safe code. Continuous staging builds allow you to test real features as they are built, ensuring transparency and zero surprises.",
    activities: [
      "Next.js 14 App Router / React 18 frontend implementation with strict TypeScript",
      "Custom WordPress PHP theme architecture, custom post types & lightweight Gutenberg blocks",
      "RESTful API endpoints, MongoDB/Prisma database integration, and Next.js Server Actions",
      "Generative AI API integrations, dynamic lead capture funnels & automated email notifications",
      "Weekly staging preview deployments on Vercel with direct feedback loops",
    ],
    deliverables: [
      "Live Password-Protected Staging Preview URL",
      "Clean, Documented Source Code (TypeScript / PHP)",
      "Bi-Weekly Progress Demos & Feature Walkthroughs",
    ],
    tools: ["Next.js", "React", "TypeScript", "Node.js", "MongoDB", "WordPress", "Vercel"],
  },
  {
    step: "04",
    title: "Core Web Vitals Speed & Technical SEO Tuning",
    tag: "Phase 04 // Hardening & Optimization",
    duration: "Days 20 — 25",
    icon: Gauge,
    overview:
      "Rigorous performance tuning and search engine optimization to guarantee sub-second load times, 90+ Core Web Vitals on mobile and desktop, and complete technical SEO readiness for Google indexing.",
    activities: [
      "Core Web Vitals performance tuning targeting 90+ mobile & desktop Google Lighthouse scores",
      "Cross-browser and cross-device testing across Chrome, Safari, Firefox, iOS, and Android",
      "Technical SEO auditing: OpenGraph tags, JSON-LD structured schema, XML sitemaps & robots.txt",
      "Form validation, SSL security headers, image WebP compression, and CDN caching rules",
    ],
    deliverables: [
      "90+ Lighthouse Performance & Accessibility Report",
      "Complete Technical SEO & Metadata Audit",
      "Cross-Device QA Verification Sign-off",
    ],
    tools: ["Google PageSpeed", "Lighthouse", "GTmetrix", "Chrome DevTools"],
  },
  {
    step: "05",
    title: "Production Launch, Handover & 30-Day Care",
    tag: "Phase 05 // Deployment & Warranty",
    duration: "Launch Day + 30 Days",
    icon: Rocket,
    overview:
      "Seamless zero-downtime deployment to production infrastructure, custom domain routing, recorded CMS admin walkthrough, full repository handover, and dedicated post-launch warranty support.",
    activities: [
      "Zero-downtime production deployment to Vercel, VPS, or cloud host",
      "Custom domain routing, SSL certificate installation, and DNS records setup",
      "Recorded video walkthrough (Loom) explaining content editing and CMS management",
      "Full GitHub repository transfer and 100% code ownership handover",
      "30-day post-launch warranty for bug fixes, performance monitoring, and support",
    ],
    deliverables: [
      "Live Production Website (HTTPS / Custom Domain)",
      "Video Walkthrough Training Guide for Content Updates",
      "100% Repository & Source Asset Ownership",
      "30 Days of Complimentary Post-Launch Support",
    ],
    tools: ["Vercel", "Cloudflare", "AWS", "Loom", "GitHub"],
  },
];

const guarantees = [
  {
    title: "Direct Communication",
    desc: "No middlemen or account managers. You work directly with the engineer designing and building your product.",
    icon: MessageSquare,
  },
  {
    title: "100% Code Ownership",
    desc: "You retain complete ownership of all source code, design files, Figma links, and assets with zero vendor lock-in.",
    icon: FileCode2,
  },
  {
    title: "Performance First (90+ Vitals)",
    desc: "Every website is engineered for sub-second load times, lightweight bundles, and guaranteed 90+ Core Web Vitals.",
    icon: Zap,
  },
  {
    title: "Guaranteed Milestones",
    desc: "Fixed project scope, clear phase deadlines, transparent pricing, and predictable delivery schedules.",
    icon: Clock,
  },
];

const faqs = [
  {
    q: "How long does a typical Next.js or WordPress website project take?",
    a: "A standard Next.js web application or WordPress business website typically takes 2 to 4 weeks from initial discovery to live production. Poster design packages and Figma UI prototypes can be delivered in as little as 24 to 72 hours.",
  },
  {
    q: "How do we collaborate and monitor progress during development?",
    a: "We collaborate via email, WhatsApp, or Slack with scheduled video checkpoints. You receive a live staging URL on Vercel so you can view, test, and provide feedback on real progress throughout each sprint.",
  },
  {
    q: "Can you help me choose between Next.js and WordPress for my website?",
    a: "Yes! During Phase 01 (Discovery), we analyze your project needs. If you need dynamic web apps, interactive tools, AI integrations, or custom SaaS features, Next.js is ideal. If you need a content-heavy business site, blog, or standard e-commerce with easy non-technical editing, WordPress is a great fit.",
  },
  {
    q: "What is included in the Poster Making service?",
    a: "We design both Product-Based posters (e-commerce launches, product spotlight banners, discounts) and Service-Based posters (agency promotions, webinar announcements, event ads). Assets are provided in multiple aspect ratios (1:1, 4:5, 9:16) along with print-ready 300 DPI CMYK files.",
  },
  {
    q: "What post-launch support is included after the website goes live?",
    a: "All projects include 30 days of complimentary post-launch warranty support for bug fixes, tweaks, and monitoring. We also provide ongoing monthly maintenance packages for updates, backups, speed monitoring, and security.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function ProcessPage() {
  return (
    <div className="flex flex-col min-h-screen relative selection:bg-accent selection:text-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-surface border border-border text-xs font-mono text-text-muted hover:text-text-primary hover:border-text-muted transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Page Hero Header */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs text-accent">03 //</span>
              <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
                Development Lifecycle &amp; Methodology
              </span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-text-primary tracking-tight mb-4">
              Website Engineering &amp; Creative Process
            </h1>
            <p className="text-base sm:text-lg text-text-muted max-w-3xl leading-relaxed">
              A transparent, milestone-driven workflow designed to ship high-performance websites and visual creative assets on time, on budget, and fully optimized for Google search rankings.
            </p>
          </div>

          {/* Process Timeline Steps */}
          <div className="space-y-8 mb-24">
            {phases.map((phase, idx) => {
              const Icon = phase.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-surface border border-border p-6 sm:p-8 hover:border-border-subtle transition-all"
                >
                  {/* Top Bar of Card */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border/80 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-accent-muted border border-accent/30 flex items-center justify-center text-accent font-mono font-bold text-lg">
                        {phase.step}
                      </div>
                      <div>
                        <span className="font-mono text-xs text-accent">{phase.tag}</span>
                        <h2 className="font-display font-bold text-xl sm:text-2xl text-text-primary">
                          {phase.title}
                        </h2>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-elevated border border-border text-xs font-mono text-text-muted self-start sm:self-auto">
                      <Clock className="w-3.5 h-3.5 text-accent" />
                      <span>{phase.duration}</span>
                    </div>
                  </div>

                  {/* Body: Overview */}
                  <p className="text-sm sm:text-base text-text-muted leading-relaxed font-sans mb-8">
                    {phase.overview}
                  </p>

                  {/* Two Column Grid: Activities & Deliverables */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4">
                    {/* Left: What We Do */}
                    <div className="lg:col-span-7 space-y-3">
                      <h3 className="font-mono text-xs uppercase tracking-wider text-text-subtle font-semibold">
                        Key Activities &amp; Focus
                      </h3>
                      <ul className="space-y-2.5">
                        {phase.activities.map((act, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-primary/90">
                            <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{act}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right: Concrete Outputs & Stack */}
                    <div className="lg:col-span-5 space-y-5 bg-surface-elevated p-5 rounded-xl border border-border/80">
                      <div>
                        <h3 className="font-mono text-xs uppercase tracking-wider text-text-subtle font-semibold mb-2.5">
                          Phase Deliverables
                        </h3>
                        <ul className="space-y-2">
                          {phase.deliverables.map((deliv, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2 text-xs text-text-primary font-mono">
                              <span className="text-accent font-bold">›</span>
                              <span>{deliv}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-3 border-t border-border/60">
                        <h4 className="font-mono text-[11px] uppercase tracking-wider text-text-subtle mb-2">
                          Tools &amp; Stack
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {phase.tools.map((t, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2 py-0.5 rounded bg-surface border border-border text-[11px] font-mono text-text-muted"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Collaboration Guarantees */}
          <div className="mb-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-mono text-accent mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Working Principles</span>
              </div>
              <h2 className="font-display font-bold text-3xl text-text-primary tracking-tight mb-3">
                Built On Trust, Performance &amp; Transparency
              </h2>
              <p className="text-sm text-text-muted">
                Core standards maintained across every client project, regardless of size or complexity.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {guarantees.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-xl bg-surface border border-border hover:border-accent/40 transition-colors"
                  >
                    <div className="p-2.5 rounded-lg bg-surface-elevated border border-border w-fit text-accent mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-text-muted leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Frequently Asked Questions */}
          <div className="mb-24">
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs text-accent">FAQ //</span>
                <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
                  Client Inquiries
                </span>
              </div>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-text-primary tracking-tight">
                Frequently Asked Questions About Services &amp; Delivery
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-surface border border-border hover:border-border-subtle transition-colors"
                >
                  <h3 className="font-display font-bold text-base text-text-primary mb-2 flex items-start gap-2.5">
                    <span className="text-accent font-mono text-sm">Q.</span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed pl-6 font-sans">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA Banner */}
          <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-surface via-surface to-surface-elevated border border-border flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="font-display font-bold text-2xl text-text-primary mb-2">
                Ready to build with a proven engineering process?
              </h3>
              <p className="text-sm text-text-muted max-w-xl">
                Let&apos;s schedule a discovery discussion to break down your requirements, milestones, and deliver a custom proposal.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-accent text-bg font-mono text-sm font-semibold hover:bg-accent-hover active:scale-[0.98] transition-all shadow-md shadow-accent/20 shrink-0"
            >
              <span>Get in touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
