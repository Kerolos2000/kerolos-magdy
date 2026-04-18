import { portfolioData } from 'src/shared';

/* ─────────────────────────── helpers ─────────────────────────── */

const pick = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

const detectLang = (text: string): 'ar' | 'en' =>
	/[\u0600-\u06FF]/.test(text) ? 'ar' : 'en';

const normalizeArabic = (t: string) =>
	t
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

/* ────────────────────── topic definitions ────────────────────── */

interface Topic {
	id: string;
	keywords: { en: string[]; ar: string[] };
	respond: {
		en: (d: typeof portfolioData) => string[];
		ar: (d: typeof portfolioData) => string[];
	};
}

const d = portfolioData;

const topSkills = d.stack.slice(0, 8).join(', ');
const allSkills = d.stack.join(', ');
const topProjects = d.projects.split(', ').slice(0, 4).join(', ');
const allProjects = d.projects;
const experiences = d.detailedExperience;
const socials = d.socials.map(s => s.platform).join(', ');
const education = d.education?.join(' | ') ?? '';

const topics: Topic[] = [
	/* ── greeting ── */
	{
		id: 'greeting',
		keywords: {
			en: [
				'hi',
				'hello',
				'hey',
				'good morning',
				'good evening',
				'good afternoon',
				'whats up',
				'sup',
				'howdy',
				'greetings',
			],
			ar: [
				'اهلا',
				'مرحبا',
				'السلام عليكم',
				'هاي',
				'صباح الخير',
				'مساء الخير',
				'يا هلا',
				'ازيك',
				'ازايك',
				'كيفك',
				'عامل ايه',
				'اخبارك',
			],
		},
		respond: {
			en: () => [
				`Hey there! 👋 I'm Kerolos's portfolio assistant. Ask me about his skills, projects, or experience!`,
				`Hello! Welcome to Kerolos's portfolio. What would you like to know?`,
				`Hi! Feel free to ask me anything about Kerolos — skills, projects, experience, or how to get in touch.`,
			],
			ar: () => [
				`أهلاً وسهلاً! 👋 أنا مساعد بورتفوليو كيرلس. اسألني عن مهاراته أو مشاريعه أو خبرته!`,
				`مرحباً! أهلاً بيك في بورتفوليو كيرلس. عايز تعرف إيه؟`,
				`هاي! اسألني أي حاجة عن كيرلس — مهارات، مشاريع، خبرة، أو طريقة التواصل.`,
			],
		},
	},

	/* ── name / identity ── */
	{
		id: 'name',
		keywords: {
			en: [
				'name',
				'who are you',
				'who is this',
				'your name',
				'who is kerolos',
				'about him',
				'introduce',
				'tell me about',
			],
			ar: [
				'اسمك',
				'اسمك ايه',
				'انت مين',
				'مين انت',
				'عرفني',
				'مين ده',
				'هو مين',
				'عن نفسك',
				'قولي عنك',
			],
		},
		respond: {
			en: () => [
				`I'm ${d.name}, a passionate ${d.role} based in Alexandria, Egypt with ${d.experience} of professional experience.`,
				`${d.name} here! A ${d.role} with ${d.experience} of hands-on experience building modern web applications.`,
				`Meet ${d.name} — a dedicated ${d.role} from Alexandria, Egypt, with ${d.experience} working with top technologies like Next.js, React, and Angular.`,
			],
			ar: () => [
				`أنا ${d.name}، ${d.role} من إسكندرية، مصر. عندي خبرة ${d.experience} في بناء تطبيقات ويب حديثة.`,
				`${d.name}، شغال ${d.role} بخبرة ${d.experience} في التقنيات الحديثة زي Next.js و React.`,
				`اسمي ${d.name}، مطور فرونت إند محترف بخبرة ${d.experience}. متخصص في بناء واجهات مستخدم عصرية.`,
			],
		},
	},

	/* ── role / job title ── */
	{
		id: 'role',
		keywords: {
			en: [
				'role',
				'job',
				'position',
				'title',
				'what do you do',
				'profession',
				'occupation',
				'career',
			],
			ar: [
				'وظيفتك',
				'شغلك',
				'بتشتغل ايه',
				'مسمى وظيفي',
				'دورك',
				'بتعمل ايه',
				'شغلتك',
				'تخصصك',
			],
		},
		respond: {
			en: () => [
				`I'm a ${d.role} specializing in building performant, scalable web and mobile applications using React, Next.js, and Angular.`,
				`My role is ${d.role} — I focus on crafting premium user interfaces with a modern tech stack.`,
			],
			ar: () => [
				`أنا ${d.role}، متخصص في بناء تطبيقات ويب وموبايل عالية الأداء باستخدام React و Next.js و Angular.`,
				`شغلي ${d.role} — بركز على بناء واجهات مستخدم احترافية بأحدث التقنيات.`,
			],
		},
	},

	/* ── skills / stack ── */
	{
		id: 'skills',
		keywords: {
			en: [
				'stack',
				'skill',
				'skills',
				'tech',
				'tools',
				'technologies',
				'frameworks',
				'libraries',
				'languages',
				'programming',
				'what do you use',
				'proficient',
			],
			ar: [
				'مهارات',
				'مهاراتك',
				'بتعرف ايه',
				'ستاك',
				'تقنيات',
				'تكنولوجيا',
				'فريمورك',
				'ادوات',
				'لغات برمجه',
				'بتستخدم ايه',
			],
		},
		respond: {
			en: () => [
				`My core tech stack includes: ${allSkills}. I'm always learning and adding new tools!`,
				`I'm proficient in ${topSkills}, and many more. Total of ${d.stack.length} technologies in my toolkit.`,
				`Technologies I work with: ${allSkills}. My strongest areas are TypeScript, Next.js, and React.`,
			],
			ar: () => [
				`مهاراتي التقنية تشمل: ${allSkills}. دايماً بتعلم حاجات جديدة!`,
				`بشتغل بشكل أساسي بـ ${topSkills} وتقنيات تانية كتير. إجمالي ${d.stack.length} تقنية.`,
				`التقنيات اللي بستخدمها: ${allSkills}. أقوى نقاطي هي TypeScript و Next.js و React.`,
			],
		},
	},

	/* ── experience ── */
	{
		id: 'experience',
		keywords: {
			en: [
				'experience',
				'work history',
				'companies',
				'jobs',
				'years',
				'how long',
				'worked where',
				'employment',
				'background',
				'resume',
				'cv',
			],
			ar: [
				'خبره',
				'خبرتك',
				'خبرة',
				'شركة',
				'شركات',
				'سنين خبره',
				'اشتغلت قد ايه',
				'اشتغلت فين',
				'تاريخ وظيفي',
				'سيره ذاتيه',
				'سي في',
			],
		},
		respond: {
			en: () => [
				`I have ${d.experience} of professional experience. I've worked at: ${experiences.join(', ')}.`,
				`With ${d.experience} in the field, my journey includes: ${experiences.join(' → ')}. Each role has sharpened my skills significantly.`,
				`My career spans ${d.experience}, working across freelance, startups, and established companies: ${experiences.join(', ')}.`,
			],
			ar: () => [
				`عندي ${d.experience} خبرة. اشتغلت في: ${experiences.join('، ')}.`,
				`خبرتي ${d.experience} وشملت: ${experiences.join(' ← ')}. كل شغل حسّن مهاراتي بشكل كبير.`,
				`رحلتي المهنية ${d.experience}، اشتغلت في مشاريع فريلانس وشركات ناشئة وشركات كبيرة: ${experiences.join('، ')}.`,
			],
		},
	},

	/* ── freelance specifically ── */
	{
		id: 'freelance',
		keywords: {
			en: [
				'freelance',
				'freelancer',
				'independent',
				'self employed',
				'clients',
			],
			ar: ['فريلانس', 'عمل حر', 'حر', 'مستقل', 'عملاء'],
		},
		respond: {
			en: () => [
				`I've been freelancing since June 2023, working with international clients on high-performance web and mobile apps using Next.js, React Native, and modern state management tools.`,
				`As a freelancer, I collaborate remotely with clients worldwide, delivering polished experiences with Next.js, Zustand, shadcn/ui, and Tailwind CSS.`,
			],
			ar: () => [
				`بشتغل فريلانس من يونيو 2023، بتعاون مع عملاء دوليين على تطبيقات ويب وموبايل عالية الأداء باستخدام Next.js و React Native.`,
				`كفريلانسر، بشتغل ريموت مع عملاء من كل حتة في العالم، وبقدم تجارب احترافية بـ Next.js و Tailwind CSS و shadcn/ui.`,
			],
		},
	},

	/* ── Echoes Travel ── */
	{
		id: 'echoes',
		keywords: {
			en: ['echoes', 'echoes travel', 'travel'],
			ar: ['ايكوز', 'ايكوز ترافل', 'سفر', 'سفريات'],
		},
		respond: {
			en: () => [
				`At Echoes Travel (Part-Time, Apr – Jul 2025, Alexandria), I led a frontend team building travel booking interfaces with React.js, Material UI, React Hook Form, and Zod.`,
			],
			ar: () => [
				`في Echoes Travel (بارت تايم، أبريل – يوليو 2025، إسكندرية)، قدت فريق فرونت إند لبناء واجهات حجز سفر بـ React.js و Material UI و React Hook Form و Zod.`,
			],
		},
	},

	/* ── Runnet ── */
	{
		id: 'runnet',
		keywords: {
			en: ['runnet', 'runnet platform', 'netherlands', 'analytics'],
			ar: ['رانت', 'رانيت', 'هولندا', 'تحليلات'],
		},
		respond: {
			en: () => [
				`At Runnet (Full-Time, Oct 2024 – Apr 2025, Remote – Netherlands), I built a large-scale analytics Admin Dashboard with React.js, Material UI, Supabase, i18next, and Zod.`,
			],
			ar: () => [
				`في Runnet (فل تايم، أكتوبر 2024 – أبريل 2025، ريموت – هولندا)، بنيت داشبورد إدارة وتحليلات بـ React.js و Material UI و Supabase و i18next.`,
			],
		},
	},

	/* ── BM Enterprises ── */
	{
		id: 'bm',
		keywords: {
			en: ['bm', 'bm enterprises', 'enterprise'],
			ar: ['بي ام', 'انتربرايز'],
		},
		respond: {
			en: () => [
				`At BM Enterprises (Full-Time, Aug 2023 – Sep 2024, Alexandria), I built enterprise web apps using React.js, TypeScript, Material UI, React Admin, React Query, Axios, SCSS, and Zustand.`,
			],
			ar: () => [
				`في BM Enterprises (فل تايم، أغسطس 2023 – سبتمبر 2024، إسكندرية)، بنيت تطبيقات ويب للمؤسسات بـ React.js و TypeScript و Material UI و React Admin و Zustand.`,
			],
		},
	},

	/* ── projects ── */
	{
		id: 'projects',
		keywords: {
			en: [
				'projects',
				'portfolio',
				'work samples',
				'apps',
				'websites',
				'built',
				'created',
				'developed',
				'showcase',
			],
			ar: [
				'مشاريع',
				'اعمالك',
				'بورتفوليو',
				'اشتغلت على ايه',
				'تطبيقات',
				'مواقع',
				'عملت ايه',
				'انجازاتك',
			],
		},
		respond: {
			en: () => [
				`My key projects include: ${allProjects}. Each one was a unique challenge that helped me grow as a developer!`,
				`I've built ${allProjects.split(', ').length}+ projects including: ${topProjects}, and more. You can check them out in the Projects section.`,
				`Some highlights: ${topProjects}. All built with modern frameworks and best practices.`,
			],
			ar: () => [
				`مشاريعي تشمل: ${allProjects}. كل مشروع كان تحدي مختلف ساعدني أتطور!`,
				`بنيت أكتر من ${allProjects.split(', ').length} مشروع زي: ${topProjects} وغيرهم. تقدر تشوفهم في قسم المشاريع.`,
				`من أبرز الأعمال: ${topProjects}. كلهم اتبنوا بأحدث الأدوات والتقنيات.`,
			],
		},
	},

	/* ── contact ── */
	{
		id: 'contact',
		keywords: {
			en: [
				'contact',
				'reach',
				'email',
				'phone',
				'linkedin',
				'github',
				'whatsapp',
				'social',
				'connect',
				'hire',
				'get in touch',
				'message',
			],
			ar: [
				'تواصل',
				'اكلمك',
				'ايميل',
				'رقم',
				'لينكدان',
				'جيتهاب',
				'واتساب',
				'سوشيال',
				'ازاي اتواصل',
				'توظيف',
			],
		},
		respond: {
			en: () => [
				`📧 Email: ${d.email}\n📱 Phone: ${d.phone}\n🔗 Social: ${socials}\n\nFeel free to reach out anytime!`,
				`You can reach Kerolos via:\n• Email: ${d.email}\n• Phone: ${d.phone}\n• Platforms: ${socials}`,
				`Get in touch through ${d.email} or call ${d.phone}. Also available on ${socials}.`,
			],
			ar: () => [
				`📧 الإيميل: ${d.email}\n📱 الموبايل: ${d.phone}\n🔗 السوشيال: ${socials}\n\nتقدر تتواصل في أي وقت!`,
				`طرق التواصل:\n• إيميل: ${d.email}\n• موبايل: ${d.phone}\n• منصات: ${socials}`,
				`كلمني على ${d.email} أو ${d.phone}. موجود كمان على ${socials}.`,
			],
		},
	},

	/* ── education ── */
	{
		id: 'education',
		keywords: {
			en: [
				'education',
				'degree',
				'university',
				'college',
				'study',
				'studied',
				'diploma',
				'certificate',
				'academic',
				'qualification',
				'school',
			],
			ar: [
				'تعليم',
				'دراسه',
				'جامعه',
				'كليه',
				'شهاده',
				'دبلومه',
				'اكاديمي',
				'درست',
				'درست فين',
				'تخصص دراسي',
			],
		},
		respond: {
			en: () => [
				`🎓 Education:\n• Faculty of Business, MIS Department — Alexandria, Egypt (2018–2022)\n• Grade: Very Good with Honor\n• Also completed a Front-End Diploma (React & Next.js) at Route Egypt Academy.`,
				`I graduated from the Faculty of Business (MIS) with Very Good with Honor. I also earned a Front-End Diploma covering React.js and Next.js from Route Egypt Academy.`,
			],
			ar: () => [
				`🎓 التعليم:\n• كلية تجارة – قسم نظم معلومات إدارية — إسكندرية (2018–2022)\n• التقدير: جيد جداً مع مرتبة الشرف\n• كمان خلصت دبلومة فرونت إند في React و Next.js من Route Egypt Academy.`,
				`اتخرجت من كلية تجارة قسم MIS بتقدير جيد جداً مع مرتبة الشرف. وحاصل على دبلومة فرونت إند من Route Egypt Academy.`,
			],
		},
	},

	/* ── location ── */
	{
		id: 'location',
		keywords: {
			en: [
				'location',
				'where',
				'city',
				'country',
				'based',
				'live',
				'from',
				'address',
			],
			ar: [
				'مكانك',
				'فين',
				'عايش فين',
				'مدينه',
				'بلد',
				'من فين',
				'عنوانك',
				'موقعك',
			],
		},
		respond: {
			en: () => [
				`📍 I'm based in Alexandria, Egypt. I also work remotely with international teams.`,
				`Located in Alexandria, Egypt, but I work with clients and teams globally through remote collaboration.`,
			],
			ar: () => [
				`📍 أنا من إسكندرية، مصر. بشتغل كمان ريموت مع فرق دولية.`,
				`ساكن في إسكندرية، مصر. بس بشتغل مع عملاء وفرق من كل حتة في العالم عن بُعد.`,
			],
		},
	},

	/* ── availability ── */
	{
		id: 'availability',
		keywords: {
			en: [
				'available',
				'availability',
				'hire',
				'hiring',
				'open to work',
				'looking for work',
				'freelance available',
				'accepting',
			],
			ar: [
				'متاح',
				'متاح للشغل',
				'بتشتغل',
				'فاضي',
				'ممكن اشغلك',
				'بتقبل شغل',
				'عايز شغل',
			],
		},
		respond: {
			en: () => [
				`✅ Yes! I'm currently available to work — open to full-time, part-time, freelance, or contract roles. Feel free to reach out at ${d.email}.`,
				`I'm actively available for new opportunities! Whether it's freelance or full-time, I'd love to hear about your project. Contact me at ${d.email}.`,
			],
			ar: () => [
				`✅ أيوه! أنا متاح للشغل حالياً — سواء فل تايم أو بارت تايم أو فريلانس. تواصل معايا على ${d.email}.`,
				`أنا متاح لفرص جديدة! سواء فريلانس أو عقد أو شغل ثابت. كلمني على ${d.email}.`,
			],
		},
	},

	/* ── age / personal ── */
	{
		id: 'personal',
		keywords: {
			en: ['age', 'how old', 'born', 'birthday', 'personal'],
			ar: ['عمرك', 'سنك', 'كم عمرك', 'مواليد', 'عيد ميلاد', 'شخصي'],
		},
		respond: {
			en: () => {
				const age =
					new Date().getFullYear() - new Date('2000/10/14').getFullYear();
				return [
					`I'm ${age} years old, born on October 14, 2000, based in Alexandria, Egypt.`,
					`${age} years old! Born in October 2000 in Alexandria, Egypt.`,
				];
			},
			ar: () => {
				const age =
					new Date().getFullYear() - new Date('2000/10/14').getFullYear();
				return [
					`عندي ${age} سنة، من مواليد 14 أكتوبر 2000، من إسكندرية، مصر.`,
					`عمري ${age} سنة! من مواليد أكتوبر 2000 في إسكندرية.`,
				];
			},
		},
	},

	/* ── stats / numbers ── */
	{
		id: 'stats',
		keywords: {
			en: [
				'stats',
				'statistics',
				'numbers',
				'how many projects',
				'how many clients',
				'achievements',
				'accomplishments',
			],
			ar: ['احصائيات', 'ارقام', 'كم مشروع', 'كم عميل', 'انجازات', 'حققت ايه'],
		},
		respond: {
			en: () => [
				`📊 Quick stats:\n• 35+ projects completed\n• 25+ happy clients\n• 2 active projects\n• 3+ years of experience`,
				`By the numbers: 35+ projects shipped, 25+ satisfied clients, and 3+ years building premium web experiences.`,
			],
			ar: () => [
				`📊 إحصائيات سريعة:\n• +35 مشروع مكتمل\n• +25 عميل سعيد\n• 2 مشروع نشط\n• +3 سنين خبرة`,
				`بالأرقام: +35 مشروع، +25 عميل، و +3 سنين في بناء تجارب ويب احترافية.`,
			],
		},
	},

	/* ── angular specifically ── */
	{
		id: 'angular',
		keywords: {
			en: ['angular', 'angular framework'],
			ar: ['انجولار'],
		},
		respond: {
			en: () => [
				`I'm currently studying Angular at Route Egypt Academy (started Dec 2025). I'm gaining hands-on experience with Angular, TypeScript, and Angular Material.`,
				`Angular is part of my expanding skill set! I'm taking a comprehensive diploma at Route Egypt Academy covering modern Angular practices.`,
			],
			ar: () => [
				`حالياً بدرس Angular في Route Egypt Academy (من ديسمبر 2025). بتعلم Angular و TypeScript و Angular Material.`,
				`Angular جزء من مهاراتي الجديدة! بدرس دبلومة شاملة في Route Egypt Academy.`,
			],
		},
	},

	/* ── react / next ── */
	{
		id: 'react',
		keywords: {
			en: ['react', 'reactjs', 'react native', 'nextjs', 'next js', 'next'],
			ar: ['رياكت', 'نيكست', 'رياكت نيتف'],
		},
		respond: {
			en: () => [
				`React and Next.js are my primary tools. I use React for dynamic UIs, Next.js for SSR/SSG apps, and React Native for mobile. Combined with TypeScript, Zustand, and React Query for robust dev workflows.`,
				`I have deep expertise in the React ecosystem — React.js, Next.js, and React Native. I build production-grade apps with TypeScript, React Hook Form, Zod, and Tailwind CSS.`,
			],
			ar: () => [
				`React و Next.js هم أدواتي الأساسية. بستخدم React للواجهات الديناميكية، و Next.js للتطبيقات المتقدمة، و React Native للموبايل.`,
				`عندي خبرة عميقة في نظام React — React.js و Next.js و React Native. ببني تطبيقات احترافية بـ TypeScript و React Hook Form و Zod.`,
			],
		},
	},

	/* ── thanks ── */
	{
		id: 'thanks',
		keywords: {
			en: ['thanks', 'thank you', 'appreciate', 'helpful', 'great'],
			ar: ['شكرا', 'متشكر', 'تسلم', 'جزاك الله', 'شكرا ليك'],
		},
		respond: {
			en: () => [
				`You're welcome! 😊 Feel free to ask more questions anytime.`,
				`Glad I could help! Don't hesitate to ask anything else.`,
				`Anytime! If you need more info, I'm here.`,
			],
			ar: () => [
				`العفو! 😊 اسألني أي وقت.`,
				`أنا سعيد إني قدرت أساعد! لو عندك أسئلة تانية اسأل بكل راحة.`,
				`في أي وقت! لو محتاج حاجة تانية أنا هنا.`,
			],
		},
	},

	/* ── goodbye ── */
	{
		id: 'goodbye',
		keywords: {
			en: ['bye', 'goodbye', 'see you', 'later', 'take care', 'cya'],
			ar: ['باي', 'مع السلامه', 'يلا سلام', 'اشوفك', 'خلاص'],
		},
		respond: {
			en: () => [
				`Goodbye! 👋 Come back anytime you have questions.`,
				`See you later! Feel free to visit the portfolio or reach out at ${d.email}.`,
			],
			ar: () => [
				`مع السلامة! 👋 ارجعلي في أي وقت لو عندك أسئلة.`,
				`يلا سلام! لو محتاج حاجة تاني زور البورتفوليو أو كلمني على ${d.email}.`,
			],
		},
	},

	/* ── help / what can you do ── */
	{
		id: 'help',
		keywords: {
			en: [
				'help',
				'what can you do',
				'what can i ask',
				'options',
				'commands',
				'features',
				'menu',
			],
			ar: [
				'مساعده',
				'تقدر تعمل ايه',
				'اسال عن ايه',
				'اوامر',
				'خيارات',
				'قائمه',
			],
		},
		respond: {
			en: () => [
				`I can answer questions about:\n• 👤 Who is Kerolos\n• 🛠️ Skills & tech stack\n• 💼 Work experience\n• 📁 Projects\n• 🎓 Education\n• 📊 Stats & achievements\n• 📍 Location\n• ✅ Availability\n• 📞 Contact info\n\nJust ask in English or Arabic!`,
			],
			ar: () => [
				`أقدر أجاوب على:\n• 👤 مين كيرلس\n• 🛠️ المهارات والتقنيات\n• 💼 الخبرة العملية\n• 📁 المشاريع\n• 🎓 التعليم\n• 📊 الإحصائيات والإنجازات\n• 📍 الموقع\n• ✅ التوفر\n• 📞 التواصل\n\nاسأل بالعربي أو الإنجليزي!`,
			],
		},
	},
];

