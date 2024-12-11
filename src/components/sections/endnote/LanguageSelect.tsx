"use client";
import { useSearchParams } from "next/navigation";
import { useTransition } from "react";

import { GlobeIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { routing, useRouter, usePathname } from "i18n/routing";

import type { Bot } from "libs/typekev-bot/bots/types";

const { locales } = routing;

export function LanguageSelect() {
  const t = useTranslations("Locale");
  const locale = useLocale() as Bot;
  const pathname = usePathname();
  const params = useSearchParams();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    startTransition(() => {
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      router.replace({ pathname, params }, { locale: e.target.value, scroll: false });
    });
  };

  return (
    <label>
      <GlobeIcon size="1.875em" strokeWidth={1} />
      <select
        style={{ width: `${t(locale).length + 3}ch` }}
        value={locale}
        onChange={handleChange}
        aria-label="Translations menu"
        disabled={isPending}
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
