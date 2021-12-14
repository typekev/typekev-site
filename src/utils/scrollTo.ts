import { RouterPath } from 'types';

export const scrollTo = (to: RouterPath) =>
  document.getElementById(to)?.scrollIntoView({ behavior: 'smooth' });
