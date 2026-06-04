import { Metadata } from 'next'
import { SITE_URL } from '@/lib/config'
import { calculatorsConfig } from '@/lib/schemas-financeiro'
import { CalculadoraTemplate } from '@/components/calculadora-template'

export const metadata: Metadata = {
  title: `${calculatorsConfig['capacidade-endividamento'].title} | Bolso do Trabalhador`,
  description: calculatorsConfig['capacidade-endividamento'].description,
  alternates: { canonical: `${SITE_URL}${calculatorsConfig['capacidade-endividamento'].path}` },
  openGraph: {
    title: calculatorsConfig['capacidade-endividamento'].title,
    description: calculatorsConfig['capacidade-endividamento'].description,
  },
}

export default function Page() {
  return <CalculadoraTemplate calculadoraKey="capacidade-endividamento" />
}
