import dynamic from "next/dynamic";
import { Fragment_Mono, Poppins } from "next/font/google";
import { PropsWithChildren } from "react";

import { Analytics } from "@vercel/analytics/react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import "@/global.css"; // eslint-disable-line import/no-unassigned-import

import { title, description } from "./head";

const Scene = dynamic(() => import("@/components/canvas/Scene"), { ssr: false });

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
  params: { locale: string };
}

export default async function Layout({ children, params: { locale } }: PropsWithChildren<Props>) {
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
