'use client'

import { useState } from 'react'
import { Calculator, PiggyBank, Target, TrendingUp, Home, Briefcase, Heart, BookOpen, ShoppingBag, CreditCard, AlertTriangle, DollarSign, RefreshCw, BarChart3, Info } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ResultadoCard } from '@/components/resultado-card'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { FAQSection } from '@/components/faq-section'
import { CalculadoraSchema } from '@/components/calculadora-schema'
import { ArtigosRelacionados } from '@/components/artigos-relacionados'
import { calculatorsConfig } from '@/lib/schemas-financeiro'
import {
  calcularReservaEmergencia,
  calcularOrcamentoFamiliar,
  calcularCapacidadeEndividamento,
  calcularTrocaDivida,
  calcularEconomiaMensal,
  calcularComprometimentoRenda,
  calcularQuitacaoDividas,
  calcularMetaFinanceira,
  calcularJurosCompostos,
  calcularJurosSimples,
  calcularEmprestimo,
  calcularFinanciamento,
  calcularParcelas,
  formatarMoeda,
  formatarPercentual,
} from '@/lib/calculadoras-financeiras'

const iconMap: Record<string, { icon: typeof Calculator; cor: string }> = {
  'reserva-emergencia': { icon: PiggyBank, cor: 'bg-green-100 text-green-600' },
  'orcamento-familiar': { icon: Home, cor: 'bg-blue-100 text-blue-600' },
  'capacidade-endividamento': { icon: BarChart3, cor: 'bg-orange-100 text-orange-600' },
  'troca-dividas': { icon: RefreshCw, cor: 'bg-purple-100 text-purple-600' },
  'economia-mensal': { icon: TrendingUp, cor: 'bg-emerald-100 text-emerald-600' },
  'comprometimento-renda': { icon: AlertTriangle, cor: 'bg-red-100 text-red-600' },
  'quitacao-dividas': { icon: CreditCard, cor: 'bg-rose-100 text-rose-600' },
  'meta-financeira': { icon: Target, cor: 'bg-indigo-100 text-indigo-600' },
  'juros-compostos': { icon: TrendingUp, cor: 'bg-blue-100 text-blue-600' },
  'juros-simples': { icon: Calculator, cor: 'bg-gray-100 text-gray-600' },
  'emprestimo': { icon: DollarSign, cor: 'bg-amber-100 text-amber-600' },
  'financiamento': { icon: Home, cor: 'bg-cyan-100 text-cyan-600' },
  'parcelas': { icon: ShoppingBag, cor: 'bg-pink-100 text-pink-600' },
}

function formatarInputMoeda(valor: string, setter: (v: string) => void) {
  const numero = valor.replace(/\D/g, '')
  const formatado = (parseInt(numero || '0') / 100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
  setter(formatado)
}

function parseMoeda(valor: string): number {
  return parseFloat(valor.replace(/\D/g, '')) / 100 || 0
}

interface InputFieldProps {
  id: string
  label: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  type?: string
  step?: string
  hint?: string
}

function InputField({ id, label, value, onChange, placeholder = '0', type = 'text', step, hint }: InputFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} placeholder={placeholder} value={value} step={step} onChange={(e) => onChange(e.target.value)} />
      {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
    </div>
  )
}

interface CalculadoraTemplateProps {
  calculadoraKey: string
}

