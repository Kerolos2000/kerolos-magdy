import Link from 'next/link';
import { LightGrid, MainTitle } from 'src/shared';

export default function HomeGetInTouchSection() {
	return (
		<section
			id='home-get-in-touch-section'
			className='border-b'
		>
			<LightGrid>
				<div className='stack-column flex-wrap items-start sm:items-center justify-between md:flex-row gap-4'>
					<div className='stack-column items-start gap-4'>
						<MainTitle
							regularText='Ready to collaborate on'
							boldText='Next Project ?'
						/>
						<p className='section-description'>
							Whether you need a modern website, a fast web app, or a complete
							design system, I can help you plan, build, and launch it
							efficiently and at scale.
						</p>
					</div>

					<Link
						href='https://api.whatsapp.com/send/?phone=201205224238&text&type=phone_number&app_absent=0'
						target='_blank'
						rel='noopener noreferrer'
						className='main-button'
					>
						Get in Touch
					</Link>
				</div>
			</LightGrid>
		</section>
	);
}
