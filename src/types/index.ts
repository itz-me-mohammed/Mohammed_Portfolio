export interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  live: string;
  tags: string[];
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'ml' | 'devops' | 'other';
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ComponentType;
}

export interface Achievement {
  title: string;
  description: string;
}