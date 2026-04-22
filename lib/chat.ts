import { injectActions } from "../typekev-bot/src/actions/injectActions";
import { en } from "../typekev-bot/src/bots/client";
import { persistentSuggestions } from "../typekev-bot/src/config/intentActions";

export type {
  Action,
  ActionType,
  ContentSection,
  StructuredResponse,
} from "../typekev-bot/src/types";

export function getBotResponse(text: string) {
  const response = en.getBotReply(text);

  if (response) return response;

  return injectActions(
    "fallback",
    "I'm sorry, I don't quite understand. Could you try rephrasing?",
  );
}

export function getSuggestion(text: string): string | undefined {
  return en.getChatSuggestion(text);
}

export function getGreeting() {
  return injectActions(
    "smalltalk.greetings.hello",
    "Hi! I'm Kevin AI. Ask me about Kevin's work and ventures.",
  );
}

export { persistentSuggestions };
