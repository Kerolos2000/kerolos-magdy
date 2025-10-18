"use client";

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconFileText,
  IconMail,
} from "@tabler/icons-react";
import Link from "next/link";

const socials = [
  {
    href: "https://github.com/Kerolos2000",
    icon: IconBrandGithub,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/kerolos-magdy-314644212/",
    icon: IconBrandLinkedin,
    label: "LinkedIn",
  },
  {
    href: "mailto:contact@kerolos1410@gmail.com",
    icon: IconMail,
    label: "Email",
  },
  {
    href: "https://api.whatsapp.com/send/?phone=%2B201205224238&text&type=phone_number&app_absent=0",
    icon: IconBrandWhatsapp,
    label: "WhatsApp",
  },
];

const sections = [
  {
    title: "Navigate",
    items: ["About", "Projects", "Skills", "Contact"],
    href: (item: string) => `#${item.toLowerCase()}`,
  },
  {
    title: "Resources",
    items: ["Resume"],
    href: (item: string) =>
      item.toLowerCase() === "resume"
        ? "/Kerolos-Magdy-Resume.pdf"
        : `/${item.toLowerCase()}`,
  },
];

export default function Footer() {
  return (
    <footer className="mt-8 relative py-16 px-6 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="flex-1">
          <Link href="/" className="group inline-block">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 dark:from-neutral-100 dark:via-neutral-300 dark:to-neutral-100 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
              Kerolos Magdy
            </h2>
          </Link>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-4 max-w-xs leading-relaxed">
            Frontend developer crafting beautiful and functional web
            experiences.
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-6">
            © {new Date().getFullYear()} Kerolos Magdy. All rights reserved.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 flex-1">
          {sections.map(({ title, items, href }, idx) => (
            <div key={title} className={idx === 1 ? "flex flex-col" : ""}>
              <h3 className="font-semibold mb-5 text-neutral-800 dark:text-neutral-100 text-sm uppercase tracking-wider">
                {title}
              </h3>
              <div className="flex flex-col gap-3 mb-6">
                {items.map((item) =>
                  item.toLowerCase() === "resume" ? (
                    <a
                      key={item}
                      href={href(item)}
                      download
                      className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-all duration-300 text-sm hover:translate-x-1 inline-flex items-center gap-1"
                    >
                      <IconFileText className="w-4 h-4" />
                      {item}
                    </a>
                  ) : (
                    <Link
                      key={item}
                      href={href(item)}
                      className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-all duration-300 text-sm hover:translate-x-1 inline-flex items-center gap-1"
                    >
                      {item}
                    </Link>
                  )
                )}
              </div>

              {idx === 1 && (
                <div>
                  <h3 className="font-semibold mb-5 text-neutral-800 dark:text-neutral-100 text-sm uppercase tracking-wider">
                    Connect
                  </h3>
                  <div className="flex gap-3">
                    {socials.map(({ href, icon: Icon, label }) => (
                      <Link
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="group p-2.5 rounded-lg bg-neutral-200 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-900 dark:hover:bg-neutral-100 hover:text-white dark:hover:text-black transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 flex items-center justify-center"
                      >
                        <Icon className="w-5 h-5" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="my-12 h-px bg-gradient-to-r from-transparent via-neutral-400 dark:via-neutral-700 to-transparent"></div>

      <div className="relative flex items-center justify-center">
        <h1 className="mb-0 sm:mb-6 text-center text-4xl md:text-6xl lg:text-[7rem] font-black bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 via-neutral-400 to-neutral-200 dark:from-neutral-400 dark:via-neutral-600 dark:to-neutral-900 select-none tracking-tight">
          KEROLOS
        </h1>
      </div>
    </footer>
  );
}
