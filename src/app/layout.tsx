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
  description: "João Arantes | Sr. Frontend Developer Portfolio. View my projects, experience, and technical skills!",
  themeColor: "#262626",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Portfolio",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "João Arantes Portfolio",
    title: "João Arantes | Portfolio",
    description: "João Arantes | Sr. Frontend Developer Portfolio. View my projects, experience, and technical skills!",
  },
  twitter: {
    card: "summary_large_image",
    title: "João Arantes | Portfolio",
    description: "João Arantes | Sr. Frontend Developer Portfolio. View my projects, experience, and technical skills!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Portfolio" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#262626" />
        <meta name="msapplication-tap-highlight" content="no" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      // Check for updates
                      registration.addEventListener('updatefound', function() {
                        // Service worker update found
                      });
                    })
                    .catch(function(error) {
                      // Service worker registration failed
                    });
                });
              }
            `,
          }}
        />
      </head>
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
