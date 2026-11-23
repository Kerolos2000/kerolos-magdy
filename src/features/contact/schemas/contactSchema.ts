import { z } from 'zod';

export const contactSchema = z.object({
  email: z.email('Invalid email'),
  message: z.string().min(5, 'Message is too short'),
  name: z.string().min(2, 'Name is required'),
});

export type ContactFormData = z.infer<typeof contactSchema>;
