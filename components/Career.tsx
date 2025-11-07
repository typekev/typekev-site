const careerData = [
  {
    company: "Symphonee",
    role: "Co-founder & CTO",
    years: "2025 - Present",
  },
  {
    company: "Scale Tiny",
    role: "Founder",
    years: "2025 - Present",
  },
  {
    company: "SES Satellites",
    role: "Yield Excellence Programs Lead",
    years: "2022 - Present",
  },
  {
    company: "EmailTree AI",
    role: "Principal Software Engineer",
    years: "2021 - 2022",
  },
  {
    company: "Devoteam",
    role: "Lead Software Engineer",
    years: "2017 - 2021",
  },
  {
    company: "Rise One Solutions",
    role: "Software Engineer",
    years: "2015 - 2017",
  },
  {
    company: "Netcom",
    role: "Engineering Manager",
    years: "2013 - 2015",
  },
  {
    company: "Perfect Smile Doc",
    role: "Network Engineer",
    years: "2013",
  },
];

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
