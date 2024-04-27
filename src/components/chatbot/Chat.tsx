"use client";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { ForwardIcon } from "lucide-react";
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

  const clearTypeahead = () => setTypeahead("");

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
      setUserInput(languageBot.getChatSuggestion(typeahead) || typeahead);
      clearTypeahead();
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

  return (
    <dialog className={visible ? "" : "hidden"}>
      {userMessage && <p className="chat-message user">{userMessage}</p>}
      {botReply && <p className="chat-message">{botReply}</p>}
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
            type="text"
            placeholder={t("placeholder")}
            value={userInput}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            aria-label="Your message"
          />
        </label>
        <button
          className="button icon-button"
          type="submit"
          disabled={!userInput.trim()}
          aria-label="Send message to chatbot"
        >
          <ForwardIcon strokeWidth={2.25} />
        </button>
      </form>
    </dialog>
  );
}

Chat.displayName = "Chat";
