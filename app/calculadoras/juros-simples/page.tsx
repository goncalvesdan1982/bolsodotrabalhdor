import { Metadata } from 'next'
import { SITE_URL } from '@/lib/config'
import { calculatorsConfig } from '@/lib/schemas-financeiro'
import { CalculadoraTemplate } from '@/components/calculadora-template'

const cfg = calculatorsConfig['juros-simples']

export const metadata: Metadata = {
  title: `${cfg.title} | Bolso do Trabalhador`,
  description: cfg.description,
  alternates: { canonical: `${SITE_URL}${cfg.path}` },
  openGraph: { title: cfg.title, description: cfg.description },
}

export default function Page() {
  return <CalculadoraTemplate calculadoraKey="juros-simples" />
}
