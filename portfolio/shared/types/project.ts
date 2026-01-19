export interface ProjectImage {
  id: string;
  src: string;
  thumbnail?: string;
  alt: string;
  type?:
    | "landing-page"
    | "admin-panel"
    | "dashboard"
    | "plugin"
    | "website"
    | "ui-design";
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  images: ProjectImage[];
  technologies: string[];
  results?: string;
  liveLink?: string;
  caseStudyLink?: string;
}
