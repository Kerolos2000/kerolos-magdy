export type ChatLanguage = 'ar' | 'en';

export type ChatRole = 'assistant' | 'system' | 'user';

export interface ChatMessageItem {
  content: string;
  id: string;
  role: 'assistant' | 'user';
  timestamp: number;
}

export interface ChatPortfolioContext {
  detailedExperience: string[];
  email: string;
  experience: string;
  name: string;
  phone: string;
  projects: string[];
  role: string;
  socials: string[];
  stack: string[];
}

export interface ChatTopic {
  id: string;
  keywords: Record<ChatLanguage, string[]>;
  respond: Record<ChatLanguage, () => string[]>;
}
