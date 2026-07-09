import { generateCalculatorMetadata } from '@/lib/schemas-financeiro'
import { CalculadoraTemplate } from '@/components/calculadora-template'

export const metadata = generateCalculatorMetadata('economia-mensal')

export default function Page() {
  return <CalculadoraTemplate calculadoraKey="economia-mensal" />
}
