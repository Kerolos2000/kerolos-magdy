"use client";
import { motion, useScroll, useTransform } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { TextHoverEffect } from "./text-hover-effect";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const resizeObserver = new ResizeObserver(() => {
      if (ref.current) {
        setHeight(ref.current.scrollHeight);
      }
    });

    resizeObserver.observe(ref.current);

    return () => resizeObserver.disconnect();
  }, [ref, data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div ref={containerRef} className="w-full overflow-y-clip">
      <TextHoverEffect text="My Experience" />

      <div ref={ref} className="relative pt-10">
        {data.map(({ title, content }, index) => (
          <div
            key={index}
            className={`flex justify-start ${index === 0 ? "pt-0" : "pt-10"} ${
              index === 0 ? "md:pt-0 " : "md:pt-30"
            } md:gap-10`}
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 w-10 absolute left-3 md:left-3 rounded-full bg-white dark:bg-neutral-950 flex items-center justify-center transition-colors duration-300">
                <div className="h-4 w-4 rounded-full bg-neutral-300 dark:bg-neutral-700 border border-neutral-400 dark:border-neutral-600 transition-colors duration-300 shadow-sm " />
              </div>

              <h3 className="hidden md:block text-xl md:pl-20 md:text-3xl font-bold text-neutral-500 dark:text-neutral-500">
                {title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {title}
              </h3>
              {content}
            </div>
          </div>
        ))}

        <div
          style={{ height }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px]
          bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))]
          from-transparent via-neutral-200 dark:via-neutral-700 to-transparent
          [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-emerald-600 via-emerald-200 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
