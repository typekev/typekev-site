import { useTranslation as ut } from "next-i18next";

import en from "../../public/locales/en/common.json";

export const useTranslation = (...props: Parameters<typeof ut>) => {
  const { t, ...rest } = ut(...props);
  const typedT = (key: keyof typeof en) => t(key);
  return { t: typedT, ...rest };
};
