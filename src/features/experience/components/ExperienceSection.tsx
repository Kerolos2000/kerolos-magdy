import { MainTitle } from 'src/shared/components/ui/main-title/MainTitle';
import { Timeline, type TimelineEntry } from 'src/shared/components/ui/timeline/Timeline';
import { SECTION_IDS } from 'src/shared/constants/sections';
import { EXPERIENCE_ITEMS } from '../config/experienceItems';
import { ExperienceItemContent } from './ExperienceItemContent';

const TIMELINE_DATA: TimelineEntry[] = EXPERIENCE_ITEMS.map(item => ({
  content: <ExperienceItemContent item={item} />,
  title: item.title,
}));

export const ExperienceSection = () => (
  <section
    className='section-container space-y-8 overflow-y-clip'
    id={SECTION_IDS.experience}
  >
    <MainTitle
      boldText='Experience'
      regularText='Explore My'
    />
    <Timeline data={TIMELINE_DATA} />
  </section>
);
