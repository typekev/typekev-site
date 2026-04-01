import { Briefcase, Code, ExternalLink, Gamepad2, Mail, Package, Rocket, Send } from "lucide-react";

import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { Button } from "@/components/ui/button";
import type { StructuredResponse } from "@/lib/chat";

type Action = StructuredResponse["actions"][number];

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  mail: Mail,
  "external-link": ExternalLink,
  rocket: Rocket,
  briefcase: Briefcase,
  send: Send,
  code: Code,
  package: Package,
  gamepad: Gamepad2,
};

interface Props {
  actions: Action[];
  onAction?: (action: Action) => void;
}

export function ChatActions({ actions, onAction }: Props) {
  return (
    <menu className="flex flex-wrap gap-2">
      {actions.map((action) => {
        const Icon = action.icon ? iconMap[action.icon] : ExternalLink;
        const variant = action.priority === "primary" ? "glass-tinted" : "outline";

        if (action.type === "internal") {
          return (
            <li key={action.label}>
              <Button variant={variant} size="sm" onClick={() => onAction?.(action)}>
                {Icon && <Icon className="size-3.5" />}
                {action.label}
              </Button>
            </li>
          );
        }

        return (
          <li key={action.label}>
            <Button asChild variant={variant} size="sm">
              <a
                href={action.payload}
                target={action.type === "email" ? "_self" : "_blank"}
                rel={action.type === "link" ? "noopener noreferrer" : undefined}
                onClick={() => onAction?.(action)}
              >
                {Icon && <Icon className="size-3.5" />}
                {action.label}
              </a>
            </Button>
          </li>
        );
      })}
    </menu>
  );
}
