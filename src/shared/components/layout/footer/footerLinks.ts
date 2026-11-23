import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconFileText,
  IconMail,
  type IconProps,
} from '@tabler/icons-react';
import { type ComponentType } from 'react';
import { PROFILE } from 'src/shared/constants/profile';
import { SECTION_IDS } from 'src/shared/constants/sections';

export interface FooterSectionItem {
  download?: boolean;
  href: string;
  icon?: ComponentType<IconProps>;
  label: string;
}

export interface FooterSection {
  items: FooterSectionItem[];
  title: string;
}

export const FOOTER_SOCIALS: FooterSectionItem[] = [
  { href: PROFILE.githubUrl, icon: IconBrandGithub, label: 'GitHub' },
  { href: PROFILE.linkedinUrl, icon: IconBrandLinkedin, label: 'LinkedIn' },
  { href: `mailto:${PROFILE.email}`, icon: IconMail, label: 'Email' },
  { href: PROFILE.whatsappUrl, icon: IconBrandWhatsapp, label: 'WhatsApp' },
];

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    items: [
      { href: `#${SECTION_IDS.about}`, label: 'About' },
      { href: `#${SECTION_IDS.experience}`, label: 'Experience' },
      { href: `#${SECTION_IDS.projects}`, label: 'Projects' },
      { href: `#${SECTION_IDS.skills}`, label: 'Skills' },
      { href: `#${SECTION_IDS.contact}`, label: 'Contact' },
    ],
    title: 'Navigate',
  },
  {
    items: [
      {
        download: true,
        href: PROFILE.resumePath,
        icon: IconFileText,
        label: 'Resume',
      },
    ],
    title: 'Resources',
  },
];
