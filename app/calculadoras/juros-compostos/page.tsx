import { generateCalculatorMetadata } from '@/lib/schemas-financeiro'
import { CalculadoraTemplate } from '@/components/calculadora-template'

export const metadata = generateCalculatorMetadata('juros-compostos')

export default function Page() {
  return <CalculadoraTemplate calculadoraKey="juros-compostos" />
}
