import { useTranslations } from "next-intl";

import { SectionLink } from "@/components/SectionLink";

export default function About() {
  const t = useTranslations("About");

  return (
    <header id="about">
      <SectionLink href="/about" aria-label="Typekev logo" scroll={false} replace>
        <h1 className="logo" data-text="K" role="presentation">
          K
        </h1>
      </SectionLink>
      <p>
        {t.rich("text", {
          regular: (chunks) => <span>{chunks}</span>,
          highlighted: (chunks) => (
            <strong>
              <span className="highlighted-text-overlay" aria-hidden="true">
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
