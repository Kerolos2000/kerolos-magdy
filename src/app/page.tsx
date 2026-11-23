import dynamic from 'next/dynamic';
import { HeroSection } from 'src/features/home/components/HeroSection';
import { SECTION_IDS } from 'src/shared/constants/sections';

const AboutMeSection = dynamic(() =>
  import('src/features/about/components/AboutMeSection').then(m => m.AboutMeSection),
);
const BreakSection = dynamic(() =>
  import('src/features/home/components/BreakSection').then(m => m.BreakSection),
);
const SkillsSection = dynamic(() =>
  import('src/features/skills/components/SkillsSection').then(m => m.SkillsSection),
);
const ExperienceSection = dynamic(() =>
  import('src/features/experience/components/ExperienceSection').then(m => m.ExperienceSection),
);
const CounterSection = dynamic(() =>
  import('src/features/home/components/CounterSection').then(m => m.CounterSection),
);
const ProjectsSection = dynamic(() =>
  import('src/features/projects/components/ProjectsSection').then(m => m.ProjectsSection),
);
const GetInTouchSection = dynamic(() =>
  import('src/features/contact/components/GetInTouchSection').then(m => m.GetInTouchSection),
);
const ContactSection = dynamic(() =>
  import('src/features/contact/components/ContactSection').then(m => m.ContactSection),
);

export default function HomePage() {
  return (
    <main id={SECTION_IDS.homePage}>
      <HeroSection />
      <AboutMeSection />
      <BreakSection />
      <SkillsSection />
      <ExperienceSection />
      <CounterSection />
      <ProjectsSection />
      <GetInTouchSection />
      <ContactSection />
    </main>
  );
}
