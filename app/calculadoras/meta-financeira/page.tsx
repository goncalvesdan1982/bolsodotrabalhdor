import { Metadata } from 'next'
import { SITE_URL } from '@/lib/config'
import { calculatorsConfig } from '@/lib/schemas-financeiro'
import { CalculadoraTemplate } from '@/components/calculadora-template'

export const metadata: Metadata = {
  title: `${calculatorsConfig['meta-financeira'].title} | Bolso do Trabalhador`,
  description: calculatorsConfig['meta-financeira'].description,
  alternates: { canonical: `${SITE_URL}${calculatorsConfig['meta-financeira'].path}` },
  openGraph: {
    title: calculatorsConfig['meta-financeira'].title,
    description: calculatorsConfig['meta-financeira'].description,
  },
}

export default function Page() {
  return <CalculadoraTemplate calculadoraKey="meta-financeira" />
}
