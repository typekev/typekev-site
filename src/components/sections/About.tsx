import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");

  return (
    <header id="about">
      <a href="#" aria-label="Typekev logo">
        <h1 className="logo" data-text="K" aria-hidden="true">
          K
        </h1>
      </a>
      <p>
        {t.rich("text", {
          regular: (chunks) => <span>{chunks}</span>,
          highlighted: (chunks) => (
            <strong>
              <span className="opening-highlight-transition" data-text={chunks} aria-hidden="true">
                {chunks}
              </span>
              <span className="highlighted-text" data-text={chunks}>
                {chunks}
              </span>
            </strong>
          ),
        })}
      </p>
    </header>
  );
}
