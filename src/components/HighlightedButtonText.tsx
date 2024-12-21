import { PropsWithChildren } from "react";

const HighlightedButtonText = ({ children }: PropsWithChildren) => {
  return (
    <>
      <span className="highlighted-text-overlay" aria-hidden="true">
        {children}
      </span>
      <span className="highlighted-button-text" data-text={children}>
        {children}
      </span>
    </>
  );
};

HighlightedButtonText.displayName = "HighlightedButtonText";
export { HighlightedButtonText };
