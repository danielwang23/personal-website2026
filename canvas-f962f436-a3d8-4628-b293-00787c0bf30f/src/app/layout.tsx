import { TempoInit } from "@/components/tempo-init";
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["300", "400", "500", "700"] });

export const metadata: Metadata = {
  title: "Tempo - Modern SaaS Starter",
  description: "A modern full-stack starter template powered by Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
      </head>
      <Script src="https://api.tempolabs.ai/proxy-asset?url=https://storage.googleapis.com/tempo-public-assets/error-handling.js" />
      <body className={ubuntu.className}>
        {children}
        <TempoInit />
      </body>
    </html>
  );
}
