import { FlowingMenu } from 'src/shared/components/ui/flowing-menu/FlowingMenu';
import { SECTION_IDS } from 'src/shared/constants/sections';
import { CONTACT_ITEMS } from '../config/contactItems';
import { ContactForm } from './ContactForm';

export const ContactSection = () => (
  <section
    className='py-8 container mx-auto px-4 sm:px-6 lg:px-8 w-full'
    id={SECTION_IDS.contact}
  >
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
      <ContactForm />
      <FlowingMenu items={CONTACT_ITEMS} />
    </div>
  </section>
);
