import {
  Award,
  Briefcase,
  Calendar,
  GraduationCap,
  LucideIcon,
  MapPin,
  User,
} from "lucide-react";

export interface AboutMeDetail {
  icon: LucideIcon | null;
  text?: string;
  translateZ: string;
  isButton?: boolean;
}

export interface AboutMeCard {
  title: string;
  icon: LucideIcon;
  details: AboutMeDetail[];
}

export const aboutMeSectionData: AboutMeCard[] = [
  {
    title: "Personal",
    icon: User,
    details: [
      { icon: MapPin, text: "Alexandria, Egypt", translateZ: "50" },
      {
        icon: Calendar,
        text:
          String(
            new Date().getFullYear() - new Date("2000/10/14").getFullYear()
          ) + " years old",
        translateZ: "40",
      },
      { icon: Briefcase, text: "Available to work", translateZ: "50" },
      { icon: null, translateZ: "60", isButton: true },
    ],
  },
  {
    title: "Education",
    icon: GraduationCap,
    details: [
      {
        icon: GraduationCap,
        text: "Faculty of Business MIS Department",
        translateZ: "50",
      },
      { icon: MapPin, text: "Alexandria, Egypt", translateZ: "40" },
      { icon: Award, text: "Very Good with Honor", translateZ: "50" },
      { icon: Calendar, text: "2018 – 2022", translateZ: "40" },
    ],
  },
];
