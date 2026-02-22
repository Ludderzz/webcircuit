import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#020203",
  width: "device-width",
  initialScale: 1,
  colorScheme: 'dark',
};

export const metadata: Metadata = {
  title: {
    default: "WebCircuitUK | Web Design Clevedon | Software Engineering Bristol",
    template: "%s | WebCircuitUK"
  },
  description: "WebCircuitUK: Clevedon's premier agency for high-performance Next.js websites, custom SaaS engineering, and Local SEO. Rank higher in North Somerset & Bristol.",
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
    "Business Automation Software UK",
    "Mobile Responsive Design North Somerset",
    "React Developer Bristol",
    "Full Stack Engineering Somerset",
    "Website Speed Optimization South West",
    "Web Design Weston-super-Mare",
    "Custom CRM Development UK",
    "App Developers South West England",
    "Vercel Deployment Specialist UK"
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
    title: "WebCircuitUK | Elite Web Design & Software Engineering",
    description: "Engineering ultra-fast digital products for founders in Clevedon and the South West. Specialist Next.js & Supabase development.",
    siteName: "WebCircuitUK",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WebCircuitUK - High Performance Web Solutions Clevedon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WebCircuitUK | Performance Web Engineering",
    description: "Custom software and premium web design based in Clevedon, North Somerset.",
    images: ["/og-image.jpg"],
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "ProfessionalService",
                  "@id": "https://webcircuituk.com/#organization",
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
                    "postalCode": "BS21",
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
                    { "@type": "City", "name": "Bath" },
                    { "@type": "State", "name": "North Somerset" },
                    { "@type": "State", "name": "South West England" }
                  ],
                  "priceRange": "££",
                  "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday"
                    ],
                    "opens": "09:00",
                    "closes": "17:00"
                  }
                },
                {
                  "@type": "Service",
                  "serviceType": "Web Design and Development",
                  "provider": { "@id": "https://webcircuituk.com/#organization" },
                  "areaServed": { "@type": "State", "name": "South West England" },
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Web Development Services",
                    "itemListElement": [
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Next.js Development" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Local SEO Optimization" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SaaS Infrastructure Engineering" } }
                    ]
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#020203] text-slate-50 min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-grow pt-20 md:pt-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}