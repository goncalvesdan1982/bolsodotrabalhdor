import { Metadata } from 'next'
import { SITE_URL } from '@/lib/config'
import { calculatorsConfig } from '@/lib/schemas-financeiro'
import { CalculadoraTemplate } from '@/components/calculadora-template'

export const metadata: Metadata = {
  title: `${calculatorsConfig['troca-dividas'].title} | Bolso do Trabalhador`,
  description: calculatorsConfig['troca-dividas'].description,
  alternates: { canonical: `${SITE_URL}${calculatorsConfig['troca-dividas'].path}` },
  openGraph: {
    title: calculatorsConfig['troca-dividas'].title,
    description: calculatorsConfig['troca-dividas'].description,
  },
}

export default function Page() {
  return <CalculadoraTemplate calculadoraKey="troca-dividas" />
}
