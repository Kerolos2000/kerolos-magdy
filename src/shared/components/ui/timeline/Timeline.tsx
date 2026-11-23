'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { type ReactNode, useEffect, useRef, useState } from 'react';

export interface TimelineEntry {
  content: ReactNode;
  title: string;
}

interface TimelineProps {
  data: TimelineEntry[];
}

export const Timeline = ({ data }: TimelineProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const container = ref.current;

    if (!container) return;

    const resizeObserver = new ResizeObserver(() => {
      setHeight(container.scrollHeight);
    });

    resizeObserver.observe(container);

    return () => resizeObserver.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    offset: ['start 0%', 'end 100%'],
    target: ref,
  });
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className='relative'
      ref={ref}
    >
      {data.map(({ content, title }, index) => (
        <div
          className={`flex justify-start ${index === 0 ? 'pt-0' : 'pt-10'} md:gap-10`}
          key={title}
        >
          <div className='sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full'>
            <div className='size-10 absolute left-3 md:left-3 rounded-full bg-background flex items-center justify-center transition-colors duration-300'>
              <div className='size-4 rounded-full bg-border transition-colors duration-300 shadow-sm' />
            </div>
            <h3 className='hidden md:block text-xl md:pl-20 md:text-3xl font-bold text-muted'>
              {title}
            </h3>
          </div>
          <div className='relative pl-20 pr-4 md:pl-4 w-full'>
            <h3 className='md:hidden block text-2xl mb-4 text-left font-bold text-muted'>
              {title}
            </h3>
            <div>{content}</div>
          </div>
        </div>
      ))}
      <div
        className='absolute md:left-8 left-8 top-0 overflow-hidden w-0.5 bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-brand-soft to-transparent mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]'
        style={{ height }}
      >
        <motion.div
          className='absolute inset-x-0 top-0 w-0.5 bg-linear-to-t from-brand via-brand-medium to-transparent rounded-full'
          style={{
            height: heightTransform,
            opacity: opacityTransform,
          }}
        />
      </div>
    </div>
  );
};
