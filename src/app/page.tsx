import dynamic from 'next/dynamic';
import { HomeHeroSection } from './features';

const HomeAboutMeSection = dynamic(
	() => import('src/features/about').then(m => m.HomeAboutMeSection),
	{ ssr: true },
);
const HomeBreakSection = dynamic(
	() => import('src/features/home').then(m => m.HomeBreakSection),
	{ ssr: true },
);
const HomeSkillsSection = dynamic(
	() => import('src/features/skills').then(m => m.HomeSkillsSection),
	{ ssr: true },
);
const HomeExperienceSection = dynamic(
	() => import('src/features/experience').then(m => m.HomeExperienceSection),
	{ ssr: true },
);
const HomeCounterSection = dynamic(
	() => import('src/features/home').then(m => m.HomeCounterSection),
	{ ssr: true },
);
const HomeProjectsSection = dynamic(
	() => import('src/features/projects').then(m => m.HomeProjectsSection),
	{ ssr: true },
);
const HomeGetInTouchSection = dynamic(
	() => import('src/features/contact').then(m => m.HomeGetInTouchSection),
	{ ssr: true },
);
const HomeContactUsSection = dynamic(
	() => import('src/features/contact').then(m => m.HomeContactUsSection),
	{ ssr: true },
);

export default function Home() {
	return (
		<main id='home-page'>
			<HomeHeroSection />
			<HomeAboutMeSection />
			<HomeBreakSection />
			<HomeSkillsSection />
			<HomeExperienceSection />
			<HomeCounterSection />
			<HomeProjectsSection />
			<HomeGetInTouchSection />
			<HomeContactUsSection />
		</main>
	);
}
