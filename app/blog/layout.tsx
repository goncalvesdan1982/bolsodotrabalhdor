import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Blog | Bolso do Trabalhador',
  description: 'Artigos sobre finanças pessoais, dívidas, cartões, score, empréstimos e organização financeira para trabalhadores brasileiros.',
  openGraph: {
    title: 'Blog — Educação Financeira | Bolso do Trabalhador',
    description: 'Artigos práticos sobre dívidas, cartões, score, empréstimos, custo de vida e organização financeira para o dia a dia do trabalhador brasileiro.',
    url: `${SITE_URL}/blog`,
    siteName: 'Bolso do Trabalhador',
    locale: 'pt_BR',
    type: 'website',
    images: [{
      url: `${SITE_URL}/og-image.png`,
      width: 1200,
      height: 630,
      alt: 'Blog — Bolso do Trabalhador',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog — Educação Financeira | Bolso do Trabalhador',
    description: 'Artigos sobre dívidas, cartões, score, empréstimos e organização financeira.',
    images: [`${SITE_URL}/og-image.png`],
  },
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background">
      {children}
    </div>
  )
}
