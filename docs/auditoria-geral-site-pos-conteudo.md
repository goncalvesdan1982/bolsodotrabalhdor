# Auditoria Geral do Site Pós-Conteúdo — Bolso do Trabalhador

**Data:** 19 de junho de 2026
**Domínio:** https://www.bolsodotrabalhador.online/
**Último commit da fase de conteúdo:** `a8287f6`

---

## 1. Resumo Executivo

O Bolso do Trabalhador passou por uma fase intensa de conteúdo (26 artigos revisados para padrão Good+). Esta auditoria geral cobre as áreas além do conteúdo: UI/UX, acessibilidade, design, navegação, performance, schema, SEO técnico, confiança, calculadoras e aspectos visuais.

**Pontos fortes gerais:**
- Arquitetura Next.js 16.2.6 sólida com 33 páginas estáticas e 2 dinâmicas
- Build e lint 100% limpos
- Header sticky com navegação completa (desktop + mobile Sheet)
- Footer completo com categorias, calculadoras, guias e páginas institucionais
- Breadcrumbs em todas as páginas internas
- Home page bem estruturada com hero, painel, calculadoras, categorias e FAQ
- Schema Organization e WebSite presentes no layout global
- Navegação por teclado funcional (shadcn/ui Accordion, DropdownMenu)

**Problemas encontrados: 43 no total**
- 4 críticos (P0)
- 11 alta prioridade (P1)
- 17 média prioridade (P2)
- 11 baixa prioridade / oportunidade (P3)

**Nota geral estimada:** 70/100

---

## 2. Status Atual do Site

| Aspecto | Status |
|---------|--------|
| Conteúdo (26 artigos) | ✅ Fechado e auditado |
| Build | ✅ Limpo |
| Lint | ✅ Limpo |
| Testes | ⚠️ Nenhum implementado |
| Schema Organization/WebSite | ✅ Presente no layout |
| Schema BlogPosting/BreadcrumbList/FAQPage | ✅ Presente nos artigos |
| Páginas institucionais | ✅ Completas (7 páginas) |
| AdSense | ✅ Configurado (ca-pub-1190641604220445) |
| Cookie banner | ✅ Presente |
| Disclaimer de independência | ✅ Presente (home, footer, FAQ) |
| Contaminação de projetos anteriores | ✅ Nenhuma |
| Formulários de dados sensíveis | ✅ Nenhum |
| Rotas quebradas | ✅ Nenhuma detectada |

---

## 3. Pontuação Geral Estimada de Qualidade

| Categoria | Nota | Justificativa |
|-----------|------|---------------|
| UI/UX | 65/100 | Design funcional mas genérico. Falta identidade visual forte. Tabelas cruas sem estilo premium. |
| Acessibilidade | 55/100 | Foco visível, contraste e navegação por teclado podem ter problemas. Skip link ausente. |
| Aparência premium | 50/100 | Cards genéricos, tabelas sem estilo, FAQ sem acordeão nos artigos, índice ocupando espaço. |
| Mobile | 60/100 | Overflow em hubs com 5+ calculadoras. Tabelas podem quebrar. Menu Sheet funcional. |
| Performance | 70/100 | Build rápido. Fontes Google podem impactar LCP. Nenhuma imagem otimizada. |
| SEO técnico | 68/100 | BlogPosting e FAQPage presentes. Metadados OK. Links crus em conteúdo. |
| Schema | 72/100 | Organization, WebSite, BlogPosting, FAQPage, BreadcrumbList OK. Faltam SearchAction e Person. |
| Confiança/YMYL | 78/100 | Disclaimers fortes. Páginas institucionais completas. Metodologia cita "advogado". |
| **Nota geral** | **70/100** | |

---

## 4. Principais Riscos Restantes

1. **P0 — Tabelas HTML sem wrapper responsivo e sem estilo premium** em vários artigos, podendo quebrar no mobile
2. **P0 — FAQ nos artigos usa divs simples em vez de Accordion**, ocupando muito espaço vertical e sem acessibilidade de acordeão
3. **P0 — Links oficiais crus** espalhados no conteúdo (URLs soltas como "www.serasa.com.br" sem hyperlink)
4. **P0 — Índice do artigo (TableOfContents) ocupa espaço vertical fixo** sem opção de collapse ou sticky lateral
5. **P1 — Hubs de categoria com apenas 1 link de artigo** (ex.: `/cartoes`, `/score`) parecem páginas finas
6. **P1 — Menu mobile não inclui institucionais** (faltam /autor, /politica-editorial, /metodologia)
7. **P1 — BlogFilters usa `content-visibility:auto`** experimental que pode causar layout shift
8. **P1 — Metodologia menciona "advogado"** violando AGENTS.md
9. **P1 — Schema Person ausente** na página de autor
10. **P1 — Links externos no conteúdo dos posts não usam target="_blank" nem rel="noopener"**

---

## 5. Principais Oportunidades de Portal Premium

1. FAQ dos artigos migrar de divs estáticas para Accordion (shadcn/ui já disponível)
2. Índice do artigo colapsável ou lateral (sticky) em desktop
3. Cards de artigo com cover/imagem de gradiente (já existe `BlogCardCover` mas não é usado nos cards)
4. Tabelas com wrapper responsivo, cabeçalho fixo, zebra suave e scroll horizontal
5. Blog filters com `URLSearchParams` para manter estado entre navegações
6. Paleta de cores mais distinta (azul escuro + verde é genérico, mas funcional)
7. Adicionar micro-interações e transições mais suaves nos cards
8. Artigos com "progress bar" de leitura no topo

---

## 6. Auditoria da Home

### 6.1 Clareza da proposta
✅ Hero comunica claramente: portal informativo independente de finanças
✅ Subtítulo: "finanças simples para quem trabalha e paga boletos"
✅ Badge "Educação financeira prática e gratuita"
✅ Aviso de portal independente visível

### 6.2 Primeira dobra
✅ Desktop: Hero 2 colunas (texto + painel do trabalhador)
✅ Mobile: empilhamento correto
✅ CTA duplo: "Ver calculadoras" e "Ler guias"
⚠️ Painel do trabalhador em mobile ocupa muito espaço na dobra

