import { Briefcase, GraduationCap, Award, Code, CheckCircle, ArrowUpRight } from "lucide-react";
import { EXPERIENCES, EDUCATION, CERTIFICATIONS, SKILL_CATEGORIES } from "@/data/experience";

export function About() {
  const primarySkills = [
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "WordPress",
    "Python",
    "AWS",
    "REST APIs",
  ];

  return (
    <section id="about" className="py-20 border-t border-border/80 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-accent">04 //</span>
            <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
              Background &amp; Credentials
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-text-primary tracking-tight mb-2">
            Engineering Experience
          </h2>
          <p className="text-base text-text-muted max-w-2xl">
            Real credibility signals. Background spanning production web development at Dronahost, Generative AI research, IBM cloud initiatives, and computer science fundamentals.
          </p>
        </div>

        {/* Primary Monospace Skills Strip */}
        <div className="mb-14 p-5 rounded-xl bg-surface border border-border">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Code className="w-4 h-4 text-accent" />
              <span className="font-mono text-xs text-text-primary uppercase tracking-wider font-semibold">
                Primary Stack:
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {primarySkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded bg-surface-elevated border border-border text-xs font-mono text-text-primary font-medium hover:border-accent hover:text-accent transition-colors"
                >
                  `{skill}`
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Work Experience & Internships (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="w-4 h-4 text-accent" />
              <h3 className="font-display font-bold text-xl text-text-primary">
                Work &amp; Professional Experience
              </h3>
            </div>

            <div className="space-y-4">
              {EXPERIENCES.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-surface border border-border hover:border-border-subtle transition-all"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-display font-bold text-base text-text-primary">
                        {exp.role}
                      </span>
                      <span className="text-text-subtle font-mono text-xs">@</span>
                      <span className="font-semibold text-sm text-text-primary">
                        {exp.company}
                      </span>
                    </div>
                    {exp.highlight ? (
                      <span className="px-2 py-0.5 rounded bg-accent text-bg font-mono text-[10px] font-bold">
                        {exp.highlight}
                      </span>
                    ) : (
                      <span className="font-mono text-xs text-text-muted">
                        {exp.period}
                      </span>
                    )}
                  </div>

                  {exp.highlight && (
                    <div className="font-mono text-xs text-text-muted mb-3">
                      {exp.period}
                    </div>
                  )}

                  <ul className="space-y-1.5 mb-4 text-xs text-text-muted font-sans leading-relaxed">
                    {exp.description.map((desc, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span className="text-accent shrink-0 font-mono mt-0.5">›</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/60">
                    {exp.skills.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded bg-surface-elevated text-[11px] font-mono text-text-subtle"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education, Certifications & Skills Matrix (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Education */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-accent" />
                <h3 className="font-display font-bold text-xl text-text-primary">
                  Education
                </h3>
              </div>

              {EDUCATION.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-surface border border-border"
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="font-display font-bold text-sm text-text-primary">
                      {edu.degree}
                    </h4>
                  </div>
                  <p className="text-xs font-mono text-text-muted mb-2">
                    {edu.institution} · <span className="text-accent">{edu.period}</span>
                  </p>
                  <p className="text-xs text-text-muted/90 leading-relaxed font-sans">
                    {edu.highlights}
                  </p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-accent" />
                <h3 className="font-display font-bold text-xl text-text-primary">
                  Certifications
                </h3>
              </div>

              <div className="space-y-2.5">
                {CERTIFICATIONS.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg bg-surface border border-border flex items-start gap-3 hover:border-border-subtle transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent mt-1.5 shrink-0" />
                    <div>
                      <h4 className="font-sans font-semibold text-xs text-text-primary leading-snug">
                        {cert.title}
                      </h4>
                      <p className="font-mono text-[11px] text-text-muted mt-0.5">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Complete Skills Matrix */}
            <div className="p-5 rounded-xl bg-surface border border-border space-y-3">
              <h4 className="font-mono text-xs uppercase tracking-wider text-text-subtle font-semibold">
                Skills Taxonomy
              </h4>
              <div className="space-y-3">
                {SKILL_CATEGORIES.map((cat, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="font-mono text-[11px] text-text-muted font-medium">
                      {cat.category}:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((s, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded bg-surface-elevated text-[11px] font-mono text-text-primary/90"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
