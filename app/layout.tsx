import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Сервисный центр",
  description: "Сервисный центр в Бишкеке",
  generator: "hexvel.vercel.app",
  icons: {
    icon: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
