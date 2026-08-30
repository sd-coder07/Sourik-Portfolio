import { ServiceItem } from "@/types";

export const SERVICES: ServiceItem[] = [
  {
    id: "nextjs",
    title: "Next.js Development",
    tag: "[next.js]",
    summary: "High-performance web applications, interactive dashboards, and SaaS platforms built with modern React architecture, server-side rendering, and production-grade integrations.",
    deliverables: [
      "Custom web apps, interactive client dashboards & high-conversion landing pages",
      "Server-side rendering (SSR), Static Site Generation (SSG), and technical SEO architecture",
      "Robust REST/GraphQL API integration, MongoDB database modeling, and backend services",
      "Generative AI integrations (LLMs, custom chat interfaces, AI workflow automations)",
      "TypeScript type-safety, responsive UI systems, and zero-downtime Vercel deployments",
    ],
    capabilities: [
      "Next.js 14 App Router",
      "React 18 / TypeScript",
      "MongoDB / Prisma",
      "Generative AI APIs",
      "Server Actions",
      "Vercel Deployment",
    ],
    metrics: "Sub-100ms response targets with full TypeScript type safety",
  },
  {
    id: "wordpress",
    title: "WordPress Development",
    tag: "[wordpress]",
    summary: "Reliable, high-volume WordPress builds engineered for local businesses, enterprises, and digital agencies. Custom themes, zero bloat, lightning speed, and turnkey client editing.",
    deliverables: [
      "Business, corporate, and agency websites — 25+ production builds shipped to date",
      "Custom theme development, tailored Gutenberg blocks, and clean page builder setups",
      "WooCommerce online stores, payment gateway routing, and product catalog management",
      "Speed & Core Web Vitals optimization (90+ mobile scores, image caching, CDN setup)",
      "Ongoing maintenance, security hardening, automated backups, and version updates",
    ],
    capabilities: [
      "Custom PHP Themes",
      "Gutenberg / Elementor",
      "WooCommerce Architecture",
      "Core Web Vitals 90+",
      "Security & Backups",
      "Local & Technical SEO",
    ],
    metrics: "25+ production builds shipped with 90+ Core Web Vitals",
  },
];
