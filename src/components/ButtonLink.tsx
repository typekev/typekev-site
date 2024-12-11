import { forwardRef } from "react";

import { Link, LinkProps } from "i18n/routing";

const ButtonLink = forwardRef<HTMLAnchorElement, LinkProps>(({ children, ...props }, ref) => {
  return (
    <Link ref={ref} {...props} className="button" role="button" scroll={false} replace>
      <span>{children}</span>
    </Link>
  );
});

ButtonLink.displayName = "ButtonLink";
export { ButtonLink };
