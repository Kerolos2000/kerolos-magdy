"use client";

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconBulb,
  IconFileDownload,
  IconFolder,
  IconMessage,
  IconMoon,
  IconSun,
  IconUser,
} from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FloatingDock } from "../ui/floating-dock";

export default function FloatingAppBar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    if (!mounted) return;
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return null;
  }

  const links = [
    {
      title: "Toggle Theme",
      icon:
        theme === "dark" ? (
          <IconSun className="h-full w-full text-yellow-500" />
        ) : (
          <IconMoon className="h-full w-full text-indigo-900" />
        ),
      onClick: toggleTheme,
    },
    {
      title: "Download CV",
      icon: (
        <IconFileDownload className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/Kerolos-Magdy-Resume.pdf",
      download: true,
    },
    {
      title: "About Me",
      icon: (
        <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#about",
    },
    {
      title: "Skills",
      icon: (
        <IconBulb className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#skills",
    },
    {
      title: "Projects",
      icon: (
        <IconFolder className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "Contact",
      icon: (
        <IconMessage className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contact",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Kerolos2000",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/kerolos-magdy-314644212/",
    },
    {
      title: "WhatsApp",
      icon: (
        <IconBrandWhatsapp className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://api.whatsapp.com/send/?phone=%2B201205224238&text&type=phone_number&app_absent=0",
    },
  ];

  return (
    <div className="fixed bottom-4 z-50 flex left-4 sm:left-1/2 sm:-translate-x-1/2">
      <FloatingDock items={links} />
    </div>
  );
}
