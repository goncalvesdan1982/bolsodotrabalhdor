import { generateCalculatorMetadata } from '@/lib/schemas-financeiro'
import { CalculadoraTemplate } from '@/components/calculadora-template'

export const metadata = generateCalculatorMetadata('comprometimento-renda')

export default function Page() {
  return <CalculadoraTemplate calculadoraKey="comprometimento-renda" />
}
