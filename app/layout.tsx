import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import GoogleAdSense from '@/components/GoogleAdSense'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Next.js Brasil - Tutoriais, Dicas e Guias sobre Next.js e React',
    template: '%s | Next.js Brasil'
  },
  description: 'Blog técnico especializado em Next.js e React. Tutoriais práticos, dicas de performance, Server Actions, App Router e muito mais para desenvolvedores brasileiros.',
  keywords: ['Next.js', 'React', 'TypeScript', 'Web Development', 'Tutoriais', 'Brasil'],
  authors: [{ name: 'Seu Nome' }],
  creator: 'Seu Nome',
  publisher: 'Next.js Brasil',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://seu-blog.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://seu-blog.vercel.app',
    siteName: 'Next.js Brasil',
    title: 'Next.js Brasil - Tutoriais e Guias sobre Next.js e React',
    description: 'Blog técnico especializado em Next.js e React para desenvolvedores brasileiros.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Next.js Brasil',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js Brasil - Tutoriais e Guias sobre Next.js e React',
    description: 'Blog técnico especializado em Next.js e React para desenvolvedores brasileiros.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <GoogleAdSense />
      </head>
      <body>
        <GoogleAnalytics />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

