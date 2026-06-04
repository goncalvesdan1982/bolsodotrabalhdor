import { Metadata } from 'next'
import { SITE_URL } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Entre em contato com a equipe do Bolso do Trabalhador. Envie suas dúvidas, sugestões ou feedbacks.',
  alternates: {
    canonical: `${SITE_URL}/contato`,
  },
  openGraph: {
    title: 'Contato — Bolso do Trabalhador',
    description: 'Entre em contato com a equipe do Bolso do Trabalhador.',
    url: `${SITE_URL}/contato`,
    siteName: 'Bolso do Trabalhador',
    locale: 'pt_BR',
    type: 'website',
    images: [{
      url: `${SITE_URL}/og-image.png`,
      width: 1200,
      height: 630,
      alt: 'Bolso do Trabalhador',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contato — Bolso do Trabalhador',
    description: 'Entre em contato com a equipe do Bolso do Trabalhador.',
    images: [`${SITE_URL}/og-image.png`],
  },
}

export default function ContatoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
