import { BackgroundRippleEffect } from "src/components/ui";

export default function HomeHeroSection() {
  return (
    <section
      id="home-hero-section"
      className="relative flex w-full py-24 sm:py-20 md:py-48 flex-col items-center justify-center overflow-hidden px-4"
    >
      <BackgroundRippleEffect />

      <div className="relative z-10 flex flex-col items-center justify-center gap-3 sm:gap-4">
        <p className="text-lg sm:text-xl md:text-2xl text-gray-500">
          Hello I&apos;m
        </p>

        <h1
          className="font-bold text-center
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
        >
          Kerolos Magdy
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600">
          Frontend Developer
        </p>
      </div>
    </section>
  );
}
