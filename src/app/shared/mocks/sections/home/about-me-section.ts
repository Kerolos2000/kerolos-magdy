import {
	Award,
	Briefcase,
	Calendar,
	GraduationCap,
	LucideIcon,
	MapPin,
	User,
} from 'lucide-react';

export interface AboutMeDetail {
	icon: LucideIcon | null;
	text?: string;
	isButton?: boolean;
}

export interface AboutMeCard {
	title: string;
	icon: LucideIcon;
	details: AboutMeDetail[];
}

export const AboutMeSectionData: AboutMeCard[] = [
	{
		title: 'Personal',
		icon: User,
		details: [
			{ icon: MapPin, text: 'Alexandria, Egypt' },
			{
				icon: Calendar,
				text:
					String(
						new Date().getFullYear() - new Date('2000/10/14').getFullYear(),
					) + ' years old',
			},
			{ icon: Briefcase, text: 'Available to work' },
			{ icon: null, isButton: true },
		],
	},
	{
		title: 'Education',
		icon: GraduationCap,
		details: [
			{
				icon: GraduationCap,
				text: 'Faculty of Business MIS Department',
			},
			{ icon: MapPin, text: 'Alexandria, Egypt' },
			{ icon: Award, text: 'Very Good with Honor' },
			{ icon: Calendar, text: '2018 – 2022' },
		],
	},
];
