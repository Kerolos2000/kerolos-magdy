import { createChatCoreTopics } from '../config/chatCoreTopics';
import { createChatDetailTopics } from '../config/chatDetailTopics';
import {
  type ChatLanguage,
  type ChatPortfolioContext,
  type ChatTopic,
} from '../types/Chat';

const FALLBACK_REPLY: Record<ChatLanguage, string> = {
  ar: 'مش متأكد فهمتك 🤔 جرب تسأل عن المهارات، المشاريع، الخبرة، التعليم، أو طرق التواصل.',
  en: "I'm not sure I understood that 🤔 Try asking about skills, projects, experience, education, or contact info.",
};

const pick = <T>(items: T[]): T => items[Math.floor(Math.random() * items.length)];

const detectLanguage = (text: string): ChatLanguage =>
  /[\u0600-\u06FF]/.test(text) ? 'ar' : 'en';

const normalize = (text: string): string =>
  text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, '')
    .trim()
    .replace(/[\u064B-\u065F]/g, '')
    .replace(/[إأآا]/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ة/g, 'ه');

const scoreTopic = (normalizedInput: string, words: string[], keywords: string[]): number => {
  let score = 0;

  for (const keyword of keywords) {
    const normKeyword = normalize(keyword);

    if (normalizedInput.includes(normKeyword)) {
      score += normKeyword.split(/\s+/).length * 3;
      continue;
    }

    for (const kw of normKeyword.split(/\s+/)) {
      for (const word of words) {
        if (word === kw) {
          score += 2;
        } else if (word.length > 3 && kw.length > 3 && (word.includes(kw) || kw.includes(word))) {
          score += 1;
        }
      }
    }
  }

  return score;
};

const matchTopics = (
  input: string,
  lang: ChatLanguage,
  topics: ChatTopic[],
): ChatTopic[] => {
  const normalizedInput = normalize(input);
  const words = normalizedInput.split(/\s+/);
  const scored = topics
    .map(topic => ({
      score: scoreTopic(normalizedInput, words, topic.keywords[lang]),
      topic,
    }))
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score);

  if (scored.length === 0) return [];

  const [best, second] = scored;

  return second && second.score >= best.score * 0.6 ? [best.topic, second.topic] : [best.topic];
};

export const generateChatReply = (rawInput: string, context: ChatPortfolioContext): string => {
  const lang = detectLanguage(rawInput);
  const topics = [...createChatCoreTopics(context), ...createChatDetailTopics(context)];
  const matched = matchTopics(rawInput, lang, topics);

  if (matched.length === 0) return FALLBACK_REPLY[lang];

  return matched.map(topic => pick(topic.respond[lang]())).join('\n\n');
};
