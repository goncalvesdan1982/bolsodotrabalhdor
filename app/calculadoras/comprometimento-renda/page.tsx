import { Metadata } from 'next'
import { SITE_URL } from '@/lib/config'
import { calculatorsConfig } from '@/lib/schemas-financeiro'
import { CalculadoraTemplate } from '@/components/calculadora-template'

export const metadata: Metadata = {
  title: `${calculatorsConfig['comprometimento-renda'].title} | Bolso do Trabalhador`,
  description: calculatorsConfig['comprometimento-renda'].description,
  alternates: { canonical: `${SITE_URL}${calculatorsConfig['comprometimento-renda'].path}` },
  openGraph: {
    title: calculatorsConfig['comprometimento-renda'].title,
    description: calculatorsConfig['comprometimento-renda'].description,
  },
}

export default function Page() {
  return <CalculadoraTemplate calculadoraKey="comprometimento-renda" />
}
