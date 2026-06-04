import { Metadata } from 'next'
import { SITE_URL } from '@/lib/config'
import { calculatorsConfig } from '@/lib/schemas-financeiro'
import { CalculadoraTemplate } from '@/components/calculadora-template'

export const metadata: Metadata = {
  title: `${calculatorsConfig['reserva-emergencia'].title} | Bolso do Trabalhador`,
  description: calculatorsConfig['reserva-emergencia'].description,
  alternates: { canonical: `${SITE_URL}${calculatorsConfig['reserva-emergencia'].path}` },
  openGraph: {
    title: calculatorsConfig['reserva-emergencia'].title,
    description: calculatorsConfig['reserva-emergencia'].description,
  },
}

export default function Page() {
  return <CalculadoraTemplate calculadoraKey="reserva-emergencia" />
}
