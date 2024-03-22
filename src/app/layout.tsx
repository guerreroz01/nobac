import type { Metadata } from "next";
import { Inter, Niconne } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const niconne = Niconne({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nobac",
  description: "Nobaccare by DENTOK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" type="image/svg+xml" href="/assets/logo.svg" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
