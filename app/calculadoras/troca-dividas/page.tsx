import { generateCalculatorMetadata } from '@/lib/schemas-financeiro'
import { CalculadoraTemplate } from '@/components/calculadora-template'

export const metadata = generateCalculatorMetadata('troca-dividas')

export default function Page() {
  return <CalculadoraTemplate calculadoraKey="troca-dividas" />
}
