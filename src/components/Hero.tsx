import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Sparkles, Layers } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen bg-gradient-to-b from-[#e3521b] via-[#cf400c] to-[#b73305] text-white overflow-hidden flex flex-col justify-between select-none">
      {/* 1. Subtle Architectural Grid Lines with Crosshair (+) Intersections */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Horizontal grid lines */}
        <div className="absolute top-[20%] left-0 right-0 h-px bg-white/10" />
        <div className="absolute top-[65%] left-0 right-0 h-px bg-white/10" />

        {/* Vertical grid lines */}
        <div className="absolute top-0 bottom-0 left-[6%] lg:left-[12%] w-px bg-white/10" />
        <div className="absolute top-0 bottom-0 right-[6%] lg:right-[12%] w-px bg-white/10" />

        {/* Crosshair (+) marks at key intersections like reference */}
        <span className="absolute top-[20%] left-[6%] lg:left-[12%] -translate-x-1/2 -translate-y-1/2 font-mono text-sm text-white/40 select-none">
          +
        </span>
        <span className="absolute top-[20%] right-[6%] lg:right-[12%] -translate-x-1/2 -translate-y-1/2 font-mono text-sm text-white/40 select-none">
          +
        </span>
        <span className="absolute top-[65%] left-[6%] lg:left-[12%] -translate-x-1/2 -translate-y-1/2 font-mono text-sm text-white/40 select-none">
          +
        </span>
        <span className="absolute top-[65%] right-[6%] lg:right-[12%] -translate-x-1/2 -translate-y-1/2 font-mono text-sm text-white/40 select-none">
          +
        </span>
      </div>

      {/* 2. Massive Background Watermark Text "SOURIK" Across the Top */}
      <div className="absolute top-12 sm:top-8 lg:top-4 left-0 right-0 flex justify-center pointer-events-none z-[1] overflow-hidden">
        <span className="font-display font-black text-[22vw] leading-none tracking-tighter text-black/10 lg:text-black/[0.12] uppercase select-none">
          SOURIK
        </span>
      </div>

      {/* 3. CENTER: Massive Hero Portrait Rising From Bottom Edge (Dominates the Hero) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-[48%] lg:-translate-x-1/2 z-10 pointer-events-none flex justify-center items-end h-[68vh] sm:h-[78vh] lg:h-[88vh] xl:h-[93vh] max-h-[960px] w-auto">
        <Image
          src="/SD Pic.png"
          alt="Sourik Das — Full Stack Web Developer & Designer"
          width={750}
          height={1050}
          priority
          className="h-full w-auto object-contain object-bottom drop-shadow-[0_25px_60px_rgba(0,0,0,0.55)] select-none"
        />
      </div>

      {/* 4. FOREGROUND CONTENT (z-20) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-h-[92vh] lg:min-h-screen pt-28 pb-10 sm:pb-12 flex flex-col justify-between pointer-events-none">

        {/* TOP ROW: Left Headline & Subhead / Right Top Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Top Left: Headline & Bio */}
          <div className="lg:col-span-4 space-y-3.5 max-w-[340px] sm:max-w-[360px] pointer-events-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/25 border border-white/20 text-xs font-mono text-white/90 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Select Projects</span>
            </div>

            <h1 className="font-display font-bold text-xl sm:text-2xl lg:text-[1.90rem] text-white tracking-tight leading-snug">
              Full-Stack Web Developer —{" "}
              <span className="text-white underline decoration-white/40 decoration-2 underline-offset-4">
                Next.js for products,
              </span>{" "}
              <span>WordPress for business.</span>
            </h1>

            <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-sans font-normal">
              Professional web engineering and digital design services. Specialized in high-performance Next.js web applications, high-speed WordPress websites (25+ shipped, 90+ Core Web Vitals), custom product &amp; service poster designs, and Figma UI/UX systems.
            </p>
          </div>

          {/* Spacer for Portrait */}
          <div className="hidden lg:block lg:col-span-4" />

          {/* Top Right: Dark Framed Showcase Card */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end pointer-events-auto">
            <div className="w-full max-w-[340px] bg-[#12110F]/95 text-white p-4 sm:p-5 rounded-2xl shadow-2xl border border-white/20 space-y-3 backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-md bg-[#e3521b]/20 text-[#ff6b35]">
                    <Layers className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-200">
                    Production Track Record
                  </span>
                </div>
                <span className="font-mono text-[10px] text-zinc-400 font-semibold px-2 py-0.5 rounded bg-white/10 border border-white/10">
                  Verified
                </span>
              </div>

              {/* Stats Highlights */}
              <div className="space-y-1.5">
                <div className="flex items-start justify-between gap-2 p-2 rounded-lg bg-white/5 border border-white/10">
                  <div>
                    <div className="font-display font-bold text-xs sm:text-sm text-white">
                      25+ Production Sites
                    </div>
                    <div className="text-[11px] text-zinc-400 font-sans">
                      Shipped &amp; 90+ Vitals
                    </div>
                  </div>
                  <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-bold shrink-0">
                    Live
                  </span>
                </div>

                <div className="flex items-start justify-between gap-2 p-2 rounded-lg bg-white/5 border border-white/10">
                  <div>
                    <div className="font-display font-bold text-xs sm:text-sm text-white">
                      Full-Stack &amp; Design
                    </div>
                    <div className="text-[11px] text-zinc-400 font-sans">
                      4 Service Disciplines
                    </div>
                  </div>
                  <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-mono font-bold shrink-0">
                    Active
                  </span>
                </div>
              </div>

              {/* Monospace Pill */}
              <div className="px-2.5 py-1.5 rounded-md bg-white/5 text-zinc-300 font-mono text-[11px] font-medium border border-white/10 flex items-center gap-1.5">
                <span className="text-[#ff6b35] font-bold">&gt;</span>
                <span className="truncate">Next.js · WordPress · Poster Making · Figma UI/UX</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: Left Giant Name "SOURIK" & Right "Let's Talk" Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pt-8">
          {/* Bottom Left: ©2026 + Giant SOURIK (Matches the Michael reference photo style) */}
          <div className="lg:col-span-6 pointer-events-auto">
            <div className="font-mono text-xs tracking-wider text-white/75 font-semibold mb-1">
              &copy;{new Date().getFullYear()}
            </div>
            <div className="font-display font-black text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-white tracking-tighter uppercase leading-none drop-shadow-2xl">
              SOURIK
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-2" />

          {/* Bottom Right: Dark "Let's Talk" Card with CTA Buttons (Matches Reference Card) */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end pointer-events-auto">
            <div className="w-full max-w-[340px] bg-[#12110F]/95 border border-white/20 p-4 sm:p-5 rounded-2xl shadow-2xl backdrop-blur-md space-y-3.5">
              {/* Card Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#e3521b]" />
                  <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                    Let&apos;s Talk
                  </span>
                </div>
                <Sparkles className="w-3.5 h-3.5 text-[#e3521b]" />
              </div>

              {/* Profile Row */}
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-xl overflow-hidden border-2 border-[#e3521b] shrink-0 bg-zinc-900">
                  <Image
                    src="/SD Pic.png"
                    alt="Sourik Das"
                    width={55}
                    height={55}
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <div className="font-display font-bold text-base text-white">
                    Sourik Das
                  </div>
                  <div className="text-xs text-zinc-400 font-mono">
                    Full-Stack Web Developer
                  </div>
                </div>
              </div>

              {/* Managed CTA Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-xs font-semibold transition-all active:scale-[0.98]"
                >
                  <span>Explore Services</span>
                  <ArrowDown className="w-3.5 h-3.5 text-white/80" />
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-white text-zinc-950 hover:bg-zinc-100 font-mono text-xs font-bold transition-all shadow-md active:scale-[0.98] border border-black"
                >
                  <span>Get in touch</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-950" />
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