/* ──────────────────── intent detection engine ──────────────────── */

function matchTopics(input: string, lang: 'ar' | 'en'): Topic[] {
	const normalized = normalize(input);
	const words = normalized.split(/\s+/);

	const scored: { topic: Topic; score: number }[] = [];

	for (const topic of topics) {
		const keywords = topic.keywords[lang];
		let score = 0;

		for (const keyword of keywords) {
			const normKeyword = normalize(keyword);

			// exact substring match in the full input (highest priority)
			if (normalized.includes(normKeyword)) {
				score += normKeyword.split(/\s+/).length * 3;
				continue;
			}

			// individual keyword-word matching (partial)
			const kwWords = normKeyword.split(/\s+/);
			for (const kw of kwWords) {
				for (const w of words) {
					if (w === kw) {
						score += 2;
					} else if (w.length > 3 && kw.length > 3 && w.includes(kw)) {
						score += 1;
					} else if (w.length > 3 && kw.length > 3 && kw.includes(w)) {
						score += 1;
					}
				}
			}
		}

		if (score > 0) {
			scored.push({ topic, score });
		}
	}

	// sort by score descending, return top matches
	scored.sort((a, b) => b.score - a.score);

	if (scored.length === 0) return [];

	// return the best match (or top 2 if close scores)
	const best = scored[0];
	const result = [best.topic];

	if (scored.length > 1 && scored[1].score >= best.score * 0.6) {
		result.push(scored[1].topic);
	}

	return result;
}

/* ──────────────────────── route handler ──────────────────────── */

export async function POST(req: Request) {
	try {
		const { messages } = await req.json();
		const lastMessage = messages[messages.length - 1];
		const rawInput: string = lastMessage.content ?? '';
		const lang = detectLang(rawInput);

		const matched = matchTopics(rawInput, lang);

		let answer: string;

		if (matched.length === 0) {
			answer =
				lang === 'ar'
					? 'مش متأكد فهمتك 🤔 جرب تسأل عن المهارات، المشاريع، الخبرة، التعليم، أو طرق التواصل.'
					: "I'm not sure I understood that 🤔 Try asking about skills, projects, experience, education, or contact info.";
		} else if (matched.length === 1) {
			answer = pick(matched[0].respond[lang](d));
		} else {
			// combine answers from multiple matched topics
			const parts = matched.map(t => pick(t.respond[lang](d)));
			answer = parts.join('\n\n');
		}

		const encoder = new TextEncoder();
		const stream = new ReadableStream({
			async start(controller) {
				for (const word of answer.split(' ')) {
					controller.enqueue(encoder.encode(word + ' '));
					await new Promise(r => setTimeout(r, 15 + Math.random() * 30));
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
