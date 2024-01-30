import { BotIcon } from "lucide-react";

export function Bot() {
  return (
    <button id="bot" className="button icon-button">
      <BotIcon strokeWidth={2.5} />
    </button>
  );
}

Bot.displayName = "Bot";
