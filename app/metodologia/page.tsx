import { Metadata } from 'next'
import { BookOpen } from 'lucide-react'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { SITE_URL } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Metodologia - Como Funcionam Nossas Calculadoras | Bolso do Trabalhador',
  description: 'Saiba como cada cálculo financeiro é realizado em nossas calculadoras. Conheça a metodologia por trás das ferramentas de Quitação de Dívidas, Orçamento Familiar, Juros Compostos, Empréstimos e Financiamentos — com base em fontes oficiais como BCB e legislação brasileira.',
  alternates: {
    canonical: `${SITE_URL}/metodologia`,
  },
}

export default function MetodologiaPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: 'Metodologia' }]} />

          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
              <BookOpen className="w-8 h-8" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Metodologia das Calculadoras Financeiras</h1>
            <p className="text-muted-foreground">Entenda como cada cálculo financeiro é realizado, com base em fontes oficiais</p>
            <p className="text-xs text-muted-foreground mt-4">Última atualização: junho de 2026</p>
          </div>

          <div className="prose prose-gray max-w-none">
            <h2>Comprometimento de Renda</h2>
            <p>
              A calculadora de comprometimento de renda avalia qual percentual da sua renda mensal 
              está comprometido com dívidas e despesas fixas. O cálculo é:
            </p>
            <ul>
              <li><strong>Comprometimento:</strong> (total das parcelas de dívidas / renda líquida mensal) × 100</li>
              <li><strong>Ideal:</strong> até <strong>30%</strong> da renda líquida</li>
              <li><strong>Atenção:</strong> entre 30% e 50%</li>
              <li><strong>Crítico:</strong> acima de 50%</li>
            </ul>
            <p>
              Estes parâmetros seguem as recomendações do Banco Central do Brasil e da Febraban para 
              análise de crédito responsável. O percentual ideal considera que o consumidor deve manter 
              margem para despesas essenciais (moradia, alimentação, transporte) e imprevistos.
            </p>

            <h2>Quitação de Dívidas</h2>
            <p>
              A calculadora de quitação de dívidas simula quanto tempo leva para quitar uma dívida 
              com diferentes estratégias de pagamento:
            </p>
            <ul>
              <li><strong>Pagamento mínimo vs. pagamento total:</strong> compara o custo de pagar apenas o mínimo da fatura vs. pagar o valor total</li>
              <li><strong>Simulação de parcelamento:</strong> calcula o valor das parcelas com juros para diferentes prazos</li>
              <li><strong>Estratégia de quitação:</strong> mostra o tempo necessário para quitar a dívida com diferentes aportes mensais</li>
            </ul>
            <p>
              As simulações utilizam a <strong>fórmula de juros compostos</strong>:
              M = C × (1 + i)<sup>t</sup>, onde M é o montante final, C o capital inicial, 
              i a taxa de juros mensal e t o tempo em meses. As taxas de referência são 
              baseadas em dados do BCB: rotativo do cartão (~12% ao mês), cheque especial 
              (~8% ao mês) e empréstimo pessoal (~4% ao mês).
            </p>
            <p>
              <strong>Exemplo:</strong> uma dívida de R$ 5.000 no cartão de crédito (12% a.m.) 
              com pagamento mínimo de R$ 300 — em 12 meses, o saldo devedor ainda será de 
              aproximadamente R$ 4.200. Com pagamento de R$ 800 mensais, a dívida é quitada 
              em cerca de 8 meses.
            </p>

            <h2>Juros Compostos</h2>
            <p>
              A calculadora de juros compostos permite simular o crescimento de um investimento 
              ou o acúmulo de uma dívida ao longo do tempo. A fórmula padrão é:
            </p>
            <ul>
              <li><strong>Montante:</strong> M = C × (1 + i)<sup>t</sup></li>
              <li><strong>Valor futuro:</strong> VF = PMT × [(1 + i)<sup>t</sup> - 1] / i (para aportes mensais)</li>
              <li><strong>Cálculo recíproco:</strong> permite descobrir qual taxa, prazo ou valor inicial é necessário para atingir um objetivo</li>
            </ul>
            <p>
              O simulador considera a <strong>capitalização composta</strong>, que é o padrão do 
              mercado financeiro brasileiro tanto para investimentos quanto para dívidas. 
              Para investimentos, a base é a taxa Selic atual ou o CDI; para dívidas, 
              as taxas médias praticadas no mercado (fonte: BCB).
            </p>
            <p>
              <strong>Exemplo:</strong> poupando R$ 500 por mês a uma taxa de 0,8% ao mês, 
              após 12 meses você terá aproximadamente R$ 6.280 (contra R$ 6.000 se apenas 
              guardasse na gaveta).
            </p>

            <h2>Orçamento Familiar</h2>
            <p>
              A calculadora de orçamento familiar organiza suas receitas e despesas para 
              mostrar se você está no azul ou no vermelho. O método utilizado é:
            </p>
            <ul>
              <li><strong>Receitas totais:</strong> soma de todas as fontes de renda (salário, freelas, renda extra)</li>
              <li><strong>Despesas fixas:</strong> aluguel, condomínio, contas, parcelas fixas</li>
              <li><strong>Despesas variáveis:</strong> alimentação, transporte, lazer, imprevistos</li>
              <li><strong>Saldo:</strong> receitas totais - despesas totais</li>
              <li><strong>Percentuais por categoria:</strong> mostra o peso de cada despesa na renda total</li>
            </ul>
            <p>
              A calculadora também aplica o <strong>método 50-30-20</strong> como referência: 
              50% da renda para gastos essenciais, 30% para estilo de vida e 20% para objetivos 
              financeiros (dívidas, poupança, investimentos). Os percentuais podem ser ajustados 
              conforme a realidade do usuário, especialmente em regiões com custo de vida elevado.
            </p>

            <h2>Reserva de Emergência</h2>
            <p>
              A calculadora de reserva de emergência determina quanto você precisa guardar 
              para se proteger contra imprevistos. A metodologia segue as recomendações 
              de educação financeira do Banco Central:
            </p>
            <ul>
              <li><strong>Valor da reserva:</strong> despesas mensais totais × meses de proteção</li>
              <li><strong>Recomendação padrão:</strong> 6 meses de despesas (para CLT)</li>
              <li><strong>Recomendação estendida:</strong> 12 meses (para autônomos)</li>
              <li><strong>Meta inicial:</strong> 3 meses de despesas</li>
              <li><strong>Meta ideal:</strong> 6 a 12 meses de despesas</li>
            </ul>
            <p>
              O cálculo considera que a reserva deve ser mantida em aplicações de alta 
              liquidez e baixo risco (como poupança ou Tesouro Selic), para que possa 
              ser resgatada imediatamente em caso de necessidade.
            </p>

            <h2>Economia Mensal</h2>
            <p>
              A calculadora de economia mensal projeta quanto você pode acumular poupando 
              um valor fixo todo mês, considerando diferentes cenários:
            </p>
            <ul>
              <li><strong>Sem rendimento:</strong> valor mensal × meses (poupança "na gaveta")</li>
              <li><strong>Com rendimento padrão:</strong> projeção com taxa de 0,5% a.m. (poupança)</li>
              <li><strong>Com rendimento otimizado:</strong> projeção com taxa de 0,8% a.m. (Tesouro Selic ou CDB com liquidez)</li>
            </ul>
            <p>
              A fórmula utilizada é a de <strong>valor futuro de uma série de pagamentos</strong>:
              VF = PMT × [(1 + i)<sup>n</sup> - 1] / i, onde PMT é o valor poupado mensalmente
              e n o número de meses. As taxas são baseadas em dados históricos do BCB.
            </p>

            <h2>Empréstimo e Financiamento</h2>
            <p>
              As calculadoras de empréstimo e financiamento utilizam o sistema de 
              <strong>tabela Price</strong> (Sistema Francês de Amortização), que é 
              o mais comum no mercado brasileiro:
            </p>
            <ul>
              <li><strong>Valor da parcela:</strong> PMT = PV × [i × (1 + i)<sup>n</sup>] / [(1 + i)<sup>n</sup> - 1]</li>
              <li><strong>Total pago:</strong> parcela × número de parcelas</li>
              <li><strong>Total de juros:</strong> total pago - valor financiado</li>
              <li><strong>CET (Custo Efetivo Total):</strong> considera taxas, seguros e tarifas além dos juros</li>
            </ul>
            <p>
              As taxas de referência são atualizadas conforme dados do BCB:
              empréstimo consignado (~1,7% a.m.), empréstimo pessoal (~4% a.m.) e 
              financiamento imobiliário (~0,7% a.m. + TR).
            </p>
            <p>
              <strong>Exemplo:</strong> um empréstimo de R$ 10.000 a 3% ao mês em 12 parcelas 
              resulta em parcelas de aproximadamente R$ 1.005 e total de R$ 12.060 — ou seja, 
              R$ 2.060 de juros.
            </p>

            <h2>Troca de Dívidas</h2>
            <p>
              A calculadora de troca de dívidas compara o custo total de uma dívida atual 
              com uma nova proposta de crédito, ajudando a decidir se vale a pena fazer 
              a portabilidade ou refinanciamento:
            </p>
            <ul>
              <li><strong>Dívida atual:</strong> saldo devedor, taxa de juros, parcelas restantes</li>
              <li><strong>Nova proposta:</strong> valor financiado, nova taxa, novo prazo</li>
              <li><strong>Comparação:</strong> total de juros atuais vs. totais da nova proposta</li>
              <li><strong>Economia:</strong> diferença entre o total a pagar nos dois cenários</li>
            </ul>
            <p>
              A troca vale a pena quando a nova taxa é significativamente menor que a atual 
              e o prazo não é estendido excessivamente a ponto de aumentar o custo total.
            </p>

            <h2>Fontes e Precisão</h2>
            <p>
              Todas as nossas calculadoras utilizam dados e taxas de referência das seguintes fontes oficiais:
            </p>
            <ul>
              <li><strong>Banco Central do Brasil (BCB)</strong> — taxas de juros, Selic, CDI, indicadores econômicos</li>
              <li><strong>Febraban</strong> — taxas médias de mercado, CET</li>
              <li><strong>IBGE</strong> — IPCA, custo de vida</li>
              <li><strong>ANBIMA</strong> — taxas de referência para investimentos</li>
            </ul>
            <p>
              As fórmulas matemáticas seguem os padrões do mercado financeiro brasileiro 
              e da matemática financeira clássica. Nossos algoritmos são testados 
              periodicamente para garantir a precisão dos resultados.
            </p>
            <p>
              <strong>Aviso importante:</strong> os resultados são simulações baseadas em 
              taxas médias de mercado. O valor real pode variar conforme a instituição 
              financeira, seu perfil de crédito e as condições específicas da contratação. 
              Sempre consulte a instituição financeira para obter taxas exatas e condições 
              vigentes antes de contratar qualquer produto.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
