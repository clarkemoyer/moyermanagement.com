import type { Metadata } from 'next'
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
  title: { default: 'Moyer Management', template: '%s | Moyer Management' },
  description:
    'Management solutions for your specific needs. Property, coin collections, physical investments, and digital assets.',
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://moyermanagement.com/',
    siteName: 'Moyer Management',
    title: 'Moyer Management',
    description: 'Management solutions for your specific needs.',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  )
}
