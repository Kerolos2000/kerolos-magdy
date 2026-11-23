'use client';

import { useEffect } from 'react';
import { useLoaderStore } from 'src/shared/store/useLoaderStore';

export const SmoothScroll = () => {
  const isLoading = useLoaderStore(s => s.isLoading);

  useEffect(() => {
    if (isLoading || window.innerWidth < 992) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let cancelled = false;
    let cleanup: (() => void) | undefined;

    const initSmoothScroll = async () => {
      const [{ default: Lenis }, { default: gsap }, { ScrollTrigger }] = await Promise.all([
        import('@studio-freight/lenis'),
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ]);

      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);

      const lenis = new Lenis({
        duration: 1.4,
        gestureOrientation: 'vertical',
        orientation: 'vertical',
        smoothWheel: true,
      });
      const onTick = (time: number) => lenis.raf(time * 1000);

      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(onTick);
      gsap.ticker.lagSmoothing(0);

      const handleDocumentClick = (event: MouseEvent) => {
        const anchor = (event.target as HTMLElement | null)?.closest<HTMLAnchorElement>(
          'a[href^="#"]',
        );
        const href = anchor?.getAttribute('href');

        if (!href || href === '#') return;

        const targetElement = document.querySelector<HTMLElement>(href);

        if (!targetElement) return;

        event.preventDefault();
        lenis.scrollTo(targetElement, { immediate: false, offset: 0 });
      };

      document.addEventListener('click', handleDocumentClick);

      cleanup = () => {
        document.removeEventListener('click', handleDocumentClick);
        gsap.ticker.remove(onTick);
        lenis.destroy();
      };
    };

    void initSmoothScroll();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [isLoading]);

  return null;
};
