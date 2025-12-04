import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Inter } from 'next/font/google';
import { FloatingAppBar, Footer, SmoothScroll } from 'src/components';
import './globals.css';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter-sans',
});

export const metadata: Metadata = {
	publisher: 'Kerolos Magdy',
	title: 'Kerolos Magdy | Frontend Developer',
	description:
		'Frontend Developer specializing in React, Next.js, TypeScript, and modern UI frameworks. Explore my projects and experience.',
	keywords: [
		'Kerolos',
		'Kerolos Magdy',
		'kero',
		'Kero M.',
		'Frontend Developer',
		'React',
		'Next.js',
		'Portfolio',
		'Web Developer',
		'JavaScript',
		'TypeScript',
	],
	authors: [{ name: 'Kerolos Magdy' }],
	openGraph: {
		title: 'Kerolos Magdy | Frontend Developer',
		description:
			'Explore my work in React, Next.js, and modern frontend development.',
		url: 'https://kerolos-magdy-portfolio.vercel.app/',
		siteName: 'Kerolos Magdy Portfolio',
		locale: 'en_US',
		type: 'website',
		images: [
			{
				url: 'https://kerolos-magdy-portfolio.vercel.app/fav.webp',
				width: 1200,
				height: 630,
				alt: 'Kerolos Magdy Portfolio',
				type: 'image/webp',
			},
		],
	},
	icons: { icon: '/fav.webp' },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			suppressHydrationWarning
		>
			<body className={`${inter.variable} antialiased`}>
				<ThemeProvider
					attribute='class'
					defaultTheme='dark'
					disableTransitionOnChange
				>
					{children}
					<FloatingAppBar />
					<Footer />
				</ThemeProvider>
				<SmoothScroll />
				<Analytics mode='production' />
				<SpeedInsights />
			</body>
		</html>
	);
}
