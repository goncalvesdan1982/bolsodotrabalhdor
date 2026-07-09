# Auditoria Completa — Bolso do Trabalhador

**Skill:** Impeccable v3.9.1
**Data:** 08 de julho de 2026
**Domínio:** https://www.bolsodotrabalhador.online/
**Harness:** OpenCode
**Contexto:** PRODUCT.md e DESIGN.md gerados via `/impeccable init`

---

## Resumo Executivo

O **Bolso do Trabalhador** é um portal informativo independente sobre benefícios, programas sociais, educação financeira e direitos do trabalhador brasileiro. Utiliza Next.js 16.2.6 (App Router), React 19.2.4, TypeScript 5.7.3, Tailwind CSS 4.2.0 e shadcn/ui.

O projeto apresenta **qualidade geral boa** para um portal informativo em estágio inicial de produção. As fundações técnicas (SEO, acessibilidade estrutural, server components, design tokens, JSON-LD) são sólidas. No entanto, existem **gaps significativos em contraste de cores, dark mode, consistência do design system, code duplication e segurança (CSP)** que impedem a classificação como Portal Premium.

---

## Nota Geral

**7.2 / 10**

### Notas Individuais

| Dimensão | Nota | Critérios |
|----------|------|-----------|
| **Arquitetura** | 8.0 | App Router, server/client boundaries corretos, boa componentização |
| **Código** | 6.5 | Duplicação massiva em calculadoras, 3 switch gigantes, `any` types |
| **TypeScript** | 6.5 | `any` types no template principal, falta de tipos em resultados |
| **React** | 8.0 | Server components bem usados, Suspense no GA, hooks corretos |
| **Next.js** | 8.0 | App Router, metadata dinâmico, sitemap dinâmico, redirects |
| **SEO** | 8.5 | Quase perfeito — todas as páginas com metadata, OG, Twitter, canonical, JSON-LD |
| **Performance** | 7.0 | next/font, next/image, sem lazy loading dinâmico, bundle aceitável |
| **Conteúdo** | 7.0 | 30 posts de qualidade, mas padrão IA repetitivo, FAQ duplicada |
| **UI** | 7.0 | Design system consistente mas hard-coded colors quebram dark mode |
| **UX** | 7.5 | Navegação clara, breadcrumbs, calculadoras funcionais |
| **Acessibilidade** | 5.5 | **Falhas de contraste WCAG AA**, sem `prefers-reduced-motion` |
| **Mobile** | 6.5 | Touch targets <44px, tabelas com overflow, apenas 2 breakpoints |
| **Desktop** | 8.0 | Layout responsivo, bom aproveitamento de espaço |
| **Design System** | 6.0 | DESIGN.md gerado, mas ~40+ cores hard-coded fora do sistema |
| **EEAT** | 7.5 | Política editorial, metodologia, autor, linguagem YMYL cuidadosa |
| **Segurança** | 4.0 | **Sem CSP**, `dangerouslySetInnerHTML` sem sanitização |
| **Manutenibilidade** | 6.0 | Posts em arquivo único de 4194 linhas, lógica de cálculo monolítica |

### Rating Bands (Impeccable Audit)

| Dimensão | Score | Key Finding |
|----------|-------|-------------|
| Accessibility | 2/4 | Contraste verde-branco falha AA, sem `prefers-reduced-motion` |
| Performance | 3/4 | Sem lazy loading dinâmico, `use client` desnecessário no contato |
| Responsive Design | 2/4 | Touch targets <44px, overflow tabelas, breakpoints insuficientes |
| Theming | 2/4 | Dark mode quebrado em premium-table, callouts, related-links |
| Anti-Patterns | 2/4 | Purple AI palette no Score page, side-tab borders, cores hard-coded |
| **Total** | **11/20** | **Acceptable — Significant work needed** |

---

## Classificação do Projeto

**Pré-Premium.** O projeto tem bases sólidas e conteúdo de qualidade, mas não pode ser classificado como Portal Premium até resolver:

1. **🔴 P0 — Contraste WCAG AA** (verde `#38a169` em fundo branco)
2. **🔴 P0 — CSP Headers ausentes** (segurança)
3. **🔴 P0 — Dark mode quebrado** em tabelas, callouts e related-links
4. **🟠 P1 — Duplicação massiva de código** (13 metadatas de calculadora, 3 switches de 470 linhas)
5. **🟠 P1 — OG image dinâmica sem rota** (blog posts sem OG image)
6. **🟠 P1 — Título duplicado** em todas as subpáginas
7. **🟡 P2 — Touch targets < 44px** no mobile
8. **🟡 P2 — Sem `prefers-reduced-motion`**

---

## Lista Completa de Melhorias Priorizadas (P0–P3)

---

### 🔴 P0 — Crítico

---

#### P0.1 — Contraste WCAG AA: Verde `#38a169` em fundo branco

| Campo | Detalhe |
|-------|---------|
| **Local** | `app/globals.css:16-21` — `--secondary` e `--accent` |
| **Categoria** | Acessibilidade (WCAG 2.2 SC 1.4.3) |
| **Impacto** | Texto em verde `#38a169` sobre branco tem ~2.7:1 de contraste. Falha WCAG AA (mínimo 4.5:1). Usuários com baixa visão não conseguem ler. Em dark mode, o verde `--primary` (#38a169) no fundo `#0f172a` tem ~4.0:1, também falhando para texto pequeno. |
| **Esforço** | Baixo |
| **Recomendação** | Escurecer o verde para `#2d8a56` (~5.2:1 no light, ~5.5:1 no dark) ou usar verde apenas como cor decorativa (não para texto). Atualizar DESIGN.md. |

---

#### P0.2 — CSP Headers ausentes

| Campo | Detalhe |
|-------|---------|
| **Local** | `next.config.mjs` — sem `async headers()` |
| **Categoria** | Segurança |
| **Impacto** | Sem Content Security Policy, qualquer script de terceiro pode ser executado. O AdSense carrega de domínio externo sem restrição. Uma vulnerabilidade XSS permitiria execução arbitrária de código. |
| **Esforço** | Baixo |
| **Recomendação** | Adicionar `async headers()` em `next.config.mjs` com CSP restritivo: `default-src 'self'`, `script-src 'self' 'unsafe-inline' 'unsafe-eval' https://pagead2.googlesyndication.com https://www.googletagmanager.com`, `style-src 'self' 'unsafe-inline'`, etc. |

---

#### P0.3 — Dark mode quebrado em premium-table, callouts e related-links

| Campo | Detalhe |
|-------|---------|
| **Local** | `app/globals.css:160-550` — múltiplos seletores |
| **Categoria** | UI / Theming |
| **Impacto** | Premium tables (linhas 160-263), callouts (411-477) e related-links-premium (480-550) usam cores hard-coded (#e8f1fb, #12365d, #fef2f2, etc.). Em dark mode, essas seções mantêm cores claras, quebrando completamente a experiência (texto escuro em fundo escuro ou vice-versa). |
| **Esforço** | Médio |
| **Recomendação** | Substituir cores hard-coded por variáveis CSS (`--color-*`). Adicionar overrides `.dark` para cada seção. O Impeccable Detector encontrou **40+ cores** fora do DESIGN.md. |

---

#### P0.4 — `dangerouslySetInnerHTML` sem sanitização em conteúdo renderizado

| Campo | Detalhe |
|-------|---------|
| **Local** | `app/blog/[slug]/page.tsx:297` — `enhanceArticleHtml()`, `components/faq-section.tsx:58` |
| **Categoria** | Segurança |
| **Impacto** | O conteúdo HTML dos posts e respostas FAQ é renderizado via `dangerouslySetInnerHTML` sem DOMPurify ou sanitização. Embora atualmente os dados sejam estáticos (local TS), se a fonte mudar para CMS/API externa, torna-se vetor XSS. |
| **Esforço** | Baixo |
| **Recomendação** | Adicionar `DOMPurify.sanitize()` no output de `enhanceArticleHtml()` e nos answers do FAQ. |

---

### 🟠 P1 — Alto

---

#### P1.1 — Duplicação de metadados de calculadora (13×)

| Campo | Detalhe |
|-------|---------|
| **Local** | `app/calculadoras/*/page.tsx` — linhas 8-28 em cada |
| **Categoria** | Código / Manutenibilidade |
| **Impacto** | O bloco de `metadata` export (24 linhas) é copiado idêntico em 13 páginas de calculadora, diferindo apenas pelo `calculadoraKey`. Adicionar uma nova calculadora requer copiar 24 linhas para um novo arquivo. |
| **Esforço** | Baixo |
| **Recomendação** | Extrair para função `gerarMetadataCalculadora(key: string): Metadata` em `lib/schemas-financeiro.ts`. Cada página de calculadora reduziria para ~5 linhas. |

---

#### P1.2 — Três switch statements gigantes em `CalculadoraTemplate` (~470 linhas)

| Campo | Detalhe |
|-------|---------|
| **Local** | `components/calculadora-template.tsx:109-241`, `260-383`, `386-591` |
| **Categoria** | Código / Manutenibilidade |
| **Impacto** | Três switches de 13 casos cada para `handleCalcular`, `renderForm` e `renderResult`. Total ~470 linhas de código similar com validação duplicada. Dificulta manutenção, aumenta risco de bugs em uma lógica tão crítica (cálculos financeiros). |
| **Esforço** | Alto |
| **Recomendação** | Refatorar para padrão Strategy/Handler: um objeto `calculadoraHandlers` com funções `calcular`, `renderForm`, `renderResult` por tipo. Cada calculadora teria seu próprio módulo handler. |

---

#### P1.3 — OG image dinâmica sem rota (`/og`)

| Campo | Detalhe |
|-------|---------|
| **Local** | `app/blog/[slug]/page.tsx:111` |
| **Categoria** | SEO |
| **Impacto** | Blog posts referenciam `${SITE_URL}/og?title=...&category=...` como OG image, mas **nenhuma rota `/og` existe**. Compartilhamentos de blog posts no WhatsApp, Facebook, Twitter não terão imagem (ou retornarão 404). |
| **Esforço** | Médio |
| **Recomendação** | Implementar rota `app/og/route.tsx` com `@vercel/og` ou `satori` para gerar imagens OG dinâmicas. Alternativa de curto prazo: fallback para `og-image.png` estático. |

---

#### P1.4 — Título duplicado (double branding) em todas as subpáginas

| Campo | Detalhe |
|-------|---------|
| **Local** | Todas as `page.tsx` — `title: 'Nome | Bolso do Trabalhador'` |
| **Categoria** | SEO |
| **Impacto** | O layout root define template `%s | Bolso do Trabalhador`. As páginas filhas incluem manualmente `" | Bolso do Trabalhador"` no title. Resultado: "Nome | Bolso do Trabalhador | Bolso do Trabalhador" — a marca aparece duas vezes, desperdiçando ~30 caracteres preciosos do title tag. |
| **Esforço** | Baixo |
| **Recomendação** | Remover `" | Bolso do Trabalhador"` de todos os `title` de páginas filhas. Deixar o template do layout lidar com isso. |

---

#### P1.5 — `any` types no template de calculadora

| Campo | Detalhe |
|-------|---------|
| **Local** | `components/calculadora-template.tsx:94,107,416` |
| **Categoria** | TypeScript |
| **Impacto** | `useState<any>(null)`, `let res: any`, `(cat: any)`. Isso desativa completamente a verificação de tipos em todo o fluxo de cálculo — exatamente onde os tipos são mais importantes (valores financeiros, moeda, percentuais). |
| **Esforço** | Médio |
| **Recomendação** | Criar union type `CalculadoraResultado` com discriminated unions por tipo de calculadora. Tipar `handleCalcular` com overloads ou genéricos. |

---

#### P1.6 — Blog posts em arquivo único de 4194 linhas

| Campo | Detalhe |
|-------|---------|
| **Local** | `lib/posts.ts` |
| **Categoria** | Conteúdo / Manutenibilidade |
| **Impacto** | Todos os 30 posts (HTML, metadata, FAQ) estão em único arquivo TypeScript. Conteúdo acoplado ao código. Qualquer edição de texto requer abrir um arquivo de 4K+ linhas. Separação de concerns zero. |
| **Esforço** | Alto |
| **Recomendação** | Migrar posts para arquivos `.md` ou `.mdx` em `content/posts/`. Usar gray-matter para metadata. Criar funções `getAllPosts()`, `getPostBySlug()` no lugar da array estática. |

---

#### P1.7 — Navegação/Categorias duplicadas em 3 locais

| Campo | Detalhe |
|-------|---------|
| **Local** | `components/header.tsx:16-30`, `components/footer.tsx:13-20`, `app/page.tsx:92-99` |
| **Categoria** | Código / Manutenibilidade |
| **Impacto** | A lista de categorias e calculadoras é definida em 3 lugares diferentes com subconjuntos diferentes. Adicionar uma categoria requer 3 alterações. |
| **Esforço** | Baixo |
| **Recomendação** | Extrair para config centralizada em `lib/config.ts` e importar onde necessário. |

---

### 🟡 P2 — Médio

---

#### P2.1 — Touch targets < 44px no mobile

| Campo | Detalhe |
|-------|---------|
| **Local** | `components/header.tsx:135-160` (nav links: ~32px), breadcrumbs, footer links |
| **Categoria** | Mobile / Acessibilidade (WCAG 2.2 SC 2.5.8) |
| **Impacto** | Links de navegação mobile têm ~32px de altura (abaixo dos 44px mínimos). Botão hamburger tem 40px. Footer links têm ~20px. Usuários com dedos grandes ou motricidade fina reduzida errarão o toque. |
| **Esforço** | Baixo |
| **Recomendação** | Aumentar padding vertical dos links de navegação mobile para `py-3`. Garantir `min-height: 44px` em todos os interactive elements. Botão hamburger: usar `h-11 w-11`. |

---

#### P2.2 — Sem suporte a `prefers-reduced-motion`

| Campo | Detalhe |
|-------|---------|
| **Local** | Todo o código — nenhuma `@media (prefers-reduced-motion)` |
| **Categoria** | Acessibilidade (WCAG 2.2 SC 2.3.3) |
| **Impacto** | Transições e animações (scroll suave, hover effects, transitions) rodam para todos os usuários, incluindo aqueles com vestibular disorders, vertigem ou que solicitaram redução de movimento. |
| **Esforço** | Baixo |
| **Recomendação** | Adicionar `@media (prefers-reduced-motion: reduce)` em `globals.css` desabilitando animações/transitions. No `back-to-top-button`, checar `window.matchMedia('(prefers-reduced-motion: reduce)')` antes de `behavior: 'smooth'`. |

---

#### P2.3 — Cookie banner sem `role="dialog"`, `aria-modal` ou Escape

| Campo | Detalhe |
|-------|---------|
| **Local** | `components/cookie-banner.tsx:24-34` |
| **Categoria** | Acessibilidade |
| **Impacto** | O banner de cookies não tem ARIA dialog role, não prende foco, não fecha com Escape. Leitores de tela não identificam como uma interrupção que requer ação. |
| **Esforço** | Baixo |
| **Recomendação** | Adicionar `role="dialog" aria-modal="true" aria-label="Aviso de cookies"`. Tratar tecla Escape. Gerenciar foco no mount. |

---

#### P2.4 — Back-to-top button focável quando invisível

| Campo | Detalhe |
|-------|---------|
| **Local** | `components/back-to-top-button.tsx:22-27` |
| **Categoria** | Acessibilidade |
| **Impacto** | O botão tem `opacity-0` e `pointer-events-none` quando oculto, mas permanece no DOM e é acessível por Tab. Usuários de teclado encontram um botão invisível. |
| **Esforço** | Baixo |
| **Recomendação** | Adicionar `aria-hidden={!visible}` ou renderização condicional do botão. |

---

#### P2.5 — Duplicate BreadcrumbList JSON-LD em blog posts

| Campo | Detalhe |
|-------|---------|
| **Local** | `app/blog/[slug]/page.tsx:188-196` + `components/breadcrumbs.tsx:15-32` |
| **Categoria** | SEO |
| **Impacto** | Duas instâncias de BreadcrumbList schema na mesma página. Crawlers podem ignorar ambas ou interpretar incorretamente. |
| **Esforço** | Baixo |
| **Recomendação** | Remover o BreadcrumbList inline do `[slug]/page.tsx` (linhas 188-196). O componente `Breadcrumbs` já injeta o schema. |

---

#### P2.6 — Heading hierarchy quebrada em blog post (h1 → h3)

| Campo | Detalhe |
|-------|---------|
| **Local** | `app/blog/[slug]/page.tsx:349,369` |
| **Categoria** | Acessibilidade (WCAG 1.3.1) |
| **Impacto** | O `h3` "Simule agora gratuitamente" e "Veja também" vêm logo após o `h1` do título — sem `h2` intermediário. Isso quebra a hierarquia de headings. |
| **Esforço** | Baixo |
| **Recomendação** | Mudar `h3` para `h2` nesses dois locais. |

---

#### P2.7 — Blog listing e Contato sem breadcrumbs

| Campo | Detalhe |
|-------|---------|
| **Local** | `app/blog/page.tsx`, `app/contato/page.tsx` |
| **Categoria** | UX / SEO |
| **Impacto** | Usuários no blog listing ou contato não têm navegação estrutural de volta. |
| **Esforço** | Baixo |
| **Recomendação** | Adicionar componente `<Breadcrumbs>` a ambas as páginas. |

---

#### P2.8 — SearchAction JSON-LD com parâmetro errado

| Campo | Detalhe |
|-------|---------|
| **Local** | `app/layout.tsx:127` |
| **Categoria** | SEO |
| **Impacto** | O WebSite schema usa `search={search_term_string}` mas o blog implementa busca com `?q=`. O campo SearchAction do Google não funcionará corretamente. |
| **Esforço** | Baixo |
| **Recomendação** | Mudar `search` para `q` no URL template. |

---

#### P2.9 — FAQ duplicada entre posts (keyword cannibalization)

| Campo | Detalhe |
|-------|---------|
| **Local** | Múltiplos posts — "CPF na nota aumenta score?", "Pix aumenta score?" |
| **Categoria** | SEO / Conteúdo |
| **Impacto** | Perguntas idênticas em 3-4 posts cada com respostas similares. Gera competição entre páginas do mesmo site para a mesma query. |
| **Esforço** | Médio |
| **Recomendação** | Manter FAQ apenas no post principal ou na página de categoria. Usar links internos para as respostas ao invés de reescrever. |

---

#### P2.10 — `app/contato/page.tsx` com `'use client'` desnecessário

| Campo | Detalhe |
|-------|---------|
| **Local** | `app/contato/page.tsx:1` |
| **Categoria** | Performance |
| **Impacto** | A página não usa hooks, estados, eventos ou APIs de browser — apenas renderiza um `mailto:` link e ícone. O `'use client'` força renderização client-side e aumenta o bundle do JS. |
| **Esforço** | Baixo |
| **Recomendação** | Remover `'use client'` — tornar server component. |

---

#### P2.11 — TOC genera IDs inválidos para HTML

| Campo | Detalhe |
|-------|---------|
| **Local** | `components/table-of-contents.tsx:23` |
| **Categoria** | Acessibilidade |
| **Impacto** | A slugificação para IDs não trata caracteres especiais ("O que é CET?" gera `id="o-que-é-cet?"` — `?` é inválido em HTML `id`). Headings duplicados gerariam IDs duplicados. |
| **Esforço** | Baixo |
| **Recomendação** | Sanitizar IDs (remover caracteres não alfanuméricos exceto hífen, adicionar sufixo numérico para duplicatas). |

---

#### P2.12 — Clusters `custo-de-vida` e `organizacao-financeira` com conteúdo ralo

| Campo | Detalhe |
|-------|---------|
| **Local** | `app/custo-de-vida/page.tsx`, `app/organizacao-financeira/page.tsx` |
| **Categoria** | Conteúdo |
| **Impacto** | Enquanto clusters como `dividas` (5 artigos) e `cartoes` (6 artigos) têm cobertura robusta, `custo-de-vida` e `organizacao-financeira` têm apenas 1 artigo cada. Desequilíbrio de conteúdo que passa credibilidade menor para esses tópicos. |
| **Esforço** | Alto |
| **Recomendação** | Produzir 2-3 artigos adicionais para cada cluster (planejamento orçamentário, custos regionais, etc.). |

---

#### P2.13 — OG image dimensions inconsistentes

| Campo | Detalhe |
|-------|---------|
| **Local** | `app/layout.tsx:54-56` — 1731×909 vs 1200×630 nas páginas |
| **Categoria** | SEO |
| **Impacto** | Root layout declara OG image como 1731×909, mas todas as outras páginas usam 1200×630. Inconsistência que pode afetar como redes sociais exibem o preview. |
| **Esforço** | Baixo |
| **Recomendação** | Padronizar para 1200×630 (recomendação do Facebook/WhatsApp) em todo o site. |

---

### 🟢 P3 — Baixo

---

#### P3.1 — Fonte Geist Mono carregada sem uso

| Local | `app/layout.tsx:18-21` |
|-------|------------------------|
| **Impacto** | Wasted font load. A variável `--font-geist-mono` é definida mas nenhum componente a referencia. |
| **Esforço** | Baixo |

#### P3.2 — 7 funções de analytics exportadas mas nunca usadas

| Local | `lib/analytics.ts:23-49` |
|-------|--------------------------|
| **Impacto** | Dead code: `calculadoraUtilizada`, `resultadoGerado`, `artigoVisualizado`, `scrollProfundidade`, `resultadoCompartilhado`, `pdfExportado`, `resultadoImpresso`. |
| **Esforço** | Baixo |

#### P3.3 — Hook `use-mobile` exportado mas nunca importado

| Local | `hooks/use-mobile.ts` |
|-------|-----------------------|
| **Impacto** | Dead code. Nenhum componente usa este hook. |
| **Esforço** | Baixo |

#### P3.4 — Componentes `ArtigosRelacionados` e `CalculadorasRelacionadas` subutilizados

| Local | `components/artigos-relacionados.tsx`, `components/calculadoras-relacionadas.tsx` |
|-------|-------|
| **Impacto** | Existem mas não são usados em blog posts ou cluster pages (que implementam lógica inline). | 
| **Esforço** | Baixo |

#### P3.5 — `InputComErro` component nunca importado

| Local | `components/input-com-erro.tsx` |
|-------|-------|
| **Impacto** | O `CalculadoraTemplate` usa `InputField` inline ao invés deste componente. |
| **Esforço** | Baixo |

#### P3.6 — `gerarFAQSchema` e `gerarBreadcrumbSchema` em lib nunca usados

| Local | `lib/schemas-financeiro.ts:50-79` |
|-------|-------|
| **Impacto** | Funções exportadas mas não importadas. Os schemas são construídos inline nos componentes. |
| **Esforço** | Baixo |

#### P3.7 — Person schema `sameAs` autorreferente

| Local | `app/autor/page.tsx:61-62` |
|-------|---------------------------|
| **Impacto** | `sameAs: [SITE_URL + '/autor']` aponta para a própria página. Deveria ter perfis reais (LinkedIn, GitHub) ou ser removido. |
| **Esforço** | Baixo |

#### P3.8 — Calculator schemas client-side apenas

| Local | `components/calculadora-schema.tsx` |
|-------|-------------------------------------|
| **Impacto** | WebApplication e HowTo schemas são injetados via `useEffect`. Para melhor SEO, deveriam ser server-rendered. |
| **Esforço** | Médio |

#### P3.9 — Todas as páginas de cluster sem `DataAtualizacao` e sem FAQ

| Local | Todas as 6 cluster pages |
|-------|--------------------------|
| **Impacto** | Nenhuma página cluster mostra data de atualização ou tem FAQ section. Blog posts têm, mas as páginas hub não. |
| **Esforço** | Baixo |

#### P3.10 — 5 imports de ícones não utilizados na home

| Local | `app/page.tsx:3-10` — `Search`, `HelpCircle`, `TrendingUp`, `FileText`, `Scale` |
|-------|-------|
| **Impacto** | Cada ícone adiciona ~0.5KB ao bundle inicial. |
| **Esforço** | Baixo |

#### P3.11 — Padrão `Math.round(...*100)/100` repetido ~40× em `lib/calculadoras-financeiras.ts`

| Local | Linhas 24-46, 76-99, 110-137, etc. |
|-------|-------|
| **Impacto** | Código repetitivo. Extrair para helper `round2(n: number): number`. |
| **Esforço** | Baixo |

#### P3.12 — Impeccable Detector: ~40+ cores fora do DESIGN.md + AI purple palette

| Local | `app/globals.css`, `styles/globals.css`, `app/score/page.tsx` |
|-------|-------|
| **Impacto** | Score page usa `text-purple-700` e `from-purple-50` / `from-purple-700` gradients. `styles/globals.css` tem side-tab borders (4px left). Muitas cores no globals.css ativo não estão documentadas no DESIGN.md. O detector classificou como "AI color palette" e "side-tab accent border" — tells clássicos de design gerado por IA. |
| **Esforço** | Médio |

---

## Impacto Esperado das Melhorias

| Área | Após correções P0-P1 |
|------|----------------------|
| **Acessibilidade** | WCAG 2.2 AA compliance (contraste, reduced-motion, touch targets) |
| **Segurança** | CSP headers protegem contra XSS e injeção |
| **SEO** | OG images em posts, titles sem duplicação, breadcrumb schema único |
| **Manutenibilidade** | Redução de ~70% de código duplicado nas calculadoras |
| **UX Mobile** | Touch targets adequados, dark mode funcional |
| **EEAT** | Datas de atualização visíveis, FAQ sem canibalização |

---

## Recomendações de Comandos Impeccable

1. **`/impeccable colorize the design system`** — Corrigir contraste verde, padronizar paleta
2. **`/impeccable audit the mobile navigation`** — Touch targets, acessibilidade
3. **`/impeccable harden the contact page`** — Remover `'use client'`, melhorar acessibilidade
4. **`/impeccable polish the dark mode`** — Corrigir dark mode em tables/callouts
5. **`/impeccable adapt the score page`** — Remover purple palette (AI tell)
6. **`/impeccable distill the calculator template`** — Refatorar switches para handlers
7. **`/impeccable audit the SEO`** — OG image route, canonical, breadcrumbs
8. **`/impeccable polish`** — Passada final pós-correções

---

## Pontos Fortes (Positive Findings)

1. **Cobertura de SEO exemplar**: Toda página tem metadata, OG, Twitter, canonical, JSON-LD. Sitemap dinâmico, robots.txt correto.
2. **Server Components corretos**: A maioria das páginas são server components. Apenas componentes interativos usam `'use client'`.
3. **JSON-LD rico**: Organization, WebSite, BlogPosting, FAQPage, BreadcrumbList, Person, WebApplication, HowTo — cobertura excellente de schemas.
4. **Linguagem YMYL cuidadosa**: O conteúdo segue rigorosamente as regras de AGENTS.md — "pode ter direito", "consulte canais oficiais", sem promessas garantidas.
5. **Acessibilidade estrutural**: Skip-to-content link, breadcrumbs com `aria-label`, `sr-only` labels, heading hierarchy consistente na maioria das páginas.
6. **Boa cobertura de testes**: Vitest configurado, Testing Library presente.
7. **Performance de fontes**: next/font com subsets, CSS variables, fallback stacks — carregamento otimizado.
8. **Design system documentado**: Após `/impeccable init`, PRODUCT.md e DESIGN.md estão no root com contexto estratégico e visual.

---

## Conclusão

O **Bolso do Trabalhador** está em um estágio **Pré-Premium**. As fundações de SEO, arquitetura Next.js, server components e curadoria de conteúdo são fortes. O projeto claramente segue boas práticas modernas de desenvolvimento web.

**O que impede a classificação Premium:**

1. **Acessibilidade**: Falhas de contraste WCAG AA no green primário, sem suporte a `prefers-reduced-motion`, cookie banner sem ARIA dialog.
2. **Segurança**: Ausência total de CSP headers — risco desnecessário.
3. **Dark Mode**: Premium tables, callouts e related-links quebrados em dark mode.
4. **Consistência do Design System**: ~40+ cores hard-coded fora do sistema de tokens. AI tells (purple palette no score page, side-tab borders).
5. **Qualidade de Código**: Duplicação massiva (13 metadatas de calculadora, 3 switches de 470 linhas, dados de navegação em 3 locais). `any` types no componente mais crítico.
6. **Conteúdo**: Posts em único arquivo de 4194 linhas. FAQ canibalizada. Clusters com conteúdo ralo. Padrões de IA (estrutura 100% uniforme, frases repetidas).
7. **Mobile**: Touch targets abaixo do mínimo WCAG 2.2. Overflow de tabelas premium.

**Resolução das 8 issues P0-P1** elevaria a nota de 7.2 para ~8.5. A resolução de todos os P0-P2 elevaria para ~9.0+, qualificando como **Portal Premium**.

> A Skill Impeccable foi instalada, validada e está pronta para ser utilizada nas auditorias do projeto.
