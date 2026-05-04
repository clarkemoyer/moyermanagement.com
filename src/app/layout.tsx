import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://moyermanagement.com'),
  title: {
    default: 'Moyer Management | Coming Soon',
    template: '%s | Moyer Management',
  },
  description: 'A professional home for management systems, operations thinking, and practical consulting resources.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://moyermanagement.com/',
    siteName: 'Moyer Management',
    title: 'Moyer Management | Coming Soon',
    description: 'A professional home for management systems, operations thinking, and practical consulting resources.',
  },
  twitter: {
    card: 'summary',
    title: 'Moyer Management | Coming Soon',
    description: 'A professional home for management systems, operations thinking, and practical consulting resources.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
