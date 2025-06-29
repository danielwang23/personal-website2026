import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["300", "400", "500", "700"] });

export const metadata: Metadata = {
  title: "Daniel Wang Portfolio",
  description: "My portfolio website highlighting strengths, skills, and a little about me",
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

        <Script id="global-error-handler" strategy="beforeInteractive">
          {`
            window.addEventListener('error', event => {
              console.error('Global error caught:', event.error);
              // TODO: send to your logging endpoint, e.g.:
              // fetch('/api/log', { method: 'POST', body: JSON.stringify({ message: event.error.message, stack: event.error.stack }) });
            });

            window.addEventListener('unhandledrejection', event => {
              console.error('Unhandled promise rejection:', event.reason);
              // TODO: send to your logging endpoint similarly
            });
          `}
        </Script>
      </head>

      <body className={ubuntu.className}>
        {children}
      </body>
    </html>
  );
}
