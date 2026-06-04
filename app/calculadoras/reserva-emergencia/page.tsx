import { Metadata } from 'next'
import { SITE_URL } from '@/lib/config'
import { calculatorsConfig } from '@/lib/schemas-financeiro'
import { CalculadoraTemplate } from '@/components/calculadora-template'

const cfg = calculatorsConfig['reserva-emergencia']

export const metadata: Metadata = {
  title: `${cfg.title} | Bolso do Trabalhador`,
  description: cfg.description,
  keywords: cfg.keywords,
  alternates: { canonical: `${SITE_URL}${cfg.path}` },
  openGraph: {
    title: cfg.title,
    description: cfg.description,
    url: `${SITE_URL}${cfg.path}`,
    siteName: 'Bolso do Trabalhador',
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: cfg.title }],
  },
  twitter: {
    card: 'summary_large_image',
    title: cfg.title,
    description: cfg.description,
    images: [`${SITE_URL}/og-image.png`],
  },
}

export default function Page() {
  return <CalculadoraTemplate calculadoraKey="reserva-emergencia" />
}
