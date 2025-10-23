import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeColorUpdater from "../components/ThemeColorUpdater";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mizan Ali Khan | Full Stack Developer",
  description: "Portfolio of Mizan Ali Khan - Full Stack Developer",
  metadataBase: new URL("https://mizan-portfolio-navy.vercel.app/"),
  openGraph: {
    title: "Mizan Ali Khan | Full Stack Developer",
    description: "Explore the work and projects of Mizan Ali Khan",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mizan Ali Khan | Full Stack Developer",
    description: "Explore the work and projects of Mizan Ali Khan",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000000" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeColorUpdater />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
