import { MainTitle } from 'src/components/ui';
import { SkillsItems } from 'src/lib';

export default function HomeSkillsSection() {
	return (
		<section
			id='home-skills-section'
			className='space-y-8 py-8 container mx-auto px-4 sm:px-6 lg:px-8 w-full'
		>
			<MainTitle
				regularText='Some of My'
				boldText='Skills'
			/>
			<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2'>
				{SkillsItems.map(({ name, Icon }) => {
					return (
						<div
							key={name}
							className='group relative'
						>
							<div className='relative h-full flex items-center pointer-events-none backdrop-blur-sm bg-card/20 border border-border/50 hover:border-emerald-500/50 rounded-lg px-4 py-2.5 transition-all duration-300 hover:bg-card/40 hover:shadow-sm hover:shadow-emerald-500/5'>
								<div className='flex items-center gap-3'>
									<div className='relative shrink-0'>
										<div className='relative p-1.5 rounded-md bg-neutral-100 dark:bg-neutral-900 group-hover:bg-neutral-500/10 transition-all duration-300'>
											<Icon
												size={20}
												className='text-foreground/80 group-hover:text-emerald-500 transition-colors duration-300'
												strokeWidth={1.5}
											/>
										</div>
									</div>

									<span className='text-sm font-medium text-foreground/90 group-hover:text-emerald-500 transition-colors duration-300 tracking-tight'>
										{name}
									</span>
								</div>

								<div className='absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-emerald-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}
