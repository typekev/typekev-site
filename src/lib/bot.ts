import { en } from './bot/en';
import { detectLanguage } from './bot/detectLanguage';

const bots = {
  en,
};

export const bot = {
  getReply: (text: string) => bots[detectLanguage(text)].getReply(text),
  getSentiment: (text: string) => bots[detectLanguage(text)].getSentiment(text),
};
