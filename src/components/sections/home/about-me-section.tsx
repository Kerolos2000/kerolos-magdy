import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "src/components/ui";
import { aboutMeSectionData } from "src/lib";

export default function HomeAboutMeSection() {
  return (
    <section className="pb-4 pt-8 container mx-auto px-4" id="home-about-me-section">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {aboutMeSectionData.map(({ details, icon: Icon, title }, i) => (
          <CardContainer key={i} className="inter-var">
            <CardBody
              className="relative group/card rounded-xl p-8 shadow-lg border border-black/10 dark:border-white/20 
              bg-transparent transition-colors duration-300 
              hover:border-emerald-500 dark:hover:border-emerald-400/40"
            >
              <CardItem
                translateZ="60"
                className="flex items-center gap-3 text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4"
              >
                <div className="p-2 bg-emerald-500/10 dark:bg-emerald-400/10 rounded-lg">
                  <Icon className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
                </div>
                {title}
              </CardItem>

              <div className="space-y-4">
                {details.map(({ isButton, icon: Icon, text, translateZ }, j) =>
                  isButton ? (
                    <CardItem className="mt-4" key={j} translateZ={translateZ}>
                      <Link
                        href="/Kerolos-Magdy-Resume.pdf"
                        download
                        className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg shadow-lg transition-colors duration-300"
                      >
                        Hire Me
                      </Link>
                    </CardItem>
                  ) : (
                    <CardItem
                      key={j}
                      translateZ={translateZ}
                      className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300 mb-2"
                    >
                      {Icon && (
                        <Icon className="w-4 h-4 text-neutral-700 dark:text-neutral-400" />
                      )}
                      {text}
                    </CardItem>
                  )
                )}
              </div>

              <CardItem
                translateZ="30"
                className="absolute -z-10 right-4 bottom-4 w-32 sm:w-40 h-32 sm:h-40 text-emerald-500/10 pointer-events-none select-none"
              >
                <Icon className="w-full h-full text-neutral-200 dark:text-neutral-800" />
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
}
