import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Contact — Sourik Das | Full Stack Developer",
  description: "Get in touch with Sourik Das for Next.js applications, WordPress websites, and custom engineering projects.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen relative selection:bg-accent selection:text-bg">
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
