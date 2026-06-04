import { SITE_URL } from '@/lib/config'

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  lastModified?: string;
  category: string;
  content: string;
  keywords: string[];
  relatedCalculators: { name: string; href: string }[];
  faq?: { question: string; answer: string }[];
}

export const posts: Post[] = [
  {
    slug: 'como-sair-das-dividas-guia-completo',
    title: 'Como sair das dívidas: guia passo a passo completo',
    description: 'Aprenda como sair das dívidas com um plano prático de 5 passos. Estratégias para negociar, renegociar e recuperar o controle financeiro.',
    date: '2026-06-01',
    category: 'Dívidas',
    keywords: ['sair das dívidas', 'como sair das dívidas', 'negociar dívidas', 'limpar nome'],
    relatedCalculators: [
      { name: 'Quitação de Dívidas', href: '/calculadoras/quitacao-dividas' },
      { name: 'Comprometimento de Renda', href: '/calculadoras/comprometimento-renda' },
      { name: 'Orçamento Familiar', href: '/calculadoras/orcamento-familiar' },
    ],
    content: `
<section><h2>Introdução</h2>
<p>Sair das dívidas não é fácil, mas é possível. Milhares de brasileiros conseguem se reorganizar financeiramente todos os dias com um plano bem estruturado. Este guia foi feito para quem está endividado e quer um caminho prático para resolver essa situação.</p>
<p>O primeiro passo é entender que dívida tem solução. O segundo é agir. Vamos direto ao ponto.</p>
</section>
<section><h2>Passo 1: Liste todas as suas dívidas</h2>
<p>Antes de qualquer coisa, você precisa saber exatamente quanto deve e para quem. Pegue um papel, uma planilha ou um aplicativo e anote:</p>
<ul>
<li>Nome da instituição (banco, loja, etc.)</li>
<li>Valor total da dívida</li>
<li>Taxa de juros mensal</li>
<li>Data de vencimento</li>
<li>Tipo de dívida (cartão, empréstimo, financiamento)</li>
</ul>
<p>Use nossa <a href="/calculadoras/quitacao-dividas">calculadora de quitação de dívidas</a> para simular quanto tempo leva para pagar cada uma.</p>
</section>
<section><h2>Passo 2: Priorize as dívidas mais caras</h2>
<p>Nem todas as dívidas são iguais. Priorize as que têm juros mais altos primeiro. A ordem geral recomendada é:</p>
<ol>
<li><strong>Cartão de crédito rotativo:</strong> juros de até 400% ao ano</li>
<li><strong>Cheque especial:</strong> juros de até 300% ao ano</li>
<li><strong>Empréstimo pessoal:</strong> juros de 30% a 100% ao ano</li>
<li><strong>Financiamento:</strong> juros mais baixos, mas prazo longo</li>
</ol>
</section>
<section><h2>Passo 3: Negocie com os credores</h2>
<p>A maioria dos bancos e empresas prefere receber um valor menor do que não receber nada. Por isso, a negociação é sua principal aliada. Dicas para negociar:</p>
<ul>
<li>Ligue para a instituição e peça desconto para pagamento à vista</li>
<li>Ofereça um valor realista que caiba no seu bolso</li>
<li>Peça parcelamento sem juros</li>
<li>Use plataformas como Serasa Limpa Nome e Acordo OK</li>
<li>Registre tudo por escrito ou em gravação</li>
</ul>
</section>
<section><h2>Passo 4: Crie um orçamento realista</h2>
<p>None dos passos anteriores funciona se você não controlar seus gastos. Use nossa <a href="/calculadoras/orcamento-familiar">calculadora de orçamento familiar</a> para organizar suas contas.</p>
<p>O método 50-30-20 é um bom começo: 50% da renda para gastos essenciais, 30% para estilo de vida e 20% para pagar dívidas e poupar.</p>
</section>
<section><h2>Passo 5: Mantenha-se no caminho</h2>
<p>Sair das dívidas é uma jornada, não um evento. Crie hábitos financeiros saudáveis:</p>
<ul>
<li>Eduque-se financeiramente (continue lendo nossos artigos)</li>
<li>Evite novas dívidas parceladas</li>
<li>Monte uma reserva de emergência</li>
<li>Acompanhe seu score de crédito</li>
</ul>
</section>`,
    faq: [
      { question: 'Quanto tempo leva para sair das dívidas?', answer: 'Depende do valor total, da sua renda e do seu planejamento. Com um plano bem estruturado, é possível ver resultados significativos em 6 a 12 meses.' },
      { question: 'Vale a pena fazer acordo no Serasa?', answer: 'Sim, desde que o valor caiba no seu orçamento. Verifique o desconto oferecido e se o parcelamento é viável antes de aceitar.' },
      { question: 'Nome sujo impede financiamento?', answer: 'Sim, instituições financeiras consultam órgãos de proteção ao crédito antes de aprovar financiamentos. Por isso é importante limpar o nome primeiro.' },
    ],
  },
  {
    slug: 'como-aumentar-score-de-credito',
    title: 'Como aumentar o score de crédito rápido',
    description: 'Aprenda estratégias práticas para aumentar seu score de crédito em 2026. Dicas sobre cadastro positivo, pagamento de contas e uso do cartão.',
    date: '2026-06-01',
    category: 'Score',
    keywords: ['aumentar score', 'score de crédito', 'como aumentar score', 'score serasa', 'cadastro positivo'],
    relatedCalculators: [
      { name: 'Comprometimento de Renda', href: '/calculadoras/comprometimento-renda' },
      { name: 'Capacidade de Endividamento', href: '/calculadoras/capacidade-endividamento' },
    ],
    content: `
<section><h2>O que é score de crédito?</h2>
<p>O score de crédito é uma pontuação que varia de 0 a 1000 e indica para as instituições financeiras qual a probabilidade de você pagar suas contas em dia. Quanto maior o score, mais fácil é conseguir crédito, cartões e financiamentos com taxas melhores.</p>
<p>No Brasil, as principais empresas que calculam o score são Serasa, Boa Vista e SPC Brasil. Cada uma tem sua metodologia, mas os fatores que influenciam são semelhantes.</p>
</section>
<section><h2>Fatores que afetam seu score</h2>
<ul>
<li><strong>Histórico de pagamentos:</strong> pagar contas em dia é o fator mais importante</li>
<li><strong>Cadastro Positivo:</strong> permite que as empresas vejam seu bom histórico</li>
<li><strong>Utilização do crédito:</strong> usar até 30% do limite do cartão é ideal</li>
<li><strong>Dívidas abertas:</strong> quanto mais dívidas, menor o score</li>
<li><strong>Tempo de histórico:</strong> quanto mais tempo com bom histórico, melhor</li>
<li><strong>Consultas ao CPF:</strong> muitas consultas em curto período podem reduzir o score</li>
</ul>
</section>
<section><h2>Estratégias para aumentar o score</h2>
<h3>1. Ative o Cadastro Positivo</h3>
<p>O Cadastro Positivo é um banco de dados que reúne seu histórico de pagamentos. Antes, ele só registrava dívidas. Agora, registra também seus pagamentos em dia. Ative pelo site da Serasa ou do Banco Central.</p>
<h3>2. Pague tudo em dia</h3>
<p>Parece óbvio, mas é o principal fator. Coloque contas no débito automático, use lembretes no celular e nunca atrase boletos.</p>
<h3>3. Use o cartão de crédito com inteligência</h3>
<p>Use o cartão para compras do dia a dia e sempre pague a fatura integralmente. Manter uma utilização de até 30% do limite mostra que você sabe usar crédito.</p>
<h3>4. Mantenha contas abertas</h3>
<p>Não cancele contas antigas. Quanto mais tempo de histórico, melhor para seu score.</p>
<h3>5. Evite muitas consultas ao CPF</h3>
<p>Cada vez que uma empresa consulta seu CPF para análise de crédito, isso pode reduzir seu score. Só solicite crédito quando realmente precisar.</p>
</section>`,
    faq: [
      { question: 'Quanto tempo leva para o score subir?', answer: 'Com pagamentos em dia e cadastro positivo ativo, é possível ver aumento em 3 a 6 meses. Grandes mudanças podem levar de 12 a 24 meses.' },
      { question: 'Score 300 é bom?', answer: 'Score de 300 é considerado baixo. A faixa ideal é acima de 700. Mas não se preocupe, com as estratégias certas é possível aumentar significativamente.' },
      { question: 'Score 500 aprova cartão?', answer: 'Depende da instituição. Alguns cartões para score baixo podem aprovar com pontuações a partir de 400. Cartões premium geralmente exigem acima de 700.' },
    ],
  },
  {
    slug: 'melhores-cartoes-score-baixo',
    title: 'Melhores cartões de crédito para score baixo em 2026',
    description: 'Descubra quais cartões aprovam mesmo com score baixo. Cartões sem anuidade, com limite justo e que ajudam a aumentar seu score.',
    date: '2026-06-01',
    category: 'Cartões',
    keywords: ['cartão score baixo', 'cartão negativado', 'cartão sem anuidade', 'cartão crédito', 'como ser aprovado cartão'],
    relatedCalculators: [
      { name: 'Parcelas', href: '/calculadoras/parcelas' },
      { name: 'Juros Compostos', href: '/calculadoras/juros-compostos' },
      { name: 'Comprometimento de Renda', href: '/calculadoras/comprometimento-renda' },
    ],
    content: `
<section><h2>Cartão para score baixo existe?</h2>
<p>Sim, existem cartões de crédito que aprovam mesmo com score baixo ou nome negativado. Alguns são cartões com garantia, outros são cartões de lojas, e há também opções de fintechs que usam critérios diferenciados de análise.</p>
</section>
<section><h2>Melhores opções para score baixo</h2>
<h3>Cartão Nubank</h3>
<p>O Nubank é conhecido por aprovar clientes com score baixo. O cartão é sem anuidade e o limite começa baixo, mas aumenta com o uso consciente.</p>
<h3>Cartão Inter</h3>
<p>O Banco Inter oferece cartão sem anuidade e costuma ser mais flexível na aprovação. Além disso, a conta digital é gratuita.</p>
<h3>Cartão Mercado Pago</h3>
<p>O Mercado Pago oferece cartão de crédito sem anuidade com análise menos rígida. Ideal para quem está começando a reconstruir o crédito.</p>
<h3>Cartão PagBank</h3>
<p>O PagBank (antigo PagSeguro) também oferece cartão sem anuidade e costuma aprovar com score moderado.</p>
<h3>Cartão consignado</h3>
<p>Se você é servidor público, aposentado ou pensionista do INSS, pode solicitar um cartão consignado, que tem desconto direto em folha e aprovação facilitada.</p>
</section>
<section><h2>Dicas para ser aprovado</h2>
<ul>
<li>Mantenha seus dados atualizados no Cadastro Positivo</li>
<li>Comece com cartões de lojas ou fintechs</li>
<li>Use o cartão e pague a fatura integralmente</li>
<li>Aumente sua renda declarada se possível</li>
<li>Evite muitas solicitações ao mesmo tempo</li>
</ul>
</section>`,
    faq: [
      { question: 'Qual o melhor cartão para negativado?', answer: 'Para negativados, as melhores opções são cartões de lojas (Magazine Luiza, Casas Bahia), cartão Mercado Pago e cartão PagBank. Cartões consignados também são uma excelente alternativa.' },
      { question: 'Cartão sem anuidade vale a pena?', answer: 'Sim, especialmente se você usa o cartão com responsabilidade. Cartões sem anuidade são ideais para quem está começando a construir crédito.' },
      { question: 'Como aumentar o limite do cartão?', answer: 'Use o cartão regularmente, pague a fatura integralmente antes do vencimento e mantenha um bom relacionamento com a instituição. O aumento costuma vir após 6 meses de uso consciente.' },
    ],
  },
  {
    slug: 'emprestimo-pessoal-ou-consignado',
    title: 'Empréstimo pessoal ou consignado: qual escolher?',
    description: 'Compare empréstimo pessoal e consignado. Vantagens, desvantagens, taxas e qual modalidade é melhor para cada situação.',
    date: '2026-06-01',
    category: 'Empréstimos',
    keywords: ['emprestimo pessoal', 'emprestimo consignado', 'qual melhor emprestimo', 'taxas emprestimo'],
    relatedCalculators: [
      { name: 'Empréstimo', href: '/calculadoras/emprestimo' },
      { name: 'Financiamento', href: '/calculadoras/financiamento' },
      { name: 'Troca de Dívidas', href: '/calculadoras/troca-dividas' },
    ],
    content: `
<section><h2>Empréstimo pessoal vs consignado</h2>
<p>Na hora de contratar um empréstimo, a escolha entre pessoal e consignado pode fazer grande diferença no valor das parcelas e no total pago. Vamos comparar os dois.</p>
</section>
<section><h2>Empréstimo consignado</h2>
<p>O empréstimo consignado tem as parcelas descontadas diretamente da folha de pagamento ou benefício do INSS. Por isso, o risco para o banco é menor e as taxas de juros são as mais baixas do mercado.</p>
<p><strong>Vantagens:</strong> Taxas de 1,5% a 3% ao mês, prazos longos (até 96 meses), desconto automático.</p>
<p><strong>Desvantagens:</strong> Disponível apenas para servidores, aposentados, pensionistas e CLT de grandes empresas. O comprometimento máximo é de 35% da renda.</p>
</section>
<section><h2>Empréstimo pessoal</h2>
<p>O empréstimo pessoal não exige vínculo empregatício específico e pode ser contratado por qualquer pessoa com renda comprovada.</p>
<p><strong>Vantagens:</strong> Disponível para todos, sem necessidade de vínculo específico, pode ser usado para qualquer finalidade.</p>
<p><strong>Desvantagens:</strong> Taxas mais altas (3% a 10% ao mês), prazo menor, análise de crédito mais rigorosa.</p>
</section>
<section><h2>Quando escolher cada um</h2>
<p><strong>Escolha consignado quando:</strong> você tem direito a ele (servidor, aposentado, CLT), precisa de taxas baixas e pode comprometer a renda mensal.</p>
<p><strong>Escolha pessoal quando:</strong> não tem acesso ao consignado, precisa do dinheiro rápido e tem bom score de crédito.</p>
<p>Use nossa <a href="/calculadoras/emprestimo">calculadora de empréstimo</a> para simular as parcelas de cada modalidade.</p>
</section>`,
    faq: [
      { question: 'Qual a taxa de juros do consignado 2026?', answer: 'As taxas do consignado para INSS giram em torno de 1,72% ao mês. Para servidores públicos, podem ser ainda menores, em torno de 1,5% ao mês.' },
      { question: 'Empréstimo pessoal para negativado existe?', answer: 'Sim, mas com taxas mais altas. Algumas fintechs oferecem empréstimo para negativados com taxas entre 4% e 10% ao mês. Compare antes de contratar.' },
      { question: 'Vale a pena refinanciar um empréstimo?', answer: 'Vale a pena se a nova taxa for significativamente menor que a atual. Use nossa calculadora de troca de dívidas para comparar cenários.' },
    ],
  },
  {
    slug: 'metodo-50-30-20-como-aplicar',
    title: 'Método 50-30-20: como aplicar no Brasil',
    description: 'Aprenda a aplicar o método 50-30-20 de orçamento pessoal na realidade brasileira. Organize seus gastos essenciais, estilo de vida e investimentos.',
    date: '2026-06-01',
    category: 'Organização Financeira',
    keywords: ['metodo 50 30 20', 'orcamento pessoal', 'organizar financas', 'controlar gastos', 'planejamento financeiro'],
    relatedCalculators: [
      { name: 'Orçamento Familiar', href: '/calculadoras/orcamento-familiar' },
      { name: 'Economia Mensal', href: '/calculadoras/economia-mensal' },
      { name: 'Reserva de Emergência', href: '/calculadoras/reserva-emergencia' },
    ],
    content: `
<section><h2>O que é o método 50-30-20?</h2>
<p>Criado pela senadora americana Elizabeth Warren, o método 50-30-20 é uma forma simples de organizar o orçamento pessoal. A ideia é dividir sua renda em três categorias:</p>
<ul>
<li><strong>50% para gastos essenciais:</strong> moradia, alimentação, transporte, saúde</li>
<li><strong>30% para estilo de vida:</strong> lazer, viagens, restaurantes, assinaturas</li>
<li><strong>20% para objetivos financeiros:</strong> pagar dívidas, poupar, investir</li>
</ul>
</section>
<section><h2>Como aplicar na prática</h2>
<p>Vamos supor que sua renda líquida seja de R$ 4.000:</p>
<ul>
<li><strong>R$ 2.000 (50%):</strong> aluguel, condomínio, supermercado, transporte, plano de saúde</li>
<li><strong>R$ 1.200 (30%):</strong> restaurante, cinema, academia, streaming, viagens</li>
<li><strong>R$ 800 (20%):</strong> pagamento de dívidas, reserva de emergência, poupança</li>
</ul>
<p>Use nossa <a href="/calculadoras/orcamento-familiar">calculadora de orçamento familiar</a> para aplicar o método ao seu caso.</p>
</section>
<section><h2>Adaptações para a realidade brasileira</h2>
<p>No Brasil, os gastos essenciais muitas vezes ultrapassam 50% da renda devido ao custo de vida elevado. Se esse for seu caso:</p>
<ul>
<li>Tente reduzir gastos essenciais (trocar de plano, negociar aluguel)</li>
<li>Ajuste para 60-20-20 ou 60-15-25 temporariamente</li>
<li>Foque em aumentar a renda (renda extra, freelas, horas extras)</li>
<li>Nunca descuide dos 20% para objetivos financeiros</li>
</ul>
</section>`,
    faq: [
      { question: 'O método 50-30-20 funciona para quem ganha pouco?', answer: 'Funciona, mas com adaptações. Se os gastos essenciais consomem mais de 50%, ajuste os percentuais temporariamente e foque em aumentar a renda.' },
      { question: 'Como calcular minha renda líquida?', answer: 'Sua renda líquida é o valor que realmente cai na sua conta, após descontos de INSS e IRRF. Use nossa calculadora de salário líquido para descobrir.' },
      { question: 'Os 20% devem ir para dívidas ou poupança primeiro?', answer: 'Priorize dívidas com juros altos (cartão, cheque especial). Depois de quitá-las, direcione os 20% para reserva de emergência e depois para outros objetivos.' },
    ],
  },
  {
    slug: 'quanto-custa-morar-sozinho',
    title: 'Quanto custa morar sozinho no Brasil em 2026',
    description: 'Descubra todos os custos envolvidos em morar sozinho: aluguel, contas, alimentação, mobília e mais. Planejamento financeiro completo.',
    date: '2026-06-01',
    category: 'Custo de Vida',
    keywords: ['custo morar sozinho', 'quanto custa morar sozinho', 'aluguel', 'contas casa', 'custo de vida'],
    relatedCalculators: [
      { name: 'Orçamento Familiar', href: '/calculadoras/orcamento-familiar' },
      { name: 'Reserva de Emergência', href: '/calculadoras/reserva-emergencia' },
      { name: 'Economia Mensal', href: '/calculadoras/economia-mensal' },
    ],
    content: `
<section><h2>Introdução</h2>
<p>Morar sozinho é o sonho de muitos brasileiros, mas é importante saber exatamente quanto custa antes de dar esse passo. Os custos vão muito além do aluguel.</p>
</section>
<section><h2>Custos fixos mensais</h2>
<ul>
<li><strong>Aluguel:</strong> R$ 800 a R$ 2.500 (dependendo da cidade e região)</li>
<li><strong>Condomínio:</strong> R$ 200 a R$ 600</li>
<li><strong>Água:</strong> R$ 50 a R$ 120</li>
<li><strong>Luz:</strong> R$ 80 a R$ 200</li>
<li><strong>Internet:</strong> R$ 100 a R$ 150</li>
<li><strong>Supermercado:</strong> R$ 400 a R$ 800</li>
<li><strong>Plano de saúde:</strong> R$ 200 a R$ 500</li>
</ul>
</section>
<section><h2>Custos iniciais (ao se mudar)</h2>
<ul>
<li><strong>Depósito aluguel:</strong> 3 aluguéis (caução)</li>
<li><strong>Mobília básica:</strong> R$ 3.000 a R$ 10.000</li>
<li><strong>Eletrodomésticos:</strong> R$ 2.000 a R$ 5.000</li>
<li><strong>Taxas de mudança:</strong> R$ 200 a R$ 800</li>
</ul>
</section>
<section><h2>Quanto você precisa ganhar?</h2>
<p>Uma regra segura é que seu aluguel não ultrapasse 30% da sua renda líquida. Se o aluguel é R$ 1.200, você precisa ganhar pelo menos R$ 4.000 líquidos.</p>
<p>Use nossa <a href="/calculadoras/orcamento-familiar">calculadora de orçamento familiar</a> para simular todos os gastos antes de tomar a decisão.</p>
</section>`,
    faq: [
      { question: 'Qual a renda mínima para morar sozinho?', answer: 'Depende da cidade, mas uma renda líquida de R$ 3.000 é um bom ponto de partida em cidades de médio porte. Em capitais como SP ou RJ, o ideal é acima de R$ 5.000.' },
      { question: 'Vale mais a pena alugar ou comprar?', answer: 'Depende do seu planejamento. Se você pretende ficar na mesma cidade por mais de 5 anos, comprar pode valer a pena. Para períodos menores, alugar é mais vantajoso.' },
    ],
  },
]

export function getAllPosts(): Post[] {
  return posts
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}

export function getPostsByCategory(category: string): Post[] {
  return posts.filter((p) => p.category === category)
}

export function getRelatedPosts(currentSlug: string, maxPosts: number = 3): Post[] {
  const current = getPostBySlug(currentSlug)
  if (!current) return []
  return posts
    .filter((p) => p.slug !== currentSlug)
    .filter((p) => p.category === current.category)
    .slice(0, maxPosts)
}

export interface Category {
  slug: string
  label: string
  count: number
  name: string
}

export function getAllCategories(): Category[] {
  const map = new Map<string, number>()
  posts.forEach((p) => {
    map.set(p.category, (map.get(p.category) || 0) + 1)
  })
  const slugs: Record<string, string> = {
    'Dívidas': 'dividas',
    'Cartões': 'cartoes',
    'Empréstimos': 'emprestimos',
    'Score': 'score',
    'Organização Financeira': 'organizacao-financeira',
    'Custo de Vida': 'custo-de-vida',
  }
  return Array.from(map.entries()).map(([label, count]) => ({
    slug: slugs[label] || label.toLowerCase().replace(/ /g, '-'),
    label,
    count,
    name: label,
  }))
}
