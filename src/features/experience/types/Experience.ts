export interface ExperienceImage {
  alt: string;
  height: number;
  src: string;
  variant?: 'certificate' | 'cover' | 'cover-top';
  width: number;
}

export interface ExperienceItem {
  descriptionSegments: { bold?: boolean; text: string }[];
  iconType: 'briefcase' | 'certificate' | 'laptop';
  images?: ExperienceImage[];
  location?: string;
  period: string;
  skills?: string[];
  title: string;
}
