'use client';

import {
  motion,
  type MotionValue,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'motion/react';
import {
  createContext,
  type HTMLAttributes,
  type ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { cn } from 'src/shared/utils/cn';

interface ScrollVelocityRowProps extends HTMLAttributes<HTMLDivElement> {
  baseVelocity?: number;
  children: ReactNode;
  direction?: -1 | 1;
}

interface ScrollVelocityRowImplProps extends ScrollVelocityRowProps {
  velocityFactor: MotionValue<number>;
}

const wrap = (min: number, max: number, value: number) => {
  const rangeSize = max - min;

  return ((((value - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const ScrollVelocityContext = createContext<MotionValue<number> | null>(null);

const useScrollVelocityFactor = () => {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const isDesktop =
    typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches;

  return useTransform(smoothVelocity, value => {
    if (!isDesktop) return 0;

    const sign = value < 0 ? -1 : 1;
    const magnitude = Math.min(5, (Math.abs(value) / 1000) * 5);

    return sign * magnitude;
  });
};

export const ScrollVelocityContainer = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  const velocityFactor = useScrollVelocityFactor();

  return (
    <ScrollVelocityContext.Provider value={velocityFactor}>
      <div
        className={cn('relative w-full', className)}
        {...props}
      >
        {children}
      </div>
    </ScrollVelocityContext.Provider>
  );
};

export const ScrollVelocityRow = (props: ScrollVelocityRowProps) => {
  const sharedVelocityFactor = useContext(ScrollVelocityContext);

  if (sharedVelocityFactor) {
    return (
      <ScrollVelocityRowImpl
        {...props}
        velocityFactor={sharedVelocityFactor}
      />
    );
  }

  return <ScrollVelocityRowLocal {...props} />;
};

const ScrollVelocityRowImpl = ({
  baseVelocity = 5,
  children,
  className,
  direction = 1,
  velocityFactor,
  ...props
}: ScrollVelocityRowImplProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const blockRef = useRef<HTMLDivElement>(null);
  const [numCopies, setNumCopies] = useState(1);
  const baseX = useMotionValue(0);
  const baseDirectionRef = useRef<number>(direction >= 0 ? 1 : -1);
  const currentDirectionRef = useRef<number>(direction >= 0 ? 1 : -1);
  const unitWidth = useMotionValue(0);
  const isInViewRef = useRef(true);
  const isPageVisibleRef = useRef(true);
  const prefersReducedMotionRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    const block = blockRef.current;

    if (!container || !block) return;

    const updateSizes = () => {
      const containerWidth = container.offsetWidth || 0;
      const blockWidth = block.scrollWidth || 0;

      unitWidth.set(blockWidth);

      const nextCopies = blockWidth > 0 ? Math.max(3, Math.ceil(containerWidth / blockWidth) + 2) : 1;

      setNumCopies(prev => (prev === nextCopies ? prev : nextCopies));
    };

    updateSizes();

    const resizeObserver = new ResizeObserver(updateSizes);

    resizeObserver.observe(container);
    resizeObserver.observe(block);

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      isInViewRef.current = entry.isIntersecting;
    });

    intersectionObserver.observe(container);

    const handleVisibility = () => {
      isPageVisibleRef.current = document.visibilityState === 'visible';
    };

    document.addEventListener('visibilitychange', handleVisibility, { passive: true });
    handleVisibility();

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleReducedMotion = () => {
      prefersReducedMotionRef.current = mediaQuery.matches;
    };

    mediaQuery.addEventListener('change', handleReducedMotion);
    handleReducedMotion();

    return () => {
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener('visibilitychange', handleVisibility);
      mediaQuery.removeEventListener('change', handleReducedMotion);
    };
  }, [children, unitWidth]);

  const x = useTransform([baseX, unitWidth], ([value, width]) => {
    const safeWidth = Number(width) || 1;
    const offset = Number(value) || 0;

    return `${-wrap(0, safeWidth, offset)}px`;
  });

  useAnimationFrame((_, delta) => {
    if (!isInViewRef.current || !isPageVisibleRef.current) return;

    const dt = delta / 1000;
    const factor = velocityFactor.get();
    const absFactor = Math.min(5, Math.abs(factor));
    const speedMultiplier = prefersReducedMotionRef.current ? 1 : 1 + absFactor;

    if (absFactor > 0.1) {
      const scrollDirection = factor >= 0 ? 1 : -1;

      currentDirectionRef.current = baseDirectionRef.current * scrollDirection;
    }

    const blockWidth = unitWidth.get() || 0;

    if (blockWidth <= 0) return;

    const pixelsPerSecond = (blockWidth * baseVelocity) / 100;
    const moveBy = currentDirectionRef.current * pixelsPerSecond * speedMultiplier * dt;

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      className={cn('w-full overflow-hidden whitespace-nowrap', className)}
      ref={containerRef}
      {...props}
    >
      <motion.div
        className='inline-flex transform-gpu items-center will-change-transform select-none'
        style={{ x }}
      >
        {Array.from({ length: numCopies }, (_, index) => (
          <div
            aria-hidden={index !== 0}
            className='inline-flex shrink-0 items-center'
            key={index}
            ref={index === 0 ? blockRef : null}
          >
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const ScrollVelocityRowLocal = (props: ScrollVelocityRowProps) => {
  const localVelocityFactor = useScrollVelocityFactor();

  return (
    <ScrollVelocityRowImpl
      {...props}
      velocityFactor={localVelocityFactor}
    />
  );
};
