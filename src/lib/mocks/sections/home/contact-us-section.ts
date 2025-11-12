interface ContactUsItem {
	link: string;
	text: string;
	image: string;
}

export const ContactUsItems: ContactUsItem[] = [
	{
		link: 'https://api.whatsapp.com/send/?phone=%2B201205224238&text&type=phone_number&app_absent=0',
		text: 'WhatsApp',
		image: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg',
	},
	{
		link: 'https://www.linkedin.com/in/kerolos-magdy-314644212/',
		text: 'LinkedIn',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
	},
	{
		link: 'mailto:kerolos1410@gmail.com',
		text: 'Gmail',
		image: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png',
	},
	{
		link: 'https://github.com/Kerolos2000',
		text: 'GitHub',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
	},
];
