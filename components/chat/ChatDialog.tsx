"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { BotMessageSquare } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { StructuredResponse } from "@/lib/chat";
import { getBotResponse, getGreeting, getSuggestion } from "@/lib/chat";

import { ChatInput } from "./ChatInput";
import type { ChatMessageData } from "./ChatMessage";
import { ChatMessage } from "./ChatMessage";
import { ChatSuggestions } from "./ChatSuggestions";

export function ChatDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessageData[]>(() => {
    const greeting = getGreeting();
    return [{ role: "bot", response: greeting }];
  });
  const [currentSuggestions, setCurrentSuggestions] = useState<string[]>(
    () => getGreeting().suggestions,
  );
  const [inputSuggestion, setInputSuggestion] = useState<string | undefined>();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = useCallback((text: string) => {
    const userMessage: ChatMessageData = { role: "user", text, timestamp: Date.now() };
    setMessages((prev) => [...prev, userMessage]);

    const response = getBotResponse(text);
    const botMessage: ChatMessageData = { role: "bot", response };
    setMessages((prev) => [...prev, botMessage]);
    setCurrentSuggestions(response.suggestions);
    setInputSuggestion(undefined);
  }, []);

  const handleAction = useCallback((action: StructuredResponse["actions"][number]) => {
    if (action.type === "internal") {
      setIsOpen(false);
      const el = document.querySelector(action.payload);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleInputChange = useCallback((text: string) => {
    if (text.trim().length > 2) {
      setInputSuggestion(getSuggestion(text) ?? undefined);
    } else {
      setInputSuggestion(undefined);
    }
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="glass-tinted"
          size="lg-icon"
          className="sm:size-13.5 saturate-75 dark:saturate-125 hover:saturate-100"
          aria-label="Open chat"
        >
          <BotMessageSquare className="size-6.5 sm:size-7.5 text-accent brightness-75 dark:brightness-125"  />
        </Button>
      </DialogTrigger>
      <DialogContent className="flex h-[min(600px,80vh)] flex-col gap-0 p-0 sm:max-w-md">
        <DialogHeader className="border-b px-4 py-3">
          <DialogTitle className="text-base">Chat with Kevin&apos;s AI</DialogTitle>
        </DialogHeader>
        <section ref={scrollRef} className="flex-1 overflow-y-auto space-y-4 px-4 py-4">
          <ol className="space-y-4">
            {messages.map((msg, i) => (
              <ChatMessage key={i} message={msg} onAction={handleAction} />
            ))}
          </ol>
          {currentSuggestions.length > 0 && (
            <ChatSuggestions suggestions={currentSuggestions} onSelect={sendMessage} />
          )}
        </section>
        <footer className="px-4 pb-4">
          <ChatInput
            onSend={sendMessage}
            onValueChange={handleInputChange}
            suggestion={inputSuggestion}
          />
        </footer>
      </DialogContent>
    </Dialog>
  );
}
