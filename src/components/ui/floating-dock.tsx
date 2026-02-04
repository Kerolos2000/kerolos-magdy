'use client';
import { IconLayoutNavbarCollapse } from '@tabler/icons-react';
import {
	AnimatePresence,
	MotionValue,
	motion,
	useMotionValue,
	useSpring,
	useTransform,
} from 'motion/react';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { cn } from 'src/utils';

export interface FloatingDockItems {
	title: string;
	icon: React.ReactNode;
	href?: string;
	onClick?: () => void;
	download?: boolean;
}

export const FloatingDock = ({
	items,
	desktopClassName,
	mobileClassName,
}: {
	items: FloatingDockItems[];
	desktopClassName?: string;
	mobileClassName?: string;
}) => {
	return (
		<>
			<FloatingDockDesktop
				items={items}
				className={desktopClassName}
			/>
			<FloatingDockMobile
				items={items}
				className={mobileClassName}
			/>
		</>
	);
};

const FloatingDockMobile = ({
	items,
	className,
}: {
	items: FloatingDockItems[];
	className?: string;
}) => {
	const [open, setOpen] = useState(false);

	return (
		<div className={cn('relative block md:hidden', className)}>
			<AnimatePresence>
				{open && (
					<motion.div
						layoutId='nav'
						className='absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2'
					>
						{items.map((item, index) => (
							<motion.div
								key={item.title}
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{
									opacity: 0,
									y: 10,
									transition: { delay: index * 0.05 },
								}}
								transition={{ delay: (items.length - 1 - index) * 0.05 }}
							>
								{item.href ? (
									<Link
										aria-label={item.title}
										rel='noopener noreferrer'
										target={item.href.startsWith('http') ? '_blank' : '_self'}
										href={item.href}
										download={item.download}
										className='flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200/60 hover:bg-neutral-300/70 dark:bg-neutral-800/50 dark:hover:bg-neutral-700/60 backdrop-blur-sm transition-colors'
									>
										<div className='text-neutral-800 dark:text-neutral-50'>
											{item.icon}
										</div>
									</Link>
								) : (
									<button
										aria-label={item.title}
										onClick={item.onClick}
										className='flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200/60 hover:bg-neutral-300/70 dark:bg-neutral-800/50 dark:hover:bg-neutral-700/60 backdrop-blur-sm transition-colors'
									>
										<div className='text-neutral-800 dark:text-neutral-50'>
											{item.icon}
										</div>
									</button>
								)}
							</motion.div>
						))}
					</motion.div>
				)}
			</AnimatePresence>

			<button
				aria-label={open ? 'Close menu' : 'Open menu'}
				onClick={() => setOpen(!open)}
				className='flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200/60 hover:bg-neutral-300/70 dark:bg-neutral-800/50 dark:hover:bg-neutral-700/60 backdrop-blur-sm transition-colors'
			>
				<IconLayoutNavbarCollapse className='h-5 w-5 text-neutral-800 dark:text-neutral-50' />
			</button>
		</div>
	);
};

const FloatingDockDesktop = ({
	items,
	className,
}: {
	items: FloatingDockItems[];
	className?: string;
}) => {
	const mouseX = useMotionValue(Infinity);

	return (
		<motion.div
			onMouseMove={e => mouseX.set(e.pageX)}
			onMouseLeave={() => mouseX.set(Infinity)}
			className={cn(
				'mx-auto hidden h-16 items-end gap-4 rounded-2xl bg-neutral-100/60 backdrop-blur-[6px] px-4 pb-3 md:flex dark:bg-neutral-900/50',
				className,
			)}
		>
			{items.map(item => (
				<IconContainer
					mouseX={mouseX}
					key={item.title}
					{...item}
				/>
			))}
		</motion.div>
	);
};

function IconContainer({
	mouseX,
	title,
	icon,
	href,
	onClick,
	download,
}: {
	mouseX: MotionValue;
	title: string;
	icon: React.ReactNode;
	href?: string;
	onClick?: () => void;
	download?: boolean;
}) {
	const ref = useRef<HTMLDivElement>(null);
	const distance = useTransform(mouseX, val => {
		const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
		return val - bounds.x - bounds.width / 2;
	});

	const width = useSpring(
		useTransform(distance, [-150, 0, 150], [40, 80, 40]),
		{ mass: 0.1, stiffness: 150, damping: 12 },
	);
	const height = useSpring(
		useTransform(distance, [-150, 0, 150], [40, 80, 40]),
		{ mass: 0.1, stiffness: 150, damping: 12 },
	);
	const iconSize = useSpring(
		useTransform(distance, [-150, 0, 150], [20, 40, 20]),
		{ mass: 0.1, stiffness: 150, damping: 12 },
	);

	const [hovered, setHovered] = useState(false);

	const Inner = (
		<>
			<AnimatePresence>
				{hovered && (
					<motion.div
						initial={{ opacity: 0, y: 10, x: '-50%' }}
						animate={{ opacity: 1, y: 0, x: '-50%' }}
						exit={{ opacity: 0, y: 2, x: '-50%' }}
						className='absolute -top-8 left-1/2 w-fit rounded-md border border-neutral-300 bg-neutral-100/70 backdrop-blur-[6px] px-2 py-0.5 text-xs text-neutral-800 dark:border-neutral-600 dark:bg-neutral-800/60 dark:text-neutral-50 whitespace-pre'
					>
						{title}
					</motion.div>
				)}
			</AnimatePresence>
			<motion.div
				style={{ width: iconSize, height: iconSize }}
				className='flex items-center justify-center text-neutral-800 dark:text-neutral-50'
			>
				{icon}
			</motion.div>
		</>
	);

	const sharedProps = {
		onMouseEnter: () => setHovered(true),
		onMouseLeave: () => setHovered(false),
		style: { width, height },
		className:
			'relative flex aspect-square items-center justify-center rounded-full bg-neutral-200/60 hover:bg-neutral-300/70 dark:bg-neutral-700/50 dark:hover:bg-neutral-600/60 backdrop-blur-[6px] transition-colors cursor-pointer',
	};

	if (href)
		return (
			<Link
				href={href}
				aria-label={title}
				rel='noopener noreferrer'
				target={href.startsWith('http') ? '_blank' : '_self'}
				download={download}
			>
				<motion.div
					ref={ref}
					{...sharedProps}
				>
					{Inner}
				</motion.div>
			</Link>
		);

	return (
		<motion.button
			rel='noopener noreferrer'
			aria-label={title}
			onClick={onClick}
			{...sharedProps}
		>
			<motion.div
				ref={ref}
				{...sharedProps}
			>
				{Inner}
			</motion.div>
		</motion.button>
	);
}
