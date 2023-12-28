import dynamic from "next/dynamic";
import { Poppins } from "next/font/google";
import { notFound } from "next/navigation";
import { PropsWithChildren } from "react";

import { NextIntlClientProvider, useLocale } from "next-intl";

import "@/global.css"; // eslint-disable-line import/no-unassigned-import

const Scene = dynamic(() => import("@/components/canvas/Scene"), { ssr: false });

const poppins = Poppins({ weight: ["600", "800"], subsets: ["latin"] });

export const metadata = {
  title: "Kevin Gonzalez | Software Engineer",
  description: "The personal website of Kevin Gonzalez.",
};

interface Props {
  params: { locale: string };
}

export default async function Layout({ children, params }: PropsWithChildren<Props>) {
  let messages;
  try {
    messages = (await import(`../../messages/${params.locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  const locale = useLocale();

  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale} className={poppins.className}>
      <head />
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Scene />
      </body>
    </html>
  );
}
