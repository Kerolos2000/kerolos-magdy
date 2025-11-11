import dynamic from 'next/dynamic';

const HomeHeroSection = dynamic(
	() => import('src/components').then(m => m.HomeHeroSection),
	{ ssr: true },
);
const HomeAboutMeSection = dynamic(
	() => import('src/components').then(m => m.HomeAboutMeSection),
	{ ssr: true },
);
const HomeBreakSection = dynamic(
	() => import('src/components').then(m => m.HomeBreakSection),
	{ ssr: true },
);
const HomeSkillsSection = dynamic(
	() => import('src/components').then(m => m.HomeSkillsSection),
	{ ssr: true },
);
const HomeExperienceSection = dynamic(
	() => import('src/components').then(m => m.HomeExperienceSection),
	{ ssr: true },
);
const HomeCounterSection = dynamic(
	() => import('src/components').then(m => m.HomeCounterSection),
	{ ssr: true },
);
const HomeProjectsSection = dynamic(
	() => import('src/components').then(m => m.HomeProjectsSection),
	{ ssr: true },
);
const HomeGetInTouchSection = dynamic(
	() => import('src/components').then(m => m.HomeGetInTouchSection),
	{ ssr: true },
);
const HomeContactUsSection = dynamic(
	() => import('src/components').then(m => m.HomeContactUsSection),
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
