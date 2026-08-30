export type StackType = "nextjs" | "wordpress";

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
}

export interface ServiceItem {
  id: string;
  title: string;
  tag: string;
  summary: string;
  deliverables: string[];
  capabilities: string[];
  metrics: string;
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