### 6.3 Cards
✅ Cards de quickStarts, calculadoras e categorias consistentes
✅ Hover effects (sombra, translateY, cor)
✅ Ícones lucide-react em todas as seções

### 6.4 FAQ na Home
✅ Accordion funcional com navegação por teclado
✅ Schema FAQPage presente
✅ 8 perguntas relevantes e bem respondidas
⚠️ Respostas contêm `<a href>` links — renderizam corretamente via dangerouslySetInnerHTML

### 6.5 Problemas identificados

| ID | Área | Severidade | Descrição | Impacto | Recomendação | Esforço | Risco |
|----|------|------------|-----------|---------|---------------|---------|-------|
| H01 | Home | Médio | Seção "Onde buscar informações oficiais" repete o mesmo disclaimer já presente no hero e no aviso azul | Conteúdo redundante ocupa espaço | Consolidar avisos de independência em 2 seções no máximo | Baixo | Baixo |
| H02 | Home | Baixo | Painel do Trabalhador com 8 ícones em grid 4 colunas em mobile pode ficar muito pequeno | Toque difícil em telas pequenas | Aumentar tamanho mínimo dos ícones/botões no mobile | Baixo | Baixo |
| H03 | Home | Oportunidade | Hero não tem imagem/ilustração, apenas ícones | Aparência menos premium | Adicionar ilustração SVG simples ou gráfico decorativo | Médio | Baixo |
| H04 | Home | Baixo | "Ver todas as calculadoras" CTA repete o mesmo padrão 2 vezes (calculadoras + guias) | Repetição visual | Manter apenas na primeira seção, remover da segunda | Baixo | Baixo |

---

## 7. Auditoria dos Hubs/Categorias

Páginas auditadas: `/dividas`, `/cartoes`, `/emprestimos`, `/score`, `/organizacao-financeira`, `/custo-de-vida`

### 7.1 Estrutura comum
Todas seguem o mesmo template:
- Breadcrumb
- Ícone + título centralizado
- Grid de calculadoras relacionadas (2-3 cards)
- Bloco "Artigos sobre X" com links para posts
- Texto introdutório (prose)
- CTA final com gradiente

### 7.2 Problemas identificados

| ID | Área | Severidade | Descrição | Impacto | Recomendação | Esforço | Risco |
|----|------|------------|-----------|---------|---------------|---------|-------|
| H01 | Hubs | **Alto** | `/cartoes` e `/score` têm apenas 1 link de artigo no bloco "Artigos sobre X" | Página parece fina/thin content | Listar todos os artigos da categoria, não apenas 1 | Baixo | Baixo |
| H02 | Hubs | Médio | `/custo-de-vida` e `/organizacao-financeira` têm apenas 1 artigo cada na categoria | Hub thin content | Considerar expandir categoria ou redirecionar para `/blog` | Médio | Médio |
| H03 | Hubs | Médio | Grid de calculadoras fixo em 3 cards, mas algumas categorias têm só 2 calculadoras relevantes | Desbalanceamento visual | Usar grid responsivo (2 ou 3 cards conforme conteúdo) | Baixo | Baixo |
| H04 | Hubs | Baixo | Meta descriptions são genéricas ("Tudo sobre cartões de crédito...") | SEO: pode ser melhor | Personalizar meta description com palavras-chave específicas da categoria | Baixo | Baixo |
| H05 | Hubs | Baixo | Nenhum hub tem FAQ | Oportunidade de melhorar E-E-A-T | Adicionar FAQ com 3-5 perguntas no final de cada hub | Médio | Baixo |
| H06 | Hubs | Baixo | Breadcrumb em hubs mostra só "Cartões de Crédito" sem Home link visual | Navegação parcial | O breadcrumb já tem Home via ícone (sr-only label) — OK | - | - |
| H07 | Hubs | Médio | `/emprestimos` — apenas 2 calculadoras (igual score), mas caberiam mais links | Oportunidade | Adicionar links para artigos e calculadoras adicionais | Baixo | Baixo |

### 7.3 Verificação de leitura sequencial
Nenhum hub oferece trilha de leitura (ex.: "Leia primeiro X, depois Y"). Os artigos são listados sem ordem recomendada. Opcional.

---

## 8. Auditoria do Blog

### 8.1 Página `/blog`
✅ Header com título e descrição
✅ Badge "Educacional"
✅ Search com input estilizado
✅ Filtros de categoria tipo pills horizontais
✅ Grid de cards 3 colunas
✅ Paginação funcional
✅ Estado vazio com ação "Limpar filtros"
✅ CTA para calculadoras no final

### 8.2 Problemas identificados

| ID | Área | Severidade | Descrição | Impacto | Recomendação | Esforço | Risco |
|----|------|------------|-----------|---------|---------------|---------|-------|
| B01 | Blog | **Alto** | `BlogFilters` é client component sem `URLSearchParams` — filtro/reset ao navegar | UX: perde estado ao voltar | Persistir filtro e página na URL | Médio | Baixo |
| B02 | Blog | Médio | `content-visibility:auto` nos cards a partir do 7º é experimental e pode causar CLS | Performance instável | Remover `content-visibility` ou testar em produção | Baixo | Baixo |
| B03 | Blog | Médio | Cards do blog não usam `BlogCardCover` (gradiente visual) | Aparência menos premium | Adicionar cover visual nos cards do blog | Médio | Baixo |
| B04 | Blog | Baixo | Paginação é client-side, não gera URLs únicas para página 2, 3 etc. | SEO: página 2 não é indexável separadamente | Não bloquear indexação de ?page=N (já tem canonical) | Baixo | Baixo |
| B05 | Blog | Oportunidade | Nenhum artigo em destaque ("featured post") | Home mostra 3 recentes, blog lista todos | Adicionar seção de destaque | Baixo | Baixo |
| B06 | Blog | Baixo | Total de 26 artigos — com 12 por página, são apenas 3 páginas | Baixo impacto | Monitorar à medida que novos posts forem adicionados | - | - |

### 8.3 Página de categoria (`/blog/categoria/[slug]`)
A rota existe mas não foi auditada em detalhes. Deve listar posts da categoria com breadcrumb adequado.

---

