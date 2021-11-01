export const scrollTo = (to: string) =>
  document.getElementById(to)?.scrollIntoView({ behavior: 'smooth' });
