"use client";
import { GlobeIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { routing, useRouter } from "i18n/routing";

const { locales } = routing;

export function LanguageSelect() {
  const t = useTranslations("Locale");
  const router = useRouter();
  const locale = useLocale();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    router.replace(`/${window.location.hash}`, { locale: e.target.value });

  return (
    <label>
      <GlobeIcon size="1.5em" strokeWidth={1} />
      <select
        style={{ width: `${t(locale).length + 3}ch` }}
        value={locale}
        onChange={handleChange}
        aria-label="Translations menu"
      >
        {locales.map((l) => (
          <option key={l} value={l}>
            {t(l)}
          </option>
        ))}
      </select>
    </label>
  );
}
