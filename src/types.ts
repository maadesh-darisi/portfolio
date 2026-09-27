export interface Project {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  points: string[];
  link?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  link: string;
  logo?: string;
}

export interface Experience {
  title: string;
  organization: string;
  period: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  logo?: string;
}

export interface Publication {
  title: string;
  publisher: string;
  description: string;
  link: string;
}