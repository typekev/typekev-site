"use client";
import { GlobeIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { useHash } from "@/hooks/useHash";
import { routing, useRouter } from "i18n/routing";

import type { Bot } from "libs/typekev-bot/bots/types";

const { locales } = routing;

export function LanguageSelect() {
  const t = useTranslations("Locale");
  const router = useRouter();
  const locale = useLocale() as Bot;
  const hash = useHash();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    router.replace(`/${hash}`, { locale: e.target.value });

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
