import { useRouter as ur } from "next/router";

export const useRouter = (...props: Parameters<typeof ur>) => {
  const { replace: r, ...rest } = ur(...props);
  const replace = (...rProps: Parameters<typeof r>) =>
    r(rProps[0], rProps[1], { shallow: true, scroll: false, ...rProps[2] });
  return { replace, ...rest };
};
