import { z } from 'zod';

export const contactUsSchema = z.object({
	name: z.string().min(2, 'Name is required'),
	email: z.email('Invalid email'),
	message: z.string().min(5, 'Message is too short'),
});

export type ContactUsSchema = z.infer<typeof contactUsSchema>;
