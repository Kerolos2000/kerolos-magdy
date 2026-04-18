import { FloatingAppBarLinks } from 'src/shared';
import { FloatingDock } from '../ui';

export default function FloatingAppBar() {
	return (
		<div className='fixed bottom-4 z-50 flex left-4 md:left-1/2 md:-translate-x-1/2'>
			<FloatingDock items={FloatingAppBarLinks} />
		</div>
	);
}
