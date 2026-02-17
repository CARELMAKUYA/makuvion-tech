import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Makuvion Technologies | AI-Driven Innovation for Africa",
  description:
    "Makuvion Technologies builds AI-powered digital systems that help businesses scale, automate, and compete globally — while empowering the next generation of African tech talent.",
  keywords: [
    "AI",
    "machine learning",
    "software development",
    "Africa",
    "automation",
    "digital transformation",
    "South Africa",
    "AI chatbots",
    "web applications",
    "custom software",
  ],
  authors: [{ name: "Makuvion Technologies (Pty) Ltd" }],
  openGraph: {
    title: "Makuvion Technologies | Engineering Africa's Intelligent Future",
    description:
      "AI-powered digital systems that help businesses scale, automate, and compete globally.",
    type: "website",
    locale: "en_ZA",
    siteName: "Makuvion Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Makuvion Technologies | Engineering Africa's Intelligent Future",
    description:
      "AI-powered digital systems that help businesses scale, automate, and compete globally.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
