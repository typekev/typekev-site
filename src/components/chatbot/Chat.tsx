"use client";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { ForwardIcon } from "lucide-react";
import { bots } from "libs/typekev-bot/bots";
import type { Bot } from "libs/typekev-bot/bots/types";

interface Props {
  hidden: boolean;
}

export function Chat({ hidden }: Props) {
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
            ? `${e.target.value }${suggestion.substring(suggestionIndex + e.target.value.length)}`
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

  return (
    <dialog className={hidden ? "hidden" : ""}>
      {userMessage && <p className="chat-message user">{userMessage}</p>}
      {botReply && <p className="chat-message">{botReply}</p>}
      <form
        className="chat-input"
        onSubmit={(e) => {
          e.preventDefault();
          setUserMessage(userInput);
          setUserInput("");
          clearTypeahead();
          setBotReply(languageBot.getBotReply(userInput) || "");
        }}
      >
        <input className="chat-typeahead" type="text" value={typeahead} disabled />
        <label data-value={typeahead || userInput}>
          <input
            type="text"
            placeholder={t("placeholder")}
            value={userInput}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        </label>
        <button className="button icon-button" type="submit">
          <ForwardIcon strokeWidth={2.5} />
        </button>
      </form>
    </dialog>
  );
}

Chat.displayName = "Chat";
