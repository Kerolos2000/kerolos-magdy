import {
  HomeAboutMeSection,
  HomeBreakSection,
  HomeCounterSection,
  HomeHeroSection,
  HomeTimelineSection,
} from "src/components";

export default function Home() {
  return (
    <main id="home-page">
      <HomeHeroSection />
      <HomeAboutMeSection />
      <HomeBreakSection />
      <HomeTimelineSection />
      <HomeCounterSection />
    </main>
  );
}
