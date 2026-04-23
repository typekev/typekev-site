import { careerData } from "./career/careerData";

export function Career() {
  return (
    <section aria-labelledby="career-heading">
      <h3
        id="career-heading"
        className="text-md mb-6 scroll-m-8 font-black tracking-wide text-foreground/90 uppercase"
      >
        Career
      </h3>
      <ol className="space-y-3">
        {careerData.map((exp) => (
          <li
            key={exp.company}
            className="rounded-r-xl border-l-4 border-foreground/30 bg-muted/20 px-6 py-3 backdrop-blur-xl transition-all duration-200 focus-within:ring-2 focus-within:ring-foreground focus-within:ring-offset-2 focus-within:ring-offset-background hover:border-l-8 hover:border-foreground/50 hover:bg-muted/40"
          >
            <p className="mb-0.5 text-xl/tight font-bold">{exp.role}</p>
            <p className="text-base/tight font-semibold">{exp.company}</p>
            <time className="text-sm font-medium">{exp.years}</time>
          </li>
        ))}
      </ol>
    </section>
  );
}
