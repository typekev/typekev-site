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
  const [chatHeader, setChatHeader] = useState(t("prompt"));
  const [userInput, setUserInput] = useState("");
  const [typeahead, setTypeahead] = useState("");
  const [botReply, setBotReply] = useState("");

  const languageBot = bots[locale];

  const clearTypeahead = () => setTypeahead("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
    if (e.target.value.length > 5) {
      const typeahead = languageBot.getChatSuggestion(e.target.value);
      setTypeahead(typeahead ? `${e.target.value}${typeahead.substring(e.target.value.length)}` : "");
    } else if (typeahead) {
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
    <form
      className={`chat-box ${hidden ? "hidden" : ""}`}
      onSubmit={(e) => {
        e.preventDefault();
        setChatHeader(userInput);
        setUserInput("");
        clearTypeahead();
        setBotReply(languageBot.getBotReply(userInput) || "");
      }}
    >
      <span>{chatHeader}</span>
      <small>{botReply}</small>
      <div className="chat-input">
        <input className="chat-typeahead" type="text" value={typeahead} disabled />
        <input
          type="text"
          placeholder={t("placeholder")}
          value={userInput}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button className="button icon-button" type="submit">
          <ForwardIcon strokeWidth={2.5} />
        </button>
      </div>
    </form>
  );
}

Chat.displayName = "Chat";
