import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/navbar";
import { JetBrains_Mono, Open_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "João Arantes | Portfolio",
  description: "João Arantes | Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${openSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
