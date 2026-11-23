import { FloatingDock } from 'src/shared/components/ui/floating-dock/FloatingDock';
import { FLOATING_APP_BAR_LINKS } from './floatingAppBarLinks';

export const FloatingAppBar = () => (
  <div className='fixed bottom-4 z-50 flex left-4 md:left-1/2 md:-translate-x-1/2'>
    <FloatingDock items={FLOATING_APP_BAR_LINKS} />
  </div>
);
