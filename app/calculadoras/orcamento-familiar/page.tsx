import { generateCalculatorMetadata } from '@/lib/schemas-financeiro'
import { CalculadoraTemplate } from '@/components/calculadora-template'

export const metadata = generateCalculatorMetadata('orcamento-familiar')

export default function Page() {
  return <CalculadoraTemplate calculadoraKey="orcamento-familiar" />
}
