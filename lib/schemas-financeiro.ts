import { SITE_URL } from '@/lib/config'

const siteUrl = SITE_URL
const author = { '@type': 'Organization' as const, name: 'Bolso do Trabalhador', url: siteUrl }

export interface HowToStep {
  position: number
  name: string
  text: string
}

export interface FAQItem {
  question: string
  answer: string
}

export function gerarWebApplication(name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name,
    description,
    url: `${siteUrl}${path}`,
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'All',
    browserRequirements: 'Requires JavaScript',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
    author,
  }
}

export function gerarHowTo(name: string, description: string, steps: HowToStep[], path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    url: `${siteUrl}${path}`,
    totalTime: 'PT5M',
    tool: { '@type': 'HowToTool', name },
    step: steps.map((s) => ({
      '@type': 'HowToStep',
      position: s.position,
      name: s.name,
      text: s.text,
    })),
  }
}

export function gerarFAQSchema(items: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function gerarBreadcrumbSchema(items: { name: string; href?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.name,
        item: item.href ? `${siteUrl}${item.href}` : undefined,
      })),
    ],
  }
}

type CalculatorConfig = {
  path: string
  title: string
  description: string
  webAppName: string
  webAppDescription: string
  howToName: string
  howToDescription: string
  steps: Omit<HowToStep, 'position'>[]
  faq: FAQItem[]
  keywords: string[]
  relatedCalculators: { name: string; href: string }[]
  relatedArticles: { name: string; href: string }[]
}

