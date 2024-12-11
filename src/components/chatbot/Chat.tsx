"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

import { ForwardIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Keyboard, { Cursor } from "react-mk";

import { useRouter } from "i18n/routing";
import { bots } from "libs/typekev-bot/bots";

import type { Bot } from "libs/typekev-bot/bots/types";

export function Chat() {
  const t = useTranslations("Bot");
  const router = useRouter();
  const [botReply, setBotReply] = useState("");
  const [typeahead, setTypeahead] = useState("");
  const [userInput, setUserInput] = useState("");

  const locale = useLocale() as Bot;
  const languageBot = bots[locale];

  const params = useSearchParams();
  const chatParam = useMemo(() => params.get("chat"), [params]);
  const chatting = chatParam !== null;
  const userMessage = decodeURIComponent(chatParam || "");

  const clearTypeahead = () => setTypeahead("");
  const acceptTypeahead = () => {
    if (typeahead) {
      setUserInput(languageBot.getChatSuggestion(typeahead) || typeahead);
      clearTypeahead();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setUserInput(input);

    const suggestion = input.length > 4 ? languageBot.getChatSuggestion(input) : "";
    if (suggestion) {
      const suggestionIndex = suggestion.toLowerCase().indexOf(input.toLowerCase());
      setTypeahead(suggestionIndex !== -1 ? `${input}${suggestion.substring(suggestionIndex + input.length)}` : "");
    } else {
      clearTypeahead();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (typeahead && e.key === "Tab") {
      e.preventDefault();
      acceptTypeahead();
    }
  };

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (chatting) {
      inputRef.current?.focus();
      setBotReply(userMessage ? languageBot.getBotReply(userMessage) || "?" : t("prompt"));
    } else {
      setBotReply(languageBot.getBotReply(t("goodbye")) || "...");
    }
  }, [userMessage, chatting, t, languageBot]);

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

  console.log(chatting, userMessage, params.get("chat"));

  return (
    <dialog className={chatting ? "" : "hidden"}>
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
            router.push(`?chat=${encodeURIComponent(userInput)}`, { scroll: false });
            setUserInput("");
            clearTypeahead();
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
            autoFocus={params.get("chat") !== null}
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
