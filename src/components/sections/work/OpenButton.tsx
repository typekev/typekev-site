import { ArrowUpRightIcon } from "lucide-react";

import { Link } from "i18n/routing";

interface Props {
  href: string;
}

export function OpenButton({ href }: Props) {
  return (
    <Link
      href={href}
      className="button icon-button"
      target="_blank"
      aria-label="Navigate to associated workplace's website"
    >
      <ArrowUpRightIcon size="0.875em" strokeWidth={1.25} />
    </Link>
  );
}
