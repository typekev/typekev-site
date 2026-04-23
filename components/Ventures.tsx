import { VentureCard } from "./ventures/VentureCard";

export function Ventures() {
  return (
    <section aria-labelledby="ventures-heading">
      <h3
        id="ventures-heading"
        className="text-md mb-6 scroll-m-8 font-black tracking-wide text-foreground/90 uppercase"
      >
        Ventures
      </h3>
      <ul className="perspective-1000 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1">
        <li>
          <a href="https://symphonee.ai/">
            <VentureCard image="/images/symphonee.jpeg" blurImage="/images/symphonee-small.jpeg">
              Symphonee AI
            </VentureCard>
          </a>
        </li>
        <li>
          <a href="https://scaletiny.com/">
            <VentureCard image="/images/scale-tiny.jpeg" blurImage="/images/scale-tiny-small.jpeg">
              Scale Tiny
            </VentureCard>
          </a>
        </li>
      </ul>
    </section>
  );
}
