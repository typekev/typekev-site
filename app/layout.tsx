import { Fragment_Mono, Poppins } from "next/font/google";
import { PropsWithChildren } from "react";

import { Analytics } from "@vercel/analytics/react";

import { BlackHole } from "@/components/canvas/BlackHole";
import Scene from "@/components/canvas/Scene";
import { Common, View } from "@/components/canvas/View";
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

export default async function Layout({ children }: PropsWithChildren) {
  return (
    <html className={`${fragmentMono.variable} ${poppins.variable}`}>
      <head />
      <body id="root">
        <aside className="background-gradient" />
        {children}
        <Scene />
        <View orbit className="black-hole">
          <BlackHole />
          <Common />
        </View>
        <Analytics />
      </body>
    </html>
  );
}
