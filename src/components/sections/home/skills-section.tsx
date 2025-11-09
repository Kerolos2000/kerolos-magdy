import {
  IconApi,
  IconBrandBootstrap,
  IconBrandCss3,
  IconBrandGithub,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVscode,
  IconDatabase,
  IconForms,
  IconLanguage,
  IconSettings,
} from "@tabler/icons-react";

const frontendSkills = [
  { name: "JavaScript", icon: IconBrandJavascript },
  { name: "TypeScript", icon: IconBrandTypescript },
  { name: "React.js", icon: IconBrandReact },
  { name: "Next.js", icon: IconBrandNextjs },
  { name: "React Native", icon: IconBrandReact },
  { name: "Zustand", icon: IconSettings },
  { name: "React Hook Form", icon: IconForms },
  { name: "Zod", icon: IconDatabase },
  { name: "Axios", icon: IconApi },
  { name: "React Query", icon: IconApi },
  { name: "i18next", icon: IconLanguage },
  { name: "Tailwind", icon: IconBrandTailwind },
  { name: "Material UI", icon: IconBrandVscode },
  { name: "Bootstrap", icon: IconBrandBootstrap },
  { name: "React Admin", icon: IconBrandVscode },
  { name: "HTML5", icon: IconBrandHtml5 },
  { name: "CSS3", icon: IconBrandCss3 },
  { name: "SCSS", icon: IconBrandCss3 },
  { name: "Supabase", icon: IconDatabase },
  { name: "Git & GitHub", icon: IconBrandGithub },
];

export default function HomeSkillsSection() {
  return (
    <section
      id="home-skills-section"
      className="relative py-8 container mx-auto px-4 sm:px-6 lg:px-8 w-full"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 -z-10 h-full w-full [&>div]:absolute [&>div]:bottom-auto [&>div]:left-1/2 [&>div]:right-auto [&>div]:top-1/2 [&>div]:h-[280px] sm:[&>div]:h-[360px] md:[&>div]:h-[420px] [&>div]:w-[280px] sm:[&>div]:w-[360px] md:[&>div]:w-[420px] [&>div]:-translate-x-[50%] [&>div]:-translate-y-[50%] [&>div]:rounded-full [&>div]:bg-[rgba(109,244,173,0.2)] dark:[&>div]:bg-[rgba(109,244,173,0.1)] [&>div]:blur-[100px] [&>div]:animate-[fadePulse_12s_ease-in-out_infinite]">
          <div></div>
        </div>
      </div>

      <div className="relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {frontendSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="group relative"
                style={{
                  animation: `fadeIn 0.5s ease-out ${index * 0.04}s both`,
                }}
              >
                <div className="relative h-full flex items-center pointer-events-none backdrop-blur-sm bg-card/20 border border-border/50 hover:border-emerald-500/50 rounded-lg px-4 py-2.5 transition-all duration-300 hover:bg-card/40 hover:shadow-sm hover:shadow-emerald-500/5">
                  <div className="flex items-center gap-3">
                    <div className="relative shrink-0">
                      <div className="absolute inset-0 bg-emerald-500/20 rounded-md blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative p-1.5 rounded-md bg-neutral-50/50 dark:bg-neutral-100/5 group-hover:bg-emerald-500/10 transition-all duration-300">
                        <Icon
                          size={20}
                          className="text-foreground/80 group-hover:text-emerald-500 transition-colors duration-300"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>

                    <span className="text-sm font-medium text-foreground/90 group-hover:text-emerald-500 transition-colors duration-300 tracking-tight">
                      {skill.name}
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-emerald-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
