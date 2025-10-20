import {
  AnimatedGradientText,
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "src/components/ui";

export default function HomeBreakSection() {
  return (
    <section id="home-break-section" className=" max-w-full overflow-hidden">
      <div
        className="relative flex w-full flex-col items-center justify-center overflow-hidden rotate-1 my-8 
        bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300"
      >
        <ScrollVelocityContainer
          className="text-4xl font-bold tracking-[-0.02em] md:text-7xl md:leading-[5rem] flex flex-col
          text-neutral-900 dark:text-neutral-100"
        >
          <ScrollVelocityRow baseVelocity={20} direction={1}>
            <span className="px-3 py-2">Frontend Developer</span>
          </ScrollVelocityRow>

          <ScrollVelocityRow baseVelocity={20} direction={-1}>
            <AnimatedGradientText
              className="px-3 py-2"
              colorFrom={undefined}
              colorTo={undefined}
            >
              React & Next.js
            </AnimatedGradientText>
          </ScrollVelocityRow>
        </ScrollVelocityContainer>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-neutral-50 dark:from-neutral-900" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-neutral-50 dark:from-neutral-900" />
      </div>
    </section>
  );
}
