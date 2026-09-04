"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "/services", id: "services" },
    { label: "Work", href: "/work", id: "work" },
    { label: "Process", href: "/process", id: "process" },
    { label: "About", href: "/about-us", id: "about" },
  ];

  const isLinkActive = (link: { href: string; id: string }) => {
    if (pathname === "/") return false;
    if (link.href === "/services" && pathname === "/services") return true;
    if (link.href === "/work" && pathname === "/work") return true;
    if (link.href === "/process" && pathname === "/process") return true;
    if (link.href === "/about-us" && (pathname === "/about-us" || pathname === "/about")) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/85 backdrop-blur-md border-b border-border py-3.5 shadow-lg shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark / Home Button */}
          <Link
            href="/"
            className="group focus:outline-none"
            aria-label="Sourik Das — Home"
          >
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-surface/60 border border-border/80 px-3 py-1.5 rounded-full backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1 text-xs font-mono transition-colors rounded-full ${
                    isActive
                      ? "text-accent bg-accent-muted font-medium"
                      : "text-text-muted hover:text-text-primary hover:bg-surface-elevated"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-accent text-bg font-mono text-xs font-semibold hover:bg-accent-hover active:scale-[0.98] transition-all shadow-sm shadow-accent/20 border border-black"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md bg-surface border border-border text-text-primary hover:border-text-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Sheet */}
        {isOpen && (
          <div className="md:hidden mt-3 p-4 rounded-lg bg-surface border border-border shadow-xl animate-fadeInUp">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2 text-sm font-mono rounded-md transition-colors ${
                    isLinkActive(link)
                      ? "bg-accent-muted text-accent font-medium"
                      : "text-text-muted hover:text-text-primary hover:bg-surface-elevated"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-border mt-2">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-md bg-accent text-bg font-mono text-xs font-semibold hover:bg-accent-hover transition-colors border border-black"
                >
                  <span>Get in touch</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
