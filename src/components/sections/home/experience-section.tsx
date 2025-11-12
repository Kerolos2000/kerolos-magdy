import { MainTitle, Timeline } from 'src/components/ui';
import { ExperienceItems } from 'src/lib';

export default function HomeExperienceSection() {
	return (
		<section
			id='home-experience-section'
			className='space-y-8 container mx-auto py-8 px-4 sm:px-6 lg:px-8 overflow-y-clip'
		>
			<MainTitle
				regularText='Explore My'
				boldText='Experience'
			/>
			<Timeline data={ExperienceItems} />
		</section>
	);
}
