export interface MainTitleProps {
	boldText: string;
	regularText: string;
	reverse?: boolean;
}

export const MainTitle: React.FC<MainTitleProps> = ({
	boldText,
	regularText,
}) => {
	return (
		<div className='flex items-start gap-4'>
			<span className='mt-2 shrink-0 w-1 h-8 sm:h-10 md:h-12 rounded-full bg-linear-to-b from-emerald-400 to-emerald-600' />
			<h2 className='text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-neutral-600 dark:text-neutral-400 leading-tight'>
				{regularText}{' '}
				<span className='font-extrabold text-neutral-900 dark:text-white'>
					{boldText}
				</span>
			</h2>
		</div>
	);
};
