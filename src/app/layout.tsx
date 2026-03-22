import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

// Import Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata for SEO, Google, Open Graph, Twitter Cards
export const metadata: Metadata = {
  title: "ALVIDEON",
  description:
    "Official ALVIDEON portfolio by TejUzumaki. Explore AI-powered projects, cinematic websites, and creative development.",
  keywords: [
    "ALVIDEON",
    "ALVIDEON portfolio",
    "TejUzumaki",
    "AI projects",
    "Next.js portfolio",
    "creative developer",
  ],
  authors: [{ name: "TejUzumaki" }],
  icons: {
    icon: "/logo.svg",
  },
  verification: {
    google: "_Br9BwP2QHOr9HCGfuHkKebVLD0IwcfHbEKfCIqLtZI",
  },
  openGraph: {
    title: "ALVIDEON",
    description:
      "Cinematic portfolio featuring AI-powered projects and modern web experiences.",
    url: "https://alvideon-portfolio.vercel.app",
    siteName: "ALVIDEON",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ALVIDEON",
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head />
      <body className="bg-white text-black">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
