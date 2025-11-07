import Background from "@/components/Background";
import { ThemeToggle } from "@/components/ThemeToggle";
import "./globals.css";

type Props = Readonly<{ children: React.ReactNode }>;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <ThemeToggle />
        <Background />
        {children}
      </body>
    </html>
  );
}
