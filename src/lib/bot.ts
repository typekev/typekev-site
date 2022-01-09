import type { Bot, Locale } from "types.d";

import { detectLanguage } from "./bot/detectLanguage";
import { en } from "./bot/en";

const bots: Record<Locale, typeof en> = {
  en,
  fil: en,
  fr: en,
};

export const bot: Bot = {
  getReply: (text: string) => bots[detectLanguage(text)].getReply(text),
  getSentiment: (text: string) => bots[detectLanguage(text)].getSentiment(text),
  getSuggestion: (text: string) =>
    bots[detectLanguage(text)].getSuggestion(text),
};
