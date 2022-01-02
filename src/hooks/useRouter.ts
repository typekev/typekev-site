import { useRouter as ur } from "next/router";

export const useRouter = (...props: Parameters<typeof ur>) => {
  const { push: p, replace: r, ...rest } = ur(...props);

  const push = (...rProps: Parameters<typeof p>) =>
    p(rProps[0], rProps[1], { shallow: true, scroll: false, ...rProps[2] });

  const replace = (...rProps: Parameters<typeof r>) =>
    r(rProps[0], rProps[1], { shallow: true, scroll: false, ...rProps[2] });

  return { push, replace, ...rest };
};
