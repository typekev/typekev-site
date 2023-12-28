import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");

  return (
    <section>
      <b className="logo" data-text="K">
        K
      </b>
      <span>
        {t.rich("text", {
          important: (chunks) => (
            <b className="highlighted-text" data-text={chunks}>
              {chunks}
            </b>
          ),
        })}
      </span>
    </section>
  );
}
