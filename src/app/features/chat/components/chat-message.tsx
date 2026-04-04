import { IconRobot, IconUser } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { cn } from 'src/shared';

export interface ChatMessageProps {
	role: 'system' | 'user' | 'assistant';
	content: string;
}

export const ChatMessage = ({ role, content }: ChatMessageProps) => {
	const isUser = role === 'user';

	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			className={cn(
				'flex w-full items-start gap-2',
				isUser ? 'flex-row-reverse' : 'flex-row',
			)}
		>
			<div
				className={cn(
					'flex size-8 shrink-0 items-center justify-center rounded-full border shadow-sm',
					isUser ? 'bg-background text-foreground' : 'bg-brand text-background',
				)}
			>
				{isUser ? <IconUser size={16} /> : <IconRobot size={16} />}
			</div>
			<div
				className={cn(
					'relative px-4 py-2 text-sm shadow-sm max-w-[80%] rounded-lg',
					isUser
						? 'rounded-tr-none bg-foreground text-background'
						: 'rounded-tl-none bg-brand text-background',
				)}
			>
				{content && <p className='whitespace-pre-wrap'>{content}</p>}
			</div>
		</motion.div>
	);
};
