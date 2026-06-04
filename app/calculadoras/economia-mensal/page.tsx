import { Metadata } from 'next'
import { SITE_URL } from '@/lib/config'
import { calculatorsConfig } from '@/lib/schemas-financeiro'
import { CalculadoraTemplate } from '@/components/calculadora-template'

export const metadata: Metadata = {
  title: `${calculatorsConfig['economia-mensal'].title} | Bolso do Trabalhador`,
  description: calculatorsConfig['economia-mensal'].description,
  alternates: { canonical: `${SITE_URL}${calculatorsConfig['economia-mensal'].path}` },
  openGraph: {
    title: calculatorsConfig['economia-mensal'].title,
    description: calculatorsConfig['economia-mensal'].description,
  },
}

export default function Page() {
  return <CalculadoraTemplate calculadoraKey="economia-mensal" />
}
