import { Award, Briefcase, Calendar, GraduationCap, MapPin, User } from 'lucide-react';
import { PROFILE } from 'src/shared/constants/profile';
import { getAge } from 'src/shared/utils/getAge';
import { type AboutMeCard } from '../types/AboutMe';

export const ABOUT_ME_CARDS: AboutMeCard[] = [
  {
    details: [
      { icon: MapPin, text: PROFILE.location },
      { icon: Calendar, text: `${getAge(PROFILE.birthDate)} years old` },
      { icon: Briefcase, text: 'Available to work' },
      { icon: null, isButton: true },
    ],
    icon: User,
    title: 'Personal',
  },
  {
    details: [
      { icon: GraduationCap, text: 'Faculty of Business MIS Department' },
      { icon: MapPin, text: PROFILE.location },
      { icon: Award, text: 'Very Good with Honor' },
      { icon: Calendar, text: '2018 – 2022' },
    ],
    icon: GraduationCap,
    title: 'Education',
  },
];
