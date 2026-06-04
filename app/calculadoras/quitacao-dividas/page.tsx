import { Metadata } from 'next'
import { SITE_URL } from '@/lib/config'
import { calculatorsConfig } from '@/lib/schemas-financeiro'
import { CalculadoraTemplate } from '@/components/calculadora-template'

export const metadata: Metadata = {
  title: `${calculatorsConfig['quitacao-dividas'].title} | Bolso do Trabalhador`,
  description: calculatorsConfig['quitacao-dividas'].description,
  alternates: { canonical: `${SITE_URL}${calculatorsConfig['quitacao-dividas'].path}` },
  openGraph: {
    title: calculatorsConfig['quitacao-dividas'].title,
    description: calculatorsConfig['quitacao-dividas'].description,
  },
}

export default function Page() {
  return <CalculadoraTemplate calculadoraKey="quitacao-dividas" />
}
