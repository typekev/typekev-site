import { PropsWithChildren } from "react";

import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";

import "@/global.css"; // eslint-disable-line import/no-unassigned-import
import { routing } from "i18n/routing";

import { title, description } from "../head";

export const metadata = { title, description };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function Layout({ children, params }: PropsWithChildren<Props>) {
  const { locale } = await params;
  setRequestLocale(locale);

  const messages = await getMessages();
  return <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>;
}
