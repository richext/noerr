// Updated: Metadata and schema; switched display font to Inter Tight for a more sophisticated look
import './globals.css'
import { Inter, Inter_Tight } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const clashDisplay = Inter_Tight({ subsets: ['latin'], variable: '--font-clash-display' })

export const metadata = {
  metadataBase: new URL('https://noerr-inc.com'),
  title: {
    default: 'Noerr Inc. — Advanced 3PL Solutions (v2)',
    template: '%s | Noerr Inc.'
  },
  description: 'Ecommerce fulfillment, B2B distribution, value-added services, trucking & transportation, and warehouse management for modern brands.',
  keywords: ['3PL', 'ecommerce fulfillment', 'B2B distribution', 'value-added services', 'kitting', 'returns', 'LTL', 'FTL', 'last mile', 'warehouse management', 'inventory control', 'order processing'],
  authors: [{ name: 'Noerr Inc.' }],
  creator: 'Noerr Inc.',
  publisher: 'Noerr Inc.',
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    title: 'Noerr Inc. — Tech-Enabled 3PL',
    description: '3PL services: Ecommerce Fulfillment, B2B Distribution, Value-Added Services, Trucking & Transportation, Warehouse Management.',
    url: 'https://noerr-inc.com',
    siteName: 'Noerr Inc.',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noerr Inc. — Tech-Enabled 3PL',
    description: 'Ecommerce, B2B, VAS, Transportation, WMS',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  verification: { google: '' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${clashDisplay.variable}`}>
      <head>
        <meta name="theme-color" content="#1B3668" />
        <link rel="canonical" href="https://noerr-inc.com" />
      </head>
      <body className="bg-primary text-white">
        {children}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Noerr Inc.',
              url: 'https://noerr-inc.com',
              logo: 'https://noerr-inc.com/images/Noerr-logo.png',
              description: 'Tech-enabled 3PL for ecommerce and B2B brands',
              areaServed: 'North America',
              serviceType: [
                'Ecommerce Fulfillment',
                'B2B Distribution',
                'Value-Added Services',
                'Trucking & Transportation',
                'Warehouse Management'
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
