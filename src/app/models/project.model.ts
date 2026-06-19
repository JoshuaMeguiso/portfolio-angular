export interface Project {
  slug: string;
  title: string;
  description: string;

  overview: string;
  role: string;

  features: string[];

  challenges: string[];

  impact: string[];

  tech: Tech[];

  links?: {
    live?: string;
    github?: string;
  };

  screenshots?: {
    image: string;
    caption: string;
  }[];
}

export interface Tech {
  name: string;
  iconClass: string;
}
