import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WebCircuit | High-Performance Web Solutions",
  description: "Engineering the fastest web experiences for modern founders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#020203] text-slate-50 min-h-screen flex flex-col`}
      >
        {/* Persistent Navigation */}
        <Navbar />
        
        {/* Main Content Area */}
        {/* flex-grow ensures the footer stays at the bottom on short pages */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Persistent Footer */}
        <Footer />
      </body>
    </html>
  );
}