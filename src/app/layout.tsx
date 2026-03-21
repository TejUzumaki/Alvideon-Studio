import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
  title: "Alvideon Studio | AI Projects & Creative Portfolio",
  description:
    "Official Alvideon portfolio by TejUzumaki. Explore cinematic websites, AI tools, and creative development projects.",
  keywords: [
    "Alvideon",
    "Alvideon portfolio",
    "Elvidion",
    "TejUzumaki",
    "AI projects",
    "Next.js portfolio",
    "creative developer"
  ],
  authors: [{ name: "TejUzumaki" }],
  icons: {
    icon: "/logo.svg",
  },
  verification: {
    google: "_Br9BwP2QHOr9HCGfuHkKebVLD0IwcfHbEKfCIqLtZI",
  },
  openGraph: {
    title: "Alvideon Studio",
    description:
      "Cinematic portfolio featuring AI-powered projects and modern web experiences.",
    url: "https://alvideon-portfolio.vercel.app",
    siteName: "Alvideon",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alvideon Studio",
    description:
      "Explore modern AI-powered web projects and cinematic design.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
