import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");

  return (
    <header id="about">
      <a href="#">
        <h1 className="logo" data-text="K" aria-hidden="true">
          K
        </h1>
      </a>
      <p>
        {t.rich("text", {
          regular: (chunks) => <span>{chunks}</span>,
          highlighted: (chunks) => (
            <>
              <strong className="opening-highlight-transition" data-text={chunks} aria-hidden="true">
                {chunks}
              </strong>
              <strong className="highlighted-text" data-text={chunks}>
                {chunks}
              </strong>
            </>
          ),
        })}
      </p>
    </header>
  );
}
