// ============================================================
// CALCULADORAS FINANCEIRAS — BOLSO DO TRABALHADOR
// Engine central de cálculos financeiros
// ============================================================

export function round2(n: number): number {
  return Math.round(n * 100) / 100
}

export function formatarMoeda(valor: number): string {
  return valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

export function formatarPercentual(valor: number): string {
  return valor.toFixed(2).replace('.', ',') + '%'
}

// --- JUROS COMPOSTOS ---
export function calcularJurosCompostos(
  valorInicial: number,
  taxaMensal: number,
  meses: number,
  aporteMensal: number = 0
) {
  let montante = valorInicial
  const historico: { mes: number; valor: number; juros: number }[] = []

  for (let m = 1; m <= meses; m++) {
    const juros = montante * (taxaMensal / 100)
    montante = montante + juros + aporteMensal
    historico.push({
      mes: m,
      valor: round2(montante),
      juros: round2(juros),
    })
  }

  const totalInvestido = valorInicial + aporteMensal * meses
  const totalJuros = montante - totalInvestido

  return {
    montanteFinal: round2(montante),
    totalInvestido: round2(totalInvestido),
    totalJuros: round2(totalJuros),
    historico,
  }
}

// --- JUROS SIMPLES ---
export function calcularJurosSimples(
  valorInicial: number,
  taxaMensal: number,
  meses: number
) {
  const taxaDecimal = taxaMensal / 100
  const juros = valorInicial * taxaDecimal * meses
  const montante = valorInicial + juros

  return {
    juros: round2(juros),
    montante: round2(montante),
    taxaTotal: formatarPercentual(taxaDecimal * meses * 100),
  }
}

// --- EMPRÉSTIMO (Price) ---
export function calcularEmprestimo(
  valor: number,
  taxaMensal: number,
  meses: number
) {
  const i = taxaMensal / 100
  const parcela = (valor * i * Math.pow(1 + i, meses)) / (Math.pow(1 + i, meses) - 1)
  const totalPago = parcela * meses
  const totalJuros = totalPago - valor

  const amortizacao: { mes: number; parcela: number; juros: number; amortizacao: number; saldo: number }[] = []
  let saldo = valor

  for (let m = 1; m <= meses; m++) {
    const jurosMes = saldo * i
    const amortizacaoMes = parcela - jurosMes
    saldo -= amortizacaoMes
    amortizacao.push({
      mes: m,
      parcela: round2(parcela),
      juros: round2(jurosMes),
      amortizacao: round2(amortizacaoMes),
      saldo: round2(Math.max(saldo, 0)),
    })
  }

  return {
    valorParcela: round2(parcela),
    totalPago: round2(totalPago),
    totalJuros: round2(totalJuros),
    cet: formatarPercentual((totalJuros / valor) * 100),
    amortizacao,
  }
}

// --- FINANCIAMENTO (SAC) ---
export function calcularFinanciamento(
  valor: number,
  taxaMensal: number,
  meses: number
) {
  const i = taxaMensal / 100
  const amortizacaoFixa = valor / meses

  const parcelas: { mes: number; parcela: number; juros: number; amortizacao: number; saldo: number }[] = []
  let saldo = valor
  let totalPago = 0
  let totalJuros = 0

  for (let m = 1; m <= meses; m++) {
    const juros = saldo * i
    const parcela = amortizacaoFixa + juros
    saldo -= amortizacaoFixa
    totalPago += parcela
    totalJuros += juros
    parcelas.push({
      mes: m,
      parcela: round2(parcela),
      juros: round2(juros),
      amortizacao: round2(amortizacaoFixa),
      saldo: round2(Math.max(saldo, 0)),
    })
  }

  return {
    primeiraParcela: round2(parcelas[0].parcela),
    ultimaParcela: round2(parcelas[parcelas.length - 1].parcela),
    totalPago: round2(totalPago),
    totalJuros: round2(totalJuros),
    parcelas,
  }
}

// --- PARCELAS ---
export function calcularParcelas(
  valorTotal: number,
  numeroParcelas: number,
  taxaMensal: number = 0
) {
  if (taxaMensal === 0) {
    const valorParcela = valorTotal / numeroParcelas
    return {
      valorParcela: round2(valorParcela),
      totalPago: valorTotal,
      totalJuros: 0,
      parcelas: Array.from({ length: numeroParcelas }, (_, i) => ({
        numero: i + 1,
        valor: round2(valorParcela),
      })),
    }
  }

  const i = taxaMensal / 100
  const parcela = (valorTotal * i * Math.pow(1 + i, numeroParcelas)) / (Math.pow(1 + i, numeroParcelas) - 1)
  const totalPago = parcela * numeroParcelas
  const totalJuros = totalPago - valorTotal

  return {
    valorParcela: round2(parcela),
    totalPago: round2(totalPago),
    totalJuros: round2(totalJuros),
    parcelas: Array.from({ length: numeroParcelas }, (_, i) => ({
      numero: i + 1,
      valor: round2(parcela),
    })),
  }
}

// --- RESERVA DE EMERGÊNCIA ---
export function calcularReservaEmergencia(
  gastosMensais: number,
  meses: number = 6
) {
  const valorIdeal = gastosMensais * meses
  return {
    valorIdeal: round2(valorIdeal),
    mesesRecomendados: meses,
    gastoMensal: round2(gastosMensais),
  }
}

// --- ORÇAMENTO FAMILIAR ---
export function calcularOrcamentoFamiliar(renda: number, gastos: {
  moradia: number
  alimentacao: number
  transporte: number
  saude: number
  educacao: number
  lazer: number
  outras: number
}) {
  const totalGastos = Object.values(gastos).reduce((a, b) => a + b, 0)
  const saldo = renda - totalGastos

  const categorias = Object.entries(gastos).map(([nome, valor]) => ({
    nome,
    valor: round2(valor),
    percentual: renda > 0 ? round2((valor / renda) * 100) : 0,
  }))

  return {
    renda: round2(renda),
    totalGastos: round2(totalGastos),
    saldo: round2(saldo),
    categorias,
    percentualGastos: renda > 0 ? round2((totalGastos / renda) * 100) : 0,
  }
}

// --- CAPACIDADE DE ENDIVIDAMENTO ---
export function calcularCapacidadeEndividamento(
  rendaMensal: number,
  gastosFixos: number,
  dividasAtuais: number
) {
  const rendaDisponivel = rendaMensal - gastosFixos
  const limiteRecomendado = rendaMensal * 0.3
  const comprometimentoAtual = rendaMensal > 0 ? (dividasAtuais / rendaMensal) * 100 : 0

  return {
    rendaMensal: round2(rendaMensal),
    gastosFixos: round2(gastosFixos),
    rendaDisponivel: round2(rendaDisponivel),
    limiteRecomendado: round2(limiteRecomendado),
    comprometimentoAtual: round2(comprometimentoAtual),
    comprometimentoAtualLabel: comprometimentoAtual <= 30 ? 'Saudável' : comprometimentoAtual <= 50 ? 'Atenção' : 'Risco',
  }
}

// --- COMPROMETIMENTO DE RENDA ---
export function calcularComprometimentoRenda(
  rendaMensal: number,
  financiamentos: number,
  emprestimos: number,
  cartaoCredito: number,
  outrasParcelas: number
) {
  const totalDividas = financiamentos + emprestimos + cartaoCredito + outrasParcelas
  const percentual = rendaMensal > 0 ? (totalDividas / rendaMensal) * 100 : 0

  let classificacao: 'saudavel' | 'atencao' | 'risco'
  if (percentual <= 30) classificacao = 'saudavel'
  else if (percentual <= 50) classificacao = 'atencao'
  else classificacao = 'risco'

  return {
    rendaMensal: round2(rendaMensal),
    totalDividas: round2(totalDividas),
    percentual: round2(percentual),
    classificacao,
    detalhes: {
      financiamentos: round2(financiamentos),
      emprestimos: round2(emprestimos),
      cartaoCredito: round2(cartaoCredito),
      outrasParcelas: round2(outrasParcelas),
    },
  }
}

// --- QUITAÇÃO DE DÍVIDAS ---
export function calcularQuitacaoDividas(
  valorDivida: number,
  taxaMensal: number,
  pagamentoMensal: number
) {
  let saldo = valorDivida
  let totalPago = 0
  let totalJuros = 0
  let meses = 0
  const i = taxaMensal / 100
  const historico: { mes: number; pagamento: number; juros: number; saldo: number }[] = []

  while (saldo > 0 && meses < 600) {
    meses++
    const jurosMes = saldo * i
    let pagamento = Math.min(pagamentoMensal, saldo + jurosMes)
    saldo = saldo + jurosMes - pagamento
    totalPago += pagamento
    totalJuros += jurosMes
    historico.push({
      mes: meses,
      pagamento: round2(pagamento),
      juros: round2(jurosMes),
      saldo: round2(Math.max(saldo, 0)),
    })
    if (saldo < 0.01) break
  }

  if (meses >= 600) {
    return { erro: 'Valor de pagamento muito baixo para cobrir os juros.' }
  }

  return {
    meses,
    totalPago: round2(totalPago),
    totalJuros: round2(totalJuros),
    valorOriginal: round2(valorDivida),
    historico,
  }
}

// --- TROCA DE DÍVIDA ---
export function calcularTrocaDivida(
  valorDivida: number,
  taxaAtual: number,
  taxaNova: number,
  prazoAtualRestante: number,
  prazoNovo: number
) {
  const emprestimoAtual = valorDivida
  const iAtual = taxaAtual / 100
  const iNovo = taxaNova / 100

  // Parcela atual
  const parcelaAtual = (emprestimoAtual * iAtual * Math.pow(1 + iAtual, prazoAtualRestante)) /
    (Math.pow(1 + iAtual, prazoAtualRestante) - 1)
  const totalAtual = parcelaAtual * prazoAtualRestante

  // Nova parcela
  const parcelaNova = (emprestimoAtual * iNovo * Math.pow(1 + iNovo, prazoNovo)) /
    (Math.pow(1 + iNovo, prazoNovo) - 1)
  const totalNovo = parcelaNova * prazoNovo

  const economia = totalAtual - totalNovo
  const diferencaMensal = parcelaAtual - parcelaNova

  return {
    parcelaAtual: round2(parcelaAtual),
    parcelaNova: round2(parcelaNova),
    totalAtual: round2(totalAtual),
    totalNovo: round2(totalNovo),
    economia: round2(economia),
    diferencaMensal: round2(diferencaMensal),
    prazoAtual: prazoAtualRestante,
    prazoNovo,
  }
}

// --- ECONOMIA MENSAL ---
export function calcularEconomiaMensal(
  renda: number,
  gastos: number,
  objetivoEconomia: number
) {
  const potencial = renda - gastos
  const mesesParaObjetivo = objetivoEconomia > 0 && potencial > 0
    ? Math.ceil(objetivoEconomia / potencial)
    : 0

  return {
    renda: round2(renda),
    gastos: round2(gastos),
    potencialEconomia: round2(potencial),
    mesesParaObjetivo,
    objetivoEconomia: round2(objetivoEconomia),
  }
}

// --- META FINANCEIRA ---
export function calcularMetaFinanceira(
  valorObjetivo: number,
  valorMensal: number,
  taxaMensal: number = 0
) {
  if (valorMensal <= 0) return { erro: 'O valor mensal deve ser maior que zero.' }
  if (taxaMensal === 0) {
    const meses = Math.ceil(valorObjetivo / valorMensal)
    return {
      meses,
      totalInvestido: round2(valorMensal * meses),
      totalJuros: 0,
    }
  }

  const i = taxaMensal / 100
  let mes = 0
  let acumulado = 0
  const historico: { mes: number; valor: number }[] = []

  while (acumulado < valorObjetivo && mes < 1200) {
    mes++
    acumulado = (acumulado + valorMensal) * (1 + i)
    historico.push({ mes, valor: round2(acumulado) })
  }

  const totalInvestido = valorMensal * mes
  const totalJuros = acumulado - totalInvestido

  return {
    meses: mes,
    totalInvestido: round2(totalInvestido),
    totalJuros: round2(totalJuros),
    valorFinal: round2(acumulado),
    historico,
  }
}