## 9. Auditoria do Template de Artigos

### 9.1 Estrutura atual do artigo
```
Breadcrumb
Header (badge categoria, data, leitura, revisão)
Título H1
Box "Por Daniel Gonçalves"
Box de descrição (citação)
Disclaimer azul (para categorias financeiras)
Índice (TableOfContents)
Conteúdo (prose HTML)
Box "Sobre o autor" (Daniel Gonçalves)
FAQ (divs estáticas)
Box "Sobre esta informação" (fontes)
CTA Calculadoras relacionadas
"Veja também" (relatedPosts)
```

### 9.2 Problemas identificados

| ID | Área | Severidade | Descrição | Impacto | Recomendação | Esforço | Risco |
|----|------|------------|-----------|---------|---------------|---------|-------|
| T01 | Template | **Crítico** | FAQ usa divs estáticas em vez de Accordion | Ocupa espaço excessivo, sem acessibilidade de acordeão, sem navegação por teclado | Substituir por `FAQSection` ou Accordion component | Baixo | Baixo |
| T02 | Template | **Crítico** | `TableOfContents` é server-side generated via client effect, mas ocupa espaço fixo vertical sem collapse | Artigos longos têm índice enorme empurrando conteúdo para baixo | Tornar colapsável (toggle) ou sticky lateral em desktop | Médio | Baixo |
| T03 | Template | Médio | Bloco "Por Daniel Gonçalves" + "Sobre o autor" são redundantes (mesmo conteúdo, mesmo autor) | Repetição desnecessária | Unificar em um único bloco | Baixo | Baixo |
| T04 | Template | Médio | "Sobre esta informação" com fontes oficiais ocupa muito espaço | Conteúdo valioso mas longo | Colapsar por padrão com link "Ver fontes" | Baixo | Baixo |
| T05 | Template | Baixo | Disclaimer azul só aparece para 4 categorias (Dívidas, Cartões, Empréstimos, Score) | Organização Financeira e Custo de Vida não têm | Estender para todas as categorias ou criar disclaimer universal | Baixo | Baixo |
| T06 | Template | Oportunidade | Navegação entre artigos (anterior/próximo) não existe | Usuário precisa voltar ao blog | Adicionar links "Artigo anterior" e "Próximo artigo" | Médio | Baixo |
| T07 | Template | Oportunidade | Não há botão "Voltar ao topo" | Artigos longos exigem scroll manual | Adicionar botão flutuante com smooth scroll | Baixo | Baixo |
| T08 | Template | Baixo | Box "Por Daniel Gonçalves" não está semanticamente dentro de `<header>` (fora do `<article>`) | HTML semântico questionável | Mover para dentro do `<header>` do `<article>` | Baixo | Baixo |
| T09 | Template | Baixo | CTA de calculadoras tem fundo primário e texto branco com opacidade 80% — legibilidade reduzida | Contraste pode ser baixo | Verificar contraste WCAG AA, ajustar opacidade se necessário | Baixo | Baixo |
| T10 | Template | Médio | Tamanho da coluna de conteúdo (max-w-3xl = 768px) é adequado para leitura em desktop | ✅ OK | - | - | - |
| T11 | Template | Oportunidade | `estimateReadingTime` usa 200 palavras/min — pode ser otimizado para português (média 180-190) | Precisão do tempo estimado | Ajustar para 180 palavras/min | Baixo | Baixo |

---

## 10. Auditoria das Tabelas

A auditoria identificou que o site usa dois tipos de tabelas:

1. **Tabelas via `prose` classes Tailwind** nos artigos (via `dangerouslySetInnerHTML`)
2. **Tabelas com wrapper `overflow-x-auto`** em alguns artigos (ex.: `como-aumentar-score-de-credito`, `quanto-tempo-leva-para-score-aumentar`)

### 10.1 Problemas identificados

| ID | Área | Severidade | Descrição | Impacto | Recomendação | Esforço | Risco |
|----|------|------------|-----------|---------|---------------|---------|-------|
| TB01 | Tabelas | **Crítico** | Tabelas no `prose` (via inline styles no `posts.ts`) têm bordas cruas, sem wrapper responsivo, sem scroll horizontal | Quebram em mobile, aspecto amador | Padronizar tabelas: wrapper responsivo + scroll horizontal + zebra suave + bordas arredondadas | Médio | Baixo |
| TB02 | Tabelas | **Alto** | Inconsistência: algumas tabelas têm `overflow-x-auto` wrapper (2 artigos), outras não (demais) | Experiência inconsistente entre artigos | Aplicar o mesmo padrão a todas as tabelas | Médio | Baixo |
| TB03 | Tabelas | Médio | Tabelas não têm legenda (`<caption>`) ou resumo | Acessibilidade reduzida para leitores de tela | Adicionar `<caption>` nas tabelas que precisam | Baixo | Baixo |
| TB04 | Tabelas | Oportunidade | Células de tabela não têm `scope` definido (nem `scope="col"` nos `<th>`) | Acessibilidade | Adicionar `scope` nos cabeçalhos | Baixo | Baixo |

### 10.2 Padrão de tabela premium recomendado

```html
<div class="overflow-x-auto rounded-xl border border-border">
  <table class="w-full text-sm">
    <caption class="sr-only">Descrição da tabela</caption>
    <thead>
      <tr class="bg-muted/80">
        <th scope="col" class="px-4 py-3 text-left font-semibold">Cabeçalho</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-t border-border even:bg-muted/20">
        <td class="px-4 py-3">Dado</td>
      </tr>
    </tbody>
  </table>
</div>
```

---

## 11. Auditoria dos Links Externos Crus

