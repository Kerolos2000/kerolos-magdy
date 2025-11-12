'use client';
import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FlowingMenu, MainTitle } from 'src/components';
import { ContactUsItems } from 'src/lib';
import { ContactUsSchema, contactUsSchema } from 'src/validation';

export default function HomeContactUsSection() {
	const [status, setStatus] = useState<
		'idle' | 'sending' | 'success' | 'error'
	>('idle');
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<ContactUsSchema>({
		resolver: zodResolver(contactUsSchema),
	});

	const onSubmit = async (data: ContactUsSchema) => {
		try {
			setStatus('sending');
			await emailjs.send(
				process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,
				process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!,
				{
					...data,
					time: new Date().toLocaleString(),
				},
				process.env.NEXT_PUBLIC_EMAIL_USER_ID,
			);
			setStatus('success');
			reset();
		} catch {
			setStatus('error');
		}
	};

	return (
		<section
			className='py-8 container mx-auto px-4 sm:px-6 lg:px-8 w-full'
			id='home-contact-us-section'
		>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='w-full bg-transparent rounded-2xl space-y-4'
				>
					<MainTitle
						regularText='Contact'
						boldText='Me'
					/>
					<div>
						<input
							type='text'
							placeholder='Your Name'
							{...register('name')}
							className='w-full rounded-lg border border-card-foreground/30 p-2 bg-transparent outline-none'
						/>
						{errors.name && (
							<p className='text-red-500 text-sm'>{errors.name.message}</p>
						)}
					</div>
					<div>
						<input
							type='email'
							placeholder='Your Email'
							{...register('email')}
							className='w-full rounded-lg border border-card-foreground/30 p-2 bg-transparent outline-none'
						/>
						{errors.email && (
							<p className='text-red-500 text-sm'>{errors.email.message}</p>
						)}
					</div>
					<div>
						<textarea
							placeholder='Your Message'
							{...register('message')}
							className='w-full h-28 rounded-lg border border-card-foreground/30 p-2 bg-transparent outline-none resize-none'
						/>
						{errors.message && (
							<p className='text-red-500 text-sm'>{errors.message.message}</p>
						)}
					</div>
					<button
						type='submit'
						disabled={status === 'sending'}
						className='cursor-pointer text-center w-full px-6 sm:px-7 py-2 rounded-lg bg-neutral-50/50 dark:bg-neutral-100/10 backdrop-blur-sm border border-card-foreground/30 hover:border-card-foreground/50 text-foreground transition-all duration-300 flex items-center justify-center'
					>
						{status === 'sending' ? 'Sending...' : 'Send Message'}
					</button>
					{status === 'success' && (
						<p className='text-emerald-500 text-center text-sm'>
							Message sent successfully.
						</p>
					)}
					{status === 'error' && (
						<p className='text-red-500 text-center text-sm'>
							Failed to send. Try again.
						</p>
					)}
				</form>
				<FlowingMenu items={ContactUsItems} />
			</div>
		</section>
	);
}
