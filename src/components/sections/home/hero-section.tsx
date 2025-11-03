"use client";
import { IconFileDownload } from "@tabler/icons-react";
import Link from "next/link";
import { useRef } from "react";
import { AnimatedGradientText } from "src/components/ui";

export default function HomeHeroSection() {
  const heroRef = useRef<HTMLElement | null>(null);

  return (
    <section
      ref={heroRef}
      className="relative w-full py-16 flex items-center justify-center overflow-hidden bg-background"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-70 dark:opacity-50">
        <div className="absolute w-px h-full top-0 left-[25%] bg-linear-to-b from-transparent via-emerald-700 dark:via-emerald-200 to-transparent" />
        <div className="absolute w-px h-full top-0 right-[25%] bg-linear-to-b from-transparent via-emerald-700 dark:via-emerald-200 to-transparent" />
        <div className="absolute w-full h-px left-0 top-[29%] bg-linear-to-r from-transparent via-emerald-700 dark:via-emerald-200 to-transparent" />
        <div className="absolute w-full h-px left-0 bottom-[25%] bg-linear-to-r from-transparent via-emerald-700 dark:via-emerald-200 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center space-y-12">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full backdrop-blur-xl bg-card/50 border border-border">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-sm font-medium tracking-wide text-muted-foreground">
              AVAILABLE FOR WORK
            </span>
          </div>

          <div className="space-y-6">
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold text-foreground">
              <AnimatedGradientText>KEROLOS</AnimatedGradientText>
              <br />
              <span className="text-5xl sm:text-7xl md:text-8xl">MAGDY</span>
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl font-light tracking-wide max-w-3xl mx-auto text-muted-foreground">
              React
              <span className="text-emerald-500"> | </span>
              Next.js
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Link
              href="https://api.whatsapp.com/send/?phone=%2B201205224238&text&type=phone_number&app_absent=0"
              target="_blank"
            >
              <button className="cursor-pointer group relative px-8 py-3 sm:px-10 sm:py-4 bg-linear-to-r from-emerald-600 to-emerald-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105 active:scale-95 text-sm sm:text-base md:text-lg">
                <span className="relative z-10">LET&apos;S WORK TOGETHER</span>
                <div className="absolute inset-0 rounded-full bg-linear-to-r from-emerald-500 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </Link>

            <Link
              href="/Kerolos-Magdy-Resume.pdf"
              download
              className="group px-10 py-5 rounded-full backdrop-blur-xl bg-card/50 border border-border text-foreground hover:scale-105 transition-all duration-300 flex items-center gap-3"
            >
              <IconFileDownload className="w-5 h-5" />
              <span className="font-semibold text-lg tracking-wide">
                VIEW RESUME
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground uppercase tracking-wider">
            Scroll Down
          </span>
          <div className="w-6 h-10 border-2 border-emerald-500/50 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-emerald-500 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
