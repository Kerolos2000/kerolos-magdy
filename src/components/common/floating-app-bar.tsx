import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconBulb,
  IconFileDownload,
  IconFolder,
  IconMessage,
  IconUser,
} from "@tabler/icons-react";
import { FloatingDock, Items } from "../ui/floating-dock";
import { ToggleTheme } from "../ui/toggle-theme";

export default function FloatingAppBar() {
  const links: Items[] = [
    {
      title: "Toggle Theme",
      icon: <ToggleTheme />,
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
      href: "#home-about-me-section",
    },
    {
      title: "Skills",
      icon: (
        <IconBulb className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#home-skills-section",
    },
    {
      title: "Projects",
      icon: (
        <IconFolder className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#home-projects-section",
    },
    {
      title: "Contact",
      icon: (
        <IconMessage className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#home-contact-us-section",
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
