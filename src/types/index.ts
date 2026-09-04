export type StackType = "nextjs" | "wordpress" | "design" | "poster";

export interface Project {
  id: string;
  title: string;
  domain: string;
  stack: StackType;
  stackLabel: string;
  description: string;
  highlights: string[];
  tags: string[];
  liveUrl: string;
  githubUrl?: string;
  featured?: boolean;
  metrics?: string;
  image?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tag: string;
  summary: string;
  deliverables: string[];
  capabilities: string[];
  metrics: string;
  iconType?: "nextjs" | "wordpress" | "poster" | "design";
}

export interface PosterDemoItem {
  id: string;
  title: string;
  category: "product" | "service";
  categoryLabel: string;
  description: string;
  dimensions?: string;
  toolsUsed: string[];
  imageSrc?: string;
  status: "coming_soon" | "available";
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location?: string;
  type: "work" | "internship" | "opensource";
  description: string[];
  skills: string[];
  highlight?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score?: string;
  highlights?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date?: string;
  credentialId?: string;
  link?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  projectType: string;
  projectBadge: string;
  metric?: string;
  rating?: number;
  avatarUrl?: string;
}
