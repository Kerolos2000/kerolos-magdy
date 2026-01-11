import { portfolioData } from 'src/lib';

const getRandom = (arr: string[]) =>
	arr[Math.floor(Math.random() * arr.length)];

const detectLanguage = (text: string) =>
	/[\u0600-\u06FF]/.test(text) ? 'ar' : 'en';

const normalizeArabic = (text: string) =>
	text
		.replace(/[\u064B-\u065F]/g, '')
		.replace(/[إأآا]/g, 'ا')
		.replace(/ى/g, 'ي')
		.replace(/ة/g, 'ه');

const normalize = (text: string) =>
	normalizeArabic(
		text
			.toLowerCase()
			.replace(/[^\p{L}\p{N}\s]/gu, '')
			.trim(),
	);

const responses = [
	{
		lang: 'en',
		pattern: /\b(name|who are you|who is this|your name)\b/i,
		responses: [
			`I am ${portfolioData.name}, a ${portfolioData.role}.`,
			`You're chatting with ${portfolioData.name}, working as a ${portfolioData.role}.`,
			`${portfolioData.name} here, ${portfolioData.role}.`,
		],
	},
	{
		lang: 'en',
		pattern: /\b(stack|skills?|tech|tools?|frameworks?|libraries?)\b/i,
		responses: [
			`My main tech stack includes ${portfolioData.stack.join(', ')}.`,
			`I work mostly with ${portfolioData.stack
				.slice(0, 6)
				.join(', ')} and more.`,
			`I'm experienced with ${portfolioData.stack.join(', ')}.`,
		],
	},
	{
		lang: 'ar',
		pattern: /(اسمك|اسمك ايه|انت مين|مين انت)/,
		responses: [
			`أنا ${portfolioData.name}، ${portfolioData.role}.`,
			`اسمي ${portfolioData.name} وبشتغل ${portfolioData.role}.`,
		],
	},
	{
		lang: 'ar',
		pattern: /(مهارات|بتعرف ايه|ستاك|تقنيات|تكنولوجي|فريمورك)/,
		responses: [
			`بشتغل بشكل أساسي بـ ${portfolioData.stack.join(', ')}.`,
			`مهاراتي التقنية تشمل ${portfolioData.stack.join(', ')}.`,
		],
	},
	{
		lang: 'ar',
		pattern: /(خبره|خبرتك|شركة|شركات|سنين خبره|اشتغلت قد ايه)/,
		responses: [
			`عندي خبرة ${portfolioData.experience} في مجال الفرونت إند.`,
			`خبرتي تمتد لـ ${
				portfolioData.experience
			} وشملت ${portfolioData.detailedExperience.join(', ')}.`,
		],
	},
	{
		lang: 'ar',
		pattern: /(مشاريع|اعمالك|بورتفوليو|اشتغلت على ايه)/,
		responses: [
			`من مشاريعي ${portfolioData.projects}.`,
			`اشتغلت على مشاريع زي ${portfolioData.projects
				.split(',')
				.slice(0, 4)
				.join(', ')}.`,
		],
	},
	{
		lang: 'ar',
		pattern: /(تواصل|اكلمك|ايميل|رقم|لينكدان|جيتهاب)/,
		responses: [
			`تقدر تتواصل معايا على ${portfolioData.email} أو ${portfolioData.phone}.`,
			`للتواصل ${portfolioData.email} وكمان على ${portfolioData.socials
				.map(s => s.platform)
				.join(', ')}.`,
		],
	},
	{
		lang: 'ar',
		pattern: /(اهلا|مرحبا|السلام عليكم|هاي)/,
		responses: [
			`أهلاً! اسألني عن خبرتي أو مشاريعي.`,
			`مرحبًا، تقدر تسأل عن أي حاجة تخص البورتفوليو.`,
		],
	},
	{
		lang: 'ar',
		pattern: /(شكرا|متشكر|تسلم)/,
		responses: ['العفو!', 'في أي وقت.'],
	},
];

export async function POST(req: Request) {
	try {
		const { messages } = await req.json();
		const lastMessage = messages[messages.length - 1];
		const question = normalize(lastMessage.content);
		const lang = detectLanguage(question);

		const refusal =
			lang === 'ar'
				? 'أنا مخصص فقط للإجابة عن الأسئلة المتعلقة بالبورتفوليو.'
				: 'I only answer portfolio-related questions.';

		let answer = refusal;

		for (const item of responses) {
			if (item.lang === lang && item.pattern.test(question)) {
				answer = getRandom(item.responses);
				break;
			}
		}

		const encoder = new TextEncoder();
		const stream = new ReadableStream({
			async start(controller) {
				for (const word of answer.split(' ')) {
					controller.enqueue(encoder.encode(word + ' '));
					await new Promise(r => setTimeout(r, 20 + Math.random() * 40));
				}
				controller.close();
			},
		});

		return new Response(stream, {
			headers: {
				'Content-Type': 'text/plain; charset=utf-8',
				'Cache-Control': 'no-cache',
			},
		});
	} catch (err) {
		return new Response(`Internal Server Error ${err}`, { status: 500 });
	}
}
