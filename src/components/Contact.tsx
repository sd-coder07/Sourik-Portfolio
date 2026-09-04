"use client";

import { useState } from "react";
import { Mail, Github, Linkedin, Send, CheckCircle2, Copy, ArrowUpRight, AlertCircle, Loader2 } from "lucide-react";

interface ContactProps {
  isStandalone?: boolean;
}

export function Contact({ isStandalone = false }: ContactProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    projectType: "Next.js App",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailAddress = "dassourik558@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    // Client-side quick check
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus("success");
      setFormState({
        name: "",
        email: "",
        projectType: "Next.js App",
        message: "",
      });
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred. Please reach out via email directly.");
    }
  };

  return (
    <section id="contact" className={`py-12 ${isStandalone ? "" : "border-t border-border/80"} scroll-mt-20`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-accent">05 //</span>
            <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
              Hire Developer &amp; Get In Touch
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-text-primary tracking-tight mb-3">
            Ready to start your project? Let&apos;s build.
          </h2>
          <p className="text-base text-text-muted max-w-2xl">
            Whether you need a full-stack Next.js web application, a high-speed WordPress website (guaranteed 90+ Core Web Vitals), custom product &amp; service poster designs, or a modern Figma UI/UX prototype, send your project inquiry below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Links & Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Email Card */}
            <div className="p-6 rounded-xl bg-surface border border-border space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                <span className="font-mono text-xs text-text-muted uppercase tracking-wider">
                  Direct Channel
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-lg text-text-primary mb-1">
                  Email Me Directly
                </h3>
                <p className="text-xs text-text-muted font-sans mb-3">
                  I typically respond within 12–24 business hours.
                </p>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-bg border border-border">
                  <Mail className="w-4 h-4 text-accent shrink-0" />
                  <span className="font-mono text-xs text-text-primary truncate flex-1">
                    {emailAddress}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded hover:bg-surface-elevated text-text-muted hover:text-accent transition-colors"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              <a
                href={`mailto:${emailAddress}?subject=Freelance%20Project%20Inquiry`}
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-md bg-surface-elevated border border-border text-xs font-mono font-semibold text-text-primary hover:border-accent hover:text-accent transition-colors"
              >
                <span>Open in mail client</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Social & Professional Links */}
            <div className="p-6 rounded-xl bg-surface border border-border space-y-4">
              <span className="font-mono text-xs text-text-muted uppercase tracking-wider block">
                Connect on the Web
              </span>

              <div className="space-y-2.5">
                <a
                  href="https://github.com/sd-coder07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-bg border border-border hover:border-accent/60 group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-text-muted group-hover:text-accent transition-colors" />
                    <div>
                      <div className="font-display font-semibold text-xs text-text-primary">
                        GitHub
                      </div>
                      <div className="font-mono text-[11px] text-text-muted">
                        github.com/sd-coder07
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-accent transition-colors" />
                </a>

                <a
                  href="https://linkedin.com/in/sourik-das"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-bg border border-border hover:border-accent/60 group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-text-muted group-hover:text-accent transition-colors" />
                    <div>
                      <div className="font-display font-semibold text-xs text-text-primary">
                        LinkedIn
                      </div>
                      <div className="font-mono text-[11px] text-text-muted">
                        linkedin.com/in/sourik-das
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-accent transition-colors" />
                </a>
              </div>
            </div>

            {/* Location & Availability Note */}
            <div className="p-5 rounded-xl bg-surface/50 border border-border text-xs font-mono text-text-muted flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1 shrink-0" />
              <div>
                <span className="text-text-primary font-medium">Available for select client projects.</span>
                <p className="mt-0.5 text-text-subtle">
                  Timezone: IST (UTC+5:30) • Open to global clients, asynchronous collaboration &amp; fixed-milestone engagements.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl bg-surface border border-border">
              <h3 className="font-display font-bold text-xl text-text-primary mb-2">
                Project Inquiry &amp; Estimate Request
              </h3>
              <p className="text-xs text-text-muted font-sans mb-6">
                Fill out the project scope brief below. I will reply within 24 hours with architectural suggestions, milestone timelines, and a transparent quote.
              </p>

              {status === "success" ? (
                <div className="p-6 rounded-lg bg-surface-elevated border border-accent/40 text-center space-y-3 animate-fadeInUp">
                  <div className="w-12 h-12 rounded-full bg-accent/20 border border-accent flex items-center justify-center mx-auto text-accent">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-text-primary">
                    Message Received!
                  </h4>
                  <p className="text-xs text-text-muted max-w-md mx-auto">
                    Thanks for reaching out! I have received your project details and will reply to{" "}
                    <span className="text-text-primary font-mono">{formState.email || "your email"}</span> within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-2 px-4 py-2 rounded bg-surface border border-border text-xs font-mono text-text-primary hover:border-accent transition-colors"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === "error" && (
                    <div className="p-3 rounded-md bg-red-950/40 border border-red-800/60 text-red-200 text-xs font-mono flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="block font-mono text-xs text-text-muted"
                      >
                        Your Name <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        placeholder="Alex Rivera"
                        className="w-full px-3.5 py-2.5 rounded-md bg-bg border border-border text-sm text-text-primary placeholder:text-text-subtle focus:outline-none focus:border-accent font-sans"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="block font-mono text-xs text-text-muted"
                      >
                        Your Email <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 rounded-md bg-bg border border-border text-sm text-text-primary placeholder:text-text-subtle focus:outline-none focus:border-accent font-sans"
                      />
                    </div>
                  </div>

                  {/* Project Type Dropdown */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="projectType"
                      className="block font-mono text-xs text-text-muted"
                    >
                      Service Category / Project Type <span className="text-accent">*</span>
                    </label>
                    <select
                      id="projectType"
                      value={formState.projectType}
                      onChange={(e) =>
                        setFormState({ ...formState, projectType: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-md bg-bg border border-border text-sm text-text-primary focus:outline-none focus:border-accent font-sans"
                    >
                      <option value="Next.js App">Next.js Web Application / SaaS / Product</option>
                      <option value="WordPress Website">WordPress Website / Business Site / WooCommerce</option>
                      <option value="Poster Design">Poster Making (Product or Service Based)</option>
                      <option value="Website Design">Website Design (Figma Prototype / Canva System)</option>
                      <option value="Full-Stack / Custom">Full-Stack Custom Project (MERN / Next.js + MongoDB)</option>
                      <option value="Not sure yet">Not sure yet / Need technical recommendation</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="block font-mono text-xs text-text-muted"
                    >
                      Project Scope &amp; Goals <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      placeholder="Tell me about your project, timeline, deliverables, and any reference websites..."
                      className="w-full px-3.5 py-2.5 rounded-md bg-bg border border-border text-sm text-text-primary placeholder:text-text-subtle focus:outline-none focus:border-accent font-sans resize-y"
                    />
                  </div>

                  {/* Submit Button (Signal Orange) */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-3 px-6 rounded-md bg-accent text-bg font-mono text-sm font-semibold hover:bg-accent-hover active:scale-[0.99] disabled:opacity-50 transition-all flex items-center justify-center gap-2 shadow-md shadow-accent/20"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending inquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Project Inquiry</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] font-mono text-text-subtle text-center pt-2">
                    Zero spam. Direct engineer-to-client communication only.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
