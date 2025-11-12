import { IconFileDownload } from '@tabler/icons-react';
import Link from 'next/link';
import { Ballpit, CardBody, CardContainer, CardItem } from 'src/components/ui';
import { AboutMeSectionData } from 'src/lib';

export default function HomeAboutMeSection() {
	return (
		<section
			className='pb-8 pt-4 container mx-auto px-4 sm:px-6 lg:px-8 w-full'
			id='home-about-me-section'
		>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
				{AboutMeSectionData.map(({ details, icon: Icon, title }, index) => (
					<CardContainer
						key={index}
						className='inter-var'
					>
						<CardBody
							className='relative group/card rounded-lg shadow-sm border border-black/10 dark:border-white/20 
              bg-transparent transition-colors duration-300 
              hover:border-emerald-500 dark:hover:border-emerald-400/40'
						>
							<Ballpit
								className='absolute inset-0 -z-2'
								count={25}
								gravity={0.25}
								colors={[
									'#022C22',
									'#064E3B',
									'#065F46',
									'#047857',
									'#059669',
									'#10B981',
									'#34D399',
									'#6EE7B7',
								]}
								followCursor={false}
							/>
							<div className='p-8'>
								<CardItem
									translateZ='60'
									className='flex  items-center gap-3 text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4'
								>
									<div className='p-2 bg-emerald-500/10 dark:bg-emerald-400/10 rounded-lg'>
										<Icon className='w-7 h-7 text-emerald-600 dark:text-emerald-400' />
									</div>
									{title}
								</CardItem>

								<div className='space-y-4'>
									{details.map(
										({ isButton, icon: Icon, text, translateZ }, j) =>
											isButton ? (
												<CardItem
													className='mt-4'
													key={j}
													translateZ={translateZ}
												>
													<Link
														href='/Kerolos-Magdy-Resume.pdf'
														download
														className='w-fit px-6 py-3 sm:px-7 rounded-lg bg-neutral-50/50 dark:bg-neutral-100/10 backdrop-blur-sm border border-card-foreground/30 hover:border-card-foreground/50 text-foreground transition-all duration-300 flex items-center gap-2'
													>
														<IconFileDownload className='w-4 h-4 sm:w-5 sm:h-5' />
														<span className='font-medium text-xs sm:text-sm tracking-wide'>
															VIEW RESUME
														</span>
													</Link>
												</CardItem>
											) : (
												<CardItem
													key={j}
													translateZ={translateZ}
													className='flex items-center gap-3 text-neutral-900 dark:text-neutral-100 mb-2'
												>
													{Icon && (
														<Icon className='w-4 h-4 text-neutral-700 dark:text-neutral-400' />
													)}
													{text}
												</CardItem>
											),
									)}
								</div>

								<CardItem
									translateZ='30'
									className='absolute z-[-1] right-4 bottom-4 w-32 sm:w-40 h-32 sm:h-40 text-emerald-500/10 pointer-events-none select-none'
								>
									<Icon className='w-full h-full text-neutral-300 dark:text-neutral-600' />
								</CardItem>
							</div>
						</CardBody>
					</CardContainer>
				))}
			</div>
		</section>
	);
}
