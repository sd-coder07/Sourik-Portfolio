import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <Logo size="md" />

          {/* Social Links */}
          <div className="flex items-center gap-4 text-xs font-mono text-text-muted">
            <a
              href="https://github.com/sd-coder07"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href="https://linkedin.com/in/sourik-das"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              href="mailto:dassourik558@gmail.com"
              className="hover:text-accent transition-colors"
            >
              Email
            </a>
          </div>

          {/* Back to top */}
          <a
            href="#"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface border border-border text-xs font-mono text-text-muted hover:text-text-primary hover:border-text-muted transition-colors"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-accent" />
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-text-subtle">
          <p>© {new Date().getFullYear()} Sourik Das. All rights reserved.</p>
          <p>Engineered with Next.js 14 App Router &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
