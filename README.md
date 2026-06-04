# Calculadora Trabalhista 

Site de calculadoras trabalhistas gratuitas para trabalhadores CLT no Brasil. Oferece 18 ferramentas de cálculo para rescisão, férias, 13º salário, FGTS, horas extras, salário líquido, seguro-desemprego, adicional noturno, aviso prévio, insalubridade, periculosidade, banco de horas, custo CLT, INSS, IRRF, reajuste salarial e acerto trabalhista, além de blog informativo sobre direitos trabalhistas e declaração de Imposto de Renda. 

**Público-alvo:** Trabalhadores brasileiros com carteira assinada (CLT), profissionais de RH, contadores e estudantes de direito trabalhista.

**Principais funcionalidades:**
- 18 calculadoras trabalhistas gratuitas com base nas tabelas oficiais de INSS e IRRF 2026
- Blog com 76 artigos informativos sobre direitos trabalhistas e Imposto de Renda para CLT
- Capas profissionais por artigo com gradiente por categoria e ícone temático SVG inline
- OG image dinâmica por artigo via `/og/route.tsx` (gradiente + emoji + título)
- SEO completo com sitemap dinâmico, JSON-LD (BreadcrumbList, FAQPage, BlogPosting), breadcrumbs e Open Graph
- Design responsivo com tema claro/escuro
- Anúncios Google AdSense integrados
- Compartilhamento de resultados, impressão e exportação para PDF
- Histórico local no navegador sem cadastro (localStorage)
- Calculadoras e artigos relacionados em todas as páginas
- Base legal com referências à CLT, leis e súmulas em cada calculadora
- Testes unitários (Vitest) — 60 testes para todas as funções da calculadora
- GA4 + GTM — eventos de resultado, scroll e compartilhamento

---

## Live Website

