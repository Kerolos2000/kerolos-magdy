import { IconBrandWhatsapp } from "@tabler/icons-react";
import Link from "next/link";
import {
  AnimatedGradientText,
  BackgroundBeamsWithCollision,
} from "src/components";

export default function HomeHeroSection() {
  return (
    <section className="relative py-12 sm:py-16 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 -z-10 h-full w-full [&>div]:absolute [&>div]:bottom-auto [&>div]:left-auto [&>div]:right-0 [&>div]:top-0 [&>div]:h-[180px] sm:[&>div]:h-[260px] md:[&>div]:h-80 lg:[&>div]:h-[380px] xl:[&>div]:h-[420px] [&>div]:w-[180px] sm:[&>div]:w-[260px] md:[&>div]:w-[320px] lg:[&>div]:w-[380px] xl:[&>div]:w-[420px] [&>div]:-translate-x-[50%] [&>div]:translate-y-[20%] [&>div]:rounded-full [&>div]:bg-[rgba(109,244,173,0.3)] dark:[&>div]:bg-[rgba(109,244,173,0.15)] [&>div]:blur-[80px] [&>div]:animate-[fadePulse_10s_ease-in-out_infinite]">
          <div></div>
        </div>
      </div>

      <BackgroundBeamsWithCollision>
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-70 dark:opacity-50">
          <div className="absolute w-px h-full top-0 left-[15%] sm:left-[25%] bg-linear-to-b from-transparent via-emerald-700 dark:via-emerald-200 to-transparent" />
          <div className="absolute w-px h-full top-0 right-[15%] sm:right-[25%] bg-linear-to-b from-transparent via-emerald-700 dark:via-emerald-200 to-transparent" />
          <div className="absolute w-full h-px left-0 -top-full sm:top-[26%] bg-linear-to-r from-transparent via-emerald-700 dark:via-emerald-200 to-transparent" />
          <div className="absolute w-full h-px left-0 -bottom-full sm:bottom-[25%] bg-linear-to-r from-transparent via-emerald-700 dark:via-emerald-200 to-transparent" />
        </div>

        <div className="relative w-full z-10 flex flex-col items-center justify-center space-y-4 sm:space-y-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl bg-card/50 border border-border">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-xs sm:text-sm font-medium tracking-wide text-muted-foreground">
              AVAILABLE FOR WORK
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-foreground flex flex-col items-center gap-1 sm:gap-2">
            <AnimatedGradientText>KEROLOS</AnimatedGradientText>
            <span className="text-3xl sm:text-5xl md:text-7xl">MAGDY</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl font-light tracking-wide max-w-3xl mx-auto text-muted-foreground">
            React
            <span className="text-emerald-500"> | </span>
            Next.js
          </p>

          <Link
            href="https://api.whatsapp.com/send/?phone=%2B201205224238&text&type=phone_number&app_absent=0"
            target="_blank"
            className="w-fit px-6 py-3 sm:px-7 rounded-xl bg-neutral-50/50 dark:bg-neutral-100/10 backdrop-blur-sm border border-card-foreground/30 hover:border-card-foreground/50 text-foreground transition-all duration-300 flex items-center gap-2"
          >
            <IconBrandWhatsapp size="1.2rem" />
            <span className="font-medium text-xs sm:text-sm tracking-wide">
              GET IN TOUCH
            </span>
          </Link>

          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] sm:text-xs text-xs text-muted-foreground uppercase tracking-wider">
              Scroll Down
            </span>
            <div className="w-6 h-10 border-2 border-emerald-500/50 rounded-full flex justify-center p-2">
              <div className="w-1 h-3 bg-emerald-500 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </section>
  );
}
