import type { Metadata } from "next";
import { Luckiest_Guy } from "next/font/google";
import "./globals.css";

const inter = Luckiest_Guy({weight: '400', subsets: ['latin']});

export const metadata: Metadata = {
  title: "NextJS Cookie Jar",
  description: "A sandbox for NextJS Cookies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
