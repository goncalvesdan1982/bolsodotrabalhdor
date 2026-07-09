import { generateCalculatorMetadata } from '@/lib/schemas-financeiro'
import { CalculadoraTemplate } from '@/components/calculadora-template'

export const metadata = generateCalculatorMetadata('parcelas')

export default function Page() {
  return <CalculadoraTemplate calculadoraKey="parcelas" />
}
