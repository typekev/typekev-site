import "./globals.css";

import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { SpeedInsights } from "@vercel/speed-insights/next";

import Background from "@/components/Background";
import Toggles from "@/components/Toggles";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Kevin Gonzalez – AI Product & Engineering Leader",
  description:
    "Engineering leader empowering high-impact teams to build AI products. Co-founder & CTO of Symphonee. Founder of Scale Tiny. Satellite yield & AI at SES.",
};

type Props = Readonly<{ children: React.ReactNode }>;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="keving.me" />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased relative flex flex-col gap-20 lg:grid lg:grid-cols-2 max-w-7xl mx-auto! px-6! py-16! md:py-24! lg:py-12!`}
      >
        <Toggles />
        <Background />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
