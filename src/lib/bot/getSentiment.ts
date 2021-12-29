import { SentimentAnalyzer, WordTokenizer } from "natural";

import { RobotSentiment } from "types.d";

const wordTokenizer = new WordTokenizer();

interface GetSentiment {
  sentimentAnalyzer: SentimentAnalyzer;
}

export function getSentiment(this: GetSentiment, text: string) {
  const sentimentValue = this.sentimentAnalyzer.getSentiment(
    wordTokenizer.tokenize(text)
  );

  if (sentimentValue > 0) {
    return RobotSentiment.POSITIVE;
  } else if (sentimentValue < 0) {
    return RobotSentiment.NEGATIVE;
  }

  return RobotSentiment.NEUTRAL;
}
