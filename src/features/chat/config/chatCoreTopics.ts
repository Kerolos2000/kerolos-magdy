import { type ChatPortfolioContext, type ChatTopic } from '../types/Chat';

export const createChatCoreTopics = (context: ChatPortfolioContext): ChatTopic[] => {
  const topSkills = context.stack.slice(0, 8).join(', ');
  const allSkills = context.stack.join(', ');
  const topProjects = context.projects.slice(0, 4).join(', ');
  const allProjects = context.projects.join(', ');
  const experiences = context.detailedExperience;
  const socials = context.socials.join(', ');

  return [
    {
      id: 'greeting',
      keywords: {
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
      },
      respond: {
        ar: () => [
          'أهلاً وسهلاً! 👋 أنا مساعد بورتفوليو كيرلس. اسألني عن مهاراته أو مشاريعه أو خبرته!',
          'مرحباً! أهلاً بيك في بورتفوليو كيرلس. عايز تعرف إيه؟',
          'هاي! اسألني أي حاجة عن كيرلس — مهارات، مشاريع، خبرة، أو طريقة التواصل.',
        ],
        en: () => [
          "Hey there! 👋 I'm Kerolos's portfolio assistant. Ask me about his skills, projects, or experience!",
          "Hello! Welcome to Kerolos's portfolio. What would you like to know?",
          'Hi! Feel free to ask me anything about Kerolos — skills, projects, experience, or how to get in touch.',
        ],
      },
    },
    {
      id: 'name',
      keywords: {
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
      },
      respond: {
        ar: () => [
          `أنا ${context.name}، ${context.role} من إسكندرية، مصر. عندي خبرة ${context.experience} في بناء تطبيقات ويب حديثة.`,
          `${context.name}، شغال ${context.role} بخبرة ${context.experience} في التقنيات الحديثة زي Next.js و React.`,
          `اسمي ${context.name}، مطور فرونت إند محترف بخبرة ${context.experience}. متخصص في بناء واجهات مستخدم عصرية.`,
        ],
        en: () => [
          `I'm ${context.name}, a passionate ${context.role} based in Alexandria, Egypt with ${context.experience} of professional experience.`,
          `${context.name} here! A ${context.role} with ${context.experience} of hands-on experience building modern web applications.`,
          `Meet ${context.name} — a dedicated ${context.role} from Alexandria, Egypt, with ${context.experience} working with top technologies like Next.js, React, and Angular.`,
        ],
      },
    },
    {
      id: 'role',
      keywords: {
        ar: ['وظيفتك', 'شغلك', 'بتشتغل ايه', 'مسمى وظيفي', 'دورك', 'بتعمل ايه', 'شغلتك', 'تخصصك'],
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
      },
      respond: {
        ar: () => [
          `أنا ${context.role}، متخصص في بناء تطبيقات ويب وموبايل عالية الأداء باستخدام React و Next.js و Angular.`,
          `شغلي ${context.role} — بركز على بناء واجهات مستخدم احترافية بأحدث التقنيات.`,
        ],
        en: () => [
          `I'm a ${context.role} specializing in building performant, scalable web and mobile applications using React, Next.js, and Angular.`,
          `My role is ${context.role} — I focus on crafting premium user interfaces with a modern tech stack.`,
        ],
      },
    },
    {
      id: 'skills',
      keywords: {
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
      },
      respond: {
        ar: () => [
          `مهاراتي التقنية تشمل: ${allSkills}. دايماً بتعلم حاجات جديدة!`,
          `بشتغل بشكل أساسي بـ ${topSkills} وتقنيات تانية كتير. إجمالي ${context.stack.length} تقنية.`,
          `التقنيات اللي بستخدمها: ${allSkills}. أقوى نقاطي هي TypeScript و Next.js و React.`,
        ],
        en: () => [
          `My core tech stack includes: ${allSkills}. I'm always learning and adding new tools!`,
          `I'm proficient in ${topSkills}, and many more. Total of ${context.stack.length} technologies in my toolkit.`,
          `Technologies I work with: ${allSkills}. My strongest areas are TypeScript, Next.js, and React.`,
        ],
      },
    },
    {
      id: 'experience',
      keywords: {
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
      },
      respond: {
        ar: () => [
          `عندي ${context.experience} خبرة. اشتغلت في: ${experiences.join('، ')}.`,
          `خبرتي ${context.experience} وشملت: ${experiences.join(' ← ')}. كل شغل حسّن مهاراتي بشكل كبير.`,
          `رحلتي المهنية ${context.experience}، اشتغلت في مشاريع فريلانس وشركات ناشئة وشركات كبيرة: ${experiences.join('، ')}.`,
        ],
        en: () => [
          `I have ${context.experience} of professional experience. I've worked at: ${experiences.join(', ')}.`,
          `With ${context.experience} in the field, my journey includes: ${experiences.join(' → ')}. Each role has sharpened my skills significantly.`,
          `My career spans ${context.experience}, working across freelance, startups, and established companies: ${experiences.join(', ')}.`,
        ],
      },
    },
    {
      id: 'projects',
      keywords: {
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
      },
      respond: {
        ar: () => [
          `مشاريعي تشمل: ${allProjects}. كل مشروع كان تحدي مختلف ساعدني أتطور!`,
          `بنيت أكتر من ${context.projects.length} مشروع زي: ${topProjects} وغيرهم. تقدر تشوفهم في قسم المشاريع.`,
          `من أبرز الأعمال: ${topProjects}. كلهم اتبنوا بأحدث الأدوات والتقنيات.`,
        ],
        en: () => [
          `My key projects include: ${allProjects}. Each one was a unique challenge that helped me grow as a developer!`,
          `I've built ${context.projects.length}+ projects including: ${topProjects}, and more. You can check them out in the Projects section.`,
          `Some highlights: ${topProjects}. All built with modern frameworks and best practices.`,
        ],
      },
    },
    {
      id: 'contact',
      keywords: {
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
      },
      respond: {
        ar: () => [
          `📧 الإيميل: ${context.email}\n📱 الموبايل: ${context.phone}\n🔗 السوشيال: ${socials}\n\nتقدر تتواصل في أي وقت!`,
          `طرق التواصل:\n• إيميل: ${context.email}\n• موبايل: ${context.phone}\n• منصات: ${socials}`,
          `كلمني على ${context.email} أو ${context.phone}. موجود كمان على ${socials}.`,
        ],
        en: () => [
          `📧 Email: ${context.email}\n📱 Phone: ${context.phone}\n🔗 Social: ${socials}\n\nFeel free to reach out anytime!`,
          `You can reach Kerolos via:\n• Email: ${context.email}\n• Phone: ${context.phone}\n• Platforms: ${socials}`,
          `Get in touch through ${context.email} or call ${context.phone}. Also available on ${socials}.`,
        ],
      },
    },
  ];
};
