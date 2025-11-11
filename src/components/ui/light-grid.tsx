import { cn } from 'src/utils';

export const LightGrid = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='relative flex w-full flex-col overflow-hidden rounded-md md:flex-row md:items-center md:justify-center'>
			<div
				className={cn(
					'pointer-events-none absolute inset-0 bg-size-[40px_40px] select-none',
					'dark:bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]',
					'bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)]',
				)}
			/>
			<div className='relative z-10 mx-auto w-full container py-10 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8'>
				{children}
			</div>
		</div>
	);
};
