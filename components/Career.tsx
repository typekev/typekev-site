import { careerData } from "./career/careerData";

export function Career() {
  return (
    <section aria-labelledby="career-heading">
      <h3
        id="career-heading"
        className="mb-6 text-md font-black uppercase tracking-wide text-foreground/90 scroll-m-8"
      >
        Career
      </h3>
      <ol className="space-y-3">
        {careerData.map((exp) => (
          <li
            key={exp.company}
            className="border-l-4 border-foreground/30 px-6 py-3 rounded-r-xl bg-muted/20 backdrop-blur-xl transition-all duration-200 hover:border-l-8 hover:bg-muted/40 hover:border-foreground/50 focus-within:ring-2 focus-within:ring-foreground focus-within:ring-offset-2 focus-within:ring-offset-background"
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
