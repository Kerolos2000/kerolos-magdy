import { FloatingAppBarLinks } from 'src/lib';
import { FloatingDock } from '../ui';

export default function FloatingAppBar() {
	return (
		<div className='fixed bottom-4 z-50 flex left-4 sm:left-1/2 sm:-translate-x-1/2'>
			<FloatingDock items={FloatingAppBarLinks} />
		</div>
	);
}
