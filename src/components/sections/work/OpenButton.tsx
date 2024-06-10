import { ArrowUpRightIcon } from "lucide-react";

interface Props {
  href: string;
}

export function OpenButton({ href }: Props) {
  return (
    <a href={href} className="button icon-button" aria-label="Navigate to associated workplace's website">
      <ArrowUpRightIcon size="0.875em" strokeWidth={1.5} />
    </a>
  );
}
