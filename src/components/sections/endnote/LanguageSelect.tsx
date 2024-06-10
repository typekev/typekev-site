"use client";
import { useRouter } from "next/navigation";
import { GlobeIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { config } from "middleware";

const { locales } = config;

export function LanguageSelect() {
  const t = useTranslations("Locale");
  const router = useRouter();
  const locale = useLocale();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    router.replace(`${e.target.value}${window.location.hash}`);

  return (
    <label>
      <GlobeIcon size="1.5em" strokeWidth={1} />
      <select style={{ width: `${t(locale).length + 3}ch` }} value={locale} onChange={handleChange}>
        {locales.map((l) => (
          <option key={l} value={l}>
            {t(l)}
          </option>
        ))}
      </select>
    </label>
  );
}
