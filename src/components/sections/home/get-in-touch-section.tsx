import Link from 'next/link';
import { LightGrid, MainTitle } from 'src/components/ui';

export default function HomeGetInTouchSection() {
	return (
		<section
			id='home-get-in-touch-section'
			className='border-b border-neutral-200 dark:border-neutral-800'
		>
			<LightGrid>
				<div className='flex flex-col flex-wrap items-start sm:items-center justify-between md:flex-row gap-4'>
					<div className='flex flex-col items-start space-y-4'>
						<MainTitle
							regularText='Ready to collaborate on'
							boldText='Next Project ?'
						/>
						<p className='max-w-2xl text-base text-neutral-600 dark:text-neutral-300'>
							Whether you need a modern website, a fast web app, or a complete
							design system, I can help you plan, build, and launch it
							efficiently and at scale.
						</p>
					</div>
					<div className='flex flex-col gap-4 sm:w-auto sm:flex-row justify-center md:justify-end'>
						<Link
							href='https://api.whatsapp.com/send/?phone=201205224238&text&type=phone_number&app_absent=0'
							target='_blank'
							rel='noopener noreferrer'
							className='w-fit px-6 py-2 sm:px-7 rounded-lg bg-neutral-50/50 dark:bg-neutral-100/10 backdrop-blur-sm border border-card-foreground/30 hover:border-card-foreground/50 text-foreground transition-all duration-300 flex items-center gap-2'
						>
							Get in Touch
						</Link>
					</div>
				</div>
			</LightGrid>
		</section>
	);
}
