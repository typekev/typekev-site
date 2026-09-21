import { careerData } from "./career/careerData";

export function Career() {
  return (
    <section aria-labelledby="career-heading">
      <h2
        id="career-heading"
        className="text-md mb-6 scroll-m-8 font-black tracking-wide text-foreground/90 uppercase"
      >
        Career
      </h2>
      <ol className="space-y-3">
        {careerData.map((exp) => (
          <li
            key={exp.company}
            className="rounded-r-xl border-l-4 border-foreground/30 bg-muted/30 px-6 py-4 backdrop-blur-xl transition-colors duration-200 hover:border-foreground/50 hover:bg-muted/40"
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
