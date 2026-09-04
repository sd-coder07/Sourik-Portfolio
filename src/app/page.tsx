import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";
import { Testimonials } from "@/components/Testimonials";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Sourik Das — Full Stack Next.js & WordPress Web Developer | Web Engineering Services",
  description:
    "Hire Sourik Das, full-stack web developer and designer. Expert Next.js web application development, custom WordPress websites (25+ shipped, 90+ Core Web Vitals), product & service poster designs, and Figma UI/UX prototyping.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative selection:bg-accent selection:text-bg">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Services Section */}
        <Services />

        {/* 3. Work / Projects Grid */}
        <Work />

        {/* 4. Client Testimonials & Social Proof */}
        <Testimonials />

        {/* 5. Process Workflow */}
        <Process />

        {/* 6. About & Experience */}
        <About />

        {/* 7. Final Call-To-Action (CTA) Section */}
        <section className="py-20 border-t border-border/80 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative p-8 sm:p-14 rounded-2xl bg-gradient-to-br from-surface via-surface to-surface-elevated border border-border overflow-hidden shadow-2xl">
              {/* Background radial glow */}
              <div className="absolute -top-16 -right-16 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none -z-10" />

              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span className="font-mono text-xs text-accent uppercase tracking-widest">
                      Ready To Ship?
                    </span>
                  </div>
                  <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary tracking-tight mb-4">
                    Have a project in mind? Let&apos;s build something great.
                  </h2>
                  <p className="text-sm sm:text-base text-text-muted leading-relaxed mb-6">
                    From custom full-stack Next.js web applications to high-converting WordPress websites (90+ Core Web Vitals) and tailored product or service poster designs. Fast turnaround, direct communication, and guaranteed milestones.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-text-subtle">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" /> Available for new client projects
                    </span>
                    <span>•</span>
                    <span>Direct engineer contact</span>
                    <span>•</span>
                    <span>24h proposal turnaround</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-accent text-bg font-mono text-sm font-bold hover:bg-accent-hover active:scale-[0.98] transition-all shadow-lg shadow-accent/20"
                  >
                    <span>Start Your Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="mailto:dassourik558@gmail.com"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-surface border border-border text-text-primary font-mono text-xs font-medium hover:border-accent hover:text-accent hover:bg-surface-elevated transition-colors"
                  >
                    <span>dassourik558@gmail.com</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-text-muted" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
