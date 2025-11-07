import Background from "@/components/Background";
import { ThemeToggle } from "@/components/ThemeToggle";
import "./globals.css";

type Props = Readonly<{ children: React.ReactNode }>;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <ThemeToggle />
      <Background />
      <body>{children}</body>
    </html>
  );
}
