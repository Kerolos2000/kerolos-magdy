'use client';
import { IconSend, IconX } from '@tabler/icons-react';
import { useEffect, useRef } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useChat } from 'src/hooks/useChat';
import { ChatMessage } from './ChatMessage';

interface ChatWindowProps {
	onClose: () => void;
}

interface FormValues {
	message: string;
}

export const ChatWindow = ({ onClose }: ChatWindowProps) => {
	const { messages, sendMessage, isLoading } = useChat();
	const scrollRef = useRef<HTMLDivElement>(null);

	const {
		register,
		handleSubmit,
		reset,
		control,
		formState: { isSubmitting },
	} = useForm<FormValues>({
		defaultValues: { message: '' },
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

	const onSubmit = ({ message }: FormValues) => {
		if (!message.trim() || isLoading) return;
		sendMessage(message);
		reset();
	};

	return (
		<div className='flex h-full flex-col overflow-hidden bg-neutral-50 dark:bg-neutral-950'>
			<div className='flex items-center justify-between border-b px-4 py-3 bg-white dark:bg-neutral-900 dark:border-neutral-800 shadow-sm z-10'>
				<div className='flex items-center gap-2'>
					<div className='relative h-1.5 w-1.5'>
						<span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75' />
					</div>
					<h3 className='font-semibold text-neutral-800 dark:text-white'>
						Portfolio AI
					</h3>
				</div>
				<button
					onClick={onClose}
					className='rounded-full p-1 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-neutral-300 transition-colors'
				>
					<IconX size={18} />
				</button>
			</div>

			<div
				ref={scrollRef}
				className='flex-1 overflow-y-auto w-full p-4 space-y-4 scroll-smooth'
			>
				{messages.map(m => (
					<ChatMessage
						key={m.id}
						role={m.role}
						content={m.content}
					/>
				))}
			</div>

			<div className='border-t p-4 bg-white dark:bg-neutral-900 dark:border-neutral-800'>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex items-center gap-2 rounded-full border bg-neutral-50 px-4 py-2 focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:border-emerald-500 dark:bg-neutral-950 dark:border-neutral-800'
				>
					<input
						{...register('message')}
						className='flex-1 bg-transparent text-sm outline-none placeholder:text-neutral-400 dark:text-white'
						placeholder='Type your message...'
						disabled={isLoading || isSubmitting}
					/>
					<button
						type='submit'
						disabled={isLoading || !message?.trim()}
						className='flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-white transition-all hover:bg-neutral-700 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-white dark:text-neutral-900'
					>
						<IconSend size={14} />
					</button>
				</form>
			</div>
		</div>
	);
};
