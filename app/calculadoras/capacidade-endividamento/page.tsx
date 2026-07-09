import { generateCalculatorMetadata } from '@/lib/schemas-financeiro'
import { CalculadoraTemplate } from '@/components/calculadora-template'

export const metadata = generateCalculatorMetadata('capacidade-endividamento')

export default function Page() {
  return <CalculadoraTemplate calculadoraKey="capacidade-endividamento" />
}
