import Background from "@/components/Background";
import { ThemeToggle } from "@/components/ThemeToggle";
import "./globals.css";

type Props = Readonly<{ children: React.ReactNode }>;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="keving.me" />
      </head>
      <body>
        <ThemeToggle />
        <Background />
        {children}
      </body>
    </html>
  );
}
