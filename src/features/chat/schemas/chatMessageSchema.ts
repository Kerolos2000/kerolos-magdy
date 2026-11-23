import { z } from 'zod';

export const chatMessageSchema = z.object({
  message: z.string().min(1, 'Message is required'),
});

export type ChatMessageFormData = z.infer<typeof chatMessageSchema>;
