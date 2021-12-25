import { detect } from 'tinyld';

import { RobotLanguage } from 'types/robot';

const isLanguageSupported = (language: string): language is RobotLanguage =>
  language in RobotLanguage;

export const detectLanguage = (text: string): RobotLanguage => {
  const language = detect(text);

  if (isLanguageSupported(language)) {
    return language;
  }

  return RobotLanguage.en;
};
