import {
  HomeAboutMeSection,
  HomeBreakSection,
  HomeHeroSection,
} from "src/components";

export default function Home() {
  return (
    <main id="home">
      <HomeHeroSection />
      <HomeAboutMeSection />
      <HomeBreakSection />
    </main>
  );
}
