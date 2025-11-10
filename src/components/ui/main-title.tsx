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
		<h2 className='text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-neutral-900 dark:text-neutral-400'>
			{regularText}{' '}
			<span className='font-bold dark:text-white'>{boldText}</span>
		</h2>
	);
};
