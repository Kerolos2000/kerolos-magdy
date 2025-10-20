"use client";

import { Briefcase, GraduationCap, Laptop, MapPin, Wrench } from "lucide-react";
import Image from "next/image";
import { Timeline } from "src/components/ui";

export default function HomeExperienceSection() {
  const data = [
    {
      title: "Freelance Frontend Engineer",
      content: (
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
            <Laptop className="h-4 w-4 text-emerald-700" />
            <span>Remote — Ongoing</span>
          </div>
          <p className="text-sm text-neutral-800 dark:text-neutral-200">
            Collaborating with multiple international clients to deliver
            <strong> high-performance </strong> web and mobile experiences.
            Specialized in <strong>Next.js</strong> and{" "}
            <strong>React Native</strong> with strong state management using{" "}
            <strong>Zustand</strong>. Building reusable UI systems with{" "}
            <strong>shadcn/ui</strong>, <strong>Tailwind CSS</strong>, and{" "}
            <strong>React Hook Form</strong>.
          </p>
          <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-600 dark:text-neutral-400">
            <Wrench className="h-3 w-3" />
            <span>Next.js</span>
            <span>React Native</span>
            <span>Zustand</span>
            <span>React Hook Form</span>
            <span>Tailwind</span>
            <span>TypeScript</span>
            <span>React Query</span>
            <span>Zod</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <Image
              src="/freelance1.webp"
              alt="Freelance Project 1"
              width={500}
              height={600}
              className="h-ful lw-full rounded-xl object-cover object-top shadow-lg"
            />
            <Image
              src="/freelance2.webp"
              alt="Freelance Project 2"
              width={500}
              height={600}
              className="h-ful lw-full rounded-xl object-cover object-top shadow-lg"
            />
            <Image
              src="/freelance3.webp"
              alt="Freelance Project 3"
              width={500}
              height={600}
              className="h-ful lw-full rounded-xl object-cover object-top shadow-lg"
            />
            <Image
              src="/freelance4.webp"
              alt="Freelance Project 4"
              width={500}
              height={600}
              className="h-ful lw-full rounded-xl object-cover object-top shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Echoes Travel",
      content: (
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
            <Briefcase className="h-4 w-4 text-emerald-700" />
            <span>Part-Time • 04/2025 – 07/2025</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
            <MapPin className="h-4 w-4 text-emerald-700" />
            <span>Alexandria, Egypt</span>
          </div>
          <p className="text-sm text-neutral-800 dark:text-neutral-200">
            Led a frontend team to develop advanced travel booking interfaces
            using <strong>React.js</strong> and <strong>Material UI</strong>.
            Oversaw architecture and code quality, implemented complex forms
            with <strong>React Hook Form</strong>, <strong>Zod</strong>, and
            integrated APIs via <strong>Axios</strong>. Focused on clean,
            responsive UX and performance optimization.
          </p>

          <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-600 dark:text-neutral-400">
            <Wrench className="h-3 w-3" />
            <span>React.js</span>
            <span>TypeScript</span>
            <span>Material UI</span>
            <span>React Hook Form</span>
            <span>Zod</span>
            <span>React Query</span>
            <span>Axios</span>
            <span>Git & GitHub</span>
          </div>
        </div>
      ),
    },
    {
      title: "Runnet Platform",
      content: (
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
            <Briefcase className="h-4 w-4 text-emerald-700" />
            <span>Full-Time • 10/2024 – 04/2025</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
            <MapPin className="h-4 w-4 text-emerald-700" />
            <span>Remote - Netherlands</span>
          </div>
          <p className="text-sm text-neutral-800 dark:text-neutral-200">
            Worked on a large-scale{" "}
            <strong>analytics and management system</strong>. Built the{" "}
            <strong>Admin Dashboard</strong> using <strong>React.js</strong> and{" "}
            <strong>Material UI</strong>. Handled database operations via{" "}
            <strong>Supabase</strong>. Implemented multilingual support using{" "}
            <strong>i18next</strong> and complex form validations with{" "}
            <strong>Zod</strong>.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <Image
              src="/runnet1.webp"
              alt="Runnet Admin Dashboard"
              width={500}
              height={300}
              className="w-full rounded-xl object-cover shadow-lg"
            />
            <Image
              src="/runnet2.webp"
              alt="Runnet Analytics"
              width={500}
              height={300}
              className="w-full rounded-xl object-cover shadow-lg"
            />
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-600 dark:text-neutral-400">
            <Wrench className="h-3 w-3" />
            <span>React.js</span>
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>Material UI</span>
            <span>Supabase</span>
            <span>React Hook Form</span>
            <span>Zod</span>
          </div>
        </div>
      ),
    },
    {
      title: "BM Enterprises Management",
      content: (
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
            <Briefcase className="h-4 w-4 text-emerald-700" />
            <span>Full-Time • 08/2023 – 09/2024</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
            <MapPin className="h-4 w-4 text-emerald-700" />
            <span>Alexandria, Egypt</span>
          </div>
          <p className="text-sm text-neutral-800 dark:text-neutral-200">
            Delivered enterprise web apps using <strong>React.js</strong>,{" "}
            <strong>TypeScript</strong>, and <strong>Material UI</strong>.
            Enhanced user experience with <strong>React Admin</strong> and{" "}
            <strong>React Query</strong>. Integrated APIs via{" "}
            <strong>Axios</strong> and improved app structure with{" "}
            <strong>SCSS</strong> and <strong>Zustand</strong>.
          </p>
          <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-600 dark:text-neutral-400">
            <Wrench className="h-3 w-3" />
            <span>React.js</span>
            <span>TypeScript</span>
            <span>Material UI</span>
            <span>React Admin</span>
            <span>React Query</span>
            <span>Axios</span>
            <span>SCSS</span>
            <span>Zustand</span>
          </div>
        </div>
      ),
    },
    {
      title: "Front-End Diploma",
      content: (
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
            <GraduationCap className="h-4 w-4 text-amber-500" />
            <span>Route Egypt Academy — Alexandria Branch</span>
          </div>
          <p className="text-sm text-neutral-800 dark:text-neutral-200">
            Completed a comprehensive program covering <strong>HTML5</strong>,{" "}
            <strong>CSS3</strong>, <strong>Scss</strong>,
            <strong>typeScript</strong>, <strong>Material UI</strong>,
            <strong>Bootstrap</strong>, <strong>JavaScript</strong>,
            <strong>React.js</strong> and <strong>Next.js</strong>. Gained
            practical experience building UI layouts and dynamic web interfaces
            with best practices.
          </p>
          <div className="pt-2">
            <Image
              src="/route.webp"
              alt="Front-End Diploma Certificate"
              width={500}
              height={300}
              className="w-full sm:w-1/2 rounded-xl object-contain shadow-lg"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      id="home-experience-section"
      className="container mx-auto px-4 py-8"
    >
      <Timeline data={data} />
    </section>
  );
}
