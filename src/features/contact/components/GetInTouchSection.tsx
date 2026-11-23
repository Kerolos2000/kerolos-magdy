import Link from 'next/link';
import { LightGrid } from 'src/shared/components/ui/light-grid/LightGrid';
import { MainTitle } from 'src/shared/components/ui/main-title/MainTitle';
import { PROFILE } from 'src/shared/constants/profile';
import { SECTION_IDS } from 'src/shared/constants/sections';

export const GetInTouchSection = () => (
  <section
    className='border-b'
    id={SECTION_IDS.getInTouch}
  >
    <LightGrid>
      <div className='stack-column flex-wrap items-start sm:items-center justify-between md:flex-row gap-4'>
        <div className='stack-column items-start gap-4'>
          <MainTitle
            boldText='Next Project ?'
            regularText='Ready to collaborate on'
          />
          <p className='section-description'>
            Whether you need a modern website, a fast web app, or a complete design system, I can
            help you plan, build, and launch it efficiently and at scale.
          </p>
        </div>

        <Link
          className='main-button'
          href={PROFILE.whatsappUrl}
          rel='noopener noreferrer'
          target='_blank'
        >
          Get in Touch
        </Link>
      </div>
    </LightGrid>
  </section>
);
