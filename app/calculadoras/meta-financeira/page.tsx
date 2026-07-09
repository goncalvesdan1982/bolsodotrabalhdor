import { generateCalculatorMetadata } from '@/lib/schemas-financeiro'
import { CalculadoraTemplate } from '@/components/calculadora-template'

export const metadata = generateCalculatorMetadata('meta-financeira')

export default function Page() {
  return <CalculadoraTemplate calculadoraKey="meta-financeira" />
}
