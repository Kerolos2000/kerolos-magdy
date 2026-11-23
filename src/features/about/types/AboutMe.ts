import { type LucideIcon } from 'lucide-react';

export interface AboutMeDetail {
  icon: LucideIcon | null;
  isButton?: boolean;
  text?: string;
}

export interface AboutMeCard {
  details: AboutMeDetail[];
  icon: LucideIcon;
  title: string;
}
