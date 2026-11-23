import { type ChatPortfolioContext } from 'src/features/chat/types/Chat';
import { generateChatReply } from 'src/features/chat/utils/matchChatTopics';
import { CONTACT_ITEMS } from 'src/features/contact/config/contactItems';
import { EXPERIENCE_ITEMS } from 'src/features/experience/config/experienceItems';
import { PROJECT_ITEMS } from 'src/features/projects/config/projectItems';
import { SKILL_ITEMS } from 'src/features/skills/config/skillItems';
import { PROFILE } from 'src/shared/constants/profile';

interface ChatRequestPayload {
  messages?: { content?: string }[];
}

const PORTFOLIO_CONTEXT: ChatPortfolioContext = {
  detailedExperience: EXPERIENCE_ITEMS.map(item => item.title),
  email: PROFILE.email,
  experience: PROFILE.experience,
  name: PROFILE.name,
  phone: PROFILE.phone,
  projects: PROJECT_ITEMS.map(item => item.title),
  role: PROFILE.role,
  socials: CONTACT_ITEMS.map(item => item.text),
  stack: SKILL_ITEMS.map(item => item.name),
};

export async function POST(req: Request) {
  try {
    const { messages = [] } = (await req.json()) as ChatRequestPayload;
    const rawInput = messages[messages.length - 1]?.content ?? '';
    const answer = generateChatReply(rawInput, PORTFOLIO_CONTEXT);
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        for (const word of answer.split(' ')) {
          controller.enqueue(encoder.encode(`${word} `));
          await new Promise(resolve => setTimeout(resolve, 15 + Math.random() * 30));
        }

        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'text/plain; charset=utf-8',
      },
    });
  } catch {
    return Response.json({ error: 'Failed to generate response' }, { status: 500 });
  }
}
