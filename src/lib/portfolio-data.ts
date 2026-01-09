import {
	AboutMeSectionData,
	ContactUsItems,
	ExperienceItems,
	ProductsItems,
	SkillsItems,
} from './mocks';

export const portfolioData = {
	name: 'Kerolos Magdy',
	role: 'Frontend Developer',
	experience: '3+ years',
	phone: '+20 1205224238',
	email: 'kerolos1410@gmail.com',
	stack: SkillsItems.map(skill => skill.name),
	projects: ProductsItems.map(p => p.title).join(', '),
	detailedExperience: ExperienceItems.map(e => e.title),
	socials: ContactUsItems.map(c => ({ platform: c.text, link: c.link })),
	education: AboutMeSectionData.find(s => s.title === 'Education')
		?.details.map(d => d.text)
		.filter(Boolean),
};