export const calculatorsConfig: Record<string, CalculatorConfig> = {
  'juros-compostos': {
    path: '/calculadoras/juros-compostos',
    title: 'Calculadora de Juros Compostos',
    description: 'Calcule juros compostos com aportes mensais. Simule o crescimento do seu dinheiro ao longo do tempo com nossa calculadora gratuita.',
    webAppName: 'Calculadora de Juros Compostos',
    webAppDescription: 'Calcule o montante final com juros compostos, incluindo aportes mensais. Veja a evolução mês a mês do seu investimento.',
    howToName: 'Como calcular juros compostos',
    howToDescription: 'Aprenda a calcular juros compostos com aportes mensais passo a passo.',
    steps: [
      { name: 'Informe o valor inicial', text: 'Digite o valor que você já tem guardado para começar.' },
      { name: 'Informe a taxa de juros', text: 'Digite a taxa de juros mensal em percentual.' },
      { name: 'Defina o período', text: 'Escolha em quantos meses você quer simular.' },
      { name: 'Adicione aportes mensais', text: 'Informe quanto você pretende adicionar todo mês (opcional).' },
      { name: 'Calcule e veja o resultado', text: 'Clique em Calcular e confira a projeção mês a mês.' },
    ],
    faq: [
      { question: 'O que são juros compostos?', answer: 'Juros compostos são juros sobre juros. O valor dos juros de cada período é adicionado ao capital, gerando novos juros no período seguinte. É o chamado "juros sobre juros" e é o tipo mais comum de rendimento em investimentos e cobrança em dívidas.' },
      { question: 'Qual a diferença entre juros compostos e simples?', answer: 'Nos juros simples, os juros são calculados sempre sobre o valor inicial. Nos juros compostos, os juros são calculados sobre o valor atualizado a cada período, gerando crescimento exponencial ao longo do tempo.' },
      { question: 'Como calcular juros compostos na mão?', answer: 'A fórmula é: M = C × (1 + i)^t, onde M é o montante final, C é o capital inicial, i é a taxa de juros por período e t é o tempo em períodos.' },
    ],
    keywords: ['juros compostos', 'calcular juros compostos', 'simulador juros compostos', 'juros compostos mensais'],
    relatedCalculators: [
      { name: 'Juros Simples', href: '/calculadoras/juros-simples' },
      { name: 'Empréstimo', href: '/calculadoras/emprestimo' },
      { name: 'Meta Financeira', href: '/calculadoras/meta-financeira' },
    ],
    relatedArticles: [
      { name: 'Como sair das dívidas: guia passo a passo', href: '/dividas/como-sair-das-dividas' },
      { name: 'Reserva de emergência: quanto guardar?', href: '/organizacao-financeira/reserva-emergencia' },
      { name: 'Como controlar gastos do dia a dia', href: '/organizacao-financeira/como-controlar-gastos' },
    ],
  },
  'juros-simples': {
    path: '/calculadoras/juros-simples',
    title: 'Calculadora de Juros Simples',
    description: 'Calcule juros simples de forma rápida e precisa. Ideal para empréstimos de curto prazo e cálculos financeiros simples.',
    webAppName: 'Calculadora de Juros Simples',
    webAppDescription: 'Calcule o montante e os juros simples de forma rápida. Ferramenta gratuita para cálculos financeiros do dia a dia.',
    howToName: 'Como calcular juros simples',
    howToDescription: 'Passo a passo para calcular juros simples em qualquer situação.',
    steps: [
      { name: 'Informe o valor principal', text: 'Digite o valor inicial do cálculo.' },
      { name: 'Informe a taxa de juros', text: 'Digite a taxa de juros mensal.' },
      { name: 'Defina o período', text: 'Informe a quantidade de meses.' },
      { name: 'Calcule', text: 'Clique em Calcular para ver os juros e o montante final.' },
    ],
    faq: [
      { question: 'O que são juros simples?', answer: 'Juros simples são calculados sempre sobre o valor inicial, sem incorporar os juros de períodos anteriores. É o tipo mais básico de cálculo de juros.' },
      { question: 'Onde os juros simples são usados?', answer: 'Juros simples são comuns em empréstimos de curto prazo, cheques especiais, contas em atraso e algumas operações financeiras simples.' },
      { question: 'Como calcular juros simples manualmente?', answer: 'A fórmula é: J = C × i × t, onde J são os juros, C é o capital, i é a taxa por período e t é o tempo. O montante é M = C + J.' },
    ],
    keywords: ['juros simples', 'calcular juros simples', 'calculadora juros simples', 'fórmula juros simples'],
    relatedCalculators: [
      { name: 'Juros Compostos', href: '/calculadoras/juros-compostos' },
      { name: 'Parcelas', href: '/calculadoras/parcelas' },
      { name: 'Quitação de Dívidas', href: '/calculadoras/quitacao-dividas' },
    ],
    relatedArticles: [
      { name: 'Como calcular juros de empréstimo', href: '/emprestimos/como-calcular-juros-emprestimo' },
      { name: 'Dívida no cartão: o que fazer?', href: '/dividas/divida-cartao-o-que-fazer' },
      { name: 'Empréstimo pessoal ou consignado?', href: '/emprestimos/emprestimo-pessoal-consignado' },
    ],
  },
  emprestimo: {
    path: '/calculadoras/emprestimo',
    title: 'Calculadora de Empréstimo',
    description: 'Simule empréstimos com tabela Price. Calcule parcelas, juros totais e CET. Compare diferentes cenários antes de contratar.',
    webAppName: 'Calculadora de Empréstimo',
    webAppDescription: 'Simule empréstimos pessoais com parcelas fixas. Veja o valor de cada parcela, total de juros e CET de forma gratuita.',
    howToName: 'Como simular um empréstimo',
    howToDescription: 'Passo a passo para simular empréstimos e entender os custos envolvidos.',
    steps: [
      { name: 'Informe o valor do empréstimo', text: 'Digite quanto você quer pegar emprestado.' },
      { name: 'Informe a taxa de juros', text: 'Digite a taxa de juros mensal cobrada.' },
      { name: 'Escolha o prazo', text: 'Selecione em quantos meses deseja pagar.' },
      { name: 'Calcule e veja', text: 'Clique em Calcular para ver parcela, total e juros.' },
    ],
    faq: [
      { question: 'O que é CET?', answer: 'CET é o Custo Efetivo Total do empréstimo. Ele inclui não apenas os juros, mas também todas as taxas, seguros e despesas envolvidas na operação de crédito.' },
      { question: 'Qual a diferença entre taxa de juros e CET?', answer: 'A taxa de juros é o percentual cobrado sobre o valor emprestado. O CET inclui a taxa de juros mais todos os outros encargos, sendo mais próximo do custo real do empréstimo.' },
      { question: 'Como conseguir a menor taxa de empréstimo?', answer: 'Compare diferentes instituições, mantenha um bom score de crédito, negocie descontos para pagamento em débito automático e considere modalidades como consignado que têm taxas mais baixas.' },
    ],
    keywords: ['simular emprestimo', 'calculadora emprestimo', 'calcular parcelas emprestimo', 'simulador credito'],
    relatedCalculators: [
      { name: 'Financiamento', href: '/calculadoras/financiamento' },
      { name: 'Juros Compostos', href: '/calculadoras/juros-compostos' },
      { name: 'Capacidade de Endividamento', href: '/calculadoras/capacidade-endividamento' },
    ],
    relatedArticles: [
      { name: 'Empréstimo pessoal ou consignado?', href: '/emprestimos/emprestimo-pessoal-consignado' },
      { name: 'Como comparar empréstimos', href: '/emprestimos/como-comparar-emprestimos' },
      { name: 'Refinanciamento compensa?', href: '/emprestimos/refinanciamento-compensa' },
    ],
  },
  financiamento: {
    path: '/calculadoras/financiamento',
    title: 'Calculadora de Financiamento',
    description: 'Calcule financiamento imobiliário ou de veículos pelo sistema SAC. Veja a evolução das parcelas e o total de juros pagos.',
    webAppName: 'Calculadora de Financiamento SAC',
    webAppDescription: 'Calcule financiamentos pelo sistema de amortização constante (SAC). Simule parcelas decrescentes para imóveis e veículos.',
    howToName: 'Como calcular financiamento',
    howToDescription: 'Aprenda a simular financiamentos pelo sistema SAC.',
    steps: [
      { name: 'Informe o valor do financiamento', text: 'Digite o valor total a ser financiado.' },
      { name: 'Informe a taxa de juros', text: 'Digite a taxa de juros mensal.' },
      { name: 'Escolha o prazo', text: 'Selecione em quantas parcelas vai pagar.' },
      { name: 'Calcule', text: 'Veja a primeira e última parcela, total de juros e tabela completa.' },
    ],
    faq: [
      { question: 'O que é o sistema SAC?', answer: 'SAC significa Sistema de Amortização Constante. Nele, o valor da amortização é fixo, e as parcelas são decrescentes ao longo do tempo, pois os juros diminuem conforme o saldo devedor reduz.' },
      { question: 'Qual a diferença entre SAC e Price?', answer: 'No SAC as parcelas começam maiores e vão diminuindo. No Price (tabela Price) as parcelas são fixas do início ao fim. O SAC geralmente resulta em menos juros totais pagos.' },
      { question: 'Financiamento imobiliário vale a pena?', answer: 'O financiamento imobiliário pode valer a pena se as parcelas cabem no seu orçamento (idealmente até 30% da renda) e se o imóvel se valoriza ao longo do tempo. Compare o total de juros com o valor do aluguel no mesmo período.' },
    ],
    keywords: ['simular financiamento', 'calculadora financiamento', 'financiamento imobiliario', 'calcular financiamento', 'tabela sac'],
    relatedCalculators: [
      { name: 'Empréstimo', href: '/calculadoras/emprestimo' },
      { name: 'Comprometimento de Renda', href: '/calculadoras/comprometimento-renda' },
      { name: 'Capacidade de Endividamento', href: '/calculadoras/capacidade-endividamento' },
    ],
    relatedArticles: [
      { name: 'Refinanciamento compensa?', href: '/emprestimos/refinanciamento-compensa' },
      { name: 'Como calcular juros de empréstimo', href: '/emprestimos/como-calcular-juros-emprestimo' },
      { name: 'Quanto comprometer da renda', href: '/organizacao-financeira/quanto-comprometer-renda' },
    ],
  },
  parcelas: {
    path: '/calculadoras/parcelas',
    title: 'Calculadora de Parcelas',
    description: 'Calcule o valor de parcelas com ou sem juros. Simule compras parceladas e veja o custo total de cada parcela.',
    webAppName: 'Calculadora de Parcelas',
    webAppDescription: 'Calcule parcelas de compras com ou sem acréscimo de juros. Veja o valor de cada parcela e o total a pagar.',
    howToName: 'Como calcular parcelas',
    howToDescription: 'Aprenda a calcular o valor de parcelas em compras parceladas.',
    steps: [
      { name: 'Informe o valor total', text: 'Digite o valor total da compra.' },
      { name: 'Informe o número de parcelas', text: 'Digite em quantas parcelas deseja dividir.' },
      { name: 'Informe os juros', text: 'Se houver juros, informe a taxa mensal. Caso contrário, deixe 0.' },
      { name: 'Calcule', text: 'Veja o valor de cada parcela e o total com juros.' },
    ],
    faq: [
      { question: 'Compensa parcelar com juros?', answer: 'Parcelar com juros pode ser vantajoso se você não tem o valor à vista e precisa do produto, mas idealmente evite juros. Se for parcelar, calcule o custo total e veja se cabe no orçamento.' },
      { question: 'Qual a diferença entre parcelar com e sem juros?', answer: 'Sem juros, o valor total é o mesmo, dividido igualmente. Com juros, o valor final é maior que o inicial, pois são aplicados juros sobre o saldo devedor.' },
      { question: 'Quantas parcelas é ideal?', answer: 'O ideal é parcelar sem juros no menor número possível. Com juros, prefira prazos mais curtos para pagar menos juros no total.' },
    ],
    keywords: ['calcular parcelas', 'simulador parcelas', 'calcular parcelas com juros', 'parcelar compras'],
    relatedCalculators: [
      { name: 'Empréstimo', href: '/calculadoras/emprestimo' },
      { name: 'Juros Simples', href: '/calculadoras/juros-simples' },
      { name: 'Economia Mensal', href: '/calculadoras/economia-mensal' },
    ],
    relatedArticles: [
      { name: 'Dívida no cartão: o que fazer?', href: '/dividas/divida-cartao-o-que-fazer' },
      { name: 'Como usar o cartão com inteligência', href: '/cartoes/como-usar-cartao-inteligencia' },
      { name: 'Juros do cartão de crédito', href: '/cartoes/juros-cartao-credito' },
    ],
  },
  'reserva-emergencia': {
    path: '/calculadoras/reserva-emergencia',
    title: 'Calculadora de Reserva de Emergência',
    description: 'Calcule quanto você precisa para formar uma reserva de emergência. Descubra o valor ideal para se proteger contra imprevistos financeiros.',
    webAppName: 'Calculadora de Reserva de Emergência',
    webAppDescription: 'Calcule o valor ideal para sua reserva de emergência baseado nos seus gastos mensais. Simulação gratuita.',
    howToName: 'Como calcular a reserva de emergência',
    howToDescription: 'Passo a passo para calcular o valor ideal da sua reserva de emergência.',
    steps: [
      { name: 'Informe seus gastos mensais', text: 'Digite o total dos seus gastos mensais fixos e variáveis.' },
      { name: 'Defina a quantidade de meses', text: 'Escolha quantos meses de gastos deseja guardar (recomendado: 6 meses).' },
      { name: 'Calcule', text: 'Clique em Calcular para ver o valor ideal da sua reserva.' },
    ],
    faq: [
      { question: 'O que é reserva de emergência?', answer: 'Reserva de emergência é um valor guardado para cobrir imprevistos como perda de emprego, problemas de saúde ou reparos urgentes. O recomendado é de 3 a 12 meses de gastos.' },
      { question: 'Quanto guardar na reserva de emergência?', answer: 'O recomendado é de 3 a 12 meses dos seus gastos mensais. Para quem tem renda estável, 3 meses pode ser suficiente. Para autônomos, o ideal é 6 a 12 meses.' },
      { question: 'Onde guardar a reserva de emergência?', answer: 'Guarde em investimentos de alta liquidez e baixo risco, como CDBs com liquidez diária, Tesouro Selic ou fundos de renda fixa que permitam resgate imediato.' },
    ],
    keywords: ['reserva emergencia', 'calcular reserva emergencia', 'fundo emergencia', 'quanto guardar emergencia'],
    relatedCalculators: [
      { name: 'Orçamento Familiar', href: '/calculadoras/orcamento-familiar' },
      { name: 'Economia Mensal', href: '/calculadoras/economia-mensal' },
      { name: 'Meta Financeira', href: '/calculadoras/meta-financeira' },
    ],
    relatedArticles: [
      { name: 'Reserva de emergência: quanto guardar?', href: '/organizacao-financeira/reserva-emergencia' },
      { name: 'Como controlar gastos do dia a dia', href: '/organizacao-financeira/como-controlar-gastos' },
      { name: 'Como sair das dívidas: guia passo a passo', href: '/dividas/como-sair-das-dividas' },
    ],
  },
  'orcamento-familiar': {
    path: '/calculadoras/orcamento-familiar',
    title: 'Calculadora de Orçamento Familiar',
    description: 'Organize suas finanças com a calculadora de orçamento familiar. Veja para onde seu dinheiro está indo e encontre oportunidades de economia.',
    webAppName: 'Calculadora de Orçamento Familiar',
    webAppDescription: 'Analise seu orçamento familiar detalhado: renda, gastos por categoria e saldo mensal. Ferramenta gratuita para organizar suas finanças.',
    howToName: 'Como fazer um orçamento familiar',
    howToDescription: 'Passo a passo para organizar seu orçamento familiar e controlar gastos.',
    steps: [
      { name: 'Informe sua renda', text: 'Digite sua renda mensal total.' },
      { name: 'Informe seus gastos', text: 'Preencha os gastos com moradia, alimentação, transporte, saúde, educação, lazer e outros.' },
      { name: 'Calcule', text: 'Clique em Calcular para analisar seu orçamento.' },
      { name: 'Veja o resultado', text: 'Confira o total de gastos, saldo mensal e percentual de cada categoria.' },
    ],
    faq: [
      { question: 'O que é orçamento familiar?', answer: 'Orçamento familiar é o planejamento de receitas e despesas da família. Ajuda a controlar gastos, evitar dívidas e alcançar objetivos financeiros.' },
      { question: 'Qual a regra 50-30-20?', answer: 'A regra 50-30-20 sugere: 50% da renda para gastos essenciais (moradia, alimentação), 30% para gastos pessoais (lazer, compras) e 20% para poupança e investimentos.' },
      { question: 'Como equilibrar o orçamento?', answer: 'Para equilibrar, liste todos os gastos, identifique excessos, corte despesas desnecessárias e priorize o pagamento de dívidas antes de novos gastos.' },
    ],
    keywords: ['orcamento familiar', 'calcular orcamento', 'organizar financas', 'planejamento financeiro familiar'],
    relatedCalculators: [
      { name: 'Reserva de Emergência', href: '/calculadoras/reserva-emergencia' },
      { name: 'Economia Mensal', href: '/calculadoras/economia-mensal' },
      { name: 'Comprometimento de Renda', href: '/calculadoras/comprometimento-renda' },
    ],
    relatedArticles: [
      { name: 'Como controlar gastos do dia a dia', href: '/organizacao-financeira/como-controlar-gastos' },
      { name: 'Reserva de emergência: quanto guardar?', href: '/organizacao-financeira/reserva-emergencia' },
      { name: 'Quanto comprometer da renda', href: '/organizacao-financeira/quanto-comprometer-renda' },
    ],
  },
  'capacidade-endividamento': {
    path: '/calculadoras/capacidade-endividamento',
    title: 'Calculadora de Capacidade de Endividamento',
    description: 'Descubra sua capacidade de endividamento. Calcule quanto da sua renda pode ser comprometido com dívidas sem comprometer seu orçamento.',
    webAppName: 'Calculadora de Capacidade de Endividamento',
    webAppDescription: 'Calcule sua capacidade de contratar novas dívidas com base na renda e gastos fixos. Veja o limite recomendado de 30% da renda.',
    howToName: 'Como calcular sua capacidade de endividamento',
    howToDescription: 'Passo a passo para descobrir quanto da sua renda pode ser comprometido com dívidas.',
    steps: [
      { name: 'Informe sua renda', text: 'Digite sua renda mensal total.' },
      { name: 'Informe gastos fixos', text: 'Digite seus gastos fixos mensais (aluguel, contas, etc.).' },
      { name: 'Informe dívidas atuais', text: 'Digite o total das parcelas de dívidas atuais.' },
      { name: 'Calcule', text: 'Clique em Calcular para ver sua capacidade de endividamento.' },
    ],
    faq: [
      { question: 'O que é capacidade de endividamento?', answer: 'É o limite máximo de comprometimento da renda com dívidas. O recomendado é que as parcelas não ultrapassem 30% da renda mensal líquida.' },
      { question: 'Qual o limite ideal de endividamento?', answer: 'Especialistas recomendam que o total de dívidas não ultrapasse 30% da renda mensal. Acima de 50% é considerado situação de risco financeiro.' },
      { question: 'Como melhorar minha capacidade de endividamento?', answer: 'Aumente sua renda, quite dívidas existentes, reduza gastos fixos e mantenha um bom score de crédito para conseguir melhores taxas.' },
    ],
    keywords: ['capacidade endividamento', 'limite dividas', 'calcular endividamento', 'comprometimento renda'],
    relatedCalculators: [
      { name: 'Comprometimento de Renda', href: '/calculadoras/comprometimento-renda' },
      { name: 'Quitação de Dívidas', href: '/calculadoras/quitacao-dividas' },
      { name: 'Troca de Dívidas', href: '/calculadoras/troca-dividas' },
    ],
    relatedArticles: [
      { name: 'Quanto comprometer da renda', href: '/organizacao-financeira/quanto-comprometer-renda' },
      { name: 'Como sair das dívidas: guia passo a passo', href: '/dividas/como-sair-das-dividas' },
      { name: 'Dívida no cartão: o que fazer?', href: '/dividas/divida-cartao-o-que-fazer' },
    ],
  },
  'troca-dividas': {
    path: '/calculadoras/troca-dividas',
    title: 'Calculadora de Troca de Dívidas',
    description: 'Simule a troca de uma dívida por outra com juros menores. Veja se compensa refinanciar ou portar seu crédito para outra instituição.',
    webAppName: 'Calculadora de Troca de Dívidas',
    webAppDescription: 'Compare dívida atual vs nova dívida. Calcule economia total e mensal ao trocar de instituição ou refinanciar.',
    howToName: 'Como simular a troca de dívidas',
    howToDescription: 'Passo a passo para comparar sua dívida atual com uma nova opção de crédito.',
    steps: [
      { name: 'Informe o valor da dívida', text: 'Digite o valor total da dívida atual.' },
      { name: 'Informe a taxa atual', text: 'Digite a taxa de juros mensal atual.' },
      { name: 'Informe o prazo atual', text: 'Digite quantos meses restam para quitar.' },
      { name: 'Informe a nova taxa', text: 'Digite a taxa de juros mensal da nova opção.' },
      { name: 'Informe o novo prazo', text: 'Digite o novo prazo em meses.' },
      { name: 'Calcule', text: 'Clique em Calcular para comparar e ver a economia.' },
    ],
    faq: [
      { question: 'Quando compensa trocar de dívida?', answer: 'Compensa quando a nova taxa é significativamente menor que a atual, gerando economia mesmo considerando possíveis taxas de refinanciamento ou portabilidade.' },
      { question: 'O que é portabilidade de crédito?', answer: 'É o direito de transferir uma dívida de uma instituição para outra sem custos. A nova instituição paga a dívida atual e você passa a pagar para ela, com novas condições.' },
      { question: 'Trocar de dívida afeta o score?', answer: 'A portabilidade em si não afeta negativamente o score. Mas fazer muitas consultas de crédito em curto período pode reduzir temporariamente a pontuação.' },
    ],
    keywords: ['troca dividas', 'refinanciar divida', 'portabilidade credito', 'comparar emprestimos'],
    relatedCalculators: [
      { name: 'Quitação de Dívidas', href: '/calculadoras/quitacao-dividas' },
      { name: 'Capacidade de Endividamento', href: '/calculadoras/capacidade-endividamento' },
      { name: 'Empréstimo', href: '/calculadoras/emprestimo' },
    ],
    relatedArticles: [
      { name: 'Refinanciamento compensa?', href: '/emprestimos/refinanciamento-compensa' },
      { name: 'Como comparar empréstimos', href: '/emprestimos/como-comparar-emprestimos' },
      { name: 'Empréstimo pessoal ou consignado?', href: '/emprestimos/emprestimo-pessoal-consignado' },
    ],
  },
  'economia-mensal': {
    path: '/calculadoras/economia-mensal',
    title: 'Calculadora de Economia Mensal',
    description: 'Calcule seu potencial de economia mensal. Descubra quanto sobra do seu salário e em quanto tempo pode atingir seus objetivos financeiros.',
    webAppName: 'Calculadora de Economia Mensal',
    webAppDescription: 'Calcule seu potencial de economia mensal e veja em quantos meses atinge seu objetivo financeiro.',
    howToName: 'Como calcular sua economia mensal',
    howToDescription: 'Passo a passo para calcular quanto você pode economizar por mês.',
    steps: [
      { name: 'Informe sua renda', text: 'Digite sua renda mensal total.' },
      { name: 'Informe seus gastos', text: 'Digite o total dos seus gastos mensais.' },
      { name: 'Defina seu objetivo', text: 'Digite quanto deseja economizar no total (opcional).' },
      { name: 'Calcule', text: 'Clique em Calcular para ver seu potencial de economia.' },
    ],
    faq: [
      { question: 'Quanto devo economizar por mês?', answer: 'O ideal é economizar pelo menos 20% da sua renda mensal. Se não for possível, comece com qualquer valor e aumente gradualmente.' },
      { question: 'Como aumentar minha economia mensal?', answer: 'Revise gastos fixos, corte assinaturas não utilizadas, cozinhe mais em casa, use transporte público e negocie contas como internet e plano de celular.' },
      { question: 'Economia mensal vs investimento?', answer: 'Economizar é o primeiro passo. Depois de ter uma reserva de emergência, direcione a economia mensal para investimentos que rendam acima da inflação.' },
    ],
    keywords: ['economia mensal', 'calcular economia', 'potencial economia', 'quanto economizar mes'],
    relatedCalculators: [
      { name: 'Reserva de Emergência', href: '/calculadoras/reserva-emergencia' },
      { name: 'Meta Financeira', href: '/calculadoras/meta-financeira' },
      { name: 'Orçamento Familiar', href: '/calculadoras/orcamento-familiar' },
    ],
    relatedArticles: [
      { name: 'Como controlar gastos do dia a dia', href: '/organizacao-financeira/como-controlar-gastos' },
      { name: 'Reserva de emergência: quanto guardar?', href: '/organizacao-financeira/reserva-emergencia' },
      { name: 'Quanto comprometer da renda', href: '/organizacao-financeira/quanto-comprometer-renda' },
    ],
  },
  'comprometimento-renda': {
    path: '/calculadoras/comprometimento-renda',
    title: 'Calculadora de Comprometimento de Renda',
    description: 'Calcule o percentual da sua renda comprometido com dívidas. Descubra se seu nível de endividamento está saudável, em atenção ou em risco.',
    webAppName: 'Calculadora de Comprometimento de Renda',
    webAppDescription: 'Calcule o percentual da sua renda comprometido com financiamentos, empréstimos, cartão de crédito e outras parcelas.',
    howToName: 'Como calcular o comprometimento da renda',
    howToDescription: 'Passo a passo para calcular quanto da sua renda está comprometido com dívidas.',
    steps: [
      { name: 'Informe sua renda', text: 'Digite sua renda mensal total.' },
      { name: 'Informe financiamentos', text: 'Digite o total de parcelas de financiamentos.' },
      { name: 'Informe empréstimos', text: 'Digite o total de parcelas de empréstimos.' },
      { name: 'Informe cartão', text: 'Digite o total da fatura do cartão de crédito.' },
      { name: 'Informe outras parcelas', text: 'Digite o total de outras parcelas mensais.' },
      { name: 'Calcule', text: 'Clique em Calcular para ver o diagnóstico.' },
    ],
    faq: [
      { question: 'O que é comprometimento de renda?', answer: 'É o percentual da renda mensal gasto com pagamento de dívidas. Inclui financiamentos, empréstimos, cartão de crédito e qualquer outra parcela fixa.' },
      { question: 'Qual o nível saudável de comprometimento?', answer: 'Até 30% da renda é considerado saudável. Entre 30% e 50% é atenção. Acima de 50% é risco financeiro.' },
      { question: 'Como reduzir o comprometimento da renda?', answer: 'Priorize quitar dívidas mais caras (cartão de crédito e cheque especial), negocie melhores taxas, aumente a renda com trabalho extra e evite novas parcelas.' },
    ],
    keywords: ['comprometimento renda', 'nivel endividamento', 'calcular dividas renda', 'saude financeira'],
    relatedCalculators: [
      { name: 'Capacidade de Endividamento', href: '/calculadoras/capacidade-endividamento' },
      { name: 'Quitação de Dívidas', href: '/calculadoras/quitacao-dividas' },
      { name: 'Troca de Dívidas', href: '/calculadoras/troca-dividas' },
    ],
    relatedArticles: [
      { name: 'Quanto comprometer da renda', href: '/organizacao-financeira/quanto-comprometer-renda' },
      { name: 'Como sair das dívidas: guia passo a passo', href: '/dividas/como-sair-das-dividas' },
      { name: 'Dívida no cartão: o que fazer?', href: '/dividas/divida-cartao-o-que-fazer' },
    ],
  },
  'quitacao-dividas': {
    path: '/calculadoras/quitacao-dividas',
    title: 'Calculadora de Quitação de Dívidas',
    description: 'Simule a quitação de dívidas e veja em quanto tempo consegue ficar livre delas. Calcule juros, total pago e planeje sua liberdade financeira.',
    webAppName: 'Calculadora de Quitação de Dívidas',
    webAppDescription: 'Simule o pagamento mensal de dívidas e veja em quantos meses ficará livre. Calcule total de juros pagos ao longo do tempo.',
    howToName: 'Como simular a quitação de dívidas',
    howToDescription: 'Passo a passo para simular o pagamento de dívidas e planejar a quitação.',
    steps: [
      { name: 'Informe o valor da dívida', text: 'Digite o valor total da sua dívida.' },
      { name: 'Informe a taxa de juros', text: 'Digite a taxa de juros mensal cobrada.' },
      { name: 'Defina o pagamento mensal', text: 'Digite quanto pode pagar por mês.' },
      { name: 'Calcule', text: 'Clique em Calcular para ver o plano de quitação.' },
    ],
    faq: [
      { question: 'Qual a melhor estratégia para quitar dívidas?', answer: 'Priorize dívidas com juros mais altos (cartão de crédito, cheque especial). Considere negociar descontos para pagamento à vista e evitar novos parcelamentos.' },
      { question: 'Método bola de neve vs avalanche?', answer: 'Bola de neve: quite primeiro as menores dívidas para ganhar motivação. Avalanche: quite primeiro as com maiores juros para economizar mais. Escolha o que funciona melhor para você.' },
      { question: 'Vale a pena pegar empréstimo para quitar dívidas?', answer: 'Só se a taxa do novo empréstimo for significativamente menor que a atual. Compare o CET total e evite alongar demais o prazo, pois pode pagar mais juros no final.' },
    ],
    keywords: ['quitar dividas', 'calcular quitação', 'simular pagamento dividas', 'plano quitação'],
    relatedCalculators: [
      { name: 'Troca de Dívidas', href: '/calculadoras/troca-dividas' },
      { name: 'Comprometimento de Renda', href: '/calculadoras/comprometimento-renda' },
      { name: 'Capacidade de Endividamento', href: '/calculadoras/capacidade-endividamento' },
    ],
    relatedArticles: [
      { name: 'Como sair das dívidas: guia passo a passo', href: '/dividas/como-sair-das-dividas' },
      { name: 'Dívida no cartão: o que fazer?', href: '/dividas/divida-cartao-o-que-fazer' },
      { name: 'Refinanciamento compensa?', href: '/emprestimos/refinanciamento-compensa' },
    ],
  },
  'meta-financeira': {
    path: '/calculadoras/meta-financeira',
    title: 'Calculadora de Meta Financeira',
    description: 'Calcule quanto tempo leva para atingir sua meta financeira. Simule aportes mensais com ou sem juros e planeje seus objetivos com nossa calculadora gratuita.',
    webAppName: 'Calculadora de Meta Financeira',
    webAppDescription: 'Calcule em quantos meses você atinge sua meta financeira com aportes mensais. Simule com ou sem rendimento de juros compostos.',
    howToName: 'Como calcular sua meta financeira',
    howToDescription: 'Passo a passo para calcular quanto tempo leva para atingir seu objetivo financeiro.',
    steps: [
      { name: 'Defina seu objetivo', text: 'Digite o valor total que deseja atingir.' },
      { name: 'Informe o valor mensal', text: 'Digite quanto pretende guardar por mês.' },
      { name: 'Informe a taxa de juros', text: 'Digite a taxa de rendimento mensal (opcional, deixe 0 se sem rendimento).' },
      { name: 'Calcule', text: 'Clique em Calcular para ver em quanto tempo atinge sua meta.' },
    ],
    faq: [
      { question: 'O que é uma meta financeira?', answer: 'Meta financeira é um objetivo de valor que você deseja atingir em um determinado prazo, como comprar um carro, dar entrada em um imóvel ou fazer uma viagem.' },
      { question: 'Como definir metas financeiras realistas?', answer: 'Use o método SMART: específica, mensurável, alcançável, relevante e com prazo definido. Comece com metas de curto prazo e aumente gradualmente.' },
      { question: 'Juros compostos ajudam a atingir metas?', answer: 'Sim! Com juros compostos, você atinge a meta mais rápido pois o dinheiro rende sobre o rendimento. Quanto maior a taxa e o prazo, maior o efeito dos juros compostos.' },
    ],
    keywords: ['meta financeira', 'calcular meta', 'objetivo financeiro', 'simulador meta', 'quanto tempo para juntar'],
    relatedCalculators: [
      { name: 'Juros Compostos', href: '/calculadoras/juros-compostos' },
      { name: 'Economia Mensal', href: '/calculadoras/economia-mensal' },
      { name: 'Reserva de Emergência', href: '/calculadoras/reserva-emergencia' },
    ],
    relatedArticles: [
      { name: 'Reserva de emergência: quanto guardar?', href: '/organizacao-financeira/reserva-emergencia' },
      { name: 'Como controlar gastos do dia a dia', href: '/organizacao-financeira/como-controlar-gastos' },
      { name: 'Quanto comprometer da renda', href: '/organizacao-financeira/quanto-comprometer-renda' },
    ],
  },
}
