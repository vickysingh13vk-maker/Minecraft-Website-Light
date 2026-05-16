import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://demanddistribution.co.uk"),
  title: {
    default: "Demand Distribution × Minecraft Drinks UK — Premium Gaming Beverages, Distributed Nationwide",
    template: "%s | Demand Distribution × Minecraft Drinks",
  },
  description:
    "London-based UK distribution partner for Minecraft Drinks. Premium gaming-inspired beverages delivered to retailers, hospitality, and e-commerce across the United Kingdom.",
  keywords: [
    "Minecraft Drinks UK",
    "Demand Distribution London",
    "UK beverage distribution",
    "gaming drinks UK",
    "premium beverage wholesale London",
    "Minecraft licensed drinks",
  ],
  authors: [{ name: "Demand Distribution Ltd." }],
  creator: "Demand Distribution Ltd.",
  publisher: "Demand Distribution Ltd.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://demanddistribution.co.uk",
    siteName: "Demand Distribution × Minecraft Drinks",
    title: "Demand Distribution × Minecraft Drinks UK",
    description:
      "The official UK distribution partnership powering Minecraft Drinks across London and the United Kingdom.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Demand Distribution × Minecraft Drinks UK",
    description:
      "Premium gaming-inspired beverages, distributed nationwide from London.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  category: "business",
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-GB"
      className={`${inter.variable} ${space.variable} ${mono.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Demand Distribution Ltd.",
              url: "https://demanddistribution.co.uk",
              logo: "https://demanddistribution.co.uk/logo.png",
              description:
                "London-based UK distribution partner for Minecraft Drinks.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1 Canada Square, Canary Wharf",
                addressLocality: "London",
                postalCode: "E14 5AB",
                addressCountry: "GB",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+44-20-3970-0000",
                contactType: "sales",
                areaServed: "GB",
                availableLanguage: ["English"],
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-ink-900 selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
