import "./globals.css";

import { Metadata } from "next";
import { Geist, Geist_Mono, Lemonada } from "next/font/google";
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

const lemonada = Lemonada({
  subsets: ["latin"],
  variable: "--font-lemonada",
});

export const metadata: Metadata = {
  title: "Kevin Gonzalez | Software Career Coach & Engineering Leader",
  description:
    "I help software engineers build global careers, turn ideas into products, and lead engineering teams. Founder of Symphonee AI and Scale Tiny.",
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
        className={`${geist.variable} ${geistMono.variable} ${lemonada.variable} relative mx-auto! flex min-h-dvh max-w-7xl flex-col gap-20 px-6! py-24! font-sans antialiased lg:grid lg:grid-cols-2 lg:py-12!`}
      >
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Toggles />
        <Background />
        {children}
        <SpeedInsights />
      </body>
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
    </html>
  );
}
