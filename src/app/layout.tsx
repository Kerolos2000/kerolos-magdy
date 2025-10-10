import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FloatingAppBar, SmoothScroll } from "src/components";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter-sans",
});

export const metadata: Metadata = {
  title: "Kerolos Magdy",
  description: "Kerolos Magdy Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased mb-14 sm:mb-28`}>
        {children}
        <SmoothScroll />
        <FloatingAppBar />
      </body>
    </html>
  );
}
