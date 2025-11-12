import { gsap } from 'gsap';
import React from 'react';

interface MenuItemProps {
	link: string;
	text: string;
	image: string;
}

interface FlowingMenuProps {
	items?: MenuItemProps[];
}

export const FlowingMenu: React.FC<FlowingMenuProps> = ({ items = [] }) => {
	return (
		<div className='w-full h-full overflow-hidden'>
			<nav className='flex flex-col h-full m-0 p-0'>
				{items.map((item, index) => (
					<MenuItem
						key={index}
						{...item}
					/>
				))}
			</nav>
		</div>
	);
};

const MenuItem: React.FC<MenuItemProps> = ({ link, text, image }) => {
	const itemRef = React.useRef<HTMLDivElement>(null);
	const marqueeRef = React.useRef<HTMLDivElement>(null);
	const marqueeInnerRef = React.useRef<HTMLDivElement>(null);

	const animationDefaults = { duration: 0.6, ease: 'expo' };

	const findClosestEdge = (
		mouseX: number,
		mouseY: number,
		width: number,
		height: number,
	): 'top' | 'bottom' => {
		const topEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY, 2);
		const bottomEdgeDist =
			Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY - height, 2);
		return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
	};

	const handleMouseEnter = (ev: React.MouseEvent<HTMLAnchorElement>) => {
		if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
			return;
		const rect = itemRef.current.getBoundingClientRect();
		const edge = findClosestEdge(
			ev.clientX - rect.left,
			ev.clientY - rect.top,
			rect.width,
			rect.height,
		);

		const tl = gsap.timeline({ defaults: animationDefaults });
		tl.set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' })
			.set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' })
			.to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' });
	};

	const handleMouseLeave = (ev: React.MouseEvent<HTMLAnchorElement>) => {
		if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
			return;
		const rect = itemRef.current.getBoundingClientRect();
		const edge = findClosestEdge(
			ev.clientX - rect.left,
			ev.clientY - rect.top,
			rect.width,
			rect.height,
		);

		const tl = gsap.timeline({ defaults: animationDefaults });
		tl.to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }).to(
			marqueeInnerRef.current,
			{
				y: edge === 'top' ? '101%' : '-101%',
			},
		);
	};

	const repeatedMarqueeContent = React.useMemo(() => {
		return Array.from({ length: 4 }).map((_, index) => (
			<React.Fragment key={index}>
				<span className='text-neutral-900 dark:text-white uppercase font-normal text-[4vh] leading-[1.2] p-[1vh_1vw_0]'>
					{text}
				</span>
				<div
					className='w-10 h-10 my-[1em] mx-[1vw] p-[0.5em_0] rounded-[12px] bg-cover bg-center'
					style={{ backgroundImage: `url(${image})` }}
				/>
			</React.Fragment>
		));
	}, [text, image]);

	return (
		<div
			className='flex-1 relative overflow-hidden text-center shadow-[0_-1px_0_0_#fff] dark:shadow-[0_-1px_0_0_#000] group'
			ref={itemRef}
		>
			<a
				target='_blank'
				className='flex items-center justify-center h-full relative cursor-pointer uppercase no-underline font-semibold text-neutral-900 dark:text-white text-[4vh] group-hover:text-white dark:group-hover:text-neutral-900 focus:text-neutral-900 dark:focus:text-white'
				href={link}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				{text}
			</a>
			<div
				className='absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-neutral-100 dark:bg-neutral-900 translate-y-[101%] transition-colors duration-300'
				ref={marqueeRef}
			>
				<div
					className='h-full w-[200%] flex'
					ref={marqueeInnerRef}
				>
					<div className='flex items-center relative h-full w-[200%] will-change-transform animate-marquee'>
						{repeatedMarqueeContent}
					</div>
				</div>
			</div>
		</div>
	);
};
