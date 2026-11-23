import { PROFILE } from 'src/shared/constants/profile';
import { getAge } from 'src/shared/utils/getAge';
import { type ChatPortfolioContext, type ChatTopic } from '../types/Chat';

export const createChatDetailTopics = (context: ChatPortfolioContext): ChatTopic[] => [
  {
    id: 'freelance',
    keywords: {
      ar: ['فريلانس', 'عمل حر', 'حر', 'مستقل', 'عملاء'],
      en: ['freelance', 'freelancer', 'independent', 'self employed', 'clients'],
    },
    respond: {
      ar: () => [
        'بشتغل فريلانس من يونيو 2023، بتعاون مع عملاء دوليين على تطبيقات ويب وموبايل عالية الأداء باستخدام Next.js و React Native.',
        'كفريلانسر، بشتغل ريموت مع عملاء من كل حتة في العالم، وبقدم تجارب احترافية بـ Next.js و Tailwind CSS و shadcn/ui.',
      ],
      en: () => [
        "I've been freelancing since June 2023, working with international clients on high-performance web and mobile apps using Next.js, React Native, and modern state management tools.",
        'As a freelancer, I collaborate remotely with clients worldwide, delivering polished experiences with Next.js, Zustand, shadcn/ui, and Tailwind CSS.',
      ],
    },
  },
  {
    id: 'echoes',
    keywords: {
      ar: ['ايكوز', 'ايكوز ترافل', 'سفر', 'سفريات'],
      en: ['echoes', 'echoes travel', 'travel'],
    },
    respond: {
      ar: () => [
        'في Echoes Travel (بارت تايم، أبريل – يوليو 2025، إسكندرية)، قدت فريق فرونت إند لبناء واجهات حجز سفر بـ React.js و Material UI و React Hook Form و Zod.',
      ],
      en: () => [
        'At Echoes Travel (Part-Time, Apr – Jul 2025, Alexandria), I led a frontend team building travel booking interfaces with React.js, Material UI, React Hook Form, and Zod.',
      ],
    },
  },
  {
    id: 'runnet',
    keywords: {
      ar: ['رانت', 'رانيت', 'هولندا', 'تحليلات'],
      en: ['runnet', 'runnet platform', 'netherlands', 'analytics'],
    },
    respond: {
      ar: () => [
        'في Runnet (فل تايم، أكتوبر 2024 – أبريل 2025، ريموت – هولندا)، بنيت داشبورد إدارة وتحليلات بـ React.js و Material UI و Supabase و i18next.',
      ],
      en: () => [
        'At Runnet (Full-Time, Oct 2024 – Apr 2025, Remote – Netherlands), I built a large-scale analytics Admin Dashboard with React.js, Material UI, Supabase, i18next, and Zod.',
      ],
    },
  },
  {
    id: 'bm',
    keywords: {
      ar: ['بي ام', 'انتربرايز'],
      en: ['bm', 'bm enterprises', 'enterprise'],
    },
    respond: {
      ar: () => [
        'في BM Enterprises (فل تايم، أغسطس 2023 – سبتمبر 2024، إسكندرية)، بنيت تطبيقات ويب للمؤسسات بـ React.js و TypeScript و Material UI و React Admin و Zustand.',
      ],
      en: () => [
        'At BM Enterprises (Full-Time, Aug 2023 – Sep 2024, Alexandria), I built enterprise web apps using React.js, TypeScript, Material UI, React Admin, React Query, Axios, SCSS, and Zustand.',
      ],
    },
  },
  {
    id: 'education',
    keywords: {
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
    },
    respond: {
      ar: () => [
        '🎓 التعليم:\n• كلية تجارة – قسم نظم معلومات إدارية — إسكندرية (2018–2022)\n• التقدير: جيد جداً مع مرتبة الشرف\n• كمان خلصت دبلومة فرونت إند في React و Next.js من Route Egypt Academy.',
        'اتخرجت من كلية تجارة قسم MIS بتقدير جيد جداً مع مرتبة الشرف. وحاصل على دبلومة فرونت إند من Route Egypt Academy.',
      ],
      en: () => [
        '🎓 Education:\n• Faculty of Business, MIS Department — Alexandria, Egypt (2018–2022)\n• Grade: Very Good with Honor\n• Also completed a Front-End Diploma (React & Next.js) at Route Egypt Academy.',
        'I graduated from the Faculty of Business (MIS) with Very Good with Honor. I also earned a Front-End Diploma covering React.js and Next.js from Route Egypt Academy.',
      ],
    },
  },
  {
    id: 'location',
    keywords: {
      ar: ['مكانك', 'فين', 'عايش فين', 'مدينه', 'بلد', 'من فين', 'عنوانك', 'موقعك'],
      en: ['location', 'where', 'city', 'country', 'based', 'live', 'from', 'address'],
    },
    respond: {
      ar: () => [
        '📍 أنا من إسكندرية، مصر. بشتغل كمان ريموت مع فرق دولية.',
        'ساكن في إسكندرية، مصر. بس بشتغل مع عملاء وفرق من كل حتة في العالم عن بُعد.',
      ],
      en: () => [
        "📍 I'm based in Alexandria, Egypt. I also work remotely with international teams.",
        'Located in Alexandria, Egypt, but I work with clients and teams globally through remote collaboration.',
      ],
    },
  },
  {
    id: 'availability',
    keywords: {
      ar: ['متاح', 'متاح للشغل', 'بتشتغل', 'فاضي', 'ممكن اشغلك', 'بتقبل شغل', 'عايز شغل'],
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
    },
    respond: {
      ar: () => [
        `✅ أيوه! أنا متاح للشغل حالياً — سواء فل تايم أو بارت تايم أو فريلانس. تواصل معايا على ${context.email}.`,
        `أنا متاح لفرص جديدة! سواء فريلانس أو عقد أو شغل ثابت. كلمني على ${context.email}.`,
      ],
      en: () => [
        `✅ Yes! I'm currently available to work — open to full-time, part-time, freelance, or contract roles. Feel free to reach out at ${context.email}.`,
        `I'm actively available for new opportunities! Whether it's freelance or full-time, I'd love to hear about your project. Contact me at ${context.email}.`,
      ],
    },
  },
  {
    id: 'personal',
    keywords: {
      ar: ['عمرك', 'سنك', 'كم عمرك', 'مواليد', 'عيد ميلاد', 'شخصي'],
      en: ['age', 'how old', 'born', 'birthday', 'personal'],
    },
    respond: {
      ar: () => {
        const age = getAge(PROFILE.birthDate);

        return [
          `عندي ${age} سنة، من مواليد 14 أكتوبر 2000، من إسكندرية، مصر.`,
          `عمري ${age} سنة! من مواليد أكتوبر 2000 في إسكندرية.`,
        ];
      },
      en: () => {
        const age = getAge(PROFILE.birthDate);

        return [
          `I'm ${age} years old, born on October 14, 2000, based in Alexandria, Egypt.`,
          `${age} years old! Born in October 2000 in Alexandria, Egypt.`,
        ];
      },
    },
  },
  {
    id: 'stats',
    keywords: {
      ar: ['احصائيات', 'ارقام', 'كم مشروع', 'كم عميل', 'انجازات', 'حققت ايه'],
      en: [
        'stats',
        'statistics',
        'numbers',
        'how many projects',
        'how many clients',
        'achievements',
        'accomplishments',
      ],
    },
    respond: {
      ar: () => [
        '📊 إحصائيات سريعة:\n• +35 مشروع مكتمل\n• +25 عميل سعيد\n• 2 مشروع نشط\n• +3 سنين خبرة',
        'بالأرقام: +35 مشروع، +25 عميل، و +3 سنين في بناء تجارب ويب احترافية.',
      ],
      en: () => [
        '📊 Quick stats:\n• 35+ projects completed\n• 25+ happy clients\n• 2 active projects\n• 3+ years of experience',
        'By the numbers: 35+ projects shipped, 25+ satisfied clients, and 3+ years building premium web experiences.',
      ],
    },
  },
  {
    id: 'angular',
    keywords: {
      ar: ['انجولار'],
      en: ['angular', 'angular framework'],
    },
    respond: {
      ar: () => [
        'حالياً بدرس Angular في Route Egypt Academy (من ديسمبر 2025). بتعلم Angular و TypeScript و Angular Material.',
        'Angular جزء من مهاراتي الجديدة! بدرس دبلومة شاملة في Route Egypt Academy.',
      ],
      en: () => [
        "I'm currently studying Angular at Route Egypt Academy (started Dec 2025). I'm gaining hands-on experience with Angular, TypeScript, and Angular Material.",
        "Angular is part of my expanding skill set! I'm taking a comprehensive diploma at Route Egypt Academy covering modern Angular practices.",
      ],
    },
  },
  {
    id: 'react',
    keywords: {
      ar: ['رياكت', 'نيكست', 'رياكت نيتف'],
      en: ['react', 'reactjs', 'react native', 'nextjs', 'next js', 'next'],
    },
    respond: {
      ar: () => [
        'React و Next.js هم أدواتي الأساسية. بستخدم React للواجهات الديناميكية، و Next.js للتطبيقات المتقدمة، و React Native للموبايل.',
        'عندي خبرة عميقة في نظام React — React.js و Next.js و React Native. ببني تطبيقات احترافية بـ TypeScript و React Hook Form و Zod.',
      ],
      en: () => [
        'React and Next.js are my primary tools. I use React for dynamic UIs, Next.js for SSR/SSG apps, and React Native for mobile. Combined with TypeScript, Zustand, and React Query for robust dev workflows.',
        'I have deep expertise in the React ecosystem — React.js, Next.js, and React Native. I build production-grade apps with TypeScript, React Hook Form, Zod, and Tailwind CSS.',
      ],
    },
  },
  {
    id: 'thanks',
    keywords: {
      ar: ['شكرا', 'متشكر', 'تسلم', 'جزاك الله', 'شكرا ليك'],
      en: ['thanks', 'thank you', 'appreciate', 'helpful', 'great'],
    },
    respond: {
      ar: () => [
        'العفو! 😊 اسألني أي وقت.',
        'أنا سعيد إني قدرت أساعد! لو عندك أسئلة تانية اسأل بكل راحة.',
        'في أي وقت! لو محتاج حاجة تانية أنا هنا.',
      ],
      en: () => [
        "You're welcome! 😊 Feel free to ask more questions anytime.",
        "Glad I could help! Don't hesitate to ask anything else.",
        "Anytime! If you need more info, I'm here.",
      ],
    },
  },
  {
    id: 'goodbye',
    keywords: {
      ar: ['باي', 'مع السلامه', 'يلا سلام', 'اشوفك', 'خلاص'],
      en: ['bye', 'goodbye', 'see you', 'later', 'take care', 'cya'],
    },
    respond: {
      ar: () => [
        'مع السلامة! 👋 ارجعلي في أي وقت لو عندك أسئلة.',
        `يلا سلام! لو محتاج حاجة تاني زور البورتفوليو أو كلمني على ${context.email}.`,
      ],
      en: () => [
        'Goodbye! 👋 Come back anytime you have questions.',
        `See you later! Feel free to visit the portfolio or reach out at ${context.email}.`,
      ],
    },
  },
  {
    id: 'help',
    keywords: {
      ar: ['مساعده', 'تقدر تعمل ايه', 'اسال عن ايه', 'اوامر', 'خيارات', 'قائمه'],
      en: [
        'help',
        'what can you do',
        'what can i ask',
        'options',
        'commands',
        'features',
        'menu',
      ],
    },
    respond: {
      ar: () => [
        'أقدر أجاوب على:\n• 👤 مين كيرلس\n• 🛠️ المهارات والتقنيات\n• 💼 الخبرة العملية\n• 📁 المشاريع\n• 🎓 التعليم\n• 📊 الإحصائيات والإنجازات\n• 📍 الموقع\n• ✅ التوفر\n• 📞 التواصل\n\nاسأل بالعربي أو الإنجليزي!',
      ],
      en: () => [
        'I can answer questions about:\n• 👤 Who is Kerolos\n• 🛠️ Skills & tech stack\n• 💼 Work experience\n• 📁 Projects\n• 🎓 Education\n• 📊 Stats & achievements\n• 📍 Location\n• ✅ Availability\n• 📞 Contact info\n\nJust ask in English or Arabic!',
      ],
    },
  },
];