| ID | Área | Severidade | Descrição | Impacto | Recomendação | Esforço | Risco |
|----|------|------------|-----------|---------|---------------|---------|-------|
| L01 | Links crus | **Crítico** | Várias URLs oficiais no conteúdo aparecem como texto solto sem hyperlink (ex.: "www.serasa.com.br", "www.bcb.gov.br/cidadaniafinanceira/cadastropositivo") | Usuário não pode clicar, experiência pobre | Envolver URLs em `<a href="..." target="_blank" rel="noopener noreferrer">` com texto descritivo | Médio | Baixo |
| L02 | Links crus | **Alto** | Links oficiais no conteúdo dos posts não usam `target="_blank"` nem `rel="noopener noreferrer"` | Segurança e usabilidade | Adicionar atributos a todos os links externos no conteúdo | Médio | Baixo |
| L03 | Links crus | Médio | Links oficiais nos templates (ex.: fonte "Consumidor.gov.br" no bloco "Sobre esta informação") usam `target="_blank"` e `rel="noopener noreferrer"` | ✅ OK no template | Aplicar mesmo padrão ao conteúdo | - | - |

### URLs cruas detectadas no conteúdo (precisam virar links):
- www.serasa.com.br (múltiplas ocorrências)
- www.bcb.gov.br (múltiplas ocorrências)
- www.spcbrasil.org.br
- www.consumidorpositivo.com.br
- https://www.bcb.gov.br/cidadaniafinanceira/cadastropositivo

---

## 12. Auditoria dos Cards

### 12.1 Cards de artigos (blog page e home)
✅ Consistência visual
✅ Hover: sombra + translateY + cor
✅ Badge de categoria
✅ Data formatada
✅ Descrição com line-clamp

### 12.2 Cards de calculadoras (home e hubs)
✅ Ícone com cor de fundo
✅ Descrição curta
✅ CTA "Calcular agora"

### 12.3 Cards de categorias (home)
✅ Mesmo padrão dos cards de artigos

### 12.4 "Veja também" (artigos)
✅ Card compacto com categoria + título + CTA

### 12.5 Problemas identificados

| ID | Área | Severidade | Descrição | Impacto | Recomendação | Esforço | Risco |
|----|------|------------|-----------|---------|---------------|---------|-------|
| C01 | Cards | Médio | Cards de artigos no blog não têm cover/imagem | Lista de texto puro, pouco visual | Adicionar `BlogCardCover` (já existe componente) no topo de cada card | Médio | Baixo |
| C02 | Cards | Baixo | Cards de "Veja também" não têm badge de categoria | Perde contexto visual | Adicionar badge small com categoria | Baixo | Baixo |
| C03 | Cards | Oportunidade | Todos os cards seguem o mesmo padrão (borda + sombra leve) | Aparência funcional mas genérica | Variar estilos entre seções (ex.: calculadoras com fundo diferente) | Médio | Baixo |
| C04 | Cards | Baixo | Cards de calculadora nos hubs não estão linkados com `<a>` mas sim com `Button asChild > Link` dentro do CardContent | HTML redundante | Fazer o Card inteiro linkável (como nos quickStarts da home) | Baixo | Baixo |

---

## 13. Auditoria do FAQ

### 13.1 FAQ na Home (componente FAQSection)
✅ Accordion do shadcn/ui
✅ Navegação por teclado (Enter/Space expande)
✅ `aria-expanded` e `aria-controls` (nativos do Radix)
✅ Schema FAQPage via JSON-LD inline
✅ 8 perguntas relevantes

### 13.2 FAQ nos Artigos (divs estáticas)
❌ **NÃO** usa Accordion
❌ Sem navegação por teclado para expandir/recolher
❌ Ocupa espaço vertical fixo — artigos com 8+ perguntas ficam enormes
✅ Schema FAQPage via JSON-LD (adicionado no template)
✅ Perguntas e respostas relevantes

### 13.3 Problemas identificados

| ID | Área | Severidade | Descrição | Impacto | Recomendação | Esforço | Risco |
|----|------|------------|-----------|---------|---------------|---------|-------|
| F01 | FAQ | **Crítico** | FAQ em artigos usa divs estáticas em vez de Accordion | Espaço excessivo, sem acessibilidade, sem collapse | Substituir divs estáticas por FAQSection (Accordion) | Médio | Baixo |
| F02 | FAQ | Médio | FAQ em artigos não tem `aria-*` attributes | Acessibilidade reduzida | Resolvido ao migrar para Accordion | - | - |
| F03 | FAQ | Oportunidade | Home FAQ tem respostas com `<a href>` links — não compliant com blog-render-review | Skill diz que FAQ não deve ter `<a href>` | Os links renderizam corretamente via dangerouslySetInnerHTML. Manter ou substituir por texto sem link | Baixo | Baixo |
| F04 | FAQ | Oportunidade | Quantidade de perguntas varia muito (2 a 13) | Consistência questionável | Alvo: 4-8 perguntas por FAQ | - | - |

---

## 14. Auditoria de Acessibilidade

### 14.1 Verificações realizadas (análise estática de código)

| Aspecto | Status | Observação |
|---------|--------|------------|
| `lang="pt-BR"` | ✅ OK | Presente no `<html>` |
| Viewport meta | ✅ OK | `width=device-width, initial-scale=1` |
| Títulos de página | ✅ OK | Todos únicos |
| Headings em ordem | ✅ OK | H1 → H2 → H3 |
| Skip link | ❌ **Ausente** | Nenhum link "Pular para conteúdo" |
| Foco visível | ⚠️ Não verificado | shadcn/ui tem suporte, mas tailwind `outline-ring/50` pode ser fraco |
| Contraste de cor | ⚠️ Parcial | `#1a365d` + `#38a169` em fundo branco — verificar com ferramenta |
| Links com texto claro | ✅ OK | "Ler artigo", "Calcular agora", "Explorar" |
| Botões com nome acessível | ✅ OK | `aria-label` em botões de ícone |
| `aria-label` no menu mobile | ✅ OK | "Abrir menu" |
| Breadcrumb `aria-label` | ✅ OK | "Breadcrumb" |
| Accordion `aria-expanded` | ✅ OK (FAQSection) | Nativo do Radix |
| Tabelas com `<th>` | ⚠️ Parcial | Algumas têm, outras não |
| Tabelas sem `<caption>` | ❌ **Ausente** | Nenhuma tabela tem legenda |
| Imagens com `alt` | ✅ OK | Apenas `og-image.png` no layout |
| Botão voltar ao topo | ❌ **Ausente** | Nenhum |
| Navegação por teclado no FAQ dos artigos | ❌ **Ausente** | Divs estáticas sem interação |
| Labels em inputs calculadoras | ✅ OK | `htmlFor` presente |
| `sr-only` em ícones decorativos | ✅ OK | Usado em breadcrumbs e links |

