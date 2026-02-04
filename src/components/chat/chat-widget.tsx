'use client';

import { IconMessageChatbot } from '@tabler/icons-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { ChatWindow } from './chat-window';

export const ChatWidget = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='fixed bottom-4 right-4 z-50 flex flex-col items-end gap-4'>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, scale: 0.9, y: 20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.9, y: 20 }}
						className='h-125 w-[calc(100vw-2rem)] sm:w-90 mb-3 overflow-hidden rounded-2xl border bg-white shadow-2xl dark:bg-neutral-900 dark:border-neutral-800'
					>
						<ChatWindow onClose={() => setIsOpen(false)} />
					</motion.div>
				)}
			</AnimatePresence>

			<motion.button
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				onClick={() => setIsOpen(!isOpen)}
				className='cursor-pointer flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200/60 hover:bg-neutral-300/70 dark:bg-neutral-800/50 dark:hover:bg-neutral-700/60 backdrop-blur-sm transition-colors'
			>
				<IconMessageChatbot className='h-5 w-5 text-neutral-800 dark:text-neutral-50' />
			</motion.button>
		</div>
	);
};
