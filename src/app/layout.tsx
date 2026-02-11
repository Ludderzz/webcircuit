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
  title: {
    default: "WebCircuitUK | Web Design Clevedon | Software Engineering North Somerset",
    template: "%s | WebCircuitUK"
  },
  description: "WebCircuitUK: Leading web design agency in Clevedon. Specializing in high-performance Next.js websites, custom software engineering, and SEO for businesses in North Somerset, Bristol, Portishead, and Nailsea.",
  keywords: [
    "Web Design Clevedon",
    "Web Development North Somerset",
    "Software Engineering Clevedon",
    "Custom Web Applications Bristol",
    "Next.js Developer Somerset",
    "SaaS Development UK",
    "SEO Agency Clevedon",
    "Web Design Portishead",
    "Web Design Nailsea",
    "E-commerce Website Builder Somerset",
    "Business Automation Software",
    "Mobile Responsive Design Clevedon",
    "React Developer North Somerset",
    "Full Stack Engineering Bristol",
    "Professional Web Agency Clevedon",
    "Website Speed Optimization UK"
  ],
  authors: [{ name: "WebCircuitUK" }],
  creator: "WebCircuitUK",
  metadataBase: new URL("https://webcircuituk.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://webcircuituk.com",
    title: "WebCircuitUK | Elite Web Design & Software in North Somerset",
    description: "Engineering ultra-fast digital products for founders in Clevedon and beyond. Specialized in Next.js, Supabase, and custom software solutions.",
    siteName: "WebCircuitUK",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebCircuitUK | Performance Web Engineering",
    description: "High-end web design and software development based in Clevedon, North Somerset.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Structured Data for Local Business & Service Area SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "WebCircuitUK",
              "url": "https://webcircuituk.com",
              "logo": "https://webcircuituk.com/logo.png",
              "image": "https://webcircuituk.com/og-image.jpg",
              "description": "Premium Web Design and Custom Software Engineering in Clevedon and North Somerset.",
              "telephone": "+447552384420",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Clevedon",
                "addressRegion": "North Somerset",
                "addressCountry": "GB"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 51.4384,
                "longitude": -2.8531
              },
              "areaServed": [
                { "@type": "City", "name": "Clevedon" },
                { "@type": "City", "name": "Bristol" },
                { "@type": "City", "name": "Portishead" },
                { "@type": "City", "name": "Nailsea" },
                { "@type": "City", "name": "Weston-super-Mare" },
                { "@type": "State", "name": "North Somerset" }
              ],
              "priceRange": "££",
              "sameAs": [
                "https://www.linkedin.com/company/webcircuituk",
                "https://twitter.com/webcircuituk"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#020203] text-slate-50 min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}