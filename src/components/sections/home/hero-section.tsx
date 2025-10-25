import Link from "next/link";
import { AnimatedGradientText, Ballpit, Highlighter } from "src/components/ui";

export default function HomeHeroSection() {
  return (
    <section
      id="home-hero-section"
      className="relative w-full flex items-center"
    >
      <div className="relative flex w-full flex-col items-center justify-center py-16 sm:py-24 md:py-32 lg:py-40 bg-background text-foreground">
        <div className="absolute inset-0">
          <Ballpit
            count={50}
            gravity={0.01}
            friction={0.9975}
            wallBounce={0.95}
            colors={[
              "#022C22",
              "#064E3B",
              "#065F46",
              "#047857",
              "#059669",
              "#10B981",
              "#34D399",
              "#6EE7B7",
            ]}
            followCursor={false}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10 text-center px-4 max-w-5xl mx-auto">
          <div className="space-y-3 sm:space-y-4">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl lg:text-2xl font-medium">
              <Highlighter action="underline" color="#10B981">
                Hello I&apos;m
              </Highlighter>
            </p>

            <div className="py-2">
              <AnimatedGradientText
                colorFrom="#064E3B"
                colorTo="#34D399"
                className="font-bold text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight"
              >
                Kerolos Magdy
              </AnimatedGradientText>
            </div>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-muted-foreground max-w-2xl mx-auto px-4 mt-4">
              Frontend developer crafting beautiful and functional web
              experiences.
            </p>
          </div>

          <Link href="#home-contact-section">
            <button className="cursor-pointer group relative px-8 py-3 sm:px-10 sm:py-4 bg-linear-to-r from-emerald-600 to-emerald-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105 active:scale-95 text-sm sm:text-base md:text-lg">
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 rounded-full bg-linear-to-r from-emerald-500 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
