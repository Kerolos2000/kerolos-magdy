'use client';

import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { MainTitle } from 'src/shared/components/ui/main-title/MainTitle';
import { SECTION_IDS } from 'src/shared/constants/sections';
import { PROJECT_ITEMS } from '../config/projectItems';
import { ProjectsMarqueeRow } from './ProjectsMarqueeRow';

const SPRING_CONFIG = { bounce: 100, damping: 30, stiffness: 300 };
const FIRST_ROW = PROJECT_ITEMS.slice(0, 3);
const SECOND_ROW = PROJECT_ITEMS.slice(3, 6);
const THIRD_ROW = PROJECT_ITEMS.slice(6, 9);

export const ProjectsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(Boolean(entry?.isIntersecting)),
      { rootMargin: '150px' },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    offset: ['start start', 'end start'],
    target: ref,
  });
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), SPRING_CONFIG);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), SPRING_CONFIG);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), SPRING_CONFIG);
  const isPaused = !isInView;

  return (
    <section
      className='py-8 w-full overflow-hidden'
      id={SECTION_IDS.projects}
    >
      <div
        className='relative flex flex-col items-center perspective-[1000px] transform-3d pointer-events-none'
        ref={ref}
      >
        <div className='container mx-auto pt-0 pb-8 sm:py-16 px-4 w-full text-left relative -z-10 space-y-4'>
          <MainTitle
            boldText='Projects'
            regularText='Explore My'
          />
          <p className='section-description'>
            I create modern and elegant web products using cutting-edge technologies and frameworks,
            focusing on performance, scalability, and user experience.
          </p>
        </div>

        <motion.div
          className='flex flex-col items-center gap-4 md:gap-8 pointer-events-auto'
          style={{ opacity, rotateX, rotateZ }}
        >
          <ProjectsMarqueeRow
            isPaused={isPaused}
            projects={FIRST_ROW}
            reverse
          />
          <ProjectsMarqueeRow
            isPaused={isPaused}
            projects={SECOND_ROW}
          />
          <ProjectsMarqueeRow
            isPaused={isPaused}
            projects={THIRD_ROW}
            reverse
          />
        </motion.div>
      </div>
    </section>
  );
};
