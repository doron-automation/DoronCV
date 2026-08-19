export type Language = 'he' | 'en';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  technologies: string[];
  description: string;
  features: string[];
  category: 'E2E' | 'API' | 'Framework' | 'Management';
  codeSnippet?: {
    filename: string;
    language: string;
    code: string;
  };
  metrics?: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  department: string;
  summary: string;
  achievements: string[];
  techStack: string[];
  impactStats?: {
    label: string;
    value: string;
  }[];
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  skills: {
    name: string;
    level?: 'Expert' | 'Advanced' | 'Proficient';
    highlight?: boolean;
  }[];
}

export interface MetricItem {
  id: string;
  number: number;
  suffix: string;
  label: string;
  sublabel: string;
  iconName: string;
}

export interface PipelineStep {
  id: string;
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  tech: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialId?: string;
  description: string;
  icon: string;
  skills: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  field: string;
  details: string;
  icon: string;
}
