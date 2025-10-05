import {
  AnimatedGradientText,
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "src/components/ui";

export default function HomeBreakSection() {
  return (
    <section
      className="py-4 max-w-full overflow-hidden"
      id="home-break-section"
    >
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rotate-2 my-8 bg-neutral-50">
        <ScrollVelocityContainer className="text-4xl font-bold tracking-[-0.02em] md:text-7xl md:leading-[5rem] flex flex-col">
          <ScrollVelocityRow baseVelocity={20} direction={1}>
            <span className="px-3 py-2">Frontend Developer</span>
          </ScrollVelocityRow>
          <ScrollVelocityRow baseVelocity={20} direction={-1}>
            <AnimatedGradientText
              colorTo="#009966"
              colorFrom="#008299"
              className="px-3 py-2"
            >
              React & Next.js
            </AnimatedGradientText>
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
      </div>
    </section>
  );
}
