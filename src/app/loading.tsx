export default function Loading() {
	return (
		<div className='flex h-screen items-center justify-center bg-background text-foreground'>
			<div className='flex items-center gap-2 text-lg font-medium'>
				<span className='h-3 w-3 animate-spin rounded-full border-2 border-t-transparent border-foreground' />
				<span>Loading</span>
			</div>
		</div>
	);
}
