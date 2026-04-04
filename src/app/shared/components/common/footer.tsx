import Link from 'next/link';
import { FooterSections, FooterSocials } from 'src/shared';

export default function Footer() {
	return (
		<footer className='overflow-hidden border-t border-border pt-8 pb-16 sm:pb-20'>
			<div className='container mx-auto flex flex-col justify-between gap-12 px-4 sm:px-6 lg:flex-row lg:px-8'>
				<div className='flex-1'>
					<h2 className='bg-linear-to-r from-foreground via-muted to-foreground bg-clip-text text-2xl font-bold text-transparent'>
						Kerolos Magdy
					</h2>

					<p className='mt-4 max-w-xs text-sm leading-relaxed text-muted'>
						Frontend developer crafting beautiful and functional web
						experiences.
					</p>

					<p className='mt-6 text-xs text-muted'>
						© {new Date().getFullYear()} Kerolos Magdy. All rights reserved.
					</p>
				</div>

				<div className='grid flex-1 grid-cols-2 gap-12 md:grid-cols-3'>
					{FooterSections.map(({ title, items }, index) => (
						<div key={index}>
							<h3 className='mb-5 text-sm font-semibold uppercase tracking-wider text-foreground'>
								{title}
							</h3>

							<div className='mb-6 flex flex-col gap-2'>
								{items.map(({ label, href, download, icon: Icon }) => (
									<Link
										key={label}
										href={href}
										download={download}
										title={label}
										className='inline-flex items-center gap-2 text-sm text-muted transition-all duration-300 hover:translate-x-1 hover:text-foreground'
									>
										{Icon && <Icon className='h-4 w-4' />}
										{label}
									</Link>
								))}
							</div>

							{index === 1 && (
								<div>
									<h3 className='mb-5 text-sm font-semibold uppercase tracking-wider text-foreground'>
										Connect
									</h3>

									<div className='flex flex-wrap gap-2'>
										{FooterSocials.map(({ href, icon: Icon, label }) => (
											<Link
												key={label}
												href={href}
												target='_blank'
												rel='noopener noreferrer'
												aria-label={label}
												title={label}
												className='flex items-center justify-center rounded-lg border border-border bg-card p-2.5 text-foreground transition-all duration-300 hover:-translate-y-1 hover:bg-foreground hover:text-background'
											>
												{Icon && <Icon className='h-5 w-5' />}
											</Link>
										))}
									</div>
								</div>
							)}
						</div>
					))}
				</div>
			</div>

			<div className='my-12 h-px bg-linear-to-r from-transparent via-border to-transparent' />

			<h1 className='text-center font-black tracking-tight text-transparent text-7xl lg:text-[7rem] bg-linear-to-b from-muted to-transparent bg-clip-text select-none'>
				KEROLOS
			</h1>
		</footer>
	);
}
