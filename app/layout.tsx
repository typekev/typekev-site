import { Fragment_Mono, Poppins } from "next/font/google";
import { PropsWithChildren } from "react";

import { Analytics } from "@vercel/analytics/react";
import { getLocale } from "next-intl/server";

import { BlackHoleScene } from "@/components/canvas/BlackHoleScene";
import "@/global.css"; // eslint-disable-line import/no-unassigned-import

import { title, description } from "./head";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
const fragmentMono = Fragment_Mono({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-fragment-mono",
});

export const metadata = { title, description };

export default async function RootLayout({ children }: PropsWithChildren) {
  const locale = await getLocale();

  return (
    <html lang={locale} className={`${fragmentMono.variable} ${poppins.variable}`}>
      <head />
      <body id="root">
        <aside className="background-gradient" />
        {children}
        <BlackHoleScene />
        <Analytics />
      </body>
    </html>
  );
}
