import { z } from 'zod';

export const chatMessageSchema = z.object({
	message: z.string().min(1, 'Message is required'),
});

export type ChatMessageSchema = z.infer<typeof chatMessageSchema>;