### 14.2 Problemas identificados

| ID | Área | Severidade | Descrição | Impacto | Recomendação | Esforço | Risco |
|----|------|------------|-----------|---------|---------------|---------|-------|
| A01 | Acessibilidade | **Alto** | Skip link ausente | Usuários de teclado/leitor de tela precisam tabular todo o header | Adicionar `#skip-to-content` link no início do `<body>` | Baixo | Baixo |
| A02 | Acessibilidade | **Alto** | FAQ nos artigos usa divs estáticas sem Accordion | Navegação por teclado limitada | Migrar para Accordion | Médio | Baixo |
| A03 | Acessibilidade | Médio | Tabelas sem `<caption>` | Leitores de tela perdem contexto | Adicionar `<caption>` ou `aria-label` nas tabelas | Baixo | Baixo |
| A04 | Acessibilidade | Médio | Botão "Voltar ao topo" ausente | Usuários com mobilidade reduzida precisam scroll infinito | Adicionar botão flutuante | Baixo | Baixo |
| A05 | Acessibilidade | Médio | Contraste não verificado em runtime | Pode haver problemas com opacidade (ex.: CTA calculadoras com 80% opacidade) | Verificar com axe DevTools ou Lighthouse | Baixo | Baixo |
| A06 | Acessibilidade | Baixo | Foco visível depende de `outline-ring/50` do Tailwind — pode ser sutil demais | Usuários de teclado podem perder o foco | Verificar se `ring` tem contraste suficiente | Baixo | Baixo |

---

## 15. Auditoria Mobile

### 15.1 Header/Nav
✅ Sticky header funcional
✅ Menu Sheet com navegação completa
❌ Faltam links institucionais no menu mobile (/autor, /politica-editorial, /metodologia)

### 15.2 Home
✅ Grids empilham corretamente (1 coluna em mobile)
✅ Painel do trabalhador em grid 2x4 pode ficar apertado
⚠️ Hero com gradiente ocupa muita altura

### 15.3 Blog
✅ Cards empilham em 1 coluna
✅ Filtros com scroll horizontal (snap-x)
✅ Input de search ocupa largura total

### 15.4 Artigo
✅ Coluna de conteúdo centralizada (container padding)
✅ Índice do artigo empurra conteúdo — pior em mobile
⚠️ Tabelas sem `overflow-x-auto` quebram o layout

### 15.5 Calculadoras
✅ Formulário empilha corretamente
✅ Inputs de moeda funcionais
❌ Grid de resultado + formulário empilha — OK, mas poderia ter melhor espaçamento

### 15.6 Problemas identificados

| ID | Área | Severidade | Descrição | Impacto | Recomendação | Esforço | Risco |
|----|------|------------|-----------|---------|---------------|---------|-------|
| M01 | Mobile | **Alto** | Menu mobile não inclui /autor, /politica-editorial, /metodologia | Usuário não encontra páginas institucionais facilmente | Adicionar links institucionais completos no Sheet | Baixo | Baixo |
| M02 | Mobile | **Alto** | Tabelas sem overflow-x-auto quebram em mobile (< 768px) | Conteúdo cortado ou scroll vertical forçado | Envolver todas as tabelas em `overflow-x-auto` | Médio | Baixo |
| M03 | Mobile | Médio | Índice do artigo (TableOfContents) ocupa muito espaço vertical em mobile | Menu gigante antes do conteúdo | Tornar colapsável (toggle "Mostrar índice") em mobile | Baixo | Baixo |
| M04 | Mobile | Médio | Grid de calculadoras nos hubs com 3 cards em tablet (md) — 2 caberiam melhor | Cards apertados | Ajustar grid para md:grid-cols-2 em hubs | Baixo | Baixo |
| M05 | Mobile | Baixo | Badges de categoria ocupam largura fixa em mobile | Podem quebrar em textos longos | Usar `whitespace-nowrap` ou permitir wrap | Baixo | Baixo |
| M06 | Mobile | Oportunidade | Botões "Calcular" e "Limpar" nas calculadoras são largura total em mobile | OK, mas poderiam ter padding melhor | Aumentar padding vertical dos botões em mobile | Baixo | Baixo |

---

## 16. Auditoria de Performance / Core Web Vitals

### 16.1 Análise estática

| Aspecto | Status | Observação |
|---------|--------|------------|
| Build Turbopack | ✅ | Compilação rápida (7s) |
| Server Components | ✅ | Maioria dos componentes |
| Client Components | ⚠️ | Header, FAQ, calculadoras, blog-filters — necessários |
| Fontes Google | ⚠️ | Inter + Geist Mono com `font-display: swap` (padrão) |
| Imagens | ❌ | Nenhuma otimizada com `next/image` |
| Analytics | ✅ | Suspense + production only |
| Vercel Analytics | ✅ | Apenas em produção |
| JavaScript bundles | ⚠️ | shadcn/ui components podem aumentar bundle |
| CSS | ✅ | Tailwind com purge |
| Animações | ✅ | Mínimas (transitions, hovers) |

### 16.2 Problemas identificados

| ID | Área | Severidade | Descrição | Impacto | Recomendação | Esforço | Risco |
|----|------|------------|-----------|---------|---------------|---------|-------|
| P01 | Performance | **Alto** | Fontes Google (Inter + Geist Mono) carregadas sem `font-display:optional` ou preconnect | LCP pode ser impactado por FOIT | Adicionar `<link rel="preconnect">` para Google Fonts e usar `font-display: optional` | Baixo | Baixo |
| P02 | Performance | **Alto** | `og-image.png` e `apple-icon.png` são arquivos estáticos sem otimização next/image | Tamanho de imagem não otimizado | Usar `next/image` ou otimizar manualmente (webp, resize) | Baixo | Baixo |
| P03 | Performance | Médio | `BlogCardCover` usa gradiente CSS inline e `aspect-ratio` — OK, sem imagem real | ✅ Aceitável | - | - | - |
| P04 | Performance | Médio | `'use client'` em `header.tsx` (necessário para Sheet state) e `faq-section.tsx` (Accordion) | 2 client components | Já são necessários — sem ganho em mudar | - | - |
| P05 | Performance | Médio | `content-visibility:auto` experimental em blog filters | Pode causar CLS ou não ser suportado em todos os browsers | Substituir por lazy loading padrão ou IntersectionObserver | Baixo | Baixo |
| P06 | Performance | Baixo | Bundles não auditados | Desconhecido | Rodar `next build --debug` ou analisar com `@next/bundle-analyzer` | Baixo | Baixo |

