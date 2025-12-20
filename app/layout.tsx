import "@/global.css";

import { PropsWithChildren } from "react";
import { Gantari, Ubuntu_Mono } from "next/font/google";
import { getLocale } from "next-intl/server";

import { SpeedInsights } from "@vercel/speed-insights/next";

import { BlackHoleScene } from "@/components/canvas/BlackHoleScene";

import { description, title } from "./head";

const poppins = Gantari({
  weight: ["100", "300", "400", "700", "800"],
  subsets: ["latin"],
  variable: "--font-gantari",
});
const fragmentMono = Ubuntu_Mono({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-ubuntu-mono",
});

export const metadata = { title, description };

export default async function RootLayout({ children }: PropsWithChildren) {
  const locale = await getLocale();

  return (
    <html lang={locale} className={`${fragmentMono.variable} ${poppins.variable}`}>
      <head />
      <body id="root">
        <aside className="shadow-gradient" />
        <aside className="background-gradient" />
        <aside className="background-gradient blur" />
        <aside className="background-gradient blur-2" />
        {children}
        <BlackHoleScene />
        <SpeedInsights />
      </body>
    </html>
  );
}
