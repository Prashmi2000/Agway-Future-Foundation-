import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Poppins } from 'next/font/google'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-playfair',
  display: 'swap',
})

const siteUrl = 'https://agwayfuture.org'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'AGWAY Future Foundation | Seva • Sanskar • Samarpan',
    template: '%s | AGWAY Future Foundation',
  },
  description:
    'AGWAY Future Foundation is a non-profit dedicated to Temple Enlargement, Langer (free food), Education, Hospitality and Elder Care. Ek kadam aaj behtar kal ki ore.',
  keywords: [
    'AGWAY Future Foundation',
    'NGO Indore',
    'charity',
    'langar free food',
    'education for children',
    'elder care',
    'temple donation',
    'seva',
  ],
  authors: [{ name: 'AGWAY Future Foundation' }],
  openGraph: {
    title: 'AGWAY Future Foundation | Caring Today, Building Tomorrow',
    description:
      'Serving communities through Temple Enlargement, Langer, Education, Hospitality and Elder Care.',
    url: siteUrl,
    siteName: 'AGWAY Future Foundation',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/agway-logo.jpeg', width: 1200, height: 1200, alt: 'AGWAY Future Foundation' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AGWAY Future Foundation',
    description:
      'Serving communities through Temple Enlargement, Langer, Education, Hospitality and Elder Care.',
    images: ['/agway-logo.jpeg'],
  },
  generator: 'v0.app',
  icons: {
    icon: '/agway-logo.jpeg',
    apple: '/agway-logo.jpeg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1b2a5e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