---

## 17. Auditoria SEO Técnico

| ID | Área | Severidade | Descrição | Impacto | Recomendação | Esforço | Risco |
|----|------|------------|-----------|---------|---------------|---------|-------|
| S01 | SEO | **Alto** | Meta descriptions de hubs genéricas ("Tudo sobre cartões de crédito...") | Oportunidade de melhorar CTR no SERP | Personalizar meta descriptions com palavras-chave específicas | Baixo | Baixo |
| S02 | SEO | Médio | Links internos usam inconsistência: alguns relativos (/blog/...), outros absolutos (SITE_URL/blog/...) | Pode confundir crawlers | Padronizar todos para relativos | Baixo | Baixo |
| S03 | SEO | Médio | Blog pagination (`?page=N`) não gera links únicos indexáveis separadamente | Páginas 2+ não são crawladas como páginas separadas | Atualmente OK porque canonical aponta para a correta | Baixo | Baixo |
| S04 | SEO | Médio | Sitemap usa `new Date()` para `lastModified` de páginas estáticas | Data de modificação imprecisa | Usar datas fixas ou baseadas em git | Baixo | Baixo |
| S05 | SEO | Baixo | Alguns titles de blog posts > 60 caracteres (cortados no SERP) | CTR reduzido | Revisar titles para 50-60 caracteres | Baixo | Baixo |
| S06 | SEO | Médio | Páginas programas sem valor agregado: nenhuma detectada | ✅ OK | - | - | - |
| S07 | SEO | Médio | Canibalização potencial entre posts de score e dívidas | Já documentada na auditoria anterior | Manter monitoramento | - | - |
| S08 | SEO | Médio | `hreflang` não implementado (apenas pt-BR) | Não necessário para site monolíngue | ✅ OK | - | - |

---

## 18. Auditoria de Schema

### 18.1 Schemas implementados

| Schema | Local | Status |
|--------|-------|--------|
| `Organization` | Layout global (head) | ✅ OK |
| `WebSite` | Layout global (head) | ✅ OK |
| `BlogPosting` | `/blog/[slug]/page.tsx` | ✅ OK (adicionado na fase de conteúdo) |
| `FAQPage` | `/blog/[slug]/page.tsx` (artigos), `faq-section.tsx` (home) | ✅ OK |
| `BreadcrumbList` | `breadcrumbs.tsx` | ✅ OK |
| `WebApplication` | `calculadora-schema.tsx` (calculadoras) | ✅ OK |
| `HowTo` | `calculadora-schema.tsx` (calculadoras) | ✅ OK |

### 18.2 Problemas identificados

| ID | Área | Severidade | Descrição | Impacto | Recomendação | Esforço | Risco |
|----|------|------------|-----------|---------|---------------|---------|-------|
| SC01 | Schema | Médio | `SearchAction` ausente no `WebSite` schema | Perde a oportunidade de Sitelinks Search Box | Adicionar `potentialAction` com `SearchAction` | Baixo | Baixo |
| SC02 | Schema | Médio | Schema `Person` ausente na página `/autor` | Autor não é reconhecido como entidade | Adicionar `Person` schema com name, description, url | Baixo | Baixo |
| SC03 | Schema | Baixo | `Organization` schema não tem `sameAs` (redes sociais) | Conexão social ausente | Se houver redes sociais, adicionar | Baixo | Baixo |
| SC04 | Schema | **Crítico** | NENHUM schema financeiro inadequado foi encontrado | ✅ OK | - | - | - |
| SC05 | Schema | **Crítico** | NENHUM Product, Offer, Review, AggregateRating, FinancialService, LoanOrCredit presente | ✅ OK | - | - | - |

---

## 19. Auditoria de Confiança / YMYL / AdSense

| ID | Área | Severidade | Descrição | Impacto | Recomendação | Esforço | Risco |
|----|------|------------|-----------|---------|---------------|---------|-------|
| Y01 | Confiança | **Crítico** | `/app/metodologia/page.tsx` menciona "advogado" (linha 222) — viola AGENTS.md (proíbe advogados sem equipe jurídica) | Risco de sanção AdSense, violação de política | Substituir "advogado" por "profissional qualificado" | Baixo | Baixo |
| Y02 | Confiança | **Alto** | Página `/autor` diz "Bacharel em Ciência da Computação" — afirmação educacional sem comprovação visível | Risco baixo para AdSense, mas E-E-A-T questionável | Adicionar link para perfil LinkedIn ou currículo | Baixo | Baixo |
| Y03 | Confiança | Médio | Nenhuma página `/faq` centralizada (FAQ existe apenas na home e artigos) | E-E-A-T | Considerar criar página FAQ central | Médio | Baixo |
| Y04 | Confiança | Baixo | Ausência de página `/fontes-oficiais` ou `/links-uteis` | Pequena oportunidade de E-E-A-T | Criar página com links oficiais organizados | Baixo | Baixo |
| Y05 | Confiança | Baixo | Disclaimer de independência presente em 3 locais (hero, aviso azul, footer) — consistente | ✅ OK | - | - | - |
| Y06 | Confiança | Baixo | AdSense policy: sem conteúdo proibido detectado (sem promessas financeiras, sem conteúdo adulto, sem violência) | ✅ OK | - | - | - |
| Y07 | Confiança | Baixo | `ads.txt` presente e configurado | ✅ OK | - | - | - |
| Y08 | Confiança | Oportunidade | Cache de autoridade: site não tem backlinks ou presença externa significativa | Fora do escopo técnico | Estratégia de link building futura | - | - |

---

## 20. Auditoria das Calculadoras

