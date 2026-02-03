
export interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: string;
  link: string;
  doi?: string;
}

export interface Book {
  title: string;
  author: string;
  link: string;
  coverImage: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  duration: string;
  description: string[];
  image: string;
  tags?: string[];
}

export interface EducationEntry {
  institution: string;
  degree: string;
  duration: string;
  grade?: string;
  skills: string[];
  logo: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  skills: string[];
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}
