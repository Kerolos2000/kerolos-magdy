'use client';

import {
	IconBrandGithub,
	IconBrandLinkedin,
	IconBrandWhatsapp,
	IconFileText,
	IconMail,
	IconProps,
} from '@tabler/icons-react';
import Link from 'next/link';

interface SectionItem {
	label: string;
	href: string;
	download?: boolean;
	icon?: React.ComponentType<IconProps>;
}

interface Section {
	title: string;
	items: SectionItem[];
}

const socials: SectionItem[] = [
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

const sections: Section[] = [
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

export default function Footer() {
	return (
		<footer className='overflow-hidden pt-8 pb-16 border-t border-neutral-200 dark:border-neutral-800 dark:bg-neutral-950'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8  flex flex-col justify-between gap-12 md:flex-row'>
				<div className='flex-1'>
					<Link
						href='/'
						className='group inline-block'
						title='Back to home'
					>
						<h2 className='bg-linear-to-r from-neutral-900 via-neutral-700 to-neutral-900 bg-clip-text text-2xl font-bold text-transparent transition-transform duration-300 group-hover:scale-105 dark:from-neutral-100 dark:via-neutral-300 dark:to-neutral-100'>
							Kerolos Magdy
						</h2>
					</Link>
					<p className='mt-4 max-w-xs text-sm leading-relaxed text-neutral-600 dark:text-neutral-400'>
						Frontend developer crafting beautiful and functional web
						experiences.
					</p>
					<p className='mt-6 text-xs text-neutral-500 dark:text-neutral-500'>
						© {new Date().getFullYear()} Kerolos Magdy. All rights reserved.
					</p>
				</div>

				<div className='grid flex-1 grid-cols-2 gap-12 md:grid-cols-3'>
					{sections.map(({ title, items }, idx) => (
						<div
							key={title}
							className={idx === 1 ? 'flex flex-col' : ''}
						>
							<h3 className='mb-5 text-sm font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-100'>
								{title}
							</h3>
							<div className='mb-6 flex flex-col gap-3'>
								{items.map(({ label, href, download, icon: Icon }) => (
									<Link
										key={label}
										href={href}
										download={download}
										title={label}
										className='inline-flex items-center gap-1 text-sm text-neutral-600 transition-all duration-300 hover:translate-x-1 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100'
									>
										{Icon && <Icon className='h-4 w-4' />}
										{label}
									</Link>
								))}
							</div>

							{idx === 1 && (
								<div>
									<h3 className='mb-5 text-sm font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-100'>
										Connect
									</h3>
									<div className='flex flex-wrap gap-3'>
										{socials.map(({ href, icon: Icon, label }) => (
											<Link
												key={label}
												href={href}
												target='_blank'
												rel='noopener noreferrer'
												aria-label={label}
												title={label}
												className='flex items-center justify-center rounded-lg bg-neutral-200 p-2.5 text-neutral-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-900 hover:text-white hover:shadow-sm dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-100 dark:hover:text-black'
											>
												{Icon && <Icon className='h-5 w-5' />}
											</Link>
										))}
									</div>
								</div>
							)}
						</div>
					))}
				</div>
			</div>

			<div className='my-12 h-px bg-linear-to-r from-transparent via-neutral-400 to-transparent dark:via-neutral-700' />

			<div className='relative flex items-center justify-center'>
				<h1 className='mb-0 text-center text-5xl font-black tracking-tight text-transparent sm:mb-6 md:text-6xl lg:text-[7rem] bg-linear-to-b from-neutral-600 via-neutral-400 to-neutral-200 bg-clip-text dark:from-neutral-400 dark:via-neutral-600 dark:to-neutral-900 select-none'>
					KEROLOS
				</h1>
			</div>
		</footer>
	);
}
