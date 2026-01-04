import { portfolioData } from 'src/lib/portfolioData';

const getRandom = (arr: string[]) =>
	arr[Math.floor(Math.random() * arr.length)];

// helper لتحديد لغة النص
const detectLanguage = (text: string) => {
	const arabic = /[\u0600-\u06FF]/.test(text);
	return arabic ? 'ar' : 'en';
};

const responses = [
	{
		pattern: /(name|who are you|who is|what is your name)/i,
		lang: 'en',
		responses: [
			`I am ${portfolioData.name}, a ${portfolioData.role}.`,
			`You're chatting with ${portfolioData.name}, professional ${portfolioData.role}.`,
			`I go by ${portfolioData.name} and I work as ${portfolioData.role}.`,
		],
	},
	{
		pattern: /(stack|skills|tech|tools|using|know|proficient in)/i,
		lang: 'en',
		responses: [
			`My tech stack includes: ${portfolioData.stack.join(', ')}.`,
			`I mainly work with technologies like ${portfolioData.stack
				.slice(0, 5)
				.join(', ')} and more.`,
			`I am proficient in ${portfolioData.stack.join(', ')}.`,
		],
	},
	{
		pattern: /(experience|years|worked)/i,
		lang: 'en',
		responses: [
			`I have ${
				portfolioData.experience
			} of experience, including roles like ${portfolioData.detailedExperience.join(
				', ',
			)}.`,
			`With ${portfolioData.experience}, I handled projects of various scales.`,
		],
	},
	{
		pattern:
			/(contact|email|phone|reach|call|whatsapp|social|linkedin|github)/i,
		lang: 'en',
		responses: [
			`You can reach me at ${portfolioData.email} or ${
				portfolioData.phone
			}. Socials: ${portfolioData.socials.map(s => s.platform).join(', ')}.`,
			`Feel free to contact me via email at ${
				portfolioData.email
			} or on ${portfolioData.socials.map(s => s.platform).join(' and ')}.`,
		],
	},
	{
		pattern: /(project|work|portfolio)/i,
		lang: 'en',
		responses: [
			`Check my portfolio: ${portfolioData.projects}.`,
			`Projects include: ${portfolioData.projects
				.split(',')
				.slice(0, 3)
				.join(', ')} and more.`,
		],
	},
	{
		pattern: /(education|study|university|college|degree)/i,
		lang: 'en',
		responses: [
			`I studied at: ${portfolioData.education?.join(', ')}.`,
			`My educational background includes ${portfolioData.education?.[0]}.`,
		],
	},
	{
		pattern: /(hello|hi|hey|greetings)/i,
		lang: 'en',
		responses: [
			`Hello! I'm ${portfolioData.name}'s portfolio assistant. Ask me about my skills or projects.`,
			`Hi! You can ask me about my experience, projects, or how to contact me.`,
		],
	},
	{
		pattern: /(thank|thanks)/i,
		lang: 'en',
		responses: [
			"You're welcome!",
			'Happy to help!',
			'Anytime! Feel free to ask more.',
		],
	},
	{
		pattern: /(hire|job|available|work with)/i,
		lang: 'en',
		responses: [
			`I am open to new opportunities! Contact me at ${portfolioData.email}.`,
			`I'd love to collaborate. Reach me via ${portfolioData.phone}.`,
		],
	},
	// Arabic responses
	{
		pattern: /(اسمك|مين انت|انت مين|من حضرتك)/i,
		lang: 'ar',
		responses: [
			`أنا كيرلس مجدى، ${portfolioData.role}.`,
			`اسمي كيرلس مجدى وأنا متخصص في ${portfolioData.role}.`,
		],
	},
	{
		pattern: /(مهارات|بتشتغل بايه|بتعرف ايه)/i,
		lang: 'ar',
		responses: [
			`أعمل أساسًا مع: ${portfolioData.stack.join(', ')}.`,
			`مهاراتي تشمل: ${portfolioData.stack.join(', ')}.`,
		],
	},
	{
		pattern: /(خبرة|اشتغلت كام سنة|اشتغلت في|مدة خبرتك|خبرتك| اشتغلت | شغلك)/i,
		lang: 'ar',
		responses: [
			`لدي خبرة ${
				portfolioData.experience
			}، وعملت كـ ${portfolioData.detailedExperience.join(', ')}.`,
			`خبرتي تمتد لـ ${portfolioData.experience} في مشاريع مختلفة.`,
		],
	},
	{
		pattern: /(تواصل|رقم|ايميل|طرق التواصل)/i,
		lang: 'ar',
		responses: [
			`يمكنك التواصل معي على ${portfolioData.email} أو ${
				portfolioData.phone
			}. وسائل التواصل: ${portfolioData.socials
				.map(s => s.platform)
				.join(', ')}.`,
			`للتواصل، أرسل ايميل إلى ${portfolioData.email} أو تواصل عبر ${portfolioData.socials[0].platform}.`,
		],
	},
	{
		pattern: /(مشاريع|اعمالك|اشتغلت على ايه|الاعمال)/i,
		lang: 'ar',
		responses: [
			`بعض مشاريعي: ${portfolioData.projects}.`,
			`مشاريعي تشمل: ${portfolioData.projects
				.split(',')
				.slice(0, 3)
				.join(', ')} والمزيد.`,
		],
	},
	{
		pattern: /(تعليم|ادرس|جامعة|دراسة|الشهادة)/i,
		lang: 'ar',
		responses: [
			`درست في: ${portfolioData.education?.join(', ')}.`,
			`تحصيلي العلمي يشمل ${portfolioData.education?.[0]}.`,
		],
	},
	{
		pattern: /(السلام عليكم|اهلا|هاي|مرحبا)/i,
		lang: 'ar',
		responses: [
			`مرحبًا! أنا مساعد كيرلس مجدى الافتراضي. ممكن أساعدك بحاجة؟`,
			`السلام عليكم! يمكنك سؤالي عن مهاراتي أو مشاريعي أو طرق التواصل معي.`,
		],
	},
	{
		pattern: /(شكرا|مشكور|متشكر)/i,
		lang: 'ar',
		responses: ['على الرحب والسعة!', 'أي وقت! اسأل عن أي شيء آخر إذا أحببت.'],
	},
	{
		pattern: /(متاح|توظيف|فرص عمل|تعاون)/i,
		lang: 'ar',
		responses: [
			`أنا متاح حالياً لفرص جديدة! تواصل معي على ${portfolioData.email}.`,
			`متاح للتعاون أو فرص عمل جديدة. تواصل معي عبر ${portfolioData.phone}.`,
		],
	},
];

export async function POST(req: Request) {
	try {
		const { messages } = await req.json();
		const lastMessage = messages[messages.length - 1];
		const question = lastMessage.content.trim();

		const lang = detectLanguage(question);

		// Default refusal message if question outside portfolio
		const refusal =
			lang === 'ar'
				? 'أنا مخصص فقط للإجابة عن أسئلة البرتفوليو، لا أستطيع الرد على شيء آخر.'
				: 'I am only designed to answer portfolio-related questions, I cannot respond to other topics.';

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
				const chunks = answer.split(' ');
				for (let i = 0; i < chunks.length; i++) {
					const chunk = chunks[i] + (i === chunks.length - 1 ? '' : ' ');
					controller.enqueue(encoder.encode(chunk));
					await new Promise(resolve =>
						setTimeout(resolve, 20 + Math.random() * 40),
					);
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
	} catch (error) {
		console.error('Chat API Error:', error);
		return new Response(
			`Error: ${error instanceof Error ? error.message : 'Unknown error'}`,
			{ status: 500 },
		);
	}
}
