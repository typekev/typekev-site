import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");

  return (
    <header id="about">
      <h1 className="logo" data-text="K">
        K
      </h1>
      <p>
        {t.rich("text", {
          regular: (chunks) => <span>{chunks}</span>,
          highlighted: (chunks) => (
            <>
              <strong className="name-transition" data-text={chunks}>
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
