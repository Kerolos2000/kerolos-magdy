'use client';

import { IconLayoutNavbarCollapse } from '@tabler/icons-react';
import {
  AnimatePresence,
  motion,
  type MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from 'motion/react';
import Link from 'next/link';
import { type ReactNode, useRef, useState } from 'react';
import { cn } from 'src/shared/utils/cn';

export interface FloatingDockItem {
  download?: boolean;
  href?: string;
  icon: ReactNode;
  onClick?: () => void;
  title: string;
}

interface FloatingDockProps {
  desktopClassName?: string;
  items: FloatingDockItem[];
  mobileClassName?: string;
}

interface FloatingDockVariantProps {
  className?: string;
  items: FloatingDockItem[];
}

interface DockIconContainerProps extends FloatingDockItem {
  mouseX: MotionValue;
}

const SPRING_CONFIG = { damping: 12, mass: 0.1, stiffness: 150 };

export const FloatingDock = ({ desktopClassName, items, mobileClassName }: FloatingDockProps) => (
  <>
    <FloatingDockDesktop
      className={desktopClassName}
      items={items}
    />
    <FloatingDockMobile
      className={mobileClassName}
      items={items}
    />
  </>
);

const FloatingDockMobile = ({ className, items }: FloatingDockVariantProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn('relative block md:hidden', className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            className='absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2'
            layoutId='nav'
          >
            {items.map((item, index) => (
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, transition: { delay: index * 0.05 }, y: 10 }}
                initial={{ opacity: 0, y: 10 }}
                key={item.title}
                transition={{ delay: (items.length - 1 - index) * 0.05 }}
              >
                {item.href ? (
                  <Link
                    aria-label={item.title}
                    className='floating-button'
                    download={item.download}
                    href={item.href}
                    rel='noopener noreferrer'
                    target={item.href.startsWith('http') ? '_blank' : '_self'}
                  >
                    <div className='text-neutral-800 dark:text-neutral-50'>{item.icon}</div>
                  </Link>
                ) : (
                  <button
                    aria-label={item.title}
                    className='floating-button'
                    onClick={item.onClick}
                  >
                    <div className='text-neutral-800 dark:text-neutral-50'>{item.icon}</div>
                  </button>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        aria-label={open ? 'Close menu' : 'Open menu'}
        className='floating-button'
        onClick={() => setOpen(prev => !prev)}
      >
        <IconLayoutNavbarCollapse className='h-5 w-5 text-neutral-800 dark:text-neutral-50' />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({ className, items }: FloatingDockVariantProps) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      className={cn(
        'mx-auto hidden h-16 items-end gap-4 rounded-lg bg-neutral-100/60 backdrop-blur-[6px] px-4 pb-3 md:flex dark:bg-neutral-900/50',
        className,
      )}
      onMouseLeave={() => mouseX.set(Infinity)}
      onMouseMove={event => mouseX.set(event.pageX)}
    >
      {items.map(item => (
        <DockIconContainer
          key={item.title}
          mouseX={mouseX}
          {...item}
        />
      ))}
    </motion.div>
  );
};

const DockIconContainer = ({
  download,
  href,
  icon,
  mouseX,
  onClick,
  title,
}: DockIconContainerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const distance = useTransform(mouseX, value => {
    const bounds = ref.current?.getBoundingClientRect() ?? { width: 0, x: 0 };

    return value - bounds.x - bounds.width / 2;
  });
  const width = useSpring(useTransform(distance, [-150, 0, 150], [40, 80, 40]), SPRING_CONFIG);
  const height = useSpring(useTransform(distance, [-150, 0, 150], [40, 80, 40]), SPRING_CONFIG);
  const iconSize = useSpring(useTransform(distance, [-150, 0, 150], [20, 40, 20]), SPRING_CONFIG);

  const content = (
    <motion.div
      className='relative floating-button'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      ref={ref}
      style={{ height, width }}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            animate={{ opacity: 1, x: '-50%', y: 0 }}
            className='absolute -top-8 left-1/2 w-fit rounded-lg border border-neutral-300 bg-neutral-100/70 backdrop-blur-[6px] px-2 py-0.5 text-xs text-neutral-800 dark:border-neutral-600 dark:bg-neutral-800/60 dark:text-neutral-50 whitespace-pre'
            exit={{ opacity: 0, x: '-50%', y: 2 }}
            initial={{ opacity: 0, x: '-50%', y: 10 }}
          >
            {title}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        className='flex items-center justify-center text-neutral-800 dark:text-neutral-50'
        style={{ height: iconSize, width: iconSize }}
      >
        {icon}
      </motion.div>
    </motion.div>
  );

  if (href) {
    return (
      <Link
        aria-label={title}
        download={download}
        href={href}
        rel='noopener noreferrer'
        target={href.startsWith('http') ? '_blank' : '_self'}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      aria-label={title}
      onClick={onClick}
      type='button'
    >
      {content}
    </button>
  );
};
