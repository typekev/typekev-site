import { AnchorHTMLAttributes, forwardRef } from "react";

export const AnchorButton = forwardRef<HTMLAnchorElement, AnchorHTMLAttributes<HTMLAnchorElement>>(
  ({ children, ...props }, ref) => {
    return (
      <a ref={ref} {...props} className="button highlighted-button">
        <span data-text={children}>{children}</span>
      </a>
    );
  },
);

AnchorButton.displayName = "AnchorButton";
