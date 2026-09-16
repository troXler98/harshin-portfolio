export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'Full-Stack & ML' | 'Research & Analytics' | 'Technical & Systems';
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  bulletPoints?: string[];
  metrics?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  duration: string;
  location: string;
  logoText: string;
  logoBg: string;
  bullets: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  highlight?: boolean;
}

export interface SkillCategory {
  title: string;
  category: 'core' | 'technical' | 'analytics' | 'tools';
  skills: {
    name: string;
    level?: string;
    icon?: string;
    highlight?: boolean;
  }[];
}
