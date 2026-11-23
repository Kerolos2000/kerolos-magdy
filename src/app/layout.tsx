import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { type Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Inter } from 'next/font/google';
import { type ReactNode } from 'react';
import { ChatWidget } from 'src/features/chat/components/ChatWidget';
import { FloatingAppBar } from 'src/shared/components/layout/floating-app-bar/FloatingAppBar';
import { Footer } from 'src/shared/components/layout/footer/Footer';
import { SmoothScroll } from 'src/shared/components/layout/smooth-scroll/SmoothScroll';
import { RevealLoader } from 'src/shared/components/ui/reveal-loader/RevealLoader';
import { PROFILE } from 'src/shared/constants/profile';
import './globals.css';

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-inter-sans',
});

export const metadata: Metadata = {
  authors: [{ name: PROFILE.name }],
  description:
    'Frontend Developer specializing in React, Next.js, TypeScript, and modern UI frameworks. Explore my projects and experience.',
  icons: { icon: '/favicon.ico' },
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
    'Alexandria, Egypt',
    'Egypt',
    'Alexandria Frontend Developer',
    'Alexandria Web Developer',
    'Alexandria JavaScript Developer',
    'Alexandria TypeScript Developer',
    'Alexandria React Developer',
    'Alexandria Next.js Developer',
  ],
  openGraph: {
    description: 'Explore my work in React, Next.js, and modern frontend development.',
    images: [
      {
        alt: `${PROFILE.name} Portfolio`,
        height: 630,
        type: 'image/webp',
        url: `${PROFILE.siteUrl}favicon.ico`,
        width: 1200,
      },
    ],
    locale: 'en_US',
    siteName: `${PROFILE.name} Portfolio`,
    title: `${PROFILE.name} | ${PROFILE.role}`,
    type: 'website',
    url: PROFILE.siteUrl,
  },
  publisher: PROFILE.name,
  title: `${PROFILE.name} | ${PROFILE.role}`,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
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
          <RevealLoader text='KEROLOS' />
        </ThemeProvider>
        <SmoothScroll />
        <Analytics />
        <SpeedInsights />
        <ChatWidget />
      </body>
    </html>
  );
}
