'use client';

import { useCallback, useRef, useState } from 'react';

export interface Message {
	id: string;
	role: 'user' | 'assistant';
	content: string;
	timestamp: number;
}

export const useChat = () => {
	const [messages, setMessages] = useState<Message[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const abortControllerRef = useRef<AbortController | null>(null);

	const clearMessages = useCallback(() => {
		if (abortControllerRef.current) {
			abortControllerRef.current.abort();
			abortControllerRef.current = null;
		}
		setMessages([]);
		setError(null);
		setIsLoading(false);
	}, []);

	const sendMessage = useCallback(
		async (content: string) => {
			if (!content.trim() || isLoading) return;

			if (abortControllerRef.current) {
				abortControllerRef.current.abort();
			}

			const abortController = new AbortController();
			abortControllerRef.current = abortController;

			const timestamp = Date.now();
			const userMessage: Message = {
				id: timestamp.toString(),
				role: 'user',
				content: content.trim(),
				timestamp,
			};

			const assistantMessageId = (timestamp + 1).toString();
			const assistantMessage: Message = {
				id: assistantMessageId,
				role: 'assistant',
				content: '',
				timestamp: timestamp + 1,
			};

			setMessages(prev => [...prev, userMessage, assistantMessage]);
			setIsLoading(true);
			setError(null);

			try {
				const response = await fetch('/api/chat', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						messages: [...messages, userMessage],
					}),
					signal: abortController.signal,
				});

				if (!response.ok) throw new Error('Network response was not ok');
				if (!response.body) throw new Error('No response body');

				const reader = response.body.getReader();
				const decoder = new TextDecoder();
				let accumulatedContent = '';

				while (true) {
					const { done, value } = await reader.read();
					if (done) break;

					accumulatedContent += decoder.decode(value, { stream: true });
					setMessages(prev =>
						prev.map(msg =>
							msg.id === assistantMessageId
								? { ...msg, content: accumulatedContent }
								: msg,
						),
					);
				}
			} catch (err) {
				if (err !== 'AbortError') {
					setError(`Something went wrong: ${err}`);
					setMessages(prev =>
						prev.filter(msg => msg.id !== assistantMessageId),
					);
				}
			} finally {
				setIsLoading(false);
				abortControllerRef.current = null;
			}
		},
		[messages, isLoading],
	);

	return {
		messages,
		sendMessage,
		isLoading,
		error,
		clearMessages,
	};
};
