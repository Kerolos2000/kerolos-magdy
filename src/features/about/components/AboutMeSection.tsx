import { IconFileDownload } from '@tabler/icons-react';
import Link from 'next/link';
import { LazyBallpit } from 'src/shared/components/ui/ballpit/LazyBallpit';
import { PROFILE } from 'src/shared/constants/profile';
import { SECTION_IDS } from 'src/shared/constants/sections';
import { ABOUT_ME_CARDS } from '../config/aboutMeItems';

const BALLPIT_COLORS = [
  'var(--brand)',
  'var(--brand)',
  'var(--brand-medium)',
  'var(--brand-strong)',
  'var(--brand-medium)',
  'var(--brand-strong)',
];

export const AboutMeSection = () => (
  <section
    className='section-container'
    id={SECTION_IDS.about}
  >
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
      {ABOUT_ME_CARDS.map(({ details, icon: CardIcon, title }) => (
        <div
          className='main-card'
          key={title}
        >
          <LazyBallpit
            className='absolute inset-0 -z-2'
            colors={BALLPIT_COLORS}
            count={20}
            followCursor={false}
            gravity={0.1}
          />

          <div className='p-8 h-full stack-column gap-4'>
            <div className='stack-row items-center text-2xl font-bold'>
              <div className='p-2 bg-brand/10 dark:bg-brand/10 rounded-lg'>
                <CardIcon className='size-7 text-brand dark:text-brand' />
              </div>
              {title}
            </div>

            <div className='stack-column gap-4'>
              {details.map(({ icon: DetailIcon, isButton, text }, index) =>
                isButton ? (
                  <div key={index}>
                    <Link
                      className='main-button text-sm'
                      download
                      href={PROFILE.resumePath}
                    >
                      <IconFileDownload className='size-4 sm:size-5' />
                      VIEW RESUME
                    </Link>
                  </div>
                ) : (
                  <div
                    className='stack-row items-center text-muted'
                    key={text}
                  >
                    {DetailIcon && <DetailIcon className='size-4' />}
                    {text}
                  </div>
                ),
              )}
            </div>

            <CardIcon className='absolute -z-1 right-4 bottom-4 size-32 sm:size-40 select-none text-muted opacity-25' />
          </div>
        </div>
      ))}
    </div>
  </section>
);
