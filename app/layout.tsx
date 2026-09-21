import "./globals.css";

import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

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
  title: "Kevin Gonzalez | Technical Program Manager & Engineering Leader",
  description:
    "Luxembourg-based engineering leader and technical program manager. Founder of Symphonee AI and Scale Tiny, currently driving satellite yield and AI software programs at SES.",
  icons: {
    icon: [
      {
        url: "/favicons/keving-light.png",
        type: "image/png",
        sizes: "1024x1024",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicons/keving-dark.png",
        type: "image/png",
        sizes: "1024x1024",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
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
        className={`${geist.variable} ${geistMono.variable} relative mx-auto! flex max-w-7xl flex-col gap-20 px-6! py-16! antialiased md:py-24! lg:grid lg:grid-cols-2 lg:py-12!`}
      >
        <Toggles />
        <Background />
        {children}
        <SpeedInsights />
      </body>
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
    </html>
  );
}
