import { AnchorHTMLAttributes, forwardRef } from "react";

export const ListItemLink = forwardRef<HTMLAnchorElement, AnchorHTMLAttributes<HTMLAnchorElement>>(
  ({ children, ...props }, ref) => {
    return (
      <a ref={ref} {...props} className="list-item">
        <span>
          <span data-text={children}>{children}</span>
        </span>
      </a>
    );
  },
);

ListItemLink.displayName = "ListItemLink";
