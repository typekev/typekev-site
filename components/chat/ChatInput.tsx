"use client";

import { useCallback, useRef, useState } from "react";

import { SendHorizonal } from "lucide-react";

import { Button } from "@/components/ui/button";

interface Props {
  onSend: (text: string) => void;
  onValueChange?: (text: string) => void;
  suggestion?: string;
  disabled?: boolean;
}

export function ChatInput({ onSend, onValueChange, suggestion, disabled }: Props) {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback(() => {
    const text = value.trim();
    if (!text) return;
    onSend(text);
    setValue("");
  }, [value, onSend]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Tab" && suggestion) {
        e.preventDefault();
        setValue(suggestion);
      }
    },
    [suggestion],
  );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="relative flex items-center gap-2 border-t pt-3"
    >
      <label className="relative flex-1">
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            onValueChange?.(e.target.value);
          }}
          onKeyDown={handleKeyDown}
          placeholder="Ask about Kevin..."
          disabled={disabled}
          className="w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring/50 placeholder:text-muted-foreground disabled:opacity-50"
          autoComplete="off"
        />
        {suggestion && value && suggestion !== value && (
          <output className="pointer-events-none absolute inset-0 flex items-center ml-px px-3 text-sm text-muted-foreground/50 whitespace-pre">
            <data className="invisible" value={value}>
              {value}
            </data>
            <data className="overflow-hidden text-ellipsis" value={suggestion.slice(value.length)}>
              {suggestion.slice(value.length)}
            </data>
          </output>
        )}
      </label>
      <Button
        type="submit"
        variant="secondary"
        className="bg-accent saturate-75 hover:bg-accent hover:saturate-90"
        size="icon"
        disabled={disabled || !value.trim()}
        aria-label="Send message"
      >
        <SendHorizonal className="size-4" />
      </Button>
    </form>
  );
}