| Item | Detalhe |
|------|---------|
| **Produção** | [https://www.calculadoratrabalhista.site](https://www.calculadoratrabalhista.site) |
| **Domínio canônico** | `https://www.calculadoratrabalhista.site` |

---

## Tecnologias

| Tecnologia | Versão |
|------------|--------|
| Next.js | 16.2.6 (App Router) |
| React | 19.2.4 |
| TypeScript | 5.7.3 |
| Tailwind CSS | 4.2.0 |
| shadcn/ui (Radix UI) | Diversos componentes |
| ESLint (flat config) | 10.4.1 |
| PostCSS | 8.5 |

**Bibliotecas importantes:**
- `lucide-react` — Ícones
- `date-fns` — Manipulação de datas
- `zod` — Validação de formulários (schemas em `lib/esquemas-validacao.ts`)
- `recharts` — Gráficos (presente no package.json)
- `sonner` — Notificações
- `next-themes` — Tema claro/escuro
- `class-variance-authority` + `clsx` + `tailwind-merge` — Utilitários CSS
- `@vercel/analytics` — Analytics Vercel
- `tw-animate-css` — Animações Tailwind
- `@next/eslint-plugin-next` + `eslint-config-next` — Linting
- `zod` — Schemas de validação em `lib/esquemas-validacao.ts`

---

## Estrutura do Projeto

```
/
├── app/                         # App Router — páginas e layouts
│   ├── acerto-trabalhista/      # Calculadora de acerto trabalhista completo
│   ├── adicional-noturno/       # Calculadora de adicional noturno
│   ├── aviso-previo/            # Calculadora de aviso prévio proporcional
│   ├── banco-de-horas/          # Calculadora de banco de horas
│   ├── blog/                    # Blog listing e artigos (76 posts)
│   │   ├── [slug]/              # Página de artigo individual
│   │   ├── categoria/           # Páginas de categoria do blog (com paginação 12/página)
│   │   └── layout.tsx           # Layout do blog com metadata próprio
│   ├── contato/                 # Página de contato
│   ├── custo-clt/               # Calculadora de custo CLT para empresas
│   ├── decimo-terceiro/         # Calculadora de 13º salário
│   ├── ferias/                  # Calculadora de férias
│   ├── fgts/                    # Calculadora de FGTS
│   ├── fontes-oficiais/         # Página de fontes oficiais
│   ├── historico-atualizacoes/  # Página de histórico de atualizações
│   ├── horas-extras/            # Calculadora de horas extras
│   ├── insalubridade/           # Calculadora de adicional de insalubridade
│   ├── inss/                    # Calculadora de INSS detalhada
│   ├── irrf/                    # Calculadora de IRRF detalhada
│   ├── metodologia/             # Página de metodologia dos cálculos
│   ├── og/                      # OG image dinâmica (Edge runtime, @vercel/og)
│   ├── periculosidade/          # Calculadora de adicional de periculosidade
│   ├── politica-privacidade/    # Política de privacidade
│   ├── reajuste-salarial/       # Simulador de reajuste salarial
│   ├── rescisao/                # Calculadora de rescisão CLT
│   ├── robots.ts                # Configuração robots.txt dinâmica com sitemap URL
│   ├── salario-liquido/         # Calculadora de salário líquido
│   ├── seguro-desemprego/       # Calculadora de seguro-desemprego
│   ├── sitemap.ts               # Sitemap dinâmico
│   ├── sobre/                   # Página sobre
│   ├── termos-uso/              # Termos de uso
│   ├── valor-hora/              # Calculadora de valor da hora trabalhada
│   ├── globals.css              # Estilos globais com variáveis CSS customizadas
│   ├── layout.tsx               # Layout raiz (metadata, header, footer, analytics, cookies)
│   └── page.tsx                 # Home page com grid de 18 calculadoras e blog preview
├── components/                  # Componentes React reutilizáveis
│   ├── ui/                      # Componentes shadcn/ui (Radix + Tailwind)
│   ├── ad-placeholder.tsx       # Placeholder para anúncios Google AdSense
│   ├── artigos-relacionados.tsx # Seção de artigos relacionados do blog
│   ├── base-legal.tsx           # Seção de base legal (leis, artigos e súmulas)
│   ├── blog-analytics.tsx       # Scroll tracking GA4 por artigo
│   ├── blog-card-cover.tsx      # Capa visual com gradiente + ícone SVG temático
│   ├── breadcrumbs.tsx          # Breadcrumbs com JSON-LD BreadcrumbList
│   ├── calculadora-schema.tsx   # JSON-LD WebApplication + HowTo por calculadora
│   ├── calculadoras-relacionadas.tsx # Seção de calculadoras relacionadas
│   ├── compartilhar-resultado.tsx # Compartilhamento via Web Share API / clipboard
│   ├── cookie-banner.tsx        # Banner de cookies LGPD
│   ├── data-atualizacao.tsx     # Badge de data de última atualização
│   ├── exportar-pdf.tsx         # Botão de exportação para PDF
│   ├── faq-section.tsx          # Seção de FAQ reutilizável com JSON-LD FAQPage
│   ├── footer.tsx               # Footer com 18 calculadoras, guias, links institucionais
│   ├── header.tsx               # Header com navegação completa (dropdown calculadoras + guias)
│   ├── historico-local.tsx      # Histórico de cálculos no navegador (localStorage)
│   ├── imprimir-resultado.tsx   # Botão de impressão
│   ├── input-com-erro.tsx       # Input wrapper com exibição de erro de validação
│   └── resultado-card.tsx       # Card para exibição de resultados
├── lib/                         # Lógica e dados
│   ├── analytics.ts             # GA4/GTM — eventos tipados (resultado, scroll, compartilhar)
│   ├── article-styles.ts        # (removido) substituído por blog-categories + blog-icons
│   ├── blog-categories.ts       # Sistema de cores por categoria (6 categorias)
│   ├── blog-icons.tsx           # 20 ícones SVG temáticos para artigos do blog
│   ├── calculadora.test.ts      # Testes unitários Vitest (60 testes)
│   ├── calculadora.ts           # Tabelas INSS/IRRF + 22 funções de cálculo
│   ├── config.ts                # Config centralizada (SITE_URL, SITE_NAME, etc.)
│   ├── esquemas-validacao.ts    # Schemas Zod para todas as calculadoras
│   ├── faq-data.ts              # 18 conjuntos de FAQ (90 perguntas)
│   ├── posts.ts                 # Interface Post + 39 artigos + funções auxiliares
│   └── utils.ts                 # Utilitários (cn)
├── public/                      # Arquivos estáticos
│   ├── ads.txt                  # Arquivo de verificação AdSense
│   ├── apple-icon.png           # Ícone Apple
│   ├── favicon.ico              # Favicon
│   ├── icon.svg                 # Ícone SVG
│   ├── og-image.png             # Imagem Open Graph (1200×630)
│   └── sitemap.xml              # Sitemap estático complementar
├── eslint.config.mjs            # Config ESLint flat config (Next.js core-web-vitals)
├── .gitignore
├── components.json              # Configuração shadcn/ui
├── next.config.mjs
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

> **Nota:** Todo o roteamento é App Router. Não há Pages Router.
> **Header e Footer** são componentes únicos importados no root layout (`app/layout.tsx`). Nenhum layout específico (ex: blog) duplica header/footer.

---

## Funcionalidades

### Calculadoras Trabalhistas (18)

| Calculadora | Rota | Função | Descrição |
|-------------|------|--------|-----------|
| Rescisão CLT | `/rescisao` | `calcularRescisao` | 4 tipos de demissão: saldo, aviso, férias, 13º, multa FGTS |
| Férias CLT | `/ferias` | `calcularFerias` | 30/20/15 dias, 1/3 constitucional, abono pecuniário |
| 13º Salário | `/decimo-terceiro` | `calcularDecimoTerceiro` | Integral ou proporcional, INSS e IRRF |
| Salário Líquido | `/salario-liquido` | `calcularSalarioLiquido` | INSS progressivo + IRRF + dependentes |
| Horas Extras | `/horas-extras` | `calcularHorasExtras` | 50% e 100%, divisor 220h |
| Seguro Desemprego | `/seguro-desemprego` | `calcularSeguroDesemprego` | 3-5 parcelas, 3 ordens de pedido |
| FGTS | `/fgts` | `calcularFGTSMensal` + `calcularMultaFGTS` | Depósito 8%, multa 40%, saldo acumulado |
| Adicional Noturno | `/adicional-noturno` | `calcularAdicionalNoturno` | 20%, hora reduzida 52min30s |
| Aviso Prévio | `/aviso-previo` | `calcularAvisoPrevio` | Proporcional Lei 12.506/2011 (30+3/ano, máx 90) |
| Insalubridade | `/insalubridade` | `calcularInsalubridade` | 10/20/40% sobre salário mínimo (NR-15) |
| Periculosidade | `/periculosidade` | `calcularPericulosidade` | 30% sobre salário base (Art. 193 CLT) |
| Valor da Hora | `/valor-hora` | `calcularValorHora` | Hora normal + extra 50% e 100% (4 jornadas) |
| Banco de Horas | `/banco-de-horas` | `calcularBancoDeHoras` | Saldo acumulado com/sem adicional 50% |
| Custo CLT | `/custo-clt` | `calcularCustoCLT` | INSS patronal, FGTS, 13º, férias, benefícios |
| INSS | `/inss` | `calcularINSSDetalhado` | 4 faixas progressivas, contribuição por faixa, teto |
| IRRF | `/irrf` | `calcularIRRFDetalhado` | Alíquota efetiva, dedução dependentes, isenção |
| Reajuste Salarial | `/reajuste-salarial` | `calcularReajusteSalarial` | Aumento nominal vs real, IPCA, poder de compra |
| Acerto Trabalhista | `/acerto-trabalhista` | `calcularAcertoTrabalhista` | 5 tipos demissão + banco de horas + rescisão indireta |

### Funcionalidades por Calculadora

Cada calculadora inclui:
- Breadcrumbs com JSON-LD BreadcrumbList
- Badge de data de última atualização
- Base legal com artigos da CLT, leis e súmulas do TST
- FAQ com 5 perguntas e JSON-LD FAQPage
- Compartilhamento via Web Share API
- Impressão e exportação para PDF
- Histórico local no navegador (localStorage, até 10 cálculos)
- Calculadoras relacionadas (2-3 do mesmo cluster)
- Artigos relacionados do blog
- Espaços preparados para AdSense (top, middle, bottom)
- Conteúdo SEO com exemplos reais e tabelas
- Schema JSON-LD `WebApplication` e `HowTo` via `CalculadoraSchema`
- Validação Zod com feedback de erro em tempo real via `InputComErro`

### Estilo de Escrita Obrigatório para Novos Artigos

Evitar padrões comuns de conteúdo gerado por IA.

**NÃO utilizar:**
- travessões (—) para explicações
- excesso de dois pontos (:)
- excesso de listas
- frases genéricas como "além disso", "por outro lado", "vale destacar", "é importante ressaltar", "nesse sentido"

**Preferir:**
- frases curtas
- linguagem natural
- exemplos práticos
- escrita semelhante a um especialista humano

Se houver travessões no texto gerado, reescrever as frases antes de finalizar o artigo.

### Blog

- 76 artigos em 6 categorias
- Listagem em `/blog` com grid 3 colunas
- **Filtragem client-side** com `BlogFilters`:
  - Busca instantânea por título, categoria e keywords (sem recarregar página)
  - Filtros de categoria em pills com rolagem horizontal no mobile (snap-x)
  - Contador dinâmico de resultados ("Mostrando X artigos")
  - Estado vazio com botão "Limpar filtros"
- Paginação client-side: 12/página, navegação Anterior/Próxima (sem page reload)
- Prioridade de carregamento: `content-visibility: auto` a partir do índice 6
- Página individual em `/blog/[slug]` com:
  - Breadcrumbs (com JSON-LD BreadcrumbList)
  - Metadados: categoria + data + tempo de leitura + data de revisão
  - Resumo executivo do artigo
  - Tabela de conteúdo (TableOfContents) com scroll tracking GA4
  - Conteúdo HTML com formatação rica
  - Gráficos recharts (bar/pie/line) por artigo
  - Seção de FAQ por artigo (FAQPage schema)
  - **Seção "Sobre o autor"** com avatar e credenciais da equipe
  - **Fontes oficiais consultadas** com links para gov.br, Planalto, Receita Federal, Caixa, INSS e TST
  - Cards de calculadoras relacionadas
  - Artigos relacionados (mesma categoria)
  - JSON-LD `Article` + `BreadcrumbList` + `FAQPage` schema
- Páginas de categoria em `/blog/categoria/[slug]` com paginação (12/página) e navegação Anterior/Próxima
- OG image dinâmica por artigo via `app/og/route.tsx` (Edge runtime, cache público 1 ano)
- Sistema de cores por categoria (6 categorias com paleta própria)
- Dados centralizados em `lib/posts.ts` — interface Post com charts, FAQ, relatedCalculators e keywords
- **Redirect 301** configurado para slug com typo (`direiros-demissao-justa-causa` → `direitos-demissao-justa-causa`)

### Categorias do Blog

| Categoria | Posts |
|-----------|-------|
| Imposto de Renda | 22 |
| Benefícios | 15 |
| Direitos Trabalhistas | 15 |
| Jornada de Trabalho | 9 |
| Férias | 8 |
| Salário | 7 |

### Páginas Institucionais

| Página | Rota |
|--------|------|
| Home | `/` |
| Sobre | `/sobre` |
| Metodologia | `/metodologia` |
| Fontes Oficiais | `/fontes-oficiais` |
| Histórico de Atualizações | `/historico-atualizacoes` |
| Contato | `/contato` |
| Política de Privacidade | `/politica-privacidade` |
| Termos de Uso | `/termos-uso` |

---

## Validação de Formulários (Zod)

Todas as calculadoras usam schemas Zod centralizados em `lib/esquemas-validacao.ts`.

**Schemas disponíveis:**
- `currencyString` — refina string monetária (remove não-dígitos, valida > 0)
- `dateString` — valida data ISO
- Schemas específicos: `rescisaoSchema`, `feriasSchema`, `decimoTerceiroSchema`, `salarioLiquidoSchema`, `horasExtrasSchema`, `adicionalNoturnoSchema`, `insalubridadeSchema`, `periculosidadeSchema`, `avisoPrevioSchema`, `fgtsSchema`, `inssSchema`, `irrfSchema`, `seguroDesempregoSchema`, `custoCltSchema`, `valorHoraSchema`, `bancoDeHorasSchema`, `reajusteSalarialSchema`, `acertoTrabalhistaSchema`

**Padrão de validação em cada página:**
```tsx
const parsed = schema.safeParse({ ... })
if (!parsed.success) {
  // Mapeia erros por campo → setErros
  // InputComErro exibe erro e borda vermelha
}
```

---

## SEO e Metadados

| Aspecto | Implementação |
|---------|---------------|
| **Metadados** | `export const metadata` em cada página com title e description únicos |
| **URLs canônicas** | `alternates.canonical` em todas as páginas |
| **Sitemap** | Dinâmico via `app/sitemap.ts` (30 rotas) + estático complementar |
| **robots.txt** | Dinâmico via `app/robots.ts` (index, follow, disallow /admin/) |
| **JSON-LD** | `Article` e `FAQPage` e `BreadcrumbList` nos artigos; `FAQPage` nas calculadoras; `WebApplication` + `HowTo` nas calculadoras |
| **Open Graph** | og:title, og:description, og:image (dinâmica por artigo via `/og?title=...&category=...`), og:url, og:type, og:locale |
| **Twitter Cards** | summary_large_image com título, descrição e imagem dinâmica por artigo |
| **Título com template** | `%s | Calculadora Trabalhista` herdado do layout raiz |
| **Breadcrumbs** | Componente reutilizável com schema estruturado em todas as páginas |
| **Palavras-chave** | Meta tag keywords em páginas de artigo |
| **Imagens** | OG image compartilhada de 1200×630px |

### JSON-LD Schema por Tipo de Página

| Página | Schema |
|--------|--------|
| Home | `WebSite` + `Organization` + `BreadcrumbList` |
| Calculadoras | `WebApplication` + `HowTo` + `FAQPage` + `BreadcrumbList` |
| Blog post | `Article` + `BreadcrumbList` + `FAQPage` (se houver) + fontes oficiais por categoria |
| Blog listing | `Blog` + `CollectionPage` |
| Blog categoria | `CollectionPage` + `BreadcrumbList` |

---

## Infraestrutura

- Google AdSense (`ca-pub-1190641604220445`) integrado no layout raiz
- Placeholder de anúncios (`AdPlaceholder`) em todas as páginas
- Banner de cookies LGPD (`CookieBanner`)
- Analytics Vercel em produção
- Google Analytics 4 (GA4) + GTM via `@/lib/analytics.ts`
- Eventos GA4: `resultadoGerado`, `artigoVisualizado`, `scrollProfundidade`, `compartilhar`, `exportarPDF`, `imprimir`
- OG image dinâmica por artigo via `app/og/route.tsx` (Edge runtime, `next/og`)
- Tema claro/escuro via `next-themes`
- Fonte Inter + Geist Mono via `next/font/google`
- Responsivo para mobile, tablet e desktop
- Print CSS otimizado com `@media print`
- ESLint flat config (`eslint.config.mjs`) com regras Next.js core-web-vitals
- pnpm como gerenciador de pacotes

---

## Deploy

| Item | Detalhe |
|------|---------|
| **Repositório** | [github.com/goncalvesdan1982/v0-calculadora-trabalhista-site](https://github.com/goncalvesdan1982/v0-calculadora-trabalhista-site) |
| **Plataforma** | Vercel (auto-deploy em cada push para `main`) |
| **Instalação** | `pnpm install` |
| **Build** | `pnpm run build` |
| **Dev** | `pnpm run dev` |
| **Testes** | `pnpm run test` (Vitest, 60 testes) |
| **Lint** | `pnpm run lint` |
| **Gerenciador** | pnpm |

---

## Histórico de Correções Recentes

### 2026-06-01 — Correções auditoria blog (fases 1-7)
- **Schema BlogPosting**: `dateModified`, `image` (OG dinâmica), `author` Person adicionados
- **Categorias**: OG, Twitter Cards, canonical, `BlogCardCover` — mesma qualidade do blog principal
- **Links internos**: ~25 links contextuais adicionados nos 10 artigos mais antigos
- **Conteúdo expandido**: 5 artigos finos expandidos (100→600+ palavras cada) com exemplos práticos, passo a passo e legislação
- **Canibalização**: posts 4 e 5 (rescisão/verbas) — estrutura principal + complementar com links bidirecionais
- **Paginação SEO**: `rel="next/prev"` em `/blog` e `/blog/categoria/[slug]`
- **Autoridade**: bloco E-E-A-T com fontes oficiais + links para metodologia/calculadoras no final dos artigos
- **Auditoria atualizada**: problemas 1-7 marcados como resolvidos

### 2026-06-03 — Correção página Fontes Oficiais
- **Layout responsivo**: tabela de 3 colunas substituída por cards empilhados no mobile (`md:hidden` / `hidden md:block`)
- **Links quebrados corrigidos** (3 de 12 retornavam 403/404):
  - NR-15: link específico (403) → página de listagem NR do gov.br (200)
  - Portarias INSS: `trabalho-e-previdencia` (403) → `gov.br/inss` (200)
  - Tabela IRRF: página específica (404) → página de tributos Receita Federal (200)
- **Botões**: "Acessar" → "Acessar fonte" (desktop) / "Acessar fonte oficial" (mobile), com `whitespace-nowrap`
- **Acessibilidade**: `aria-label` descritivo em todos os links externos
- **Build**: compilado sem erros

### 2026-06-01 — Auditoria e correções blog + capas profissionais + OG dinâmico
- **Auditoria completa** (itens 1-35) da área de blog: listing, artigo, categoria, schemas, conteúdo
- **Removida imagem hero** dos artigos — conteúdo começa imediatamente após breadcrumbs
- **Reestruturado topo do artigo**: categoria + data + tempo de leitura + revisão → título → resumo executivo → TOC → conteúdo
- **Sistema de capas profissionais** (`BlogCardCover`): gradiente por categoria + ícone SVG inline (20 tópicos) + badge + título sobreposto
- **OG image dinâmica** (`app/og/route.tsx`): gera PNG 1200×630 por artigo com gradiente + emoji + título
- **Prioridade de carregamento**: `fetchpriority="high"` nos 3 primeiros cards, `content-visibility` a partir do índice 6
- `lib/blog-categories.ts` — 6 categorias com paleta de cores
- `lib/blog-icons.tsx` — 21 ícones SVG temáticos
- `components/blog-card-cover.tsx` — componente de capa reutilizável
- `lib/article-styles.ts` + `components/article-cover.tsx` removidos (substituídos)
- `public/images/blog/placeholder.svg` removido

### 2026-06-01 — GA4, testes unitários, centralização SITE_URL, gráficos blog
- **GA4 + GTM**: `lib/analytics.ts` com eventos tipados — `resultadoGerado` (18 calculadoras), `artigoVisualizado`, scroll tracking, compartilhamento, PDF, impressão
- **Testes unitários**: Vitest + testing-library, 60 testes para todas as funções de `lib/calculadora.ts`
- **Centralização**: `lib/config.ts` com `SITE_URL`, `SITE_NAME`, `SITE_DESCRIPTION`, `SITE_EMAIL` — substituídas ~40 ocorrências hardcoded
- **Gráficos**: `components/article-chart.tsx` com recharts (bar, pie, line) nos 5 artigos principais
- `Suspense` boundary no GoogleAnalytics (corrige build error com `useSearchParams`)

### 2026-05-31 — Correções 6 a 13

| # | Descrição |
|---|-----------|
| **6** | Insalubridade: `salario: '100'` hardcoded → `String(SALARIO_MINIMO_2026)` |
| **7** | Valor da Hora: `horasDia: '8'` e `diasMes: '22'` hardcoded → inputs editáveis com estado |
| **8** | Seguro Desemprego: salario2/salario3 sem feedback de erro → `error` + `className` adicionados |
| **9** | Horas Extras: `tipoAdicional: '50'` hardcoded → selector de tipo (50%/100%) com estado |
| **10** | Blog Categoria: sem paginação → adicionada paginação 12/página com navegação Anterior/Próxima |
| **11** | Blog Page: `group-hover:text-secondary` sem classe `group` → `group` adicionada ao Card |
| **12** | ESLint: `.eslintrc.json` legado removido → `eslint.config.mjs` flat config criado |
| **13** | robots.txt: sem configuração → `app/robots.ts` criado com sitemap URL |

### 2026-05-31 — Correções 1 a 5

| # | Descrição |
|---|-----------|
| **1** | Schemas de validação Zod criados (`lib/esquemas-validacao.ts`) e integrados em todas as calculadoras |
| **2** | Blog layout: metadata corrigido com OG/Twitter cards e canonical |
| **3** | Contato layout: metadata corrigido com OG/Twitter cards e canonical |
| **4** | pnpm: `onlyBuiltDependencies: ["sharp"]` configurado para build |
| **5** | og-image.png: otimizada de 1647KB para 190KB |

### 2026-05-31 — Correções críticas SEO + 5 novas calculadoras

- Corrigidos **14 broken links** em `lib/posts.ts` (`/calculadoras/rescisao` → `/rescisao`)
- Adicionado **metadata único** (`layout.tsx`) nas 18 calculadoras (title, description, canonical, OG)
- Corrigido **title da homepage** (agora tem title próprio, não duplicado)
- 5 novas calculadoras: Custo CLT, INSS Detalhado, IRRF Detalhado, Reajuste Salarial, Acerto Trabalhista
- Novas funções em `lib/calculadora.ts`: `calcularCustoCLT`, `calcularINSSDetalhado`, `calcularIRRFDetalhado`, `calcularReajusteSalarial`, `calcularAcertoTrabalhista`
- Novos FAQs em `lib/faq-data.ts`: faqCustoCLT, faqINSS, faqIRRF, faqReajusteSalarial, faqAcertoTrabalhista
- Atualizados sitemap, header e footer com as 5 novas rotas

### 2026-05-31 — Upgrade institucional e experiência

- 3 novas páginas: Metodologia, Fontes Oficiais, Histórico de Atualizações
- Breadcrumbs com JSON-LD em todas as páginas
- Base Legal (leis, artigos, súmulas) em todas as calculadoras
- Compartilhamento de resultados (Web Share API)
- Impressão e exportação para PDF (print CSS)
- Histórico local no navegador (localStorage)
- Calculadoras relacionadas e artigos relacionados em todas as páginas
- Badge de data de atualização em todas as calculadoras
- Print CSS otimizado com `@media print`

### 2026-05-30 — Migração de Pages Router para App Router

- Convertidos 14 artigos de Imposto de Renda de arquivos JSX (Pages Router) para entries em `lib/posts.ts`
- Removido diretório `pages/blog/` (Pages Router)
- Corrigidos erros de sintaxe em JSON-LD em artigos legados
- Corrigidos caminhos com barras invertidas
- Adicionada categoria "Imposto de Renda" ao blog (14 posts)
- Adicionados schemas BlogPosting e FAQPage para artigos de IR

### 2026-05-30 — Auditoria legislativa 2026 + 9 novos artigos

- Salário mínimo atualizado para R$ 1.621,00
- Tabelas INSS e IRRF atualizadas para 2026
- Correção da prescrição do FGTS
- Valores do Seguro Desemprego atualizados
- 9 novos artigos publicados no blog

### 2026-05-26 — Configuração inicial

- Projeto criado com Next.js 16 + Tailwind 4 + shadcn/ui
- 8 calculadoras trabalhistas implementadas
- Blog inicial com 13 artigos
- Sitemap dinâmico configurado
- SEO básico implementado (metadata, Open Graph, JSON-LD)
- Google AdSense integrado
- Deploy na Vercel

---

## Calendário de Atualização Anual — Lembrete 2027

> **📅 Próxima atualização programada: Janeiro/Fevereiro de 2027**

As tabelas de INSS, IRRF e Seguro Desemprego são reajustadas anualmente. É **essencial** revisar os valores assim que o governo publicar as portarias.

### 🔴 Checklist Obrigatório 2027

| Item | Fonte oficial | Arquivo | Constante/Variável |
|------|---------------|---------|-------------------|
| Salário mínimo 2027 | Decreto presidencial | `lib/calculadora.ts` | `SALARIO_MINIMO_2026` → criar `SALARIO_MINIMO_2027` |
| Tabela INSS (faixas e alíquotas) | Portaria MPS | `lib/calculadora.ts` | `INSS_2026` → criar `INSS_2027` |
| Teto INSS | Portaria MPS | `lib/calculadora.ts` | `TETO_INSS_2026` → criar `TETO_INSS_2027` |
| Tabela IRRF (faixas e deduções) | Instrução Normativa RFB | `lib/calculadora.ts` | `IRRF_2026` → criar `IRRF_2027` |
| Dedução por dependente IRRF | Instrução Normativa RFB | `lib/calculadora.ts` | `DEDUCAO_DEPENDENTE_IRRF` |
| Faixas do Seguro Desemprego | Resolução CODEFAT | `lib/calculadora.ts` | `SEGURO_DESEMPREGO_2026` → criar `SEGURO_DESEMPREGO_2027` |

### 🟡 Verificar também

- [ ] Data de atualização (`data="2026-05-31"` → `data="2027-02-01"`) em todas as 18 calculadoras
- [ ] Data no metadata de todas as páginas
- [ ] Página `/historico-atualizacoes` — adicionar entrada "Fev/2027"
- [ ] Página `/fontes-oficiais` — verificar se portarias 2027 foram publicadas
- [ ] Post sobre tabela INSS/IRRF 2026 → criar versão 2027 ou atualizar
- [ ] Post sobre salário mínimo → atualizar para o novo valor
- [ ] README.md — atualizar referências de 2026 para 2027

### 🔵 Novas leis trabalhistas

- [ ] Verificar se houve novas MPs ou Leis alterando a CLT
- [ ] Verificar alterações na Reforma Trabalhista (Lei 13.467/2017)
- [ ] Verificar novas Súmulas do TST
- [ ] Verificar alterações no eSocial
- [ ] Verificar novas regras de FGTS digital

### Sugestão de rotina

1. **Janeiro**: Acompanhar DOU (Diário Oficial da União) para publicação das portarias
2. **Fevereiro**: Atualizar todas as constantes em `lib/calculadora.ts`
3. **Fevereiro**: Executar `pnpm run build` e validar
4. **Fevereiro**: Fazer commit + push → deploy automático Vercel
5. **Março**: Publicar post "Tabelas INSS e IRRF 2027: o que mudou"

---

## Auditoria Blog — Junho/2026

### Pontuação (pós-correção)

| Critério | Nota |
|---|---|
| SEO | 82/100 |
| UX | 86/100 |
| Conversão | 80/100 |
| Autoridade | 80/100 |
| Monetização | 65/100 |
| **Blog Geral** | **80/100** |

### Problemas CRÍTICOS — Resolvidos

| # | Problema | Status | Solução |
|---|---|---|---|
| 1 | Schema `BlogPosting` sem `dateModified` | ✅ Corrigido | `'dateModified': post.lastModified \|\| post.date` |
| 2 | Schema `BlogPosting` sem `image` | ✅ Corrigido | `'image': ogImageUrl` (OG dinâmica) |
| 3 | Categoria sem `BlogCardCover` | ✅ Corrigido | Cards migrados para `BlogCardCover` com gradiente + ícone |
| 4 | Categoria sem OG/Twitter/canonical | ✅ Corrigido | `generateMetadata` completo com OG, Twitter e canonical |
| 5 | Conteúdo fino nos primeiros posts | ✅ Corrigido | 5 artigos expandidos (100→600+ palavras) |
| 6 | Canibalização posts 4 vs 5 | ✅ Corrigido | Estrutura principal + complementar com links bidirecionais |
| 7 | Zero links internos nos primeiros posts | ✅ Corrigido | ~25 links contextuais adicionados |

### Problemas IMPORTANTES — Resolvidos

| # | Problema | Status | Solução |
|---|---|---|---|
| 8 | TOC: IDs duplicados | 🔧 Pendente | Requer alteração no componente TOC |
| 9 | Schema sem `author` Person | ✅ Corrigido | `author: { @type: Person, name: "Equipe Calculadora Trabalhista" }` |
| 10 | Categoria IR com 22 posts (30%) | 🔧 Pendente | Distribuição natural pelo tema do site |
| 11 | Paginação sem `rel="next/prev"` | ✅ Corrigido | Links prev/next no `<head>` de blog e categoria |
| 12 | `lastReview` sempre igual a `post.date` | ✅ Corrigido | Campo `lastModified` no Post + fallback para `post.date` |

### Problemas — OPORTUNIDADE

| # | Problema | Arquivo | Solução |
|---|---|---|---|
| 13 | Busca sem `role="search"` | `app/blog/page.tsx:59` | Adicionar atributo |
| 14 | Cards sem tempo de leitura | `app/blog/page.tsx:88` | Calcular e exibir badge |
| 15 | Skip link ausente | `app/blog/[slug]/page.tsx` | Adicionar `#content` |
| 16 | CTA sem fallback genérico | `app/blog/[slug]/page.tsx:204` | Mostrar "Todas as calculadoras" |
| 17 | ChevronLeft não utilizado no slug | `app/blog/[slug]/page.tsx:10` | Remover import |
| 18 | Typos em slugs | `lib/posts.ts` | Corrigir `direiros` e `acordo-multo` |
| 19 | Conteúdo em HTML string (manutenção) | `lib/posts.ts` | Migrar para MDX |
| 20 | Filtro de categoria ausente na listagem | `app/blog/page.tsx` | Adicionar selector |

### Arquivos auditados

```
app/blog/page.tsx              (202 linhas)
app/blog/layout.tsx            (38 linhas)
app/blog/[slug]/page.tsx       (253 linhas)
app/blog/categoria/[slug]/page.tsx (141 linhas)
components/blog-card-cover.tsx
components/blog-analytics.tsx
components/table-of-contents.tsx
components/breadcrumbs.tsx
lib/posts.ts                   (2300 linhas, 76 posts)
lib/blog-categories.ts
lib/blog-icons.tsx
app/og/route.tsx
app/sitemap.ts
```
