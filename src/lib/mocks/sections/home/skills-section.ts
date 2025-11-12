import {
	IconApi,
	IconBrandBootstrap,
	IconBrandCss3,
	IconBrandGithub,
	IconBrandHtml5,
	IconBrandJavascript,
	IconBrandNextjs,
	IconBrandReact,
	IconBrandTailwind,
	IconBrandTypescript,
	IconBrandVscode,
	IconDatabase,
	IconForms,
	IconLanguage,
	IconSettings,
	TablerIcon,
} from '@tabler/icons-react';

interface SkillsItem {
	name: string;
	Icon: TablerIcon;
}

export const SkillsItems: SkillsItem[] = [
	{ name: 'JavaScript', Icon: IconBrandJavascript },
	{ name: 'TypeScript', Icon: IconBrandTypescript },
	{ name: 'React.js', Icon: IconBrandReact },
	{ name: 'Next.js', Icon: IconBrandNextjs },
	{ name: 'React Native', Icon: IconBrandReact },
	{ name: 'Zustand', Icon: IconSettings },
	{ name: 'React Hook Form', Icon: IconForms },
	{ name: 'Zod', Icon: IconDatabase },
	{ name: 'Axios', Icon: IconApi },
	{ name: 'React Query', Icon: IconApi },
	{ name: 'i18next', Icon: IconLanguage },
	{ name: 'Tailwind', Icon: IconBrandTailwind },
	{ name: 'Material UI', Icon: IconBrandVscode },
	{ name: 'Bootstrap', Icon: IconBrandBootstrap },
	{ name: 'React Admin', Icon: IconBrandVscode },
	{ name: 'HTML5', Icon: IconBrandHtml5 },
	{ name: 'CSS3', Icon: IconBrandCss3 },
	{ name: 'SCSS', Icon: IconBrandCss3 },
	{ name: 'Supabase', Icon: IconDatabase },
	{ name: 'Git & GitHub', Icon: IconBrandGithub },
];
