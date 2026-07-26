import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Bibin — Search, Build & Automation Studio",
    template: "%s | Bibin",
  },
  description:
  "A multidisciplinary digital studio helping businesses grow through search, digital products, automation and performance.",
  keywords: [
    "SEO",
    "SEO Consultant",
    "Web Development",
    "n8n Automation",
    "AI Automation",
    "Product Development",
    "Digital Studio",
  ],
  authors: [{ name: "Bibin" }],
  creator: "Bibin",
  openGraph: {
    title: "Bibin — Search, Build & Automation Studio",
    description:
      "We help businesses get found, build better digital experiences and automate repetitive work.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bibin — Search, Build & Automation Studio",
    description:
      "Search. Build. Automate. Digital systems designed for growth.",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
