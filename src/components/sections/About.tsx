import localFont from "next/font/local";

import { useTranslations } from "next-intl";

const nasaDings = localFont({ src: "./about/nasadings.ttf" });

export default function About() {
  const t = useTranslations("About");

  return (
    <section>
      <b className={`${nasaDings.className} logo`} data-text="K">
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
