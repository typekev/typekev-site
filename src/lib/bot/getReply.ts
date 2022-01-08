import { BayesClassifier } from "natural";

import { Intent, Responses } from "types.d";

const doesIntentExist = (
  intent: string,
  responses: Responses
): intent is Intent => intent in responses;

const getIntent = (
  text: string,
  classifier: BayesClassifier,
  responses: Responses
): keyof typeof responses | undefined => {
  const intent = classifier.classify(text);
  return doesIntentExist(intent, responses) ? intent : undefined;
};

interface GetReply {
  classifier: BayesClassifier;
  responses: Responses;
}

export function getReply(this: GetReply, text: string) {
  const intent = getIntent(text, this.classifier, this.responses);

  const responseOptions = this.responses[intent || "fallback"];
  return responseOptions[Math.floor(Math.random() * responseOptions.length)];
}
