import { IconFileDownload } from '@tabler/icons-react';
import Link from 'next/link';
import { AboutMeSectionData, Ballpit } from 'src/shared';

export default function HomeAboutMeSection() {
	return (
		<section
			className='section-container'
			id='home-about-me-section'
		>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
				{AboutMeSectionData.map(({ details, icon: Icon, title }) => (
					<div
						key={title}
						className='main-card'
					>
						<Ballpit
							className='absolute inset-0 -z-2'
							count={20}
							gravity={0.1}
							colors={[
								'var(--brand)',
								'var(--brand)',
								'var(--brand-medium)',
								'var(--brand-strong)',
								'var(--brand-medium)',
								'var(--brand-strong)',
							]}
							followCursor={false}
						/>

						<div className='p-8 h-full stack-column gap-4'>
							<div className='stack-row items-center text-2xl font-bold'>
								<div className='p-2 bg-brand/10 dark:bg-brand/10 rounded-lg'>
									<Icon className='size-7 text-brand dark:text-brand' />
								</div>
								{title}
							</div>

							<div className='stack-column gap-4'>
								{details.map(({ isButton, icon: Icon, text }, index) =>
									isButton ? (
										<div key={index}>
											<Link
												href='/Kerolos-Magdy-Resume.pdf'
												download
												className='main-button text-sm'
											>
												<IconFileDownload className='size-4 sm:size-5' />
												VIEW RESUME
											</Link>
										</div>
									) : (
										<div
											key={text}
											className='stack-row items-center text-muted'
										>
											{Icon && <Icon className='size-4' />}
											{text}
										</div>
									),
								)}
							</div>

							<Icon className='absolute -z-1 right-4 bottom-4 size-32 sm:size-40 select-none text-muted opacity-25' />
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
