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

					<div className='stack-column'>
						<input
							type='text'
							placeholder='Your Name'
							{...register('name')}
							className='input-field'
						/>
						{errors.name && (
							<p className='error-message'>{errors.name.message}</p>
						)}
					</div>

					<div className='stack-column'>
						<input
							type='email'
							placeholder='Your Email'
							{...register('email')}
							className='input-field'
						/>
						{errors.email && (
							<p className='error-message'>{errors.email.message}</p>
						)}
					</div>

					<div className='stack-column'>
						<textarea
							placeholder='Your Message'
							{...register('message')}
							className='w-full h-32 input-field resize-none'
						/>
						{errors.message && (
							<p className='error-message'>{errors.message.message}</p>
						)}
					</div>

					<button
						type='submit'
						disabled={status === 'sending'}
						className='main-button w-full'
					>
						{status === 'sending' ? 'Sending...' : 'Send Message'}
					</button>

					{status === 'success' && (
						<p className='text-brand text-center text-sm flex items-center justify-center gap-2'>
							Message sent successfully!
						</p>
					)}
					{status === 'error' && (
						<p className='error-message text-center'>
							Failed to send. Please try again.
						</p>
					)}
				</form>

				<FlowingMenu items={ContactUsItems} />
			</div>
		</section>
	);
}
