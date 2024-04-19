import { ForwardIcon } from "lucide-react";

interface Props {
  hidden: boolean;
}

export function Chat({ hidden }: Props) {
  return (
    <div className={`chat-box ${hidden ? "hidden" : ""}`}>
      <div>Have a question?</div>
      <div className="chat-input">
        <input type="text" placeholder="Type your message..." />
        <button className="button icon-button">
          <ForwardIcon strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}

Chat.displayName = "Chat";
