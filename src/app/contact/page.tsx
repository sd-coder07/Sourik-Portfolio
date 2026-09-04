import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Sourik Das | Hire Next.js Developer & WordPress Specialist",
  description:
    "Get in touch with Sourik Das for full-stack Next.js web applications, custom WordPress websites (90+ Core Web Vitals), product & service poster designs, and Figma UI/UX. Receive a detailed proposal within 24 hours.",
  keywords: [
    "Hire Next.js developer",
    "Hire WordPress developer India",
    "Freelance web developer contact",
    "Request web development quote",
    "Hire React developer",
    "Custom poster design inquiry",
    "Figma UI UX designer contact",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Sourik Das | Hire Next.js Developer & WordPress Specialist",
    description:
      "Get in touch for custom Next.js web applications, 90+ Core Web Vitals WordPress builds, poster designs, and UI/UX projects. Fast 24-hour response.",
    url: "https://sourikdas.dev/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Sourik Das | Hire Next.js Developer & WordPress Specialist",
    description:
      "Get in touch for custom Next.js web applications, 90+ Core Web Vitals WordPress builds, poster designs, and UI/UX projects.",
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Sourik Das — Full Stack Developer",
  description:
    "Project inquiry and estimate request page for Next.js web apps, WordPress websites, poster design, and UI/UX prototyping.",
  url: "https://sourikdas.dev/contact",
  mainEntity: {
    "@type": "Person",
    name: "Sourik Das",
    email: "dassourik558@gmail.com",
    jobTitle: "Full Stack Web Developer & Designer",
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen relative selection:bg-accent selection:text-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <Navbar />

      <main className="flex-1 pt-28 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-surface border border-border text-xs font-mono text-text-muted hover:text-text-primary hover:border-text-muted transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Contact Section Content */}
        <Contact isStandalone={true} />
      </main>

      <Footer />
    </div>
  );
}
