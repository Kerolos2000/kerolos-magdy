'use client';
import { useGSAP } from '@gsap/react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll() {
	useGSAP(() => {
		if (window.innerWidth < 992) return;

		const lenis = new Lenis({
			duration: 1.75,
			smoothWheel: true,
		});

		document.body.style.overflow = 'hidden';

		lenis.on('scroll', ScrollTrigger.update);

		gsap.ticker.add(time => {
			lenis.raf(time * 1000);
		});

		gsap.ticker.lagSmoothing(0);

		return () => {
			lenis.destroy();
			document.body.style.overflow = '';
		};
	}, []);

	return null;
}
