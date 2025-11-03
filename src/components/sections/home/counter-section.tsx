import { NumberTicker } from "src/components/ui";

export default function HomeCounterSection() {
  const stats = [
    { label: "Projects completed", value: 35 },
    { label: "Active projects", value: 2 },
    { label: "Happy clients", value: 25 },
    { label: "Years of experience", value: 3 },
  ];

  return (
    <section
      id="home-counter-section"
      className="py-8 bg-neutral-50 dark:bg-neutral-900 "
    >
      <div className="relative container mx-auto px-6 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
          {stats.map(({ label, value }) => (
            <div
              key={label}
              className="relative border border-primary/20 rounded-2xl shadow-sm px-4 py-6 text-center bg-white dark:bg-neutral-800"
            >
              <div className="text-5xl md:text-6xl font-bold mb-3 flex items-center justify-center flex-nowrap">
                <NumberTicker value={value} />
                <span className="text-muted-foreground">+</span>
              </div>
              <p className="text-sm md:text-base text-muted-foreground">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
