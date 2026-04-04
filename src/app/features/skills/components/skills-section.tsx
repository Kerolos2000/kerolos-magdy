import { MainTitle, SkillsItems } from 'src/shared';

export default function HomeSkillsSection() {
	return (
		<section
			id='home-skills-section'
			className='section-container space-y-8'
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
							<div className='second-card'>
								<div className='flex items-center gap-2'>
									<div className='relative shrink-0'>
										<div className='relative p-1.5 rounded-lg bg-card transition-all duration-300'>
											<Icon
												size={20}
												className='text-foreground/80 group-hover:text-brand transition-colors duration-300'
												strokeWidth={1.5}
											/>
										</div>
									</div>

									<span className='text-sm font-medium text-foreground/90 group-hover:text-brand transition-colors duration-300 tracking-tight'>
										{name}
									</span>
								</div>

								<div className='absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-brand to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}
