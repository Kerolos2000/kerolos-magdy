'use client';

import { gsap } from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { type MouseEvent, useEffect, useRef, useState } from 'react';

export interface FlowingMenuItemData {
  image: string;
  link: string;
  text: string;
}

interface FlowingMenuProps {
  items?: FlowingMenuItemData[];
  speed?: number;
}

interface MenuItemProps extends FlowingMenuItemData {
  isFirst: boolean;
  isVisible: boolean;
  speed: number;
}

const ANIMATION_DEFAULTS = { duration: 0.6, ease: 'expo' };

const findClosestEdge = (
  mouseX: number,
  mouseY: number,
  width: number,
  height: number,
): 'bottom' | 'top' => {
  const topEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY, 2);
  const bottomEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY - height, 2);

  return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
};

export const FlowingMenu = ({ items = [], speed = 15 }: FlowingMenuProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(Boolean(entry?.isIntersecting)),
      { rootMargin: '100px' },
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className='w-full h-full overflow-hidden bg-background'
      ref={containerRef}
    >
      <nav className='flex flex-col h-full m-0 p-0'>
        {items.map((item, index) => (
          <MenuItem
            isFirst={index === 0}
            isVisible={isVisible}
            key={item.text}
            speed={speed}
            {...item}
          />
        ))}
      </nav>
    </div>
  );
};

const MenuItem = ({ image, isFirst, isVisible, link, speed, text }: MenuItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeInnerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);
  const [repetitions, setRepetitions] = useState(4);

  useEffect(() => {
    if (!isVisible) return;

    const calculateRepetitions = () => {
      const marqueeContent = marqueeInnerRef.current?.querySelector<HTMLElement>('.marquee-part');

      if (!marqueeContent || marqueeContent.offsetWidth === 0) return;

      const needed = Math.ceil(window.innerWidth / marqueeContent.offsetWidth) + 2;

      setRepetitions(Math.max(4, needed));
    };

    calculateRepetitions();
    window.addEventListener('resize', calculateRepetitions);

    return () => window.removeEventListener('resize', calculateRepetitions);
  }, [image, isVisible, text]);

  useEffect(() => {
    if (!isVisible) {
      animationRef.current?.pause();

      return;
    }

    if (animationRef.current) {
      animationRef.current.play();

      return;
    }

    const setupMarquee = () => {
      const marqueeContent = marqueeInnerRef.current?.querySelector<HTMLElement>('.marquee-part');

      if (!marqueeContent || marqueeContent.offsetWidth === 0) return;

      animationRef.current?.kill();
      animationRef.current = gsap.to(marqueeInnerRef.current, {
        duration: speed,
        ease: 'none',
        repeat: -1,
        x: -marqueeContent.offsetWidth,
      });
    };
    const timer = setTimeout(setupMarquee, 50);

    return () => clearTimeout(timer);
  }, [image, isVisible, repetitions, speed, text]);

  useEffect(
    () => () => {
      animationRef.current?.kill();
      animationRef.current = null;
    },
    [],
  );

  const animateHover = (event: MouseEvent<HTMLAnchorElement>, isEntering: boolean) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;

    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      event.clientX - rect.left,
      event.clientY - rect.top,
      rect.width,
      rect.height,
    );
    const outerY = edge === 'top' ? '-101%' : '101%';
    const innerY = edge === 'top' ? '101%' : '-101%';
    const timeline = gsap.timeline({ defaults: ANIMATION_DEFAULTS });

    if (isEntering) {
      timeline
        .set(marqueeRef.current, { y: outerY }, 0)
        .set(marqueeInnerRef.current, { y: innerY }, 0)
        .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' }, 0);
    } else {
      timeline
        .to(marqueeRef.current, { y: outerY }, 0)
        .to(marqueeInnerRef.current, { y: innerY }, 0);
    }
  };

  return (
    <div
      className='flex-1 relative overflow-hidden text-center border-foreground'
      ref={itemRef}
      style={{ borderTop: isFirst ? 'none' : '1px solid' }}
    >
      <Link
        className='flex items-center justify-center h-full relative cursor-pointer uppercase no-underline font-semibold text-neutral-900 dark:text-white text-[4vh] group-hover:text-white dark:group-hover:text-neutral-900 focus:text-neutral-900 dark:focus:text-white'
        href={link}
        onMouseEnter={event => animateHover(event, true)}
        onMouseLeave={event => animateHover(event, false)}
        rel='noopener noreferrer'
        target='_blank'
      >
        {text}
      </Link>
      <div
        className='absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-background translate-y-[101%]'
        ref={marqueeRef}
      >
        <div
          className='h-full w-fit flex will-change-transform'
          ref={marqueeInnerRef}
        >
          {Array.from({ length: repetitions }, (_, index) => (
            <div
              className='marquee-part flex items-center shrink-0'
              key={index}
            >
              <span className='whitespace-nowrap uppercase font-normal text-[4vh] leading-none px-[1vw]'>
                {text}
              </span>
              <Image
                alt={text}
                height={50}
                sizes='50px'
                src={image}
                width={50}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
