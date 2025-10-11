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
      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map(({ label, value }) => (
            <div key={label}>
              <div className="relative  border border-primary/20 rounded-2xl p-8">
                <div className="text-5xl md:text-6xl font-bold mb-3">
                  <NumberTicker value={value} />
                  <span className="text-muted-foreground">+</span>
                </div>
                <p className="text-sm md:text-base text-muted-foreground font-medium leading-tight">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
