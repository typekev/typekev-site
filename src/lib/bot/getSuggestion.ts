interface GetSuggestions {
  suggestions: string[];
}
export function getSuggestion(this: GetSuggestions, text: string) {
  return this.suggestions.find(
    (suggestion) =>
      suggestion.toLowerCase().substring(0, text.length) === text.toLowerCase()
  );
}
