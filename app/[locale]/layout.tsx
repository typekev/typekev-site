import { PropsWithChildren } from "react";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import "@/global.css"; // eslint-disable-line import/no-unassigned-import

import { title, description } from "../head";

export const metadata = { title, description };

export default async function Layout({ children }: PropsWithChildren) {
  const messages = await getMessages();

  return <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>;
}
