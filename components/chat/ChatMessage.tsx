import type { StructuredResponse } from "@/lib/chat";
import { cn } from "@/lib/utils";

import { ChatActions } from "./ChatActions";

export type ChatMessageData =
  | { role: "user"; text: string }
  | { role: "bot"; response: StructuredResponse };

interface Props {
  message: ChatMessageData;
  onAction?: (action: StructuredResponse["actions"][number]) => void;
}

export function ChatMessage({ message, onAction }: Props) {
  if (message.role === "user") {
    return (
      <li className="flex justify-end">
        <p className="max-w-[80%] rounded-2xl rounded-br-sm bg-primary px-4 py-2 text-primary-foreground text-sm">
          {message.text}
        </p>
      </li>
    );
  }

  const { response } = message;

  return (
    <li className="flex justify-start">
      <article className="max-w-[85%] space-y-3">
        <section className="rounded-2xl rounded-bl-sm bg-muted px-4 py-3 text-sm">
          {response.content.map((section, i) => (
            <section key={i}>
              {section.title && (
                <p className="font-semibold mb-1">{section.title}</p>
              )}
              <p className={cn(i > 0 && "mt-2")}>{section.text}</p>
            </section>
          ))}
        </section>
        {response.actions.length > 0 && (
          <ChatActions actions={response.actions} onAction={onAction} />
        )}
      </article>
    </li>
  );
}
