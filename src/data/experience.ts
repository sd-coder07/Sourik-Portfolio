import { ExperienceItem, EducationItem, CertificationItem } from "@/types";

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: "Mar 2026 — Present",
    role: "Full Stack Web Developer",
    company: "Dronahost",
    location: "Kolkata, India / Remote",
    type: "work",
    highlight: "Current Role",
    description: [
      "Architecting scalable frontend and backend features using React, Next.js, Node.js, and MongoDB.",
      "Implementing server-side rendering (SSR) and dynamic caching patterns for optimal performance and SEO.",
      "Designing clean RESTful API contracts and microservice workflows for client hosting infrastructure.",
      "Collaborating directly on client deliverables, automated build pipelines, and production release cycles.",
    ],
    skills: ["Next.js", "React", "Node.js", "MongoDB", "REST APIs", "SSR", "TypeScript"],
  },
  {
    period: "2025 — 2026",
    role: "Generative AI Intern",
    company: "AI Wallah",
    type: "internship",
    description: [
      "Developed generative AI integration pipelines and interactive prompt chaining interfaces.",
      "Engineered automated text and image synthesis modules integrated into web applications.",
      "Evaluated LLM model response latency and fine-tuned context windows for web interfaces.",
    ],
    skills: ["Python", "Generative AI", "LLM APIs", "FastAPI", "Prompt Engineering"],
  },
  {
    period: "2024 — 2025",
    role: "AI & Cloud Intern",
    company: "AICTE Edunet Foundation / IBM SkillsBuild",
    type: "internship",
    description: [
      "Trained on enterprise cloud deployments, IBM Cloud services, and applied machine learning models.",
      "Constructed cloud-hosted prototypes with containerization and cloud security fundamentals.",
      "Earned enterprise cloud credentials through practical hands-on lab assessments.",
    ],
    skills: ["Cloud Architecture", "IBM Cloud", "Python", "Machine Learning", "Docker Basics"],
  },
  {
    period: "2024",
    role: "Open Source Contributor",
    company: "GirlScript Summer of Code (GSSoC)",
    type: "opensource",
    description: [
      "Contributed production frontend bug fixes and responsive UI enhancements across multi-contributor repos.",
      "Collaborated with project maintainers through Git pull requests, code reviews, and issue triage.",
    ],
    skills: ["Git", "GitHub Workflow", "Open Source", "React", "HTML/CSS"],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
    institution: "Techno Engineering College Banipur",
    period: "2022 — 2026",
    highlights: "Core focus on Data Structures, Algorithms, Distributed Systems, Web Architecture & Cloud Technologies.",
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "AWS Academy Graduate — AWS Academy Machine Learning Foundations",
    issuer: "Amazon Web Services (AWS)",
    date: "Certified",
  },
  {
    title: "AWS Academy Graduate — AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    date: "Certified",
  },
  {
    title: "Full Stack Web Development MERN Stack + Generative AI",
    issuer: "Udemy Professional Certificate",
    date: "Certified",
  },
];

export const SKILL_CATEGORIES = [
  {
    category: "Core Stack",
    skills: ["Next.js", "React", "TypeScript", "JavaScript (ES6+)", "WordPress", "Node.js", "MongoDB"],
  },
  {
    category: "Design & Creative",
    skills: ["Figma (UI/UX)", "Canva Templates", "Poster Making", "Responsive UI", "Tailwind CSS", "Design Systems"],
  },
  {
    category: "Backend & AI",
    skills: ["REST APIs", "Python", "Generative AI", "LLM APIs", "Express.js", "Mongoose"],
  },
  {
    category: "Cloud & Devops",
    skills: ["AWS", "Vercel", "Git & GitHub", "Docker Basics", "Postman", "CI/CD Actions"],
  },
];
