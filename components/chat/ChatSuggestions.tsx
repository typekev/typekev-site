import { Button } from "@/components/ui/button";

interface Props {
  suggestions: string[];
  onSelect: (suggestion: string) => void;
}

export function ChatSuggestions({ suggestions, onSelect }: Props) {
  if (suggestions.length === 0) return null;

  return (
    <menu className="flex flex-wrap gap-1.5">
      {suggestions.map((suggestion) => (
        <li key={suggestion}>
          <Button
            variant="ghost"
            size="sm"
            className="h-auto py-1 px-2.5 text-xs font-normal whitespace-normal text-left border"
            onClick={() => onSelect(suggestion)}
          >
            {suggestion}
          </Button>
        </li>
      ))}
    </menu>
  );
}
