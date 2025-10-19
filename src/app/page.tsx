import {
  HomeAboutMeSection,
  HomeBreakSection,
  HomeCounterSection,
  HomeExperienceSection,
  HomeHeroSection,
  HomeProjectsSection,
} from "src/components";

export default function Home() {
  return (
    <main id="home-page">
      <HomeHeroSection />
      <HomeAboutMeSection />
      <HomeBreakSection />
      <HomeExperienceSection />
      <HomeCounterSection />
      <HomeProjectsSection />
    </main>
  );
}
