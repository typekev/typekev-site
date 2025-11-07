import Background from "@/components/Background";
import "./globals.css";

type Props = Readonly<{ children: React.ReactNode }>;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <Background />
      <body>{children}</body>
    </html>
  );
}
