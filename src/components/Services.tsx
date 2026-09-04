import { SERVICES } from "@/data/services";
import { ServiceCard } from "./ServiceCard";

export function Services() {
  return (
    <section id="services" className="py-20 border-t border-border/80 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-accent">01 //</span>
            <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
              Core Services &amp; Capabilities
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-text-primary tracking-tight mb-4">
            Web Development, WordPress &amp; Creative Design Services
          </h2>
          <p className="text-base text-text-muted max-w-2xl">
            Four specialized disciplines engineered to rank on Google and maximize conversions: full-stack Next.js web applications, high-speed WordPress builds with 90+ Core Web Vitals, high-converting product &amp; service promotional posters, and modern Figma UI/UX systems.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
