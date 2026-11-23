import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconBulb,
  IconCertificate,
  IconCode,
  IconDownload,
  IconMessage,
  IconUser,
} from '@tabler/icons-react';
import { type FloatingDockItem } from 'src/shared/components/ui/floating-dock/FloatingDock';
import { ToggleTheme } from 'src/shared/components/ui/toggle-theme/ToggleTheme';
import { PROFILE } from 'src/shared/constants/profile';
import { SECTION_IDS } from 'src/shared/constants/sections';

const ICON_CLASS = 'h-full w-full text-neutral-500 dark:text-neutral-300';

export const FLOATING_APP_BAR_LINKS: FloatingDockItem[] = [
  {
    icon: <ToggleTheme />,
    title: 'Toggle Theme',
  },
  {
    download: true,
    href: PROFILE.resumePath,
    icon: <IconDownload className={ICON_CLASS} />,
    title: 'Download CV',
  },
  {
    href: `#${SECTION_IDS.about}`,
    icon: <IconUser className={ICON_CLASS} />,
    title: 'About Me',
  },
  {
    href: `#${SECTION_IDS.skills}`,
    icon: <IconBulb className={ICON_CLASS} />,
    title: 'Skills',
  },
  {
    href: `#${SECTION_IDS.experience}`,
    icon: <IconCertificate className={ICON_CLASS} />,
    title: 'Experience',
  },
  {
    href: `#${SECTION_IDS.projects}`,
    icon: <IconCode className={ICON_CLASS} />,
    title: 'Projects',
  },
  {
    href: `#${SECTION_IDS.contact}`,
    icon: <IconMessage className={ICON_CLASS} />,
    title: 'Contact',
  },
  {
    href: PROFILE.githubUrl,
    icon: <IconBrandGithub className={ICON_CLASS} />,
    title: 'GitHub',
  },
  {
    href: PROFILE.linkedinUrl,
    icon: <IconBrandLinkedin className={ICON_CLASS} />,
    title: 'LinkedIn',
  },
  {
    href: PROFILE.whatsappUrl,
    icon: <IconBrandWhatsapp className={ICON_CLASS} />,
    title: 'WhatsApp',
  },
];
