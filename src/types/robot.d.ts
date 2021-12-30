export enum RobotSentiment {
  NEUTRAL = "neutral",
  POSITIVE = "positive",
  NEGATIVE = "negative",
}

export interface Bot {
  getReply: (text: string) => string;
  getSentiment: (text: string) => RobotSentiment;
}
