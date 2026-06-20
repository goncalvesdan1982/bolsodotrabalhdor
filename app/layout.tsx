import { Suspense } from 'react'
import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { GoogleAnalytics } from '@/components/google-analytics'
import CookieBanner from '@/components/cookie-banner'
import { BackToTopButton } from '@/components/back-to-top-button'
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/lib/config'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} - Finanças Simples para Quem Trabalha e Paga Boletos`,
    template: `%s | ${SITE_NAME}`
  },
  description: SITE_DESCRIPTION,
  keywords: ['finanças pessoais', 'educação financeira', 'sair das dívidas', 'calcular juros', 'score de crédito', 'cartão de crédito', 'empréstimo', 'organização financeira', 'orçamento familiar', 'reserva de emergência'],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} - Finanças Simples para Quem Trabalha e Paga Boletos`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/og-image.png',
        width: 1731,
        height: 909,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} - Finanças Simples`,
    description: SITE_DESCRIPTION,
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-64x64.png', sizes: '64x64', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-dark.svg', type: 'image/svg+xml', media: '(prefers-color-scheme: dark)' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a365d',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${geistMono.variable} bg-background`}>
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1190641604220445" crossOrigin="anonymous"></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': `${SITE_URL}/#organization`,
                  'name': SITE_NAME,
                  'url': SITE_URL,
                  'description': SITE_DESCRIPTION,
                  'logo': {
                    '@type': 'ImageObject',
                    'url': `${SITE_URL}/logo-bolso-trabalhador.png`
                  }
                },
                {
                  '@type': 'WebSite',
                  '@id': `${SITE_URL}/#website`,
                  'name': SITE_NAME,
                  'url': SITE_URL,
                  'description': SITE_DESCRIPTION,
                  'inLanguage': 'pt-BR',
                  'publisher': {
                    '@id': `${SITE_URL}/#organization`
                  },
                  'potentialAction': {
                    '@type': 'SearchAction',
                    'target': {
                      '@type': 'EntryPoint',
                      'urlTemplate': `${SITE_URL}/blog?search={search_term_string}`
                    },
                    'query-input': 'required name=search_term_string'
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:shadow-lg focus:outline-2 focus:outline-offset-2 focus:outline-ring"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <BackToTopButton />
        <CookieBanner />
      </body>
    </html>
  )
}
