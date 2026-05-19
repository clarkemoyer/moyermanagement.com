import type { Metadata, Viewport } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})
const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://moyermanagement.com'),
  title: {
    default: 'Moyer Management — Specialized Management Solutions',
    template: '%s | Moyer Management',
  },
  description:
    'Specialized management consulting via Walk & Talk sessions. Property, coin collections, physical investments, and digital assets. Proven Identify → Assess → Improve → Repeat process.',
  keywords: [
    'property management',
    'asset management consulting',
    'coin collection management',
    'physical investments',
    'digital asset management',
    'management consulting',
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://moyermanagement.com/',
    siteName: 'Moyer Management',
    title: 'Moyer Management — Specialized Management Solutions',
    description:
      'Management solutions built around your assets — property, coin collections, physical investments, and digital holdings.',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moyer Management — Specialized Management Solutions',
    description:
      'Management solutions built around your assets. Proven Identify → Assess → Improve → Repeat process.',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1f2e' },
  ],
  width: 'device-width',
  initialScale: 1,
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Moyer Management',
  url: 'https://moyermanagement.com/',
  description:
    'Specialized management consulting for property, coin collections, physical investments, and digital assets.',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'clarkemoyer@moyermanagement.com',
    contactType: 'Customer Service',
  },
  sameAs: ['https://www.linkedin.com/in/clarkemoyer'],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <a href="#top" className="skip-link">
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  )
}
