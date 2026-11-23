'use client';

import { Anton } from 'next/font/google';
import { type CSSProperties, useEffect, useState } from 'react';
import { useLoaderStore } from 'src/shared/store/useLoaderStore';
import { cn } from 'src/shared/utils/cn';

const anton = Anton({
  display: 'swap',
  subsets: ['latin'],
  weight: '400',
});

export type StaggerType = 'center-out' | 'edges-in' | 'left-to-right' | 'right-to-left';
export type MovementType = 'bottom-up' | 'fade-out' | 'scale-vertical' | 'top-down';

interface RevealLoaderProps {
  angle?: number;
  className?: string;
  movementDirection?: MovementType;
  onComplete?: () => void;
  staggerOrder?: StaggerType;
  text?: string;
  textColor?: string;
  textFadeDelay?: number;
  textSize?: string;
}

const BAR_COUNT = 10;
const BAR_START_DELAY_MS = 640;
const BAR_STAGGER_MS = 35;
const BAR_DURATION_MS = 520;

const MOVEMENT_CLASS_MAP: Record<MovementType, string> = {
  'bottom-up': 'loader-bar--bottom-up',
  'fade-out': 'loader-bar--fade-out',
  'scale-vertical': 'loader-bar--scale-vertical',
  'top-down': 'loader-bar--top-down',
};

const getBarStaggerRank = (index: number, order: StaggerType): number => {
  const center = (BAR_COUNT - 1) / 2;

  switch (order) {
    case 'right-to-left':
      return BAR_COUNT - 1 - index;
    case 'center-out':
      return Math.abs(index - center);
    case 'edges-in':
      return center - Math.abs(index - center);
    case 'left-to-right':
    default:
      return index;
  }
};

export const RevealLoader = ({
  angle = 180,
  className,
  movementDirection = 'top-down',
  onComplete,
  staggerOrder = 'left-to-right',
  text = 'Loading',
  textColor,
  textFadeDelay = 0.08,
  textSize = '100px',
}: RevealLoaderProps) => {
  const [isDone, setIsDone] = useState(false);
  const setIsLoading = useLoaderStore(s => s.setIsLoading);
  const maxRank = Math.max(
    ...Array.from({ length: BAR_COUNT }, (_, i) => getBarStaggerRank(i, staggerOrder)),
  );
  const totalDurationMs = BAR_START_DELAY_MS + maxRank * BAR_STAGGER_MS + BAR_DURATION_MS;

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finish = () => {
      setIsDone(true);
      setIsLoading(false);
      onComplete?.();
    };

    if (prefersReducedMotion) {
      finish();

      return;
    }

    const timer = window.setTimeout(finish, totalDurationMs + 80);

    return () => window.clearTimeout(timer);
  }, [onComplete, setIsLoading, totalDurationMs]);

  if (isDone) return null;

  const movementClass = MOVEMENT_CLASS_MAP[movementDirection];
  const backgroundImage = `linear-gradient(${angle}deg, var(--background), var(--border))`;
  const textOutDelayMs = BAR_START_DELAY_MS + Math.round(textFadeDelay * 1000);

  return (
    <div
      aria-hidden='true'
      className={cn(
        'fixed inset-0 z-50 flex overflow-hidden bg-transparent pointer-events-none [contain:strict]',
        className,
      )}
    >
      {Array.from({ length: BAR_COUNT }, (_, index) => {
        const delayMs = BAR_START_DELAY_MS + getBarStaggerRank(index, staggerOrder) * BAR_STAGGER_MS;

        return (
          <div
            className={cn('loader-bar h-full w-[10%]', movementClass)}
            key={index}
            style={
              {
                '--bar-delay': `${delayMs}ms`,
                backgroundImage,
              } as CSSProperties
            }
          />
        );
      })}

      <div
        className='loader-text-wrap absolute inset-0 flex items-center justify-center pointer-events-none'
        style={{ '--text-out-delay': `${textOutDelayMs}ms` } as CSSProperties}
      >
        <div className='overflow-hidden'>
          <p
            className={cn('flex leading-none tracking-tighter', anton.className)}
            style={{
              color: textColor || 'var(--foreground)',
              fontFeatureSettings: 'normal',
              fontSize: textSize,
              fontVariationSettings: 'normal',
              fontWeight: '400',
              position: 'relative',
              textTransform: 'uppercase',
              zIndex: 10,
            }}
          >
            {text.split('').map((char, index) => (
              <span
                className='loader-char inline-block'
                key={index}
                style={{ '--char-delay': `${index * 32}ms` } as CSSProperties}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};
