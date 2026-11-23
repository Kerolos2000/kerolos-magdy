'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import { useLoaderStore } from 'src/shared/store/useLoaderStore';

const Ballpit = dynamic(() => import('./Ballpit').then(m => m.Ballpit), {
  ssr: false,
});

interface LazyBallpitProps {
  className?: string;
  colors?: string[];
  count?: number;
  followCursor?: boolean;
  gravity?: number;
}

export const LazyBallpit = ({
  className,
  colors,
  count,
  followCursor,
  gravity,
}: LazyBallpitProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isLoading = useLoaderStore(s => s.isLoading);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isLoading || shouldRender) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const container = containerRef.current;

    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;

        setShouldRender(true);
        observer.disconnect();
      },
      { rootMargin: '200px' },
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [isLoading, shouldRender]);

  return (
    <div
      className={className}
      ref={containerRef}
    >
      {shouldRender && (
        <Ballpit
          colors={colors}
          count={count}
          followCursor={followCursor}
          gravity={gravity}
        />
      )}
    </div>
  );
};
