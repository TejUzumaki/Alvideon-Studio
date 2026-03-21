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
  title: "Alvideon — Cinematic Digital Studio",
  description:
    "Alvideon is a premium digital studio creating cinematic websites, immersive UI, and next-gen digital experiences.",
  keywords: [
    "Alvideon",
    "Cinematic UI",
    "Portfolio",
    "Web Development",
    "3D Website",
    "Digital Studio",
  ],
  authors: [{ name: "Alvideon Team" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Alvideon — Cinematic Digital Studio",
    description:
      "Premium cinematic portfolio with immersive design and modern web technology.",
    url: "https://your-domain.vercel.app",
    siteName: "Alvideon",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alvideon — Cinematic Digital Studio",
    description:
      "Premium cinematic portfolio with immersive design and modern web technology.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
