import { cn } from 'src/shared/utils/cn';
import { type ProjectItem } from '../types/Project';
import { ProjectCard } from './ProjectCard';

interface ProjectsMarqueeRowProps {
  isPaused?: boolean;
  projects: ProjectItem[];
  reverse?: boolean;
}

export const ProjectsMarqueeRow = ({
  isPaused = false,
  projects,
  reverse = false,
}: ProjectsMarqueeRowProps) => {
  const repeatedProjects = [...projects, ...projects];

  return (
    <div className='overflow-hidden w-full'>
      <div
        className={cn(
          'flex w-max gap-4 md:gap-8',
          reverse ? 'flex-row-reverse animate-marquee-reverse' : 'animate-marquee',
          isPaused && '[animation-play-state:paused]',
        )}
      >
        {repeatedProjects.map((project, index) => (
          <ProjectCard
            key={`${project.title}-${index}`}
            project={project}
          />
        ))}
      </div>
    </div>
  );
};
