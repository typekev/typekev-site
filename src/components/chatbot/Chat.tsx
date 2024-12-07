"use client";
import { useEffect, useMemo, useRef, useState, useCallback } from "react";

import { ForwardIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Keyboard, { Cursor } from "react-mk";

import { useHash } from "@/hooks/useHash";
import { bots } from "libs/typekev-bot/bots";

import type { Bot } from "libs/typekev-bot/bots/types";

interface Props {
  visible: boolean;
  toggleChat: (visible?: boolean) => void;
}

export function Chat({ toggleChat, visible }: Props) {
  const t = useTranslations("Bot");
  const locale = useLocale() as Bot;
  const hash = useHash();
  const [userInput, setUserInput] = useState("");
  const [typeahead, setTypeahead] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [botReply, setBotReply] = useState(t("prompt"));

  const languageBot = bots[locale];
  const inputRef = useRef<HTMLInputElement>(null);

  const clearTypeahead = useCallback(() => setTypeahead(""), []);

  const acceptTypeahead = useCallback(() => {
    if (typeahead) {
      setUserInput(languageBot.getChatSuggestion(typeahead) || typeahead);
      clearTypeahead();
    }
  }, [typeahead, languageBot, clearTypeahead]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const input = e.target.value;
      setUserInput(input);
      if (input.length > 5) {
        const suggestion = languageBot.getChatSuggestion(input);
        if (suggestion) {
          const suggestionIndex = suggestion.toLowerCase().indexOf(input.toLowerCase());
          setTypeahead(suggestionIndex !== -1 ? `${input}${suggestion.substring(suggestionIndex + input.length)}` : "");
        } else {
          clearTypeahead();
        }
      } else {
        clearTypeahead();
      }
    },
    [languageBot, clearTypeahead],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (typeahead && e.key === "Tab") {
        e.preventDefault();
        acceptTypeahead();
      }
    },
    [typeahead, acceptTypeahead],
  );

  useEffect(() => {
    const handleHashChange = () => {
      if (hash.startsWith("#work-")) {
        toggleChat(true);
        const workplace = hash.substring(6);
        const query = languageBot.getChatSuggestion(workplace) || workplace;
        setUserMessage(query);
        setBotReply(languageBot.getBotReply(query) || workplace);
        inputRef.current?.focus();
      }
    };

    handleHashChange();
    addEventListener("hashchange", handleHashChange);

    return () => {
      removeEventListener("hashchange", handleHashChange);
    };
  }, [hash, toggleChat, languageBot]);

  useEffect(() => {
    if (visible) inputRef.current?.focus();
  }, [visible]);

  const keyboard = useMemo(
    () => (
      <>
        <Keyboard key={`${userMessage}${botReply}-keyboard`} keyPressDelayRange={[0, 15]}>
          {botReply}
        </Keyboard>
        <Cursor key={`${userMessage}${botReply}-cursor`} id="cursor">
          <span className="block" style={{ animationDelay: `${botReply.length * 20}ms` }}>
            █
          </span>
        </Cursor>
      </>
    ),
    [botReply, userMessage],
  );

  return (
    <dialog className={visible ? "" : "hidden"}>
      {userMessage && <p className="chat-message user">{userMessage}</p>}
      {botReply && (
        <p className="chat-message bot">
          <span className="chat-message-text">{keyboard}</span>
          <span className="chat-message-spacer">{botReply}</span>
        </p>
      )}
      <form
        className="chat-input"
        onSubmit={(e) => {
          e.preventDefault();
          if (userInput.trim()) {
            setUserMessage(userInput);
            setUserInput("");
            clearTypeahead();
            setBotReply(languageBot.getBotReply(userInput) || "");
          }
        }}
      >
        <label aria-disabled className="chat-typeahead">
          <input type="text" value={typeahead} disabled aria-label="Disabled typeahead input" />
        </label>
        <label data-value={typeahead || userInput}>
          <input
            ref={inputRef}
            type="text"
            placeholder={t("placeholder")}
            data-typeahead={typeahead ? "true" : "false"}
            value={userInput}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onClick={acceptTypeahead}
            aria-label="Your message"
            autoFocus={visible}
          />
        </label>
        <button
          className="button icon-button"
          type="submit"
          disabled={!userInput.trim()}
          aria-label="Send message to chatbot"
        >
          <ForwardIcon strokeWidth={2} />
        </button>
      </form>
    </dialog>
  );
}
