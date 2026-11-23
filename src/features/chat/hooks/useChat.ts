'use client';

import { useRef, useState } from 'react';
import { ENDPOINTS } from 'src/shared/constants/endpoints';
import { type ChatMessageItem } from '../types/Chat';

const INITIAL_MESSAGES: ChatMessageItem[] = [
  {
    content: 'Hello, How can i help you ?',
    id: '0',
    role: 'assistant',
    timestamp: 0,
  },
];

export const useChat = () => {
  const [messages, setMessages] = useState<ChatMessageItem[]>(INITIAL_MESSAGES);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  const clearMessages = () => {
    abortRef.current?.abort();
    abortRef.current = null;
    setMessages([]);
    setIsLoading(false);
    setError(null);
  };

  const sendMessage = async (content: string) => {
    if (!content.trim() || isLoading) return;

    abortRef.current?.abort();

    const controller = new AbortController();

    abortRef.current = controller;

    const now = Date.now();
    const userMessage: ChatMessageItem = {
      content: content.trim(),
      id: now.toString(),
      role: 'user',
      timestamp: now,
    };
    const assistantId = (now + 1).toString();

    setMessages(prev => [
      ...prev,
      userMessage,
      { content: '', id: assistantId, role: 'assistant', timestamp: now + 1 },
    ]);
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(ENDPOINTS.chat, {
        body: JSON.stringify({ messages: [...messages, userMessage] }),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
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
        setMessages(prev => prev.map(m => (m.id === assistantId ? { ...m, content: text } : m)));
      }
    } catch (err) {
      if (!(err instanceof DOMException && err.name === 'AbortError')) {
        setError('Something went wrong');
        setMessages(prev => prev.filter(m => m.id !== assistantId));
      }
    } finally {
      setIsLoading(false);
      abortRef.current = null;
    }
  };

  return { clearMessages, error, isLoading, messages, sendMessage };
};
