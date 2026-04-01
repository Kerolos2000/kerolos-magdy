'use client';
import { useGSAP } from '@gsap/react';
import Lenis from '@studio-freight/lenis';
import { gsap, ScrollTrigger } from 'gsap/all';
import { useEffect, useRef } from 'react';
import { LoaderStore, useLoaderStore } from 'src/hooks';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll() {
	const isLoading = useLoaderStore((state: LoaderStore) => state.isLoading);
	const lenisRef = useRef<Lenis | null>(null);

	useGSAP(() => {
		if (window.innerWidth < 992) return;

		const lenis = new Lenis({
			duration: 1.75,
			smoothWheel: true,
			gestureOrientation: 'vertical',
			orientation: 'vertical',
		});
		lenisRef.current = lenis;

		if (isLoading) {
			lenis.stop();
		}

		document.body.style.overflow = 'hidden';

		lenis.on('scroll', ScrollTrigger.update);

		gsap.ticker.add(time => lenis.raf(time * 1000));
		gsap.ticker.lagSmoothing(0);

		const handleClick = (e: Event) => {
			const target = e.currentTarget as HTMLAnchorElement;
			const href = target.getAttribute('href');
			if (!href || !href.startsWith('#')) return;
			e.preventDefault();
			const el = document.querySelector(href);
			if (el)
				lenis.scrollTo(el as HTMLElement, { offset: 0, immediate: false });
		};

		const links = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
		links.forEach(link => link.addEventListener('click', handleClick));

		return () => {
			lenis.destroy();
			lenisRef.current = null;
			document.body.style.overflow = '';
			links.forEach(link => link.removeEventListener('click', handleClick));
		};
	}, []);

	useEffect(() => {
		if (!lenisRef.current) return;
		if (isLoading) {
			lenisRef.current.stop();
		} else {
			lenisRef.current.start();
		}
	}, [isLoading]);

	return null;
}
