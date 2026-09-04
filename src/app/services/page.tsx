import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { PosterShowcase } from "@/components/PosterShowcase";
import { SERVICES } from "@/data/services";
import { 
  ArrowLeft, 
  ArrowRight, 
  Palette, 
  Layout, 
  Code2, 
  Globe2 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Web Development, WordPress & Poster Design Services | Sourik Das",
  description:
    "Hire full-stack developer Sourik Das. Professional web engineering & creative services: custom Next.js web applications, 90+ Core Web Vitals WordPress sites, high-CTR product & service poster designs, and modern Figma UI/UX prototyping.",
  keywords: [
    "Next.js web development services",
    "WordPress development services India",
    "WordPress speed optimization",
    "Core Web Vitals 90+",
    "Product poster design",
    "Service poster design",
    "Social media ad creative design",
    "Website UI UX design Figma",
    "Canva brand templates",
    "Freelance full-stack engineer",
    "Custom web application developer",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Web Development, WordPress & Poster Design Services | Sourik Das",
    description:
      "Custom Next.js web applications, 90+ Core Web Vitals WordPress websites, product & service poster designs, and Figma UI/UX prototyping.",
    url: "https://sourikdas.dev/services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development, WordPress & Poster Design Services | Sourik Das",
    description:
      "Custom Next.js web applications, 90+ Core Web Vitals WordPress websites, product & service poster designs, and Figma UI/UX.",
  },
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Web Development & Creative Services by Sourik Das",
  itemListElement: SERVICES.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.summary,
      provider: {
        "@type": "Person",
        name: "Sourik Das",
      },
    },
  })),
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen relative selection:bg-accent selection:text-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
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
              <span className="font-mono text-xs text-accent">01 //</span>
              <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
                Full-Service Capabilities &amp; Solutions
              </span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-text-primary tracking-tight mb-4">
              Web Development, WordPress &amp; Creative Design Services
            </h1>
            <p className="text-base sm:text-lg text-text-muted max-w-3xl leading-relaxed">
              Full-stack Next.js web application development, turnkey WordPress business websites with guaranteed 90+ Core Web Vitals, high-conversion product &amp; service promotional poster designs, and modern Figma UI/UX prototyping.
            </p>

            {/* Quick Service Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
              <div className="p-3.5 rounded-lg bg-surface border border-border flex items-center gap-3">
                <div className="p-2 rounded bg-accent-muted text-accent shrink-0">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono text-text-primary font-semibold">Next.js Dev</div>
                  <div className="text-[11px] text-text-subtle font-mono">React / SSR / AI SaaS</div>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-surface border border-border flex items-center gap-3">
                <div className="p-2 rounded bg-accent-muted text-accent shrink-0">
                  <Globe2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono text-text-primary font-semibold">WordPress Dev</div>
                  <div className="text-[11px] text-text-subtle font-mono">25+ Builds / 90+ Vitals</div>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-surface border border-border flex items-center gap-3">
                <div className="p-2 rounded bg-accent-muted text-accent shrink-0">
                  <Palette className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono text-text-primary font-semibold">Poster Making</div>
                  <div className="text-[11px] text-text-subtle font-mono">Product &amp; Service</div>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-surface border border-border flex items-center gap-3">
                <div className="p-2 rounded bg-accent-muted text-accent shrink-0">
                  <Layout className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono text-text-primary font-semibold">Website Design</div>
                  <div className="text-[11px] text-text-subtle font-mono">Figma &amp; Canva UI</div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Core Services Grid */}
          <div className="mb-24">
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-border">
              <h2 className="font-display font-bold text-2xl text-text-primary">
                Core Service Catalog &amp; Technical Deliverables
              </h2>
              <span className="font-mono text-xs text-text-muted">4 Focused Disciplines</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SERVICES.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>

          {/* Dedicated Section: Poster Making Demo Works */}
          <PosterShowcase />

          {/* Bottom CTA Banner */}
          <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-surface via-surface to-surface-elevated border border-border flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="font-display font-bold text-2xl text-text-primary mb-2">
                Ready to discuss your project requirements?
              </h3>
              <p className="text-sm text-text-muted max-w-xl">
                Whether you need a full-stack Next.js web application, a high-speed WordPress build, or custom poster design packages, let&apos;s talk deliverables, timelines, and milestones.
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
