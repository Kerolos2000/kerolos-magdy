'use client';
import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ContactUsItems, FlowingMenu, MainTitle } from 'src/shared';
import {
	ContactUsSchema,
	contactUsSchema,
} from '../validation/contact-us-schema';

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
					className='w-full space-y-4'
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
							className='w-full rounded-lg border border-neutral-200 dark:border-white/10 focus:border-emerald-500 dark:focus:border-emerald-500 transition-all duration-300 px-4 py-3 bg-neutral-50/75 dark:bg-neutral-900/20 outline-none text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 text-sm'
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
							className='w-full rounded-lg border border-neutral-200 dark:border-white/10 focus:border-emerald-500 dark:focus:border-emerald-500 transition-all duration-300 px-4 py-3 bg-neutral-50/75 dark:bg-neutral-900/20 outline-none text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 text-sm'
						/>
						{errors.email && (
							<p className='text-red-500 text-sm'>{errors.email.message}</p>
						)}
					</div>

					<div>
						<textarea
							placeholder='Your Message'
							{...register('message')}
							className='w-full h-32 rounded-lg border border-neutral-200 dark:border-white/10 focus:border-emerald-500 dark:focus:border-emerald-500 transition-all duration-300 px-4 py-3 bg-neutral-50/75 dark:bg-neutral-900/20 outline-none resize-none text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 text-sm'
						/>
						{errors.message && (
							<p className='text-red-500 text-sm'>{errors.message.message}</p>
						)}
					</div>

					<button
						type='submit'
						disabled={status === 'sending'}
						className='cursor-pointer text-center w-full px-6 sm:px-7 py-2 rounded-lg bg-neutral-50/50 dark:bg-neutral-100/10 backdrop-blur-sm border border-card-foreground/30 focus:border-card-foreground/50 transition-all duration-300 hover:border-card-foreground/50 text-foreground flex items-center justify-center'
					>
						{status === 'sending' ? 'Sending...' : 'Send Message'}
					</button>

					{status === 'success' && (
						<p className='text-emerald-500 text-center text-sm flex items-center justify-center gap-2'>
							Message sent successfully!
						</p>
					)}
					{status === 'error' && (
						<p className='text-red-500 text-center text-sm flex items-center justify-center gap-2'>
							Failed to send. Please try again.
						</p>
					)}
				</form>

				<FlowingMenu items={ContactUsItems} />
			</div>
		</section>
	);
}
