import { detect } from "tinyld";

import { Locale } from "types.d";

const isLanguageSupported = (language: string): language is Locale =>
  language in Locale;

export const detectLanguage = (text: string): Locale => {
  const language = detect(text);

  if (isLanguageSupported(language)) {
    return language;
  }

  return Locale.en;
};