export function CalculadoraTemplate({ calculadoraKey }: CalculadoraTemplateProps) {
  const config = calculatorsConfig[calculadoraKey]
  const { icon: HeaderIcon, cor } = iconMap[calculadoraKey] || { icon: Calculator, cor: 'bg-primary/10 text-primary' }
  const HeaderIconComponent = HeaderIcon

  // Generic state management
  const [inputs, setInputs] = useState<Record<string, string>>({})
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  const setInput = (key: string, value: string) => {
    setInputs((prev) => ({ ...prev, [key]: value }))
    setError(null)
  }

  const handleCalcular = () => {
    setError(null)
    setResult(null)

    try {
      let res: any

      switch (calculadoraKey) {
        case 'reserva-emergencia': {
          const gastosMensais = parseFloat(inputs.gastosMensais || '0')
          const meses = parseInt(inputs.meses || '6')
          if (gastosMensais <= 0) { setError('Informe seus gastos mensais.'); return }
          res = calcularReservaEmergencia(gastosMensais, meses)
          break
        }
        case 'orcamento-familiar': {
          const renda = parseFloat(inputs.renda || '0')
          const gastos = {
            moradia: parseFloat(inputs.moradia || '0'),
            alimentacao: parseFloat(inputs.alimentacao || '0'),
            transporte: parseFloat(inputs.transporte || '0'),
            saude: parseFloat(inputs.saude || '0'),
            educacao: parseFloat(inputs.educacao || '0'),
            lazer: parseFloat(inputs.lazer || '0'),
            outras: parseFloat(inputs.outras || '0'),
          }
          if (renda <= 0) { setError('Informe sua renda mensal.'); return }
          res = calcularOrcamentoFamiliar(renda, gastos)
          break
        }
        case 'capacidade-endividamento': {
          const rendaMensal = parseFloat(inputs.rendaMensal || '0')
          const gastosFixos = parseFloat(inputs.gastosFixos || '0')
          const dividasAtuais = parseFloat(inputs.dividasAtuais || '0')
          if (rendaMensal <= 0) { setError('Informe sua renda mensal.'); return }
          res = calcularCapacidadeEndividamento(rendaMensal, gastosFixos, dividasAtuais)
          break
        }
        case 'troca-dividas': {
          const valorDivida = parseFloat(inputs.valorDivida || '0')
          const taxaAtual = parseFloat(inputs.taxaAtual || '0')
          const taxaNova = parseFloat(inputs.taxaNova || '0')
          const prazoAtualRestante = parseInt(inputs.prazoAtualRestante || '0')
          const prazoNovo = parseInt(inputs.prazoNovo || '0')
          if (valorDivida <= 0) { setError('Informe o valor da dívida.'); return }
          if (taxaAtual <= 0) { setError('Informe a taxa atual.'); return }
          if (taxaNova <= 0) { setError('Informe a nova taxa.'); return }
          if (prazoAtualRestante <= 0) { setError('Informe o prazo atual restante.'); return }
          if (prazoNovo <= 0) { setError('Informe o novo prazo.'); return }
          res = calcularTrocaDivida(valorDivida, taxaAtual, taxaNova, prazoAtualRestante, prazoNovo)
          break
        }
        case 'economia-mensal': {
          const renda = parseFloat(inputs.renda || '0')
          const gastos = parseFloat(inputs.gastos || '0')
          const objetivoEconomia = parseFloat(inputs.objetivoEconomia || '0')
          if (renda <= 0) { setError('Informe sua renda mensal.'); return }
          res = calcularEconomiaMensal(renda, gastos, objetivoEconomia)
          break
        }
        case 'comprometimento-renda': {
          const rendaMensal = parseFloat(inputs.rendaMensal || '0')
          const financiamentos = parseFloat(inputs.financiamentos || '0')
          const emprestimos = parseFloat(inputs.emprestimos || '0')
          const cartaoCredito = parseFloat(inputs.cartaoCredito || '0')
          const outrasParcelas = parseFloat(inputs.outrasParcelas || '0')
          if (rendaMensal <= 0) { setError('Informe sua renda mensal.'); return }
          res = calcularComprometimentoRenda(rendaMensal, financiamentos, emprestimos, cartaoCredito, outrasParcelas)
          break
        }
        case 'quitacao-dividas': {
          const valorDivida = parseFloat(inputs.valorDivida || '0')
          const taxaMensal = parseFloat(inputs.taxaMensal || '0')
          const pagamentoMensal = parseFloat(inputs.pagamentoMensal || '0')
          if (valorDivida <= 0) { setError('Informe o valor da dívida.'); return }
          if (taxaMensal < 0) { setError('Informe a taxa de juros.'); return }
          if (pagamentoMensal <= 0) { setError('Informe o valor do pagamento mensal.'); return }
          res = calcularQuitacaoDividas(valorDivida, taxaMensal, pagamentoMensal)
          if (res.erro) { setError(res.erro); return }
          break
        }
        case 'meta-financeira': {
          const valorObjetivo = parseFloat(inputs.valorObjetivo || '0')
          const valorMensal = parseFloat(inputs.valorMensal || '0')
          const taxaMensal = parseFloat(inputs.taxaMensal || '0')
          if (valorObjetivo <= 0) { setError('Informe o valor do objetivo.'); return }
          if (valorMensal <= 0) { setError('Informe o valor mensal.'); return }
          res = calcularMetaFinanceira(valorObjetivo, valorMensal, taxaMensal)
          if (res.erro) { setError(res.erro); return }
          break
        }
        case 'juros-compostos': {
          const valorInicial = parseFloat(inputs.valorInicial || '0')
          const aporteMensal = parseFloat(inputs.aporteMensal || '0')
          const taxaMensal = parseFloat(inputs.taxaMensal || '0')
          const meses = parseInt(inputs.meses || '0')
          if (taxaMensal <= 0) { setError('Informe a taxa de juros.'); return }
          if (meses <= 0) { setError('Informe o período em meses.'); return }
          res = calcularJurosCompostos(valorInicial, taxaMensal, meses, aporteMensal)
          break
        }
        case 'juros-simples': {
          const valorInicial = parseFloat(inputs.valorInicial || '0')
          const taxaMensal = parseFloat(inputs.taxaMensal || '0')
          const meses = parseInt(inputs.meses || '0')
          if (taxaMensal <= 0) { setError('Informe a taxa de juros.'); return }
          if (meses <= 0) { setError('Informe o período em meses.'); return }
          res = calcularJurosSimples(valorInicial, taxaMensal, meses)
          break
        }
        case 'emprestimo': {
          const valorEmprestimo = parseFloat(inputs.valorEmprestimo || '0')
          const taxaMensal = parseFloat(inputs.taxaMensal || '0')
          const meses = parseInt(inputs.meses || '0')
          if (valorEmprestimo <= 0) { setError('Informe o valor do empréstimo.'); return }
          if (taxaMensal <= 0) { setError('Informe a taxa de juros.'); return }
          if (meses <= 0) { setError('Informe o prazo em meses.'); return }
          res = calcularEmprestimo(valorEmprestimo, taxaMensal, meses)
          break
        }
        case 'financiamento': {
          const valorFinanciamento = parseFloat(inputs.valorFinanciamento || '0')
          const taxaMensal = parseFloat(inputs.taxaMensal || '0')
          const meses = parseInt(inputs.meses || '0')
          if (valorFinanciamento <= 0) { setError('Informe o valor do financiamento.'); return }
          if (taxaMensal <= 0) { setError('Informe a taxa de juros.'); return }
          if (meses <= 0) { setError('Informe o prazo em meses.'); return }
          res = calcularFinanciamento(valorFinanciamento, taxaMensal, meses)
          break
        }
        case 'parcelas': {
          const valorTotal = parseFloat(inputs.valorTotal || '0')
          const numeroParcelas = parseInt(inputs.numeroParcelas || '0')
          const taxaJuros = parseFloat(inputs.taxaJuros || '0')
          if (valorTotal <= 0) { setError('Informe o valor total.'); return }
          if (numeroParcelas <= 0) { setError('Informe o número de parcelas.'); return }
          res = calcularParcelas(valorTotal, numeroParcelas, taxaJuros)
          break
        }
      }

      setResult(res)
    } catch {
      setError('Erro ao calcular. Verifique os valores informados.')
    }
  }

  const handleMoeda = (key: string, value: string) => {
    formatarInputMoeda(value, (v) => setInput(key, v))
  }

  const limpar = () => {
    setInputs({})
    setResult(null)
    setError(null)
  }

  const renderForm = () => {
    switch (calculadoraKey) {
      case 'reserva-emergencia':
        return (
          <>
            <InputField id="gastosMensais" label="Gastos Mensais" value={inputs.gastosMensais || ''} onChange={(v) => handleMoeda('gastosMensais', v)} placeholder="R$ 0,00" hint="Soma de todos os seus gastos mensais" />
            <InputField id="meses" label="Meses de Reserva" value={inputs.meses || '6'} onChange={(v) => setInput('meses', v)} type="number" placeholder="6" hint="Recomendado: 6 meses" />
          </>
        )
      case 'orcamento-familiar':
        return (
          <>
            <InputField id="renda" label="Renda Mensal Total" value={inputs.renda || ''} onChange={(v) => handleMoeda('renda', v)} placeholder="R$ 0,00" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <InputField id="moradia" label="Moradia" value={inputs.moradia || ''} onChange={(v) => handleMoeda('moradia', v)} placeholder="R$ 0,00" />
              <InputField id="alimentacao" label="Alimentação" value={inputs.alimentacao || ''} onChange={(v) => handleMoeda('alimentacao', v)} placeholder="R$ 0,00" />
              <InputField id="transporte" label="Transporte" value={inputs.transporte || ''} onChange={(v) => handleMoeda('transporte', v)} placeholder="R$ 0,00" />
              <InputField id="saude" label="Saúde" value={inputs.saude || ''} onChange={(v) => handleMoeda('saude', v)} placeholder="R$ 0,00" />
              <InputField id="educacao" label="Educação" value={inputs.educacao || ''} onChange={(v) => handleMoeda('educacao', v)} placeholder="R$ 0,00" />
              <InputField id="lazer" label="Lazer" value={inputs.lazer || ''} onChange={(v) => handleMoeda('lazer', v)} placeholder="R$ 0,00" />
            </div>
            <InputField id="outras" label="Outros Gastos" value={inputs.outras || ''} onChange={(v) => handleMoeda('outras', v)} placeholder="R$ 0,00" />
          </>
        )
      case 'capacidade-endividamento':
        return (
          <>
            <InputField id="rendaMensal" label="Renda Mensal" value={inputs.rendaMensal || ''} onChange={(v) => handleMoeda('rendaMensal', v)} placeholder="R$ 0,00" />
            <InputField id="gastosFixos" label="Gastos Fixos Mensais" value={inputs.gastosFixos || ''} onChange={(v) => handleMoeda('gastosFixos', v)} placeholder="R$ 0,00" hint="Aluguel, contas, assinaturas" />
            <InputField id="dividasAtuais" label="Total de Dívidas Atuais (parcelas)" value={inputs.dividasAtuais || ''} onChange={(v) => handleMoeda('dividasAtuais', v)} placeholder="R$ 0,00" />
          </>
        )
      case 'troca-dividas':
        return (
          <>
            <InputField id="valorDivida" label="Valor da Dívida" value={inputs.valorDivida || ''} onChange={(v) => handleMoeda('valorDivida', v)} placeholder="R$ 0,00" />
            <InputField id="taxaAtual" label="Taxa de Juros Atual (% ao mês)" value={inputs.taxaAtual || ''} onChange={(v) => setInput('taxaAtual', v)} type="number" step="0.01" placeholder="0,00" />
            <InputField id="prazoAtualRestante" label="Prazo Atual Restante (meses)" value={inputs.prazoAtualRestante || ''} onChange={(v) => setInput('prazoAtualRestante', v)} type="number" placeholder="0" />
            <div className="border-t pt-4">
              <p className="text-sm font-medium text-muted-foreground mb-3">Nova Opção</p>
            </div>
            <InputField id="taxaNova" label="Nova Taxa de Juros (% ao mês)" value={inputs.taxaNova || ''} onChange={(v) => setInput('taxaNova', v)} type="number" step="0.01" placeholder="0,00" />
            <InputField id="prazoNovo" label="Novo Prazo (meses)" value={inputs.prazoNovo || ''} onChange={(v) => setInput('prazoNovo', v)} type="number" placeholder="0" />
          </>
        )
      case 'economia-mensal':
        return (
          <>
            <InputField id="renda" label="Renda Mensal" value={inputs.renda || ''} onChange={(v) => handleMoeda('renda', v)} placeholder="R$ 0,00" />
            <InputField id="gastos" label="Gastos Mensais" value={inputs.gastos || ''} onChange={(v) => handleMoeda('gastos', v)} placeholder="R$ 0,00" />
            <InputField id="objetivoEconomia" label="Objetivo de Economia (opcional)" value={inputs.objetivoEconomia || ''} onChange={(v) => handleMoeda('objetivoEconomia', v)} placeholder="R$ 0,00" hint="Quanto deseja juntar no total" />
          </>
        )
      case 'comprometimento-renda':
        return (
          <>
            <InputField id="rendaMensal" label="Renda Mensal" value={inputs.rendaMensal || ''} onChange={(v) => handleMoeda('rendaMensal', v)} placeholder="R$ 0,00" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <InputField id="financiamentos" label="Financiamentos" value={inputs.financiamentos || ''} onChange={(v) => handleMoeda('financiamentos', v)} placeholder="R$ 0,00" />
              <InputField id="emprestimos" label="Empréstimos" value={inputs.emprestimos || ''} onChange={(v) => handleMoeda('emprestimos', v)} placeholder="R$ 0,00" />
              <InputField id="cartaoCredito" label="Cartão de Crédito" value={inputs.cartaoCredito || ''} onChange={(v) => handleMoeda('cartaoCredito', v)} placeholder="R$ 0,00" />
              <InputField id="outrasParcelas" label="Outras Parcelas" value={inputs.outrasParcelas || ''} onChange={(v) => handleMoeda('outrasParcelas', v)} placeholder="R$ 0,00" />
            </div>
          </>
        )
      case 'quitacao-dividas':
        return (
          <>
            <InputField id="valorDivida" label="Valor Total da Dívida" value={inputs.valorDivida || ''} onChange={(v) => handleMoeda('valorDivida', v)} placeholder="R$ 0,00" />
            <InputField id="taxaMensal" label="Taxa de Juros (% ao mês)" value={inputs.taxaMensal || ''} onChange={(v) => setInput('taxaMensal', v)} type="number" step="0.01" placeholder="0,00" />
            <InputField id="pagamentoMensal" label="Pagamento Mensal" value={inputs.pagamentoMensal || ''} onChange={(v) => handleMoeda('pagamentoMensal', v)} placeholder="R$ 0,00" hint="Quanto pode pagar por mês" />
          </>
        )
      case 'meta-financeira':
        return (
          <>
            <InputField id="valorObjetivo" label="Valor do Objetivo" value={inputs.valorObjetivo || ''} onChange={(v) => handleMoeda('valorObjetivo', v)} placeholder="R$ 0,00" />
            <InputField id="valorMensal" label="Valor Mensal para Guardar" value={inputs.valorMensal || ''} onChange={(v) => handleMoeda('valorMensal', v)} placeholder="R$ 0,00" />
            <InputField id="taxaMensal" label="Rendimento Mensal (%)" value={inputs.taxaMensal || ''} onChange={(v) => setInput('taxaMensal', v)} type="number" step="0.01" placeholder="0,00" hint="Opcional. Deixe 0 se não houver rendimento." />
          </>
        )
      case 'juros-compostos':
        return (
          <>
            <InputField id="valorInicial" label="Valor Inicial" value={inputs.valorInicial || ''} onChange={(v) => handleMoeda('valorInicial', v)} placeholder="R$ 0,00" />
            <InputField id="aporteMensal" label="Aporte Mensal (opcional)" value={inputs.aporteMensal || ''} onChange={(v) => handleMoeda('aporteMensal', v)} placeholder="R$ 0,00" hint="Quanto será adicionado todo mês" />
            <InputField id="taxaMensal" label="Taxa de Juros (% ao mês)" value={inputs.taxaMensal || ''} onChange={(v) => setInput('taxaMensal', v)} type="number" step="0.01" placeholder="0,00" />
            <InputField id="meses" label="Período (meses)" value={inputs.meses || ''} onChange={(v) => setInput('meses', v)} type="number" placeholder="12" />
          </>
        )
      case 'juros-simples':
        return (
          <>
            <InputField id="valorInicial" label="Valor Inicial" value={inputs.valorInicial || ''} onChange={(v) => handleMoeda('valorInicial', v)} placeholder="R$ 0,00" />
            <InputField id="taxaMensal" label="Taxa de Juros (% ao mês)" value={inputs.taxaMensal || ''} onChange={(v) => setInput('taxaMensal', v)} type="number" step="0.01" placeholder="0,00" />
            <InputField id="meses" label="Período (meses)" value={inputs.meses || ''} onChange={(v) => setInput('meses', v)} type="number" placeholder="12" />
          </>
        )
      case 'emprestimo':
        return (
          <>
            <InputField id="valorEmprestimo" label="Valor do Empréstimo" value={inputs.valorEmprestimo || ''} onChange={(v) => handleMoeda('valorEmprestimo', v)} placeholder="R$ 0,00" />
            <InputField id="taxaMensal" label="Taxa de Juros (% ao mês)" value={inputs.taxaMensal || ''} onChange={(v) => setInput('taxaMensal', v)} type="number" step="0.01" placeholder="0,00" />
            <InputField id="meses" label="Prazo (meses)" value={inputs.meses || ''} onChange={(v) => setInput('meses', v)} type="number" placeholder="12" />
          </>
        )
      case 'financiamento':
        return (
          <>
            <InputField id="valorFinanciamento" label="Valor do Financiamento" value={inputs.valorFinanciamento || ''} onChange={(v) => handleMoeda('valorFinanciamento', v)} placeholder="R$ 0,00" />
            <InputField id="taxaMensal" label="Taxa de Juros (% ao mês)" value={inputs.taxaMensal || ''} onChange={(v) => setInput('taxaMensal', v)} type="number" step="0.01" placeholder="0,00" />
            <InputField id="meses" label="Prazo (meses)" value={inputs.meses || ''} onChange={(v) => setInput('meses', v)} type="number" placeholder="360" hint="Ex: 360 meses = 30 anos" />
          </>
        )
      case 'parcelas':
        return (
          <>
            <InputField id="valorTotal" label="Valor Total" value={inputs.valorTotal || ''} onChange={(v) => handleMoeda('valorTotal', v)} placeholder="R$ 0,00" />
            <InputField id="numeroParcelas" label="Número de Parcelas" value={inputs.numeroParcelas || ''} onChange={(v) => setInput('numeroParcelas', v)} type="number" placeholder="12" />
            <InputField id="taxaJuros" label="Taxa de Juros (% ao mês)" value={inputs.taxaJuros || ''} onChange={(v) => setInput('taxaJuros', v)} type="number" step="0.01" placeholder="0,00" hint="Deixe 0 para parcelas sem juros" />
          </>
        )
      default:
        return null
    }
  }

  const renderResult = () => {
    if (!result) return null

    switch (calculadoraKey) {
      case 'reserva-emergencia':
        return (
          <ResultadoCard
            titulo="Reserva de Emergência"
            descricao={`Baseada em ${result.mesesRecomendados} meses de gastos`}
            itens={[
              { label: 'Gastos Mensais', valor: result.gastoMensal },
              { label: 'Valor Ideal da Reserva', valor: result.valorIdeal, destaque: true },
            ]}
          />
        )
      case 'orcamento-familiar':
        return (
          <>
            <ResultadoCard
              titulo="Resumo do Orçamento"
              itens={[
                { label: 'Renda Total', valor: result.renda },
                { label: 'Total de Gastos', valor: result.totalGastos },
                { label: 'Saldo Mensal', valor: result.saldo, destaque: true, negativo: result.saldo < 0 },
                { label: '% Comprometido', valor: `${result.percentualGastos}%` },
              ]}
            />
            <ResultadoCard
              titulo="Gastos por Categoria"
              descricao="Distribuição dos gastos"
              itens={result.categorias.map((cat: any) => ({
                label: cat.nome.charAt(0).toUpperCase() + cat.nome.slice(1),
                valor: `${formatarMoeda(cat.valor)} (${cat.percentual}%)`,
              }))}
            />
          </>
        )
      case 'capacidade-endividamento':
        return (
          <ResultadoCard
            titulo="Capacidade de Endividamento"
            itens={[
              { label: 'Renda Mensal', valor: result.rendaMensal },
              { label: 'Gastos Fixos', valor: result.gastosFixos },
              { label: 'Renda Disponível', valor: result.rendaDisponivel },
              { label: 'Limite Recomendado (30%)', valor: result.limiteRecomendado, destaque: true },
              { label: 'Comprometimento Atual', valor: `${result.comprometimentoAtual}%` },
              { label: 'Classificação', valor: result.comprometimentoAtualLabel, destaque: true },
            ]}
          />
        )
      case 'troca-dividas':
        return (
          <>
            <ResultadoCard
              titulo="Dívida Atual"
              itens={[
                { label: 'Valor da Parcela', valor: result.parcelaAtual },
                { label: 'Total a Pagar', valor: result.totalAtual },
                { label: 'Prazo Restante', valor: `${result.prazoAtual} meses` },
              ]}
            />
            <ResultadoCard
              titulo="Nova Dívida"
              itens={[
                { label: 'Valor da Parcela', valor: result.parcelaNova },
                { label: 'Total a Pagar', valor: result.totalNovo },
                { label: 'Novo Prazo', valor: `${result.prazoNovo} meses` },
              ]}
            />
            <ResultadoCard
              titulo="Comparação"
              itens={[
                { label: 'Economia Total', valor: result.economia, destaque: true, negativo: result.economia < 0 },
                { label: 'Diferença Mensal', valor: result.diferencaMensal, destaque: true, negativo: result.diferencaMensal < 0 },
              ]}
            />
          </>
        )
      case 'economia-mensal':
        return (
          <ResultadoCard
            titulo="Economia Mensal"
            itens={[
              { label: 'Renda Mensal', valor: result.renda },
              { label: 'Gastos Mensais', valor: result.gastos },
              { label: 'Potencial de Economia', valor: result.potencialEconomia, destaque: true },
              ...(result.mesesParaObjetivo > 0 ? [{ label: 'Meses para o Objetivo', valor: `${result.mesesParaObjetivo} meses` as string | number, destaque: true } as any] : []),
              ...(result.objetivoEconomia > 0 ? [{ label: 'Objetivo', valor: result.objetivoEconomia }] : []),
            ]}
          />
        )
      case 'comprometimento-renda':
        return (
          <>
            <ResultadoCard
              titulo="Comprometimento de Renda"
              itens={[
                { label: 'Renda Mensal', valor: result.rendaMensal },
                { label: 'Total de Dívidas', valor: result.totalDividas },
                { label: 'Percentual Comprometido', valor: `${result.percentual}%`, destaque: true },
                { label: 'Classificação', valor: result.classificacao === 'saudavel' ? 'Saudável' : result.classificacao === 'atencao' ? 'Atenção' : 'Risco', destaque: true },
              ]}
            />
            <ResultadoCard
              titulo="Detalhamento"
              itens={[
                { label: 'Financiamentos', valor: result.detalhes.financiamentos },
                { label: 'Empréstimos', valor: result.detalhes.emprestimos },
                { label: 'Cartão de Crédito', valor: result.detalhes.cartaoCredito },
                { label: 'Outras Parcelas', valor: result.detalhes.outrasParcelas },
              ]}
            />
          </>
        )
      case 'quitacao-dividas':
        return (
          <ResultadoCard
            titulo="Plano de Quitação"
            descricao={`Quitação em ${result.meses} meses`}
            itens={[
              { label: 'Valor Original da Dívida', valor: result.valorOriginal },
              { label: 'Total Pago', valor: result.totalPago },
              { label: 'Total de Juros', valor: result.totalJuros, negativo: true },
              { label: 'Meses para Quitar', valor: `${result.meses} meses` as string | number, destaque: true },
            ]}
          />
        )
      case 'meta-financeira':
        return (
          <ResultadoCard
            titulo="Meta Financeira"
            descricao={`Tempo estimado: ${result.meses} meses (${Math.floor(result.meses / 12)} anos e ${result.meses % 12} meses)`}
            itens={[
              { label: 'Total Investido', valor: result.totalInvestido },
              ...(result.totalJuros > 0 ? [{ label: 'Total em Juros', valor: result.totalJuros }] : []),
              ...(result.valorFinal ? [{ label: 'Valor Final', valor: result.valorFinal, destaque: true }] : []),
              { label: 'Meses Necessários', valor: `${result.meses} meses` as string | number, destaque: true },
            ]}
          />
        )
      case 'juros-compostos':
        return (
          <ResultadoCard
            titulo="Juros Compostos"
            descricao={`Após ${inputs.meses || '0'} meses`}
            itens={[
              { label: 'Montante Final', valor: result.montanteFinal, destaque: true },
              { label: 'Total Investido', valor: result.totalInvestido },
              { label: 'Total em Juros', valor: result.totalJuros },
            ]}
          />
        )
      case 'juros-simples':
        return (
          <ResultadoCard
            titulo="Juros Simples"
            descricao={`Após ${inputs.meses || '0'} meses`}
            itens={[
              { label: 'Montante Final', valor: result.montante, destaque: true },
              { label: 'Total de Juros', valor: result.juros },
              { label: 'Taxa Total', valor: result.taxaTotal },
            ]}
          />
        )
      case 'emprestimo':
        return (
          <ResultadoCard
            titulo="Simulação de Empréstimo"
            descricao={`Tabela Price — ${inputs.meses || '0'} parcelas`}
            itens={[
              { label: 'Valor da Parcela', valor: result.valorParcela, destaque: true },
              { label: 'Total a Pagar', valor: result.totalPago },
              { label: 'Total de Juros', valor: result.totalJuros, negativo: true },
              { label: 'CET', valor: result.cet },
            ]}
          />
        )
      case 'financiamento':
        return (
          <ResultadoCard
            titulo="Simulação de Financiamento"
            descricao={`Sistema SAC — ${inputs.meses || '0'} parcelas`}
            itens={[
              { label: 'Primeira Parcela', valor: result.primeiraParcela, destaque: true },
              { label: 'Última Parcela', valor: result.ultimaParcela },
              { label: 'Total a Pagar', valor: result.totalPago },
              { label: 'Total de Juros', valor: result.totalJuros, negativo: true },
            ]}
          />
        )
      case 'parcelas':
        return (
          <ResultadoCard
            titulo="Calculadora de Parcelas"
            descricao={result.totalJuros > 0 ? `Com juros de ${inputs.taxaJuros || '0'}% ao mês` : 'Sem juros'}
            itens={[
              { label: 'Valor da Parcela', valor: result.valorParcela, destaque: true },
              { label: 'Total a Pagar', valor: result.totalPago },
              ...(result.totalJuros > 0 ? [{ label: 'Total de Juros', valor: result.totalJuros, negativo: true as const }] : []),
            ]}
          />
        )
      default:
        return null
    }
  }

  const relatedCalcItems = config.relatedCalculators.map((rc) => {
    const m = iconMap[Object.keys(iconMap).find((k) => calculatorsConfig[k]?.path === rc.href) || '']
    return {
      nome: rc.name,
      descricao: calculatorsConfig[Object.keys(calculatorsConfig).find((k) => calculatorsConfig[k]?.path === rc.href) || '']?.description || '',
      href: rc.href,
      icon: m?.icon || Calculator,
      cor: m?.cor || 'bg-primary/10 text-primary',
    }
  })

  const articleItems = config.relatedArticles.map((ra) => ({
    titulo: ra.name,
    descricao: '',
    href: ra.href,
  }))

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: 'Calculadoras', href: '/calculadoras' }, { label: config.title }]} />

          <div className="text-center mb-8">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${cor} mb-4`}>
              <HeaderIconComponent className="w-8 h-8" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">{config.title}</h1>
            <p className="text-muted-foreground">{config.description}</p>
          </div>

          {['emprestimo', 'financiamento', 'parcelas', 'troca-dividas', 'quitacao-dividas', 'capacidade-endividamento'].includes(calculadoraKey) && (
            <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800 flex items-start gap-3">
              <Info className="w-5 h-5 shrink-0 mt-0.5 text-amber-500" />
              <p>
                Esta calculadora tem finalidade exclusivamente educativa e informativa. Os resultados são estimativas 
                e não substituem a análise de instituições financeiras ou orientação profissional.
              </p>
            </div>
          )}

          <div className="flex justify-center mb-6">
            <CalculadoraSchema calculadoraKey={calculadoraKey} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5" />
                  Dados para Cálculo
                </CardTitle>
                <CardDescription>Preencha os campos abaixo para calcular</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {renderForm()}

                {error && (
                  <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-md">
                    {error}
                  </div>
                )}

                <div className="flex gap-3 pt-4">
                  <Button onClick={handleCalcular} className="flex-1">
                    Calcular
                  </Button>
                  <Button onClick={limpar} variant="outline">
                    Limpar
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              {result ? (
                renderResult()
              ) : (
                <Card className="h-full flex items-center justify-center min-h-[300px]">
                  <CardContent className="text-center">
                    <Calculator className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                    <p className="text-muted-foreground">Preencha os dados ao lado para calcular</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          <section className="mt-12 prose prose-gray max-w-none">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Sobre {config.title}</h2>
            <p className="text-muted-foreground">{config.description}</p>
            <h3 className="text-lg font-medium text-foreground mt-6 mb-2">Como funciona</h3>
            <ol className="list-decimal list-inside text-muted-foreground space-y-2">
              {config.steps.map((step, i) => (
                <li key={i}><strong>{step.name}:</strong> {step.text}</li>
              ))}
            </ol>
          </section>

          <FAQSection items={config.faq.map((f) => ({ question: f.question, answer: f.answer }))} pageUrl={config.path} />

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Calculadoras Relacionadas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedCalcItems.map((calc) => {
                const Icon = calc.icon
                return (
                  <a key={calc.href} href={calc.href} className="group">
                    <Card className="h-full transition-colors hover:border-primary/50">
                      <CardContent className="flex items-start gap-4 pt-6">
                        <div className={`w-10 h-10 rounded-lg ${calc.cor} flex items-center justify-center shrink-0`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-medium mb-1">{calc.nome}</p>
                          <p className="text-xs text-muted-foreground">{calc.descricao}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                )
              })}
            </div>
          </div>

          <ArtigosRelacionados artigos={articleItems} />
        </div>
      </div>
    </div>
  )
}
