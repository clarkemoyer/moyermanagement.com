import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://moyermanagement.com'),
  title: { default: 'Moyer Management Home Page', template: '%s | Moyer Management' },
  description: 'Management Solutions For Your Specific Needs.',
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://moyermanagement.com/',
    siteName: 'Moyer Management',
    title: 'Moyer Management Home Page',
    description: 'Management Solutions For Your Specific Needs.',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
