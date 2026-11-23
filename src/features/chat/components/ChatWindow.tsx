'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { IconSend, IconX } from '@tabler/icons-react';
import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useChat } from '../hooks/useChat';
import { type ChatMessageFormData, chatMessageSchema } from '../schemas/chatMessageSchema';
import { ChatMessage } from './ChatMessage';

interface ChatWindowProps {
  onClose: () => void;
}

export const ChatWindow = ({ onClose }: ChatWindowProps) => {
  const { isLoading, messages, sendMessage } = useChat();
  const scrollRef = useRef<HTMLDivElement>(null);
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset,
  } = useForm<ChatMessageFormData>({
    defaultValues: { message: '' },
    resolver: zodResolver(chatMessageSchema),
  });

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const onSubmit = ({ message }: ChatMessageFormData) => {
    if (!message.trim() || isLoading) return;

    sendMessage(message);
    reset();
  };

  return (
    <div className='stack-column h-full overflow-hidden bg-background'>
      <div className='flex items-center justify-between border-b px-4 py-2 bg-card-soft shadow-sm z-10'>
        <div className='stack-row gap-3 items-center'>
          <div className='relative size-1.5'>
            <span className='absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-75' />
          </div>
          <h3 className='font-semibold text-foreground'>Portfolio AI (Beta)</h3>
        </div>
        <button
          aria-label='Close chat'
          className='floating-button'
          onClick={onClose}
          type='button'
        >
          <IconX size={18} />
        </button>
      </div>

      <div
        className='flex-1 overflow-y-auto w-full p-4 space-y-4 scroll-smooth'
        ref={scrollRef}
      >
        {messages.map(({ content, id, role }) => (
          <ChatMessage
            content={content}
            key={id}
            role={role}
          />
        ))}
      </div>

      <div className='border-t px-4 py-2 bg-card-soft'>
        <form
          className='stack-row items-center rounded-full border bg-background px-4 py-2 focus-within:border-brand'
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            {...register('message')}
            className='flex-1 bg-input text-sm outline-none placeholder:text-muted'
            disabled={isLoading || isSubmitting}
            placeholder='Type your message...'
          />
          <button
            aria-label='Send message'
            className='floating-button'
            disabled={!!errors.message}
            type='submit'
          >
            <IconSend size={14} />
          </button>
        </form>
      </div>
    </div>
  );
};
