import Link from "next/link";
import { LightGrid } from "src/components/ui";

export default function HomeGetInTouchSection() {
  return (
    <section
      id="home-get-in-touch-section"
      className="mt-6 sm:mt-0 border-b border-neutral-200 dark:border-neutral-800"
    >
      <LightGrid>
        <div className="flex flex-col flex-wrap items-center justify-between text-center gap-8 md:flex-row md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-neutral-900 dark:text-neutral-400">
              Ready to collaborate on{" "}
              <span className="font-bold dark:text-white">Next Project</span> ?
            </h2>
            <p className="mt-4 max-w-2xl text-base text-neutral-600 dark:text-neutral-300">
              Whether you need a modern website, a fast web app, or a complete
              design system, I can help you plan, build, and launch it
              efficiently and at scale.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:w-auto sm:flex-row justify-center md:justify-end">
            <Link
              href="https://api.whatsapp.com/send/?phone=201205224238&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-700 shadow-sm transition-all duration-200 hover:bg-neutral-50 hover:shadow-md dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </LightGrid>
    </section>
  );
}
