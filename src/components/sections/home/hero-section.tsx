import {
  AnimatedGradientText,
  BackgroundRippleEffect,
  Highlighter,
} from "src/components/ui";

export default function HomeHeroSection() {
  return (
    <section
      id="home-hero-section"
      className="relative flex w-full py-24 sm:py-20 md:py-48 flex-col items-center justify-center overflow-hidden px-4"
    >
      <BackgroundRippleEffect />

      <div className="relative z-10 flex flex-col items-center justify-center gap-3 sm:gap-4">
        <p className="leading-relaxed text-gray-700 dark:text-gray-300 text-base sm:text-lg md:text-xl">
          <Highlighter action="underline" color="#008299">
            Hello I&apos;m
          </Highlighter>
        </p>

        <div>
          <AnimatedGradientText className="font-bold text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Kerolos Magdy
          </AnimatedGradientText>
        </div>

        <p className="sm:text-lg md:text-xl lg:text-2xl dark:text-gray-300 text-gray-700 text-base">
          Frontend Developer
        </p>
      </div>
    </section>
  );
}
