import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";

import Background from "@/components/Background";
import { ThemeToggle } from "@/components/ThemeToggle";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

type Props = Readonly<{ children: React.ReactNode }>;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="keving.me" />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased mx-auto max-w-7xl px-6 py-16 md:py-24 lg:py-12 lg:grid lg:grid-cols-2 lg:gap-16 relative`}
      >
        <ThemeToggle />
        <Background />
        {children}
      </body>
    </html>
  );
}
