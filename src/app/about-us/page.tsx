import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { About } from "@/components/About";
import { 
  ArrowLeft, 
  ArrowRight, 
  Zap,
  Terminal,
  Layers,
  HeartHandshake
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Sourik Das — Full Stack Next.js & WordPress Developer | B.Tech CSE",
  description:
    "Learn about Sourik Das, full-stack web developer at Dronahost with 25+ shipped production websites. Specializing in Next.js web applications, 90+ Core Web Vitals WordPress builds, poster design, and UI/UX.",
  keywords: [
    "About Sourik Das",
    "Full Stack Web Developer India",
    "Next.js Developer Kolkata",
    "WordPress Developer India",
    "Dronahost Web Developer",
    "Computer Science Engineer",
    "Freelance React Developer",
    "Web Performance Consultant",
  ],
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About Sourik Das — Full Stack Next.js & WordPress Developer",
    description:
      "25+ websites shipped. Full-stack developer at Dronahost specializing in Next.js, WordPress, poster design, and UI/UX systems.",
    url: "https://sourikdas.dev/about-us",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Sourik Das — Full Stack Next.js & WordPress Developer",
    description:
      "25+ websites shipped. Full-stack developer at Dronahost specializing in Next.js, WordPress, poster design, and UI/UX systems.",
  },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Sourik Das",
    jobTitle: "Full Stack Web Developer & Designer",
    worksFor: {
      "@type": "Organization",
      name: "Dronahost",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Techno Engineering College Banipur",
    },
    knowsAbout: [
      "Next.js Web Development",
      "WordPress Development & Speed Optimization",
      "React.js",
      "TypeScript",
      "Poster Design & Promotional Creatives",
      "Figma UI/UX Design",
      "Core Web Vitals",
      "Technical SEO",
    ],
    url: "https://sourikdas.dev",
    sameAs: [
      "https://github.com/sd-coder07",
      "https://linkedin.com/in/sourik-das",
    ],
  },
};

export default function AboutUsPage() {
  const philosophies = [
    {
      title: "Production Over Perfection",
      desc: "Delivering real, functional, ultra-fast web systems that solve actual business challenges without bloat or excessive dependencies.",
      icon: Zap,
    },
    {
      title: "Clean Architecture & Strict Type Safety",
      desc: "Strict TypeScript, structured state management, and clear API boundaries that guarantee long-term codebase reliability and seamless maintenance.",
      icon: Terminal,
    },
    {
      title: "Design-Driven Engineering",
      desc: "Bridging the gap between Figma wireframes, marketing creatives, and high-performance React code with zero aesthetic compromises.",
      icon: Layers,
    },
    {
      title: "Transparent Collaboration",
      desc: "Daily progress checkpoints, fixed milestones, direct communication, and comprehensive documentation with zero guesswork.",
      icon: HeartHandshake,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen relative selection:bg-accent selection:text-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
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

          {/* Hero Header */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs text-accent">04 //</span>
              <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
                Profile &amp; Credentials
              </span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-text-primary tracking-tight mb-4">
              About Sourik Das — Full Stack Developer
            </h1>
            <p className="text-base sm:text-lg text-text-muted max-w-3xl leading-relaxed">
              Full-Stack Web Developer &amp; Visual Designer based in Kolkata, India. Currently engineering scalable web platforms at Dronahost, crafting high-performance Next.js web applications, and building turnkey WordPress solutions for clients worldwide.
            </p>
          </div>

          {/* Quick Bio Summary Card */}
          <div className="mb-16 p-8 rounded-2xl bg-surface border border-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">
                  [Current Role]
                </div>
                <div className="font-display font-bold text-lg text-text-primary">
                  Full Stack Web Developer
                </div>
                <div className="text-xs text-text-muted font-mono">
                  @ Dronahost (Mar 2026 — Present)
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">
                  [Education]
                </div>
                <div className="font-display font-bold text-lg text-text-primary">
                  B.Tech in Computer Science
                </div>
                <div className="text-xs text-text-muted font-mono">
                  Techno Engineering College Banipur (2022 — 2026)
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">
                  [Production Metric]
                </div>
                <div className="font-display font-bold text-lg text-text-primary">
                  25+ Websites Shipped
                </div>
                <div className="text-xs text-text-muted font-mono">
                  Next.js, WordPress 90+ Vitals, UI Kits &amp; Posters
                </div>
              </div>
            </div>
          </div>

          {/* Engineering Experience, Education & Skills Section */}
          <div className="mb-20">
            <About />
          </div>

          {/* Core Working Philosophy */}
          <div className="mb-20">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs text-accent">05 //</span>
              <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
                Working Principles
              </span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-text-primary tracking-tight mb-8">
              Engineering &amp; Design Standards
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {philosophies.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-xl bg-surface border border-border hover:border-accent/50 transition-colors"
                  >
                    <div className="p-2.5 rounded-lg bg-surface-elevated border border-border w-fit text-accent mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-surface via-surface to-surface-elevated border border-border flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="font-display font-bold text-2xl text-text-primary mb-2">
                Interested in working together?
              </h3>
              <p className="text-sm text-text-muted max-w-xl">
                Available for full-stack Next.js engineering, custom WordPress builds, product &amp; service poster design packages, and UI/UX design.
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
