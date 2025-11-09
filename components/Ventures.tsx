import { VentureCard } from "./ventures/VentureCard";

export function Ventures() {
  return (
    <section aria-labelledby="ventures-heading">
      <h2
        id="ventures-heading"
        className="mb-6 text-md font-extrabold uppercase tracking-wide text-foreground/90"
      >
        Ventures
      </h2>
      <ul className="grid gap-6 perspective-1000">
        <li className="animate-in fade-in duration-500">
          <a href="https://symphonee.ai/">
            <VentureCard
              image="/images/symphonee.jpeg"
              blurImage="/images/symphonee-small.jpeg"
            >
              Symphonee
            </VentureCard>
          </a>
        </li>
        <li className="animate-in fade-in duration-700">
          <a href="https://scaletiny.com/">
            <VentureCard
              image="/images/scale-tiny.jpeg"
              blurImage="/images/scale-tiny-small.jpeg"
            >
              Scale Tiny
            </VentureCard>
          </a>
        </li>
      </ul>
    </section>
  );
}
