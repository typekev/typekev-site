import { careerData } from "./career/careerData";

export function Career() {
  return (
    <section aria-labelledby="career-heading">
      <h2
        id="career-heading"
        className="mb-6 text-md font-extrabold uppercase tracking-wide text-foreground/90"
      >
        Career
      </h2>
      <ol className="space-y-3">
        {careerData.map((exp) => (
          <li
            key={exp.company}
            className="border-l-4 border-foreground/30 pl-6 py-3 rounded-r-xl bg-muted/20 backdrop-blur-xl transition-all duration-200 hover:border-l-8 hover:bg-muted/40 hover:border-foreground/50 focus-within:ring-2 focus-within:ring-foreground focus-within:ring-offset-2 focus-within:ring-offset-background"
          >
            <h3 className="text-xl font-semibold uppercase">{exp.company}</h3>
            <p className="font-medium">{exp.role}</p>
            <time className="text-sm font-bold uppercase text-muted-foreground">
              {exp.years}
            </time>
          </li>
        ))}
      </ol>
    </section>
  );
}
