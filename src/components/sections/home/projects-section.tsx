'use client';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MainTitle } from 'src/components/ui';

export default function HomeProjectsSection() {
	const products = [
		{
			title: 'Runnet',
			link: 'https://www.runnet.io/',
			thumbnail: '/runnet1.webp',
		},
		{
			title: 'Growth Level Academy',
			link: 'https://growthlevelacademy.com/',
			thumbnail: '/freelance2.webp',
		},
		{
			title: 'Innova EG',
			link: 'https://innova.com.eg/',
			thumbnail: '/freelance3.webp',
		},
		{
			title: 'Noxe',
			link: 'https://movies-app-react-lime.vercel.app/',
			thumbnail: '/freelance4.webp',
		},
		{
			title: 'El Romany E-Commerce',
			link: 'https://elromany.vercel.app/',
			thumbnail: '/freelance1.webp',
		},
		{
			title: 'Tic Tac Toe',
			link: 'https://xogame-orcin.vercel.app/',
			thumbnail: '/project1.webp',
		},
		{
			title: 'Angora Template Clone',
			link: 'https://angora-templet.vercel.app/',
			thumbnail: '/project2.webp',
		},
		{
			title: 'Old Portfolio',
			link: 'https://kerolos-magdy-old.vercel.app/',
			thumbnail: '/project3.webp',
		},
		{
			title: 'NextShop',
			link: 'https://next-shop-products.vercel.app/ar',
			thumbnail: '/project4.webp',
		},
	];

	const firstRow = products.slice(0, 3);
	const secondRow = products.slice(3, 6);
	const thirdRow = products.slice(6, 9);

	const ref = React.useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	});

	const springConfig = { stiffness: 300, damping: 30, bounce: 100 };
	const rotateX = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [15, 0]),
		springConfig,
	);
	const opacity = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
		springConfig,
	);
	const rotateZ = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [20, 0]),
		springConfig,
	);
	const translateY = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [0, 0]),
		springConfig,
	);

	return (
		<section
			id='home-projects-section'
			className='py-8  w-full  overflow-hidden'
		>
			<div
				ref={ref}
				className='relative flex flex-col items-center perspective-[1000px] transform-3d pointer-events-none'
			>
				<Header />
				<motion.div
					style={{ rotateX, rotateZ, translateY, opacity }}
					className='flex flex-col items-center gap-4 md:gap-8 pointer-events-auto'
				>
					<InfiniteRow
						products={firstRow}
						reverse
					/>
					<InfiniteRow products={secondRow} />
					<InfiniteRow
						products={thirdRow}
						reverse
					/>
				</motion.div>
			</div>
		</section>
	);
}

const InfiniteRow = ({
	products,
	reverse = false,
}: {
	products: { title: string; link: string; thumbnail: string }[];
	reverse?: boolean;
}) => {
	return (
		<div className='overflow-hidden w-full'>
			<div
				className={`flex ${
					reverse
						? 'flex-row-reverse animate-marquee-reverse'
						: 'animate-marquee'
				} gap-4 md:gap-8`}
			>
				{[...products, ...products, ...products].map((product, i) => (
					<ProductCard
						key={product.title + i}
						product={product}
					/>
				))}
			</div>
		</div>
	);
};

export const ProductCard = ({
	product,
}: {
	product: { title: string; link: string; thumbnail: string };
}) => (
	<Link
		href={product.link}
		target='_blank'
		className='group/product relative shrink-0 w-56 sm:w-[20rem] md:w-104 border border-primary/20 rounded-2xl shadow-sm overflow-hidden cursor-pointer block'
	>
		<div className='relative w-full aspect-video overflow-hidden rounded-2xl'>
			<Image
				src={product.thumbnail}
				alt={product.title}
				fill
				sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
				className='object-cover'
			/>
		</div>
		<div className='absolute inset-0 bg-black opacity-0 group-hover/product:opacity-60 transition-opacity pointer-events-none'></div>
		<h2 className='absolute bottom-4 left-4 text-white text-sm sm:text-base md:text-lg font-medium opacity-0 group-hover/product:opacity-100 transition-opacity pointer-events-none'>
			{product.title}
		</h2>
	</Link>
);

export const Header = () => (
	<div className='container mx-auto pt-0 pb-8 sm:py-16 px-4 w-full text-left relative -z-10 space-y-4'>
		<MainTitle
			boldText='Projects'
			regularText='Explore My'
		/>
		<p className='max-w-2xl text-base text-neutral-600 dark:text-neutral-300'>
			I create modern and elegant web products using cutting-edge technologies
			and frameworks, focusing on performance, scalability, and user experience.
		</p>
	</div>
);
