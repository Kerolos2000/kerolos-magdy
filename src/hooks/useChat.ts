'use client';

import { useCallback, useRef, useState } from 'react';

export interface Message {
	id: string;
	role: 'user' | 'assistant';
	content: string;
	timestamp: number;
}

export const useChat = () => {
	const [messages, setMessages] = useState<Message[]>([
		{
			id: '0',
			role: 'assistant',
			content: 'Hello, How can i help you ?',
			timestamp: 0,
		},
	]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const abortRef = useRef<AbortController | null>(null);

	const clearMessages = useCallback(() => {
		abortRef.current?.abort();
		abortRef.current = null;
		setMessages([]);
		setIsLoading(false);
		setError(null);
	}, []);

	const sendMessage = useCallback(
		async (content: string) => {
			if (!content.trim() || isLoading) return;

			abortRef.current?.abort();
			const controller = new AbortController();
			abortRef.current = controller;

			const now = Date.now();

			const userMessage: Message = {
				id: now.toString(),
				role: 'user',
				content: content.trim(),
				timestamp: now,
			};

			const assistantId = (now + 1).toString();

			setMessages(prev => [
				...prev,
				userMessage,
				{
					id: assistantId,
					role: 'assistant',
					content: '',
					timestamp: now + 1,
				},
			]);

			setIsLoading(true);
			setError(null);

			try {
				const response = await fetch('/api/chat', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ messages: [...messages, userMessage] }),
					signal: controller.signal,
				});

				if (!response.ok || !response.body) throw new Error('Request failed');

				const reader = response.body.getReader();
				const decoder = new TextDecoder();
				let text = '';

				while (true) {
					const { done, value } = await reader.read();
					if (done) break;
					text += decoder.decode(value, { stream: true });

					setMessages(prev =>
						prev.map(m => (m.id === assistantId ? { ...m, content: text } : m)),
					);
				}
			} catch (err) {
				if (err !== 'AbortError') {
					setError('Something went wrong');
					setMessages(prev => prev.filter(m => m.id !== assistantId));
				}
			} finally {
				setIsLoading(false);
				abortRef.current = null;
			}
		},
		[isLoading, messages],
	);

	return {
		messages,
		sendMessage,
		isLoading,
		error,
		clearMessages,
	};
};
