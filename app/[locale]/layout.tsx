import { Fragment_Mono, Poppins } from "next/font/google";
import { PropsWithChildren } from "react";

import { Analytics } from "@vercel/analytics/react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import Scene from "@/components/canvas/Scene";
import "@/global.css"; // eslint-disable-line import/no-unassigned-import

import { title, description } from "./head";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
const fragmentMono = Fragment_Mono({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-fragment-mono",
});

export const metadata = { title, description };

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function Layout({ children, params }: PropsWithChildren<Props>) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${fragmentMono.variable} ${poppins.variable}`}>
      <head />
      <body id="root">
        <aside className="background-gradient" />
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
        <Scene />
        <Analytics />
      </body>
    </html>
  );
}
