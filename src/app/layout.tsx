import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CookieBanner from "./components/CookieBanner";

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
    default: "Wolter Bau GmbH - Professionelle Baudienstleistungen in Berlin",
    template: "%s | Wolter Bau GmbH"
  },
  description: "Wolter Bau GmbH - Ihr zuverlässiger Partner für Rohbau, Tiefbau, Dachausbau, Maurerarbeiten, Elektroarbeiten und Hochbau in Berlin und Umgebung. Über 25 Jahre Erfahrung im Bauwesen.",
  keywords: ["Bauunternehmen Berlin", "Rohbau", "Tiefbau", "Dachausbau", "Maurerarbeiten", "Elektroarbeiten", "Hochbau", "Wolter Bau", "Baudienstleistungen", "Bauprojekte Berlin"],
  authors: [{ name: "Wolter Bau GmbH" }],
  creator: "Wolter Bau GmbH",
  publisher: "Wolter Bau GmbH",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://wolter-bau.de'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Wolter Bau GmbH - Professionelle Baudienstleistungen in Berlin",
    description: "Wolter Bau GmbH - Ihr zuverlässiger Partner für Rohbau, Tiefbau, Dachausbau, Maurerarbeiten, Elektroarbeiten und Hochbau in Berlin und Umgebung.",
    url: 'https://wolter-bau.de',
    siteName: 'Wolter Bau GmbH',
    images: [
      {
        url: '/Logo-FINISH.png',
        width: 1200,
        height: 630,
        alt: 'Wolter Bau GmbH Logo',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Wolter Bau GmbH - Professionelle Baudienstleistungen in Berlin",
    description: "Wolter Bau GmbH - Ihr zuverlässiger Partner für Rohbau, Tiefbau, Dachausbau, Maurerarbeiten, Elektroarbeiten und Hochbau in Berlin und Umgebung.",
    images: ['/Logo-FINISH.png'],
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
    <html lang="de">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#dc2626" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Wolter Bau GmbH",
              "image": "https://wolter-bau.de/Logo-FINISH.png",
              "@id": "https://wolter-bau.de",
              "url": "https://wolter-bau.de",
              "telephone": "+49 30 93688102",
              "email": "info@wolter-bau.de",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Waldowstraße 9",
                "addressLocality": "Berlin",
                "postalCode": "13403",
                "addressCountry": "DE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 52.5678901,
                "longitude": 13.3234567
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "07:00",
                  "closes": "17:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "08:00",
                  "closes": "14:00"
                }
              ],
              "description": "Wolter Bau GmbH - Ihr zuverlässiger Partner für Rohbau, Tiefbau, Dachausbau, Maurerarbeiten, Elektroarbeiten und Hochbau in Berlin und Umgebung.",
              "priceRange": "€€",
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 52.5678901,
                  "longitude": 13.3234567
                },
                "geoRadius": "50000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Baudienstleistungen",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Rohbau",
                      "description": "Professionelle Rohbauarbeiten für Wohn- und Gewerbeobjekte"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Tiefbau",
                      "description": "Erdarbeiten, Kanalbau und Fundamentarbeiten"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Dachausbau",
                      "description": "Dachsanierung, Dachausbau und Dacheindeckung"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Maurerarbeiten",
                      "description": "Mauerwerk, Verputzarbeiten und Sanierungen"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Elektroarbeiten",
                      "description": "Elektroinstallationen und Elektrotechnik"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Hochbau",
                      "description": "Komplette Hochbauprojekte von der Planung bis zur Fertigstellung"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
