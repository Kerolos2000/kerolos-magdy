import {
  IconBriefcase,
  IconCertificate,
  IconDeviceLaptop,
  IconMapPin,
  IconTool,
} from '@tabler/icons-react';
import Image from 'next/image';
import { type ExperienceItem } from '../types/Experience';

interface ExperienceItemContentProps {
  item: ExperienceItem;
}

const PERIOD_ICON_MAP = {
  briefcase: <IconBriefcase className='size-4 text-brand-strong' />,
  certificate: <IconCertificate className='size-4 text-amber-600' />,
  laptop: <IconDeviceLaptop className='size-4 text-brand-strong' />,
};

const IMAGE_CLASS_MAP = {
  certificate: 'w-full sm:w-1/2 rounded-lg object-contain shadow-sm',
  cover: 'w-full rounded-lg object-cover shadow-sm',
  'cover-top': 'size-full rounded-lg object-cover object-top shadow-sm',
};

export const ExperienceItemContent = ({ item }: ExperienceItemContentProps) => {
  const isCertificateGallery = item.images?.length === 1 && item.images[0].variant === 'certificate';

  return (
    <div className='space-y-3'>
      <div className='stack-row items-center text-sm'>
        {PERIOD_ICON_MAP[item.iconType]}
        <span>{item.period}</span>
      </div>

      {item.location && (
        <div className='stack-row items-center text-sm'>
          <IconMapPin className='size-4 text-brand-strong' />
          <span>{item.location}</span>
        </div>
      )}

      <p className='text-sm text-neutral-800 dark:text-neutral-200'>
        {item.descriptionSegments.map(({ bold, text }, index) =>
          bold ? <strong key={index}>{text}</strong> : <span key={index}>{text}</span>,
        )}
      </p>

      {item.skills && (
        <div className='stack-row flex-wrap items-center text-xs text-muted'>
          <IconTool className='size-3 text-muted' />
          {item.skills.map(skill => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      )}

      {item.images && (
        <div
          className={
            isCertificateGallery ? 'pt-2' : 'grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2'
          }
        >
          {item.images.map(({ alt, height, src, variant = 'cover', width }) => (
            <Image
              alt={alt}
              className={IMAGE_CLASS_MAP[variant]}
              height={height}
              key={src}
              sizes='(max-width: 640px) 100vw, 50vw'
              src={src}
              width={width}
            />
          ))}
        </div>
      )}
    </div>
  );
};
