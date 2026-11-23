'use client';

import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { MainTitle } from 'src/shared/components/ui/main-title/MainTitle';
import { type ContactFormData, contactSchema } from '../schemas/contactSchema';
import { type ContactSubmitStatus } from '../types/Contact';
import { ContactFormFields } from './ContactFormFields';

export const ContactForm = () => {
  const [status, setStatus] = useState<ContactSubmitStatus>('idle');
  const methods = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setStatus('sending');
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!,
        { ...data, time: new Date().toLocaleString() },
        process.env.NEXT_PUBLIC_EMAIL_USER_ID,
      );
      setStatus('success');
      methods.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        className='w-full space-y-4'
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <MainTitle
          boldText='Me'
          regularText='Contact'
        />

        <ContactFormFields />

        <button
          className='main-button w-full'
          disabled={status === 'sending'}
          type='submit'
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>

        {status === 'success' && (
          <p className='text-brand text-center text-sm flex items-center justify-center gap-2'>
            Message sent successfully!
          </p>
        )}
        {status === 'error' && (
          <p className='error-message text-center'>Failed to send. Please try again.</p>
        )}
      </form>
    </FormProvider>
  );
};
