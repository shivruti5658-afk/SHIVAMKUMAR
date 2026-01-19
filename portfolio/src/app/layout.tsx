import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shivam Kumar – Digital Products & Development Studio",
  description:
    "Building High-Performance Web & Mobile Products. Premium app development and web development services for startups, businesses, and agencies.",
  keywords:
    "web development, mobile app development, UI/UX design, backend development, AI integration, React, Next.js, Node.js",
  authors: [{ name: "Shivam Kumar" }],
  creator: "Shivam Kumar",
  publisher: "Shivam Kumar",
  verification: {
    google: "ocAI_Q-rloDT1Wm2yHxROegupocBzMrq63YgobpNaQc",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://shivamkumar.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Shivam Kumar – Digital Products & Development Studio",
    description:
      "Building High-Performance Web & Mobile Products. Premium app development and web development services for startups, businesses, and agencies.",
    url: "https://shivamkumar.dev",
    siteName: "Shivam Kumar Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shivam Kumar - Digital Products & Development Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivam Kumar – Digital Products & Development Studio",
    description:
      "Building High-Performance Web & Mobile Products. Premium app development and web development services for startups, businesses, and agencies.",
    images: ["/og-image.jpg"],
    creator: "@shivamkumar_dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        data-theme="dark"
      >
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
