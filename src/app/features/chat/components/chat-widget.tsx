'use client';

import { IconMessageChatbot } from '@tabler/icons-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { ChatWindow } from './chat-window';

export const ChatWidget = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='fixed bottom-4 right-4 z-40 stack-column items-end'>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, scale: 0.9, y: 20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.9, y: 20 }}
						className='h-125 w-[calc(100vw-2rem)] sm:w-90 mb-3 overflow-hidden rounded-lg border shadow-sm'
					>
						<ChatWindow onClose={() => setIsOpen(false)} />
					</motion.div>
				)}
			</AnimatePresence>

			<motion.button
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				onClick={() => setIsOpen(!isOpen)}
				className='floating-button'
			>
				<IconMessageChatbot className='size-5 text-foreground' />
			</motion.button>
		</div>
	);
};
