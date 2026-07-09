import { generateCalculatorMetadata } from '@/lib/schemas-financeiro'
import { CalculadoraTemplate } from '@/components/calculadora-template'

export const metadata = generateCalculatorMetadata('reserva-emergencia')

export default function Page() {
  return <CalculadoraTemplate calculadoraKey="reserva-emergencia" />
}
