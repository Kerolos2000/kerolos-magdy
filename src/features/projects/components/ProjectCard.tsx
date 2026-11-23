import Image from 'next/image';
import Link from 'next/link';
import { type ProjectItem } from '../types/Project';

interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard = ({ project }: ProjectCardProps) => (
  <Link
    className='group/product relative shrink-0 w-56 sm:w-[20rem] aspect-4/3 border border-primary/20 rounded-lg shadow-sm overflow-hidden cursor-pointer block'
    href={project.link}
    rel='noopener noreferrer'
    target='_blank'
  >
    <div className='relative w-full aspect-4/3 overflow-hidden'>
      <Image
        alt={project.title}
        height={768}
        sizes='(max-width: 640px) 224px, 320px'
        src={project.thumbnail}
        width={1024}
      />
    </div>

    <div className='absolute inset-0 bg-black opacity-0 group-hover/product:opacity-60 transition-opacity pointer-events-none' />

    <h2 className='absolute bottom-4 left-4 text-white text-sm sm:text-base md:text-lg font-medium opacity-0 group-hover/product:opacity-100 transition-opacity pointer-events-none'>
      {project.title}
    </h2>
  </Link>
);
