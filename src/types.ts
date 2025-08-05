export interface Project {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  points: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  link: string;
}

export interface Experience {
  title: string;
  organization: string;
  period: string;
  description: string;
}