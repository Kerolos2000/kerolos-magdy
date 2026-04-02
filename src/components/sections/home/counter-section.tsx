import { NumberTicker } from 'src/components/ui';
import { CounterStats } from 'src/lib';

export default function HomeCounterSection() {
	return (
		<section
			id='home-counter-section'
			className='py-8 bg-neutral-50/75 dark:bg-neutral-900/50'
		>
			<div className='relative container mx-auto px-4 sm:px-6 lg:px-8 w-full'>
				<div className='grid grid-cols-2 md:grid-cols-4 gap-4 '>
					{CounterStats.map(({ label, value }) => (
						<div
							key={label}
							className='relative border border-primary/20 rounded-lg shadow-sm px-4 py-6 text-center bg-neutral-100 dark:bg-neutral-950'
						>
							<div className='text-5xl md:text-6xl font-bold mb-3 flex items-center justify-center flex-nowrap'>
								<NumberTicker value={value} />
								<span className='text-muted-foreground'>+</span>
							</div>
							<p className='text-sm md:text-base text-muted-foreground'>
								{label}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
