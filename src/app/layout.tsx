import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { StructuredData } from "./structured-data";
import { getSiteUrl, ownerName, siteDescription, siteName } from "@/lib/seo";
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
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Dicky Bayu Sadewo - Full-Stack AI Engineer & Web3 Engineer",
    template: `%s | ${ownerName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: ownerName, url: getSiteUrl() }],
  creator: ownerName,
  publisher: ownerName,
  keywords: [
    "Dicky Bayu Sadewo",
    "Dicky Bayu",
    "Full-Stack AI Engineer",
    "Web3 Engineer",
    "Next.js Developer",
    "React Developer",
    "Blockchain Developer",
    "Machine Learning Engineer",
    "Software Engineer Indonesia",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "/",
    siteName,
    title: "Dicky Bayu Sadewo - Full-Stack AI Engineer & Web3 Engineer",
    description: siteDescription,
    images: [
      {
        url: "/profiledicky.jpg",
        width: 1200,
        height: 630,
        alt: "Dicky Bayu Sadewo",
      },
    ],
    firstName: "Dicky",
    lastName: "Bayu Sadewo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dicky Bayu Sadewo - Full-Stack AI Engineer & Web3 Engineer",
    description: siteDescription,
    images: ["/profiledicky.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/avataricon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-slate-950 via-slate-900 to-black min-h-screen`}
      >
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
