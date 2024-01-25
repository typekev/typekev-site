import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");

  return (
    <header id="about">
      <b className="logo" data-text="K">
        K
      </b>
      <p>
        {t.rich("text", {
          important: (chunks) => (
            <b className="highlighted-text" data-text={chunks}>
              {chunks}
            </b>
          ),
        })}
      </p>
    </header>
  );
}
