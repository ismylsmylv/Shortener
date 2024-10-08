import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Credits from "@/components/credits/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shortener",
  description: "Fast & ad-free URL shortener",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Credits />
      </body>
    </html>
  );
}
