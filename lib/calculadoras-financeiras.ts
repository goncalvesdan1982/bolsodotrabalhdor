// ============================================================
// CALCULADORAS FINANCEIRAS — BOLSO DO TRABALHADOR
// Engine central de cálculos financeiros
// ============================================================

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
      valor: Math.round(montante * 100) / 100,
      juros: Math.round(juros * 100) / 100,
    })
  }

  const totalInvestido = valorInicial + aporteMensal * meses
  const totalJuros = montante - totalInvestido

  return {
    montanteFinal: Math.round(montante * 100) / 100,
    totalInvestido: Math.round(totalInvestido * 100) / 100,
    totalJuros: Math.round(totalJuros * 100) / 100,
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
    juros: Math.round(juros * 100) / 100,
    montante: Math.round(montante * 100) / 100,
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
      parcela: Math.round(parcela * 100) / 100,
      juros: Math.round(jurosMes * 100) / 100,
      amortizacao: Math.round(amortizacaoMes * 100) / 100,
      saldo: Math.round(Math.max(saldo, 0) * 100) / 100,
    })
  }

  return {
    valorParcela: Math.round(parcela * 100) / 100,
    totalPago: Math.round(totalPago * 100) / 100,
    totalJuros: Math.round(totalJuros * 100) / 100,
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
      parcela: Math.round(parcela * 100) / 100,
      juros: Math.round(juros * 100) / 100,
      amortizacao: Math.round(amortizacaoFixa * 100) / 100,
      saldo: Math.round(Math.max(saldo, 0) * 100) / 100,
    })
  }

  return {
    primeiraParcela: Math.round(parcelas[0].parcela * 100) / 100,
    ultimaParcela: Math.round(parcelas[parcelas.length - 1].parcela * 100) / 100,
    totalPago: Math.round(totalPago * 100) / 100,
    totalJuros: Math.round(totalJuros * 100) / 100,
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
      valorParcela: Math.round(valorParcela * 100) / 100,
      totalPago: valorTotal,
      totalJuros: 0,
      parcelas: Array.from({ length: numeroParcelas }, (_, i) => ({
        numero: i + 1,
        valor: Math.round(valorParcela * 100) / 100,
      })),
    }
  }

  const i = taxaMensal / 100
  const parcela = (valorTotal * i * Math.pow(1 + i, numeroParcelas)) / (Math.pow(1 + i, numeroParcelas) - 1)
  const totalPago = parcela * numeroParcelas
  const totalJuros = totalPago - valorTotal

  return {
    valorParcela: Math.round(parcela * 100) / 100,
    totalPago: Math.round(totalPago * 100) / 100,
    totalJuros: Math.round(totalJuros * 100) / 100,
    parcelas: Array.from({ length: numeroParcelas }, (_, i) => ({
      numero: i + 1,
      valor: Math.round(parcela * 100) / 100,
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
    valorIdeal: Math.round(valorIdeal * 100) / 100,
    mesesRecomendados: meses,
    gastoMensal: Math.round(gastosMensais * 100) / 100,
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
    valor: Math.round(valor * 100) / 100,
    percentual: renda > 0 ? Math.round((valor / renda) * 10000) / 100 : 0,
  }))

  return {
    renda: Math.round(renda * 100) / 100,
    totalGastos: Math.round(totalGastos * 100) / 100,
    saldo: Math.round(saldo * 100) / 100,
    categorias,
    percentualGastos: renda > 0 ? Math.round((totalGastos / renda) * 10000) / 100 : 0,
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
    rendaMensal: Math.round(rendaMensal * 100) / 100,
    gastosFixos: Math.round(gastosFixos * 100) / 100,
    rendaDisponivel: Math.round(rendaDisponivel * 100) / 100,
    limiteRecomendado: Math.round(limiteRecomendado * 100) / 100,
    comprometimentoAtual: Math.round(comprometimentoAtual * 100) / 100,
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
    rendaMensal: Math.round(rendaMensal * 100) / 100,
    totalDividas: Math.round(totalDividas * 100) / 100,
    percentual: Math.round(percentual * 100) / 100,
    classificacao,
    detalhes: {
      financiamentos: Math.round(financiamentos * 100) / 100,
      emprestimos: Math.round(emprestimos * 100) / 100,
      cartaoCredito: Math.round(cartaoCredito * 100) / 100,
      outrasParcelas: Math.round(outrasParcelas * 100) / 100,
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
      pagamento: Math.round(pagamento * 100) / 100,
      juros: Math.round(jurosMes * 100) / 100,
      saldo: Math.round(Math.max(saldo, 0) * 100) / 100,
    })
    if (saldo < 0.01) break
  }

  if (meses >= 600) {
    return { erro: 'Valor de pagamento muito baixo para cobrir os juros.' }
  }

  return {
    meses,
    totalPago: Math.round(totalPago * 100) / 100,
    totalJuros: Math.round(totalJuros * 100) / 100,
    valorOriginal: Math.round(valorDivida * 100) / 100,
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
    parcelaAtual: Math.round(parcelaAtual * 100) / 100,
    parcelaNova: Math.round(parcelaNova * 100) / 100,
    totalAtual: Math.round(totalAtual * 100) / 100,
    totalNovo: Math.round(totalNovo * 100) / 100,
    economia: Math.round(economia * 100) / 100,
    diferencaMensal: Math.round(diferencaMensal * 100) / 100,
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
    renda: Math.round(renda * 100) / 100,
    gastos: Math.round(gastos * 100) / 100,
    potencialEconomia: Math.round(potencial * 100) / 100,
    mesesParaObjetivo,
    objetivoEconomia: Math.round(objetivoEconomia * 100) / 100,
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
      totalInvestido: Math.round(valorMensal * meses * 100) / 100,
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
    historico.push({ mes, valor: Math.round(acumulado * 100) / 100 })
  }

  const totalInvestido = valorMensal * mes
  const totalJuros = acumulado - totalInvestido

  return {
    meses: mes,
    totalInvestido: Math.round(totalInvestido * 100) / 100,
    totalJuros: Math.round(totalJuros * 100) / 100,
    valorFinal: Math.round(acumulado * 100) / 100,
    historico,
  }
}
