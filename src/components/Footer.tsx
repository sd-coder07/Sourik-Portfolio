import { ArrowUp, ArrowUpRight, Github, Instagram, Facebook, Linkedin, Mail } from "lucide-react";
import { Logo } from "./Logo";

function XIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function FiverrIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h.527v1.316zm-6.786 1.501h-3.359c.088.546.43.858 1.006.858.43 0 .732-.175.83-.487l1.425.4c-.351.848-1.22 1.364-2.255 1.364-1.748 0-2.549-1.355-2.549-2.515 0-1.14.703-2.505 2.45-2.505 1.856 0 2.471 1.384 2.471 2.408 0 .224-.01.37-.02.477zm-1.562-.945c-.04-.42-.342-.81-.889-.81-.508 0-.81.225-.908.81h1.797zM7.508 15.44h1.416l1.767-4.874h-1.62l-.86 2.837-.878-2.837H5.72l1.787 4.874zm-6.6 0H2.51v-3.558h1.524v3.558h1.591v-4.874H2.51v-.302c0-.332.235-.536.606-.536h.918V8.412H2.85c-1.162 0-1.943.712-1.943 1.755v.4H0v1.316h.908v3.558z" />
    </svg>
  );
}

function ContraIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.53257 4.1249C7.3761 5.8885 5.86224 7.39707 4.09025 8.54825C2.83892 9.4038 1.46713 10.0996 0.00488281 10.6031V11.0068H11.0004V0.0055542H10.6134C10.1069 1.47971 9.40224 2.86386 8.53213 4.1249H8.53257ZM12.9974 0.0055542V11.054H23.9942V10.6503C22.5324 10.1468 21.1615 9.45101 19.9089 8.59546C18.1386 7.44428 16.6234 5.93571 15.467 4.17211C14.5876 2.89783 13.8772 1.4978 13.3694 0.0055542H12.9974ZM23.9942 12.946H12.9974V23.9945H13.3694C13.8772 22.5027 14.5872 21.1022 15.467 19.8279C16.6234 18.0643 18.1391 16.5557 19.9089 15.4046C21.1615 14.5486 22.5324 13.8532 23.9942 13.3497V12.946ZM11.0008 23.9945V12.9932H0.00532404V13.3969C1.46713 13.9004 2.83936 14.5962 4.09069 15.4518C5.86224 16.6029 7.3761 18.112 8.53301 19.8751C9.40312 21.1362 10.1073 22.5199 10.6143 23.994H11.0013L11.0008 23.9945Z"
      />
    </svg>
  );
}

const socialAccounts = [
  {
    name: "GitHub",
    url: "https://github.com/sd-coder07",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/sourik-das/",
    icon: Linkedin,
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/SourikDas17274",
    icon: XIcon,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/sourik_das_/",
    icon: Instagram,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61572010961700",
    icon: Facebook,
  },
  {
    name: "Contra",
    url: "https://contra.com/sourik_das_itzcd1i0/work?r=sourik_das_itzcd1i0",
    icon: ContraIcon,
    badge: "Hire",
  },
  {
    name: "Fiverr",
    url: "https://www.fiverr.com/s/VrYe8gd",
    icon: FiverrIcon,
    badge: "Gigs",
  },
  {
    name: "Email",
    url: "mailto:dassourik558@gmail.com",
    icon: Mail,
  },
];

export function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header: Brand Info & Status / Back to top */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-border/60">
          <div>
            <Logo size="md" />
            <p className="mt-2 text-xs font-mono text-text-muted max-w-md">
              Full Stack Web Developer &amp; UI/UX Designer crafting high-performance digital products and scalable web solutions.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for work
            </span>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface border border-border text-xs font-mono text-text-muted hover:text-text-primary hover:border-text-muted transition-colors"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-accent" />
            </a>
          </div>
        </div>

        {/* Social Media & Freelance Network Links */}
        <div className="py-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-text-muted">
              Connect &amp; Follow Online
            </span>
            <span className="text-[11px] font-mono text-text-subtle">
              Direct inquiries, social channels &amp; freelance hire platforms
            </span>
          </div>

          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {socialAccounts.map((item) => {
              const Icon = item.icon;
              const isMail = item.url.startsWith("mailto:");
              return (
                <a
                  key={item.name}
                  href={item.url}
                  target={isMail ? undefined : "_blank"}
                  rel={isMail ? undefined : "noopener noreferrer"}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-surface border border-border text-xs font-mono text-text-muted hover:text-text-primary hover:border-accent hover:bg-surface-elevated transition-all group"
                >
                  <span className="text-text-muted group-hover:text-accent transition-colors">
                    <Icon className="w-4 h-4" />
                  </span>
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-accent/10 border border-accent/30 text-accent font-semibold leading-none">
                      {item.badge}
                    </span>
                  )}
                  <ArrowUpRight className="w-3.5 h-3.5 text-text-subtle group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-text-subtle">
          <p>© {new Date().getFullYear()} Sourik Das. All rights reserved.</p>
          <p>Engineered with Next.js 14 App Router &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
