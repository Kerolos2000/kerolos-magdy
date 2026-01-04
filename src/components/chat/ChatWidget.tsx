'use client';

import { IconMessageChatbot } from '@tabler/icons-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { ChatWindow } from './ChatWindow';

export const ChatWidget = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4'>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, scale: 0.9, y: 20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.9, y: 20 }}
						className='h-125 w-87.5 overflow-hidden rounded-2xl border bg-white shadow-2xl dark:bg-neutral-900 dark:border-neutral-800'
					>
						<ChatWindow onClose={() => setIsOpen(false)} />
					</motion.div>
				)}
			</AnimatePresence>

			<motion.button
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				onClick={() => setIsOpen(!isOpen)}
				className='flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg shadow-emerald-600/20 transition-colors hover:bg-emerald-700'
			>
				<IconMessageChatbot size={28} />
			</motion.button>
		</div>
	);
};
