"use client";
import { useEffect, useMemo, useRef, useState } from "react";

import { ForwardIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Keyboard, { Cursor } from "react-mk";

import { bots } from "libs/typekev-bot/bots";

import type { Bot } from "libs/typekev-bot/bots/types";

interface Props {
  visible: boolean;
  toggleChat: (visible?: boolean) => void;
}

export function Chat({ toggleChat, visible }: Props) {
  const t = useTranslations("Bot");
  const locale = useLocale() as Bot;
  const [userInput, setUserInput] = useState("");
  const [typeahead, setTypeahead] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [botReply, setBotReply] = useState(t("prompt"));

  const languageBot = bots[locale];

  const inputRef = useRef<HTMLInputElement>(null);

  const clearTypeahead = () => setTypeahead("");
  const acceptTypeahead = () => {
    if (typeahead) {
      setUserInput(languageBot.getChatSuggestion(typeahead) || typeahead);
      clearTypeahead();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
    if (e.target.value.length > 5) {
      const suggestion = languageBot.getChatSuggestion(e.target.value);
      if (suggestion) {
        const suggestionIndex = suggestion.toLowerCase().indexOf(e.target.value.toLowerCase());
        setTypeahead(
          suggestionIndex !== -1
            ? `${e.target.value}${suggestion.substring(suggestionIndex + e.target.value.length)}`
            : "",
        );
      }
    } else {
      clearTypeahead();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (typeahead && e.key === "Tab") {
      e.preventDefault();
      e.stopPropagation();
      acceptTypeahead();
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash.startsWith("#work-")) {
        toggleChat(true);
        const workplace = window.location.hash.substring(6);
        const query = languageBot.getChatSuggestion(workplace) || workplace;
        setUserMessage(query);
        setBotReply(languageBot.getBotReply(query) || workplace);
        inputRef.current?.focus();
      }
    };

    addEventListener("hashchange", handleHashChange);
    if (window.location.hash.startsWith("#work-")) {
      document.getElementById(window.location.hash.substring(1))?.click();
      setTimeout(() => handleHashChange(), 1000);
    }

    return () => {
      removeEventListener("hashchange", handleHashChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (visible) inputRef.current?.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
