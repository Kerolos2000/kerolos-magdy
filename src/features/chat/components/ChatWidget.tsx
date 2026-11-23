'use client';

import { IconMessageChatbot } from '@tabler/icons-react';
import { AnimatePresence, motion } from 'motion/react';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const ChatWindow = dynamic(() => import('./ChatWindow').then(m => m.ChatWindow), {
  ssr: false,
});

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='fixed bottom-4 right-4 z-40 stack-column items-end'>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className='h-125 w-[calc(100vw-2rem)] sm:w-90 mb-3 overflow-hidden rounded-lg border shadow-sm'
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
          >
            <ChatWindow onClose={() => setIsOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        aria-label={isOpen ? 'Close portfolio assistant' : 'Open portfolio assistant'}
        className='floating-button'
        onClick={() => setIsOpen(prev => !prev)}
        type='button'
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <IconMessageChatbot className='size-5 text-foreground' />
      </motion.button>
    </div>
  );
};
