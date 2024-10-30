import { AnchorHTMLAttributes, forwardRef } from "react";

const AnchorButton = forwardRef<HTMLAnchorElement, AnchorHTMLAttributes<HTMLAnchorElement>>(
  ({ children, ...props }, ref) => {
    return (
      <a ref={ref} {...props} className="button">
        <span className="opening-highlight-transition" data-text={children}>
          {children}
        </span>
        <span className="highlighted-button-text" data-text={children}>
          {children}
        </span>
      </a>
    );
  },
);

AnchorButton.displayName = "AnchorButton";
export { AnchorButton };
