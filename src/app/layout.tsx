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
  title: "That Guy Hauling | Junk Hauling in Chula Vista, CA",
  description:
    "Reliable, affordable junk removal and hauling services in Chula Vista and South Bay San Diego. Same-day service available. Call That Guy Hauling today!",
  keywords: [
    "junk hauling Chula Vista",
    "junk removal Chula Vista",
    "trash removal San Diego",
    "furniture removal",
    "appliance hauling",
    "construction debris",
  ],
  openGraph: {
    title: "That Guy Hauling | Junk Hauling Chula Vista",
    description:
      "Local junk hauling you can trust. Fast, fair, and friendly service in Chula Vista, CA.",
    type: "website",
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
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