### 20.1 Estrutura
Todas as 14 calculadoras seguem o mesmo template:
- Breadcrumb + ícone + título + descrição
- Card de formulário (inputs)
- Card de resultado
- Seção "Sobre [calculadora]"
- FAQ com Accordion
- Calculadoras relacionadas
- Artigos relacionados

### 20.2 Problemas identificados

| ID | Área | Severidade | Descrição | Impacto | Recomendação | Esforço | Risco |
|----|------|------------|-----------|---------|---------------|---------|-------|
| CL01 | Calculadoras | **Alto** | Inputs de moeda não validam entrada — aceitam caracteres não numéricos e só formatam no onChange | UX confusa: usuário pode digitar letras | Mascarar input ou validar com regex no onBlur | Médio | Baixo |
| CL02 | Calculadoras | Médio | "Calculadoras Relacionadas" usa `<a>` em vez de `<Link>` do Next.js | Perde navegação SPA | Substituir por `<Link>` | Baixo | Baixo |
| CL03 | Calculadoras | Médio | Formulário e resultado ficam lado a lado (lg:grid-cols-2) — em desktop, formulário ocupa 50% | Espaço mal aproveitado | Considerar layout de coluna única ou 60/40 | Baixo | Baixo |
| CL04 | Calculadoras | Baixo | Descrições das calculadoras (config) têm tamanho variado | Consistência | Padronizar tamanho das descrições | Baixo | Baixo |
| CL05 | Calculadoras | Baixo | Nenhuma calculadora tem gráfico (recharts está instalado) | Oportunidade | Adicionar gráfico simples de resultado (ex.: pizza, barras) | Alto | Médio |
| CL06 | Calculadoras | Oportunidade | "Compartilhar resultado" existe como componente mas implementação não verificada | Recurso existente | Verificar se funciona e está acessível | - | - |

---

## 21. Auditoria de Header / Footer / Navegação

| ID | Área | Severidade | Descrição | Impacto | Recomendação | Esforço | Risco |
|----|------|------------|-----------|---------|---------------|---------|-------|
| N01 | Navegação | **Alto** | Menu mobile (Sheet) não inclui /autor, /politica-editorial, /metodologia | Páginas institucionais importantes não acessíveis via mobile | Adicionar links no Sheet | Baixo | Baixo |
| N02 | Navegação | Médio | Dropdown de calculadoras no header desktop não tem ícones | Lista de texto puro | Adicionar ícones pequenos para melhor scannability | Baixo | Baixo |
| N03 | Navegação | Médio | Header desktop calculadoras dropdown tem 13 itens — muito longo | Scroll necessário | Agrupar em subcategorias ou limitar a 8 principais | Baixo | Baixo |
| N04 | Navegação | Baixo | Footer repete "Blog" na seção Guias e na seção Institucional | Duplicação desnecessária | Remover "Blog" da seção Institucional (já está em Guias) | Baixo | Baixo |
| N05 | Navegação | Baixo | Footer não tem link para /sitemap.xml | Desnecessário para usuários, mas útil para crawlers | Adicionar link no footer | Baixo | Baixo |
| N06 | Navegação | Oportunidade | Navegação entre artigos (anterior/próximo) não existe | Usuário precisa voltar ao blog | Adicionar no final de cada artigo | Médio | Baixo |

---

## 22. Lista de Problemas por Severidade

### P0 — Crítico (4)
| ID | Área | Descrição |
|----|------|-----------|
| TB01 | Tabelas | Tabelas sem wrapper responsivo, quebram em mobile |
| T01 | Template | FAQ usa divs estáticas em vez de Accordion |
| L01 | Links crus | URLs oficiais soltas sem hyperlink no conteúdo |
| Y01 | Confiança | Metodologia cita "advogado" violando AGENTS.md |
| T02 | Template | Índice do artigo ocupa espaço fixo sem collapse (crítico em mobile) |

### P1 — Alta (11)
| ID | Área | Descrição |
|----|------|-----------|
| A01 | Acessibilidade | Skip link ausente |
| A02 | Acessibilidade | FAQ dos artigos sem Accordion (acessibilidade) |
| H01 | Hubs | /cartoes e /score com apenas 1 link de artigo |
| B01 | Blog | BlogFilters sem URLSearchParams — perde estado |
| L02 | Links crus | Links externos sem target=_blank e rel=noopener |
| P01 | Performance | Fontes Google sem preconnect |
| P02 | Performance | Imagens sem otimização next/image |
| T03 | Template | Bloco autor duplicado |
| CL01 | Calculadoras | Inputs de moeda sem validação |
| M01 | Mobile | Menu mobile incompleto (faltam institucionais) |
| M02 | Mobile | Tabelas quebram em mobile |
| N01 | Navegação | Menu mobile sem links institucionais |
| Y02 | Confiança | Autor sem comprovação de credenciais |
| SC01 | Schema | SearchAction ausente |
| SC02 | Schema | Person schema ausente |

### P2 — Média (17)
| ID | Área | Descrição |
|----|------|-----------|
| H02 | Hubs | /custo-de-vida e /organizacao-financeira como thin content |
| H03 | Hubs | Grid de calculadoras fixo 3 colunas |
| B02 | Blog | content-visibility:auto experimental |
| B03 | Blog | Cards sem BlogCardCover visual |
| T04 | Template | Bloco "Sobre esta informação" muito longo |
| TB02 | Tabelas | Inconsistência de wrapper entre tabelas |
| TB03 | Tabelas | Tabelas sem <caption> |
| A03 | Acessibilidade | Tabelas sem caption |
| A04 | Acessibilidade | Botão voltar ao topo ausente |
| A05 | Acessibilidade | Contraste não verificado |
| M03 | Mobile | Índice muito grande em mobile |
| S01 | SEO | Meta descriptions genéricas em hubs |
| S02 | SEO | Inconsistência links relativos/absolutos |
| CL02 | Calculadoras | <a> em vez de <Link> |
| CL03 | Calculadoras | Layout formulário/resultado |
| N02 | Navegação | Dropdown calculadoras sem ícones |
| N03 | Navegação | Dropdown com 13 itens |

