import { PROFILE } from 'src/shared/constants/profile';
import { type ContactItem } from '../types/Contact';

export const CONTACT_ITEMS: ContactItem[] = [
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg',
    link: PROFILE.whatsappUrl,
    text: 'WhatsApp',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
    link: PROFILE.linkedinUrl,
    text: 'LinkedIn',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png',
    link: `mailto:${PROFILE.email}`,
    text: 'Gmail',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
    link: PROFILE.githubUrl,
    text: 'GitHub',
  },
];
