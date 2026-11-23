'use client';

import { AnimatePresence, motion } from 'motion/react';
import { type CSSProperties, type ReactNode, useEffect, useRef, useState } from 'react';
import { useLoaderStore } from 'src/shared/store/useLoaderStore';
import { cn } from 'src/shared/utils/cn';

interface BeamOptions {
  className?: string;
  delay?: number;
  duration?: number;
  initialX?: number;
  repeatDelay?: number;
  rotate?: number;
  translateX?: number;
}

interface BackgroundBeamsWithCollisionProps {
  children: ReactNode;
  className?: string;
}

interface CollisionBeamProps {
  beamOptions: BeamOptions;
  isActive: boolean;
  parentHeight: number;
}

const BEAMS: BeamOptions[] = [
  { className: 'h-6', delay: 1, duration: 7, initialX: 100, repeatDelay: 6, translateX: 100 },
  { delay: 2, duration: 5, initialX: 200, repeatDelay: 8, translateX: 200 },
  { className: 'h-8', delay: 3, duration: 6, initialX: 350, repeatDelay: 10, translateX: 350 },
  { delay: 4, duration: 5, initialX: 400, repeatDelay: 9, translateX: 400 },
  { delay: 5, duration: 3, initialX: 600, repeatDelay: 7, translateX: 600 },
  { className: 'h-20', delay: 2, duration: 11, initialX: 800, repeatDelay: 5, translateX: 800 },
  { className: 'h-12', delay: 3, duration: 4, initialX: 1000, repeatDelay: 6, translateX: 1000 },
  { className: 'h-6', delay: 1, duration: 6, initialX: 1200, repeatDelay: 9, translateX: 1200 },
  { delay: 4, duration: 10, initialX: 1400, repeatDelay: 8, translateX: 1400 },
  { delay: 2, duration: 8, initialX: 1600, repeatDelay: 10, translateX: 1600 },
  { delay: 5, duration: 6, initialX: 1800, repeatDelay: 7, translateX: 1800 },
];

export const BackgroundBeamsWithCollision = ({
  children,
  className,
}: BackgroundBeamsWithCollisionProps) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const isLoading = useLoaderStore(s => s.isLoading);
  const [isInView, setIsInView] = useState(true);
  const [parentHeight, setParentHeight] = useState(0);

  useEffect(() => {
    const parent = parentRef.current;

    if (!parent) return;

    const updateHeight = () => setParentHeight(parent.offsetHeight);

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);

    resizeObserver.observe(parent);

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      setIsInView(Boolean(entry?.isIntersecting));
    });

    intersectionObserver.observe(parent);

    return () => {
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, []);

  const isActive = !isLoading && isInView && parentHeight > 0;

  return (
    <div
      className={cn(
        'relative flex items-center w-full justify-center overflow-hidden',
        className,
      )}
      ref={parentRef}
    >
      {isActive &&
        BEAMS.map(beam => (
          <CollisionBeam
            beamOptions={beam}
            isActive={isActive}
            key={`${beam.initialX}-beam`}
            parentHeight={parentHeight}
          />
        ))}

      {children}
      <div className='absolute bottom-0 bg-neutral-100 w-full inset-x-0 pointer-events-none' />
    </div>
  );
};

const CollisionBeam = ({ beamOptions, isActive, parentHeight }: CollisionBeamProps) => {
  const [cycle, setCycle] = useState(0);
  const [explosionKey, setExplosionKey] = useState<number | null>(null);
  const timersRef = useRef<number[]>([]);

  useEffect(
    () => () => {
      timersRef.current.forEach(id => window.clearTimeout(id));
      timersRef.current = [];
    },
    [],
  );

  // Match the original vertical speed (~2000px over duration) without layout polling.
  const travelDistance = parentHeight + 200;
  const scaledDuration = ((beamOptions.duration ?? 8) * travelDistance) / 2000;
  const beamX = beamOptions.translateX ?? beamOptions.initialX ?? 0;

  const handleCycleComplete = () => {
    if (!isActive) return;

    const currentExplosion = Date.now() + cycle;

    setExplosionKey(currentExplosion);

    const clearExplosionTimer = window.setTimeout(() => setExplosionKey(null), 1600);
    const nextCycleTimer = window.setTimeout(
      () => setCycle(prev => prev + 1),
      (beamOptions.repeatDelay ?? 5) * 1000,
    );

    timersRef.current.push(clearExplosionTimer, nextCycleTimer);
  };

  return (
    <>
      <motion.div
        animate={{
          rotate: beamOptions.rotate ?? 0,
          x: beamX,
          y: parentHeight,
        }}
        className={cn(
          'absolute left-0 top-0 m-auto h-14 w-px rounded-full bg-linear-to-t from-brand via-brand-soft to-transparent will-change-transform',
          beamOptions.className,
        )}
        initial={{
          rotate: beamOptions.rotate ?? 0,
          x: beamOptions.initialX ?? 0,
          y: -200,
        }}
        key={cycle}
        onAnimationComplete={handleCycleComplete}
        transition={{
          delay: cycle === 0 ? (beamOptions.delay ?? 0) : 0,
          duration: scaledDuration,
          ease: 'linear',
        }}
      />
      <AnimatePresence>
        {explosionKey !== null && (
          <Explosion
            key={explosionKey}
            style={{
              left: `${beamX}px`,
              top: `${parentHeight}px`,
              transform: 'translate3d(-50%, -50%, 0)',
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

interface ExplosionProps {
  style: CSSProperties;
}

const Explosion = ({ style }: ExplosionProps) => {
  const [spans] = useState(() =>
    Array.from({ length: 14 }, (_, index) => ({
      directionX: Math.floor(Math.random() * 80 - 40),
      directionY: Math.floor(Math.random() * -50 - 10),
      duration: Math.random() * 1.2 + 0.4,
      id: index,
    })),
  );

  return (
    <div
      className='absolute z-40 h-2 w-2 pointer-events-none'
      style={style}
    >
      <motion.div
        animate={{ opacity: 1 }}
        className='absolute -inset-x-10 top-0 m-auto h-2 w-10 rounded-full bg-linear-to-r from-transparent via-brand to-transparent blur-sm'
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />
      {spans.map(span => (
        <motion.span
          animate={{ opacity: 0, x: span.directionX, y: span.directionY }}
          className='absolute h-1 w-1 rounded-full bg-brand'
          initial={{ opacity: 1, x: 0, y: 0 }}
          key={span.id}
          transition={{ duration: span.duration, ease: 'easeOut' }}
        />
      ))}
    </div>
  );
};
