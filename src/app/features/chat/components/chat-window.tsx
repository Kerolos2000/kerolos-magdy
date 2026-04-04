'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { IconSend, IconX } from '@tabler/icons-react';
import { useEffect, useRef } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useChat } from '../hooks';
import { ChatMessageSchema, chatMessageSchema } from '../validation';
import { ChatMessage } from './chat-message';

interface ChatWindowProps {
	onClose: () => void;
}

export const ChatWindow = ({ onClose }: ChatWindowProps) => {
	const { messages, sendMessage, isLoading } = useChat();
	const scrollRef = useRef<HTMLDivElement>(null);

	const {
		register,
		handleSubmit,
		reset,
		control,
		formState: { isSubmitting, errors },
	} = useForm<ChatMessageSchema>({
		defaultValues: { message: '' },
		resolver: zodResolver(chatMessageSchema),
	});

	const message = useWatch({
		control,
		name: 'message',
	});

	useEffect(() => {
		if (scrollRef.current) {
			scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
		}
	}, [messages]);

	const onSubmit = ({ message }: ChatMessageSchema) => {
		if (!message.trim() || isLoading) return;
		sendMessage(message);
		reset();
	};

	return (
		<div className='stack-column h-full overflow-hidden bg-background'>
			<div className='flex items-center justify-between border-b px-4 py-2 bg-card-soft  shadow-sm z-10'>
				<div className='stack-row gap-3 items-center'>
					<div className='relative size-1.5'>
						<span className='absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-75' />
					</div>
					<h3 className='font-semibold text-foreground'>Portfolio AI (Beta)</h3>
				</div>
				<button
					onClick={onClose}
					className='floating-button'
				>
					<IconX size={18} />
				</button>
			</div>

			<div
				ref={scrollRef}
				className='flex-1 overflow-y-auto w-full p-4 space-y-4 scroll-smooth'
			>
				{messages.map(({ id, role, content }) => (
					<ChatMessage
						key={id}
						role={role}
						content={content}
					/>
				))}
			</div>

			<div className='border-t px-4 py-2 bg-card-soft'>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='stack-row items-center rounded-full border bg-background px-4 py-2 focus-within:border-brand'
				>
					<input
						{...register('message')}
						className='flex-1 bg-input text-sm outline-none placeholder:text-muted'
						placeholder='Type your message...'
						disabled={isLoading || isSubmitting}
					/>
					<button
						type='submit'
						disabled={!!errors.message}
						className='floating-button'
					>
						<IconSend size={14} />
					</button>
				</form>
			</div>
		</div>
	);
};
