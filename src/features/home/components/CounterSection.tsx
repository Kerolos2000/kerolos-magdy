import { NumberTicker } from 'src/shared/components/ui/number-ticker/NumberTicker';
import { SECTION_IDS } from 'src/shared/constants/sections';
import { COUNTER_STATS } from '../config/counterStats';

export const CounterSection = () => (
  <section
    className='py-8 bg-card'
    id={SECTION_IDS.counter}
  >
    <div className='relative container mx-auto px-4 sm:px-6 lg:px-8 w-full'>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        {COUNTER_STATS.map(({ label, value }) => (
          <div
            className='relative border rounded-lg shadow-sm px-4 py-6 text-center bg-background'
            key={label}
          >
            <div className='text-5xl md:text-6xl font-bold mb-3 flex items-center justify-center flex-nowrap'>
              <NumberTicker value={value} />
              <span className='text-muted'>+</span>
            </div>
            <p className='text-sm md:text-base text-muted'>{label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
