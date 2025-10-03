import { ScrollVelocity } from "src/components/ui";

export default function HomeBreakSection() {
  return (
    <section className="py-4 max-w-full" id="home-break-section">
      <ScrollVelocity
        texts={["Frontend Developer", "React & Next.js"]}
        className="custom-scroll-text"
      />
    </section>
  );
}
