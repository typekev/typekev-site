import { BotIcon } from "lucide-react";

interface Props {
  active: boolean;
  toggleChat: (hide?: boolean) => void;
}

export function Bot({ active, toggleChat }: Props) {
  return (
    <button
      className={`button icon-button ${active ? "active" : ""}`}
      onClick={() => toggleChat()}
      aria-label={`${active ? "Hide" : "Show"} chat box`}
    >
      <BotIcon strokeWidth={2.25} />
    </button>
  );
}
