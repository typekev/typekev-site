export const scrollTo = (to: string | number) =>
  typeof to === 'string'
    ? document.getElementById(to)?.scrollIntoView({ behavior: 'smooth' })
    : window.scrollTo({ top: 0, behavior: 'smooth' });