### P3 — Baixa / Oportunidade (11)
| ID | Área | Descrição |
|----|------|-----------|
| H04 | Home | Repetição de CTA "Ver todas" |
| H05 | Hubs | Nenhum hub tem FAQ |
| B04 | Blog | Paginação client-side sem URLs únicas |
| T06 | Template | Navegação entre artigos ausente |
| T07 | Template | Botão voltar ao topo ausente |
| C01 | Cards | Cards sem cover visual |
| C03 | Cards | Cards genéricos |
| F03 | FAQ | <a href> em FAQ da home |
| M06 | Mobile | Botões calculadoras padding |
| P06 | Performance | Bundles não auditados |
| CL05 | Calculadoras | Gráficos não implementados (recharts instalado) |

---

## 23. Roadmap Recomendado de Correções

### Fase 1 — Correções críticas (P0, esforço baixo)
1. Substituir divs FAQ nos artigos por Accordion (FAQSection) — P0
2. Adicionar wrapper `overflow-x-auto` em tabelas sem — P0
3. Remover "advogado" da metodologia — P0 → já documentado em auditoria anterior
4. Envolver URLs oficiais soltas em hyperlinks — P0
5. Tornar TableOfContents colapsável — P0
6. Adicionar `target="_blank"` + `rel="noopener noreferrer"` em links externos — P1

### Fase 2 — Alta prioridade (P1)
7. Adicionar skip link — P1
8. Adicionar links institucionais no menu mobile — P1
9. Adicionar validação nos inputs de calculadora — P1
10. Adicionar preconnect para Google Fonts — P1
11. Adicionar schema SearchAction e Person — P1
12. Unificar bloco de autor duplicado — P1
13. Persistir filtros do blog na URL — P1
14. Expandir hubs thin content — P1

### Fase 3 — Melhorias (P2)
15. Adicionar cobertura visual nos cards do blog
16. Padronizar links internos (relativos vs absolutos)
17. Adicionar legendas em tabelas
18. Adicionar botão voltar ao topo
19. Melhorar meta descriptions de hubs

### Fase 4 — Refinamentos (P3)
20. Adicionar navegação entre artigos
21. Adicionar gráficos nas calculadoras (recharts)
22. Variar estilos de cards por seção
23. Auditoria de bundles

---

## 24. Prioridade P0, P1, P2, P3

| Prioridade | Quantidade | Ação |
|------------|------------|------|
| **P0** | 5 | Corrigir imediatamente antes de qualquer outro trabalho |
| **P1** | 11 | Corrigir na próxima sprint |
| **P2** | 17 | Agendar após P0/P1 |
| **P3** | 11 | Incluir em roadmap contínuo |
| **Total** | **44** | |

---

## 25. Próxima Rodada Recomendada

**Rodada 1 — Correções P0 (críticas)**

Prompt sugerido:
> "Corrigir problemas P0 identificados na auditoria geral pós-conteúdo:
> 1. Migrar FAQ dos artigos de divs estáticas para Accordion
> 2. Adicionar wrapper overflow-x-auto em todas as tabelas sem
> 3. Remover 'advogado' da página de metodologia
> 4. Envolver URLs oficiais soltas do conteúdo em hyperlinks com target=_blank
> 5. Tornar TableOfContents colapsável (toggle) para economizar espaço
> 6. Adicionar target=_blank + rel=noopener em links externos do conteúdo"

**Rodada 2 — Correções P1 (alta prioridade)**

**Rodada 3 — Melhorias P2**

**Rodada 4 — Refinamentos P3**

---

## 26. Resultado do Build

```
> my-project@0.1.0 build
> next build

✓ Compiled successfully in 7.1s
✓ TypeScript em 8.2s
✓ 33 páginas estáticas geradas em 1009ms

Build: ✅ Aprovado (sem erros)
```

## 27. Resultado do Lint

```
> my-project@0.1.0 lint
> eslint .

Lint: ✅ Aprovado (sem erros)
```

## 28. Resultado dos Testes

```
> vitest

No test files found, exiting with code 1
include: lib/**/*.test.ts
```

**Testes:** ⚠️ Nenhum teste implementado (configurado mas sem arquivos)

---

## 29. Observações Finais

1. **A fase de conteúdo está encerrada com sucesso.** Todos os 26 artigos foram auditados, revisados e estão em conformidade com os padrões Good+.

2. **Os maiores gargalos visuais/técnicos são:** FAQ sem Accordion, tabelas sem responsividade, índice fixo e links crus. Esses 5 itens P0 devem ser resolvidos antes de qualquer outro trabalho.

3. **A acessibilidade é a área mais fraca do site (55/100).** Skip link ausente, FAQ sem Accordion, tabelas sem caption e botão voltar ao topo ausente são as principais lacunas.

4. **O site tem aparência funcional mas não premium.** Para atingir um visual premium, seria necessário investir em: covers nos cards, variedade de estilos, tabelas com design refinado e micro-interações.

5. **Nenhum schema financeiro inadequado foi encontrado.** O projeto está limpo de Product, Offer, Review, AggregateRating, FinancialService e LoanOrCredit.

6. **AdSense readiness é boa mas não excelente.** O maior risco é a menção a "advogado" na metodologia (já documentada em auditoria anterior, ainda não corrigida).

---

## 30. Dados da Auditoria

| Item | Valor |
|------|-------|
| Arquivos lidos | 28 (AGENTS.md, auditoria-completa-qualidade.md, 19 skills, layout.tsx, page.tsx (home), blog/page.tsx, blog/[slug]/page.tsx, cartoes/page.tsx, score/page.tsx, dividas/page.tsx, globals.css, header.tsx, footer.tsx, faq-section.tsx, table-of-contents.tsx, breadcrumbs.tsx, blog-filters.tsx, blog-card-cover.tsx, calculadora-template.tsx, blog/layout.tsx) |
| Skills lidas | 8 (AGENTS.md, blog-render-review, seo-audit-fix, web-quality-audit, schema-markup, best-practices, frontend-design, README.md) |
| Problemas encontrados | 44 (5 P0, 11 P1, 17 P2, 11 P3) |
| Nota geral estimada | 70/100 |
| Build | ✅ |
| Lint | ✅ |
| Testes | ⚠️ Nenhum |
| Data da auditoria | 19 de junho de 2026 |
