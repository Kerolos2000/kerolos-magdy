import dynamic from "next/dynamic";
const HomeHeroSection = dynamic(
  () => import("src/components/sections/home/hero-section"),
  { ssr: true }
);
const HomeAboutMeSection = dynamic(
  () => import("src/components/sections/home/about-me-section"),
  { ssr: true }
);
const HomeBreakSection = dynamic(
  () => import("src/components/sections/home/break-section"),
  { ssr: true }
);
const HomeExperienceSection = dynamic(
  () => import("src/components/sections/home/experience-section"),
  { ssr: true }
);
const HomeCounterSection = dynamic(
  () => import("src/components/sections/home/counter-section"),
  { ssr: true }
);
const HomeProjectsSection = dynamic(
  () => import("src/components/sections/home/projects-section"),
  { ssr: true }
);
const HomeGetInTouchSection = dynamic(
  () => import("src/components/sections/home/get-in-touch-section"),
  { ssr: true }
);
const HomeContactUsSection = dynamic(
  () => import("src/components/sections/home/contact-us-section"),
  { ssr: true }
);

const HomeSkillsSection = dynamic(
  () => import("src/components/sections/home/skills-section"),
  { ssr: true }
);

export default function Home() {
  return (
    <main id="home-page">
      <HomeHeroSection />
      <HomeAboutMeSection />
      <HomeBreakSection />
      <HomeSkillsSection />
      <HomeExperienceSection />
      <HomeCounterSection />
      <HomeProjectsSection />
      <HomeGetInTouchSection />
      <HomeContactUsSection />
    </main>
  );
}
