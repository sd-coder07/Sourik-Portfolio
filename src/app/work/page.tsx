import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WorkDirectory } from "@/components/WorkDirectory";
import { Testimonials } from "@/components/Testimonials";
import { FEATURED_PROJECTS } from "@/data/projects";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio & Shipped Projects | Next.js & WordPress Case Studies — Sourik Das",
  description:
    "Explore 25+ shipped production websites. Live case studies in Next.js web applications, custom WooCommerce stores, enterprise WordPress sites, and 90+ Core Web Vitals speed optimization.",
  keywords: [
    "Next.js portfolio",
    "WordPress portfolio",
    "Full stack developer case studies",
    "WooCommerce developer projects",
    "Core Web Vitals optimization results",
    "Next.js App Router case studies",
    "Freelance web developer portfolio",
    "Web design portfolio India",
  ],
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Portfolio & Shipped Projects | Next.js & WordPress Case Studies — Sourik Das",
    description:
      "Explore 25+ production websites shipped: Next.js SaaS platforms, enterprise WordPress websites, and high-performance client builds.",
    url: "https://sourikdas.dev/work",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio & Shipped Projects | Next.js & WordPress Case Studies — Sourik Das",
    description:
      "Explore 25+ production websites shipped: Next.js SaaS platforms, enterprise WordPress websites, and high-performance client builds.",
  },
};

const portfolioJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Shipped Projects Portfolio by Sourik Das",
  itemListElement: FEATURED_PROJECTS.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "CreativeWork",
      name: project.title,
      description: project.description,
      url: project.liveUrl,
      creator: {
        "@type": "Person",
        name: "Sourik Das",
      },
    },
  })),
};

export default function WorkPage() {
  return (
    <div className="flex flex-col min-h-screen relative selection:bg-accent selection:text-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioJsonLd) }}
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

          {/* Filter and Grid Directory */}
          <WorkDirectory />

          {/* Client Testimonials & Production Reviews */}
          <Testimonials className="mb-16 border-t-0 pt-0" />

          {/* Bottom CTA Card */}
          <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-surface via-surface to-surface-elevated border border-border flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="font-display font-bold text-2xl text-text-primary mb-2">
                Need a tailored website built from scratch?
              </h3>
              <p className="text-sm text-text-muted max-w-xl">
                Whether you need a high-performance Next.js web application, a speed-optimized WordPress website, or creative promotional poster assets, let&apos;s build it together.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-accent text-bg font-mono text-sm font-semibold hover:bg-accent-hover active:scale-[0.98] transition-all shadow-md shadow-accent/20 shrink-0"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
