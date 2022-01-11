import type en from "lib/bot/en/responses.json";

export enum RobotSentiment {
  NEUTRAL = "neutral",
  POSITIVE = "positive",
  NEGATIVE = "negative",
}

export interface Bot {
  getReply: (text: string) => string;
  getSentiment: (text: string) => RobotSentiment;
  getSuggestion: (text: string) => string | undefined;
}

export type Responses = typeof en;

export type Intent = keyof Responses;
