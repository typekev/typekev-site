import { BayesClassifier, SentimentAnalyzer, PorterStemmer } from "natural";

import classifier from "./en/classifier.json";
import responses from "./en/responses.json";
import { getReply } from "./getReply";
import { getSentiment } from "./getSentiment";

export const en = {
  getReply: getReply.bind({
    classifier: BayesClassifier.restore(classifier),
    responses,
  }),
  getSentiment: getSentiment.bind({
    sentimentAnalyzer: new SentimentAnalyzer(
      "English",
      PorterStemmer,
      "pattern"
    ),
  }),
};
