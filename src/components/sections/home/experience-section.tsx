import { MainTitle, Timeline } from 'src/components/ui';
import { ExperienceItems } from 'src/lib';

export default function HomeExperienceSection() {
	return (
		<section
			id='home-experience-section'
			className='section-container space-y-8 overflow-y-clip'
		>
			<MainTitle
				regularText='Explore My'
				boldText='Experience'
			/>
			<Timeline data={ExperienceItems} />
		</section>
	);
}
