import {
	IconBrandGithub,
	IconBrandLinkedin,
	IconBrandWhatsapp,
	IconFileText,
	IconMail,
	IconProps,
} from '@tabler/icons-react';

interface FooterSectionItem {
	label: string;
	href: string;
	download?: boolean;
	icon?: React.ComponentType<IconProps>;
}

interface FooterSection {
	title: string;
	items: FooterSectionItem[];
}

export const FooterSocials: FooterSectionItem[] = [
	{
		href: 'https://github.com/Kerolos2000',
		icon: IconBrandGithub,
		label: 'GitHub',
	},
	{
		href: 'https://www.linkedin.com/in/kerolos-magdy-314644212/',
		icon: IconBrandLinkedin,
		label: 'LinkedIn',
	},
	{
		href: 'mailto:kerolos1410@gmail.com',
		icon: IconMail,
		label: 'Email',
	},
	{
		href: 'https://api.whatsapp.com/send/?phone=%2B201205224238&text&type=phone_number&app_absent=0',
		icon: IconBrandWhatsapp,
		label: 'WhatsApp',
	},
];

export const FooterSections: FooterSection[] = [
	{
		title: 'Navigate',
		items: [
			{ label: 'About', href: '#home-about-me-section' },
			{ label: 'Experience', href: '#home-experience-section' },
			{ label: 'Projects', href: '#home-projects-section' },
			{ label: 'Skills', href: '#home-skills-section' },
			{ label: 'Contact', href: '#home-contact-us-section' },
		],
	},
	{
		title: 'Resources',
		items: [
			{
				label: 'Resume',
				href: '/Kerolos-Magdy-Resume.pdf',
				download: true,
				icon: IconFileText,
			},
		],
	},
];
