import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { formatarMoeda } from '@/lib/calculadoras-financeiras'

interface ResultadoItemProps {
  label: string
  valor: number | string
  destaque?: boolean
  negativo?: boolean
}

function ResultadoItem({ label, valor, destaque = false, negativo = false }: ResultadoItemProps) {
  const exibirValor = typeof valor === 'string' ? valor : `${negativo && valor > 0 ? '- ' : ''}${formatarMoeda(valor)}`
  return (
    <div className={`flex justify-between items-center py-2 ${destaque ? 'border-t-2 border-primary pt-4 mt-2' : ''}`}>
      <span className={`text-sm ${destaque ? 'font-semibold' : 'text-muted-foreground'}`}>
        {label}
      </span>
      <span className={`font-mono ${destaque ? 'text-lg font-bold text-primary' : ''} ${negativo ? 'text-destructive' : ''}`}>
        {exibirValor}
      </span>
    </div>
  )
}

interface ResultadoCardProps {
  titulo: string
  descricao?: string
  itens: Array<{
    label: string
    valor: number | string
    destaque?: boolean
    negativo?: boolean
  }>
}

export function ResultadoCard({ titulo, descricao, itens }: ResultadoCardProps) {
  return (
    <Card className="border-secondary/30">
      <CardHeader className="bg-secondary/10 rounded-t-lg">
        <CardTitle className="text-lg text-primary">{titulo}</CardTitle>
        {descricao && <CardDescription>{descricao}</CardDescription>}
      </CardHeader>
      <CardContent className="pt-4">
        <div className="divide-y divide-border/50">
          {itens.map((item, index) => (
            <ResultadoItem
              key={index}
              label={item.label}
              valor={item.valor}
              destaque={item.destaque}
              negativo={item.negativo}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
