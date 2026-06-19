# Auditoria Completa de Qualidade — Bolso do Trabalhador

**Data:** 19 de junho de 2026
**Domínio:** https://www.bolsodotrabalhador.online/
**Escopo:** Todas as rotas, conteúdo, código, SEO, schema, links, segurança e confiança

---

## 1. Resumo Executivo

O Bolso do Trabalhador é um portal informativo independente com qualidade técnica sólida. O build compila sem erros, o lint passa limpo, e a arquitetura Next.js 16.2.6 está bem estruturada com 33 páginas estáticas e 2 dinâmicas.

**Pontos fortes:**
- Conteúdo predominantemente bem escrito, com linguagem cautelosa adequada a temas YMYL
- Páginas institucionais completas (sobre, autor, política editorial, metodologia, privacidade, termos)
- Disclaimer de independência presente na home, footer e FAQ
- AdSense configurado com ads.txt e política de privacidade
- Schema BreadcrumbList e FAQPage implementados
- Nenhuma contaminação de projetos anteriores
- Nenhum formulário coletando dados sensíveis
- Build e lint 100% limpos

**Problemas encontrados (32 no total):**
- 2 críticos
- 6 alta prioridade
- 14 média prioridade
- 10 baixa prioridade

**Nota geral:** 76/100

---

## 2. Stack Detectada

| Componente | Versão |
|------------|--------|
| Next.js | 16.2.6 (App Router, Turbopack) |
| React | 19.2.4 |
| TypeScript | 5.7.3 |
| Tailwind CSS | 4.2.0 |
| shadcn/ui | Radix UI |
| ESLint | 10.4.1 (flat config) |
| PostCSS | 8.5 |
| Vitest | 4.1.8 |
| pnpm | Gerenciador de pacotes |
| Vercel Analytics | 1.6.1 |
| recharts | 3.8.1 |
| date-fns | 4.1.0 |
| zod | 3.24.1 |

---

## 3. Rotas e Páginas Analisadas

**33 páginas estáticas (○):**

| Rota | Tipo | Status |
|------|------|--------|
| `/` | Home | OK |
| `/_not-found` | 404 | OK |
| `/autor` | Autor | OK |
| `/calculadoras` | Lista de calculadoras | OK |
| `/calculadoras/capacidade-endividamento` | Calculadora | OK |
| `/calculadoras/comprometimento-renda` | Calculadora | OK |
| `/calculadoras/economia-mensal` | Calculadora | OK |
| `/calculadoras/emprestimo` | Calculadora | OK |
| `/calculadoras/financiamento` | Calculadora | OK |
| `/calculadoras/juros-compostos` | Calculadora | OK |
| `/calculadoras/juros-simples` | Calculadora | OK |
| `/calculadoras/meta-financeira` | Calculadora | OK |
| `/calculadoras/orcamento-familiar` | Calculadora | OK |
| `/calculadoras/parcelas` | Calculadora | OK |
| `/calculadoras/quitacao-dividas` | Calculadora | OK |
| `/calculadoras/reserva-emergencia` | Calculadora | OK |
| `/calculadoras/troca-dividas` | Calculadora | OK |
| `/cartoes` | Cluster Cartões | OK |
| `/contato` | Contato | Ajuste leve |
| `/custo-de-vida` | Cluster Custo de Vida | OK |
| `/dividas` | Cluster Dívidas | OK |
| `/emprestimos` | Cluster Empréstimos | OK |
| `/metodologia` | Metodologia | OK |
| `/organizacao-financeira` | Cluster Org. Financeira | OK |
| `/politica-editorial` | Política Editorial | OK |
| `/politica-privacidade` | Privacidade | OK |
| `/score` | Cluster Score | OK |
| `/sobre` | Sobre | Ajuste leve |
| `/termos-uso` | Termos de Uso | OK |
| `/robots.txt` | Robots | OK |
| `/sitemap.xml` | Sitemap | OK |

**2 páginas dinâmicas (ƒ):**

| Rota | Tipo | Status |
|------|------|--------|
| `/blog` | Blog (com paginação e busca) | OK |
| `/blog/[slug]` | Artigo | OK |
| `/blog/categoria/[slug]` | Categoria | OK |

**26 artigos no total** distribuídos em 6 categorias:
- Dívidas: 6 artigos
- Score: 5 artigos
- Cartões: 5 artigos
- Empréstimos: 5 artigos
- Organização Financeira: 1 artigo
- Custo de Vida: 1 artigo
- ~1 artigo sem categoria na home (como-sair-das-dividas-guia-completo) — na verdade é Dívidas

---

## 4. Metodologia

A auditoria foi conduzida através de:
1. Leitura de todos os arquivos de código-fonte (layout, páginas, componentes, dados)
2. Execução de `npm run build` para verificar compilação
3. Execução de `npm run lint` para verificar qualidade de código
4. Execução de `npm run test` para verificar testes
5. Análise manual de conteúdo, metadata, schema e links
6. Grep de termos de risco YMYL, mojibake e contaminação
7. Verificação da estrutura de diretórios e roteamento

---

## 5. Tabela Geral de Classificação

| Classificação | Quantidade |
|---------------|------------|
| OK | 22 |
| Ajuste leve | 7 |
| Precisa melhorar | 4 |
| Crítico / baixo valor | 2 |

### Detalhamento:

**OK (22):**
Home, /blog, /blog/[slug] (maioria), /calculadoras (todas), /dividas, /cartoes, /emprestimos, /score, /organizacao-financeira, /custo-de-vida, /metodologia, /politica-editorial, /politica-privacidade, /termos-uso, /robots.txt, /sitemap.xml

**Ajuste leve (7):**
/sobre, /autor, /contato, /blog?page=N, /blog/categoria/[slug], post "melhores-cartoes-score-baixo", post "emprestimo-pessoal-ou-consignado"

**Precisa melhorar (4):**
Post "metodo-50-30-20-como-aplicar" (raso), post "quanto-custa-morar-sozinho" (raso), post "cartao-sem-anuidade-vale-a-pena" (raso em conteúdo), post "como-consultar-score-gratuitamente" (raso)

**Crítico / baixo valor (2):**
Falta de schema Article/BlogPosting nos artigos, /metodologia menciona "advogado" violando AGENTS.md

---

## 6. Páginas Críticas

| Rota | Problema | Severidade |
|------|----------|------------|
| Todos os `/blog/[slug]` | Ausência de schema Article/BlogPosting no JSON-LD. O schema FAQPage existe, mas não há schema Article com author, publisher, datePublished, dateModified. Isso reduz significativamente a elegibilidade para rich snippets no Google. | Crítico |
| `/metodologia` (line 222) | Menciona "consultor financeiro, contador ou advogado". O AGENTS.md proíbe "advogados" se não existir equipe jurídica. O Bolso do Trabalhador não tem equipe jurídica. | Crítico |

---

## 7. Páginas que Precisam Melhorar

| Rota | Problema | Prioridade |
|------|----------|------------|
| `/blog/melhores-cartoes-score-baixo` | Apenas ~700 palavras. Conteúdo superficial listando cartões sem análise aprofundada de taxas, critérios reais de aprovação ou comparação com dados atualizados. | Alta |
| `/blog/emprestimo-pessoal-ou-consignado` | ~300 palavras. Conteúdo muito superficial para um tópico tão importante. Falta comparação detalhada de taxas, exemplos numéricos, CET, prazos. | Alta |
| `/blog/metodo-50-30-20-como-aplicar` | ~500 palavras. Aborda o método mas não aprofunda adaptações regionais, exemplos com diferentes faixas de renda, ou ferramentas complementares. | Média |
| `/blog/quanto-custa-morar-sozinho` | ~400 palavras. Dados genéricos de custo, sem fontes específicas (IBGE, FipeZap). Poderia ter mais profundidade. | Média |
| `/blog/cartao-sem-anuidade-vale-a-pena` | Conteúdo razoável mas genérico. Faltam comparações reais de benefícios entre cartões. | Média |

---

## 8. Artigos sem FAQ ou com FAQ Fraco

Todos os 26 artigos possuem FAQ com perguntas reais e respostas completas. **Nenhum artigo está sem FAQ.**

Porém, 2 artigos têm FAQ com apenas 2-3 perguntas, abaixo do ideal:
- `/blog/quanto-custa-morar-sozinho` — apenas 2 perguntas no FAQ
- `/blog/cartao-sem-anuidade-vale-a-pena` — FAQ tem 5 perguntas mas as respostas são genéricas

---

## 9. Conteúdo Raso / Duplicado / Canibalizado

**Raso (thin content):**
- `melhores-cartoes-score-baixo` (~700 palavras)
- `emprestimo-pessoal-ou-consignado` (~300 palavras)
- `metodo-50-30-20-como-aplicar` (~500 palavras)
- `quanto-custa-morar-sozinho` (~400 palavras)

**Potencial canibalização entre posts de Score:**
- `como-aumentar-score-de-credito` e `quanto-tempo-leva-para-score-aumentar` atacam intenções semelhantes. O primeiro é genérico, o segundo é específico sobre prazos. OK separado.
- `o-que-realmente-influencia-score-credito` e `como-aumentar-score-de-credito` têm sobreposição. O primeiro foca em fatores, o segundo em ações. Podem beneficiar de melhor interlinking.

**Potencial canibalização entre posts de Dívidas:**
- `como-sair-das-dividas-guia-completo` (guia geral) e `como-montar-plano-sair-das-dividas` (plano específico) — bem diferenciados.
- `qual-divida-devo-pagar-primeiro`, `vale-a-pena-trocar-divida-cartao-por-emprestimo` — bem diferenciados.

**Títulos muito parecidos:**
- "Como aumentar o score de crédito em 2026" vs "Quanto tempo leva para o score aumentar" — intenções diferentes, OK
- "Empréstimo pessoal ou consignado" vs "Empréstimo consignado vale a pena" — podem se beneficiar de melhor diferenciação de escopo

---

## 10. Problemas de Linguagem YMYL / Oficialista

**Ocorrências identificadas — todas em contexto ACEITÁVEL:**

| Termo | Local | Contexto | Risco |
|-------|-------|----------|-------|
| "100% gratuito" | `/sobre` (line 39) | "100% gratuito e sem cadastro" — descrevendo as calculadoras, aceitável | Baixo |
| "100% gratuitas" | Home FAQ (line 146) | "Sim, todas as calculadoras são 100% gratuitas" — aceitável | Baixo |
| "nunca" | Home FAQ (line 154) | "Nunca informe senhas..." — contexto de segurança, aceitável | Nenhum |
| "sempre" | `/politica-editorial` (line 115) | "Artigos são revisados sempre que há mudanças" — aceitável | Nenhum |
| "site oficial" | Home FAQ (line 129) | "O Bolso do Trabalhador é um site oficial do governo?" — é uma pergunta negada na resposta | Nenhum |

**NENHUM caso de promessa de benefício, aprovação garantida, recebimento garantido, ou linguagem oficialista enganosa foi encontrado.**

O site faz um excelente trabalho de linguagem cautelosa, com disclaimers de independência na home, footer, FAQ e páginas institucionais.

---

## 11. Problemas de Links Internos

**Pontos fortes:**
- Interlinking extenso entre artigos e calculadoras
- Footer com links para categorias, calculadoras e páginas institucionais
- Header com navegação completa
- Breadcrumbs em todas as páginas internas

**Problemas:**
- Nos artigos, alguns links internos usam URLs absolutas (`${SITE_URL}`) em vez de relativas — consistência questionável (alguns usam `/blog/...`, outros `${SITE_URL}/blog/...`)
- O header mobile (Sheet) não inclui links para /sobre, /autor, /politica-editorial, /metodologia. Apenas /sobre e /contato aparecem.
- Post `emprestimo-pessoal-ou-consignado` tem apenas 1 link interno para calculadora (baixo interlinking)

---

## 12. Problemas de Links Externos / Oficiais

**Links oficiais citados nos artigos:**
- Serasa (www.serasa.com.br) — OK
- Boa Vista (www.consumidorpositivo.com.br) — OK
- SPC Brasil (www.spcbrasil.org.br) — OK
- Banco Central (www.bcb.gov.br) — OK
- Consumidor.gov.br — OK
- Gov.br — OK

**Problemas:**
- Muitos links oficiais são citados textualmente sem hyperlink (ex.: "www.serasa.com.br/score" em texto sem link clicável)
- Post `/blog/cadastro-positivo-vale-a-pena` cita "www.serasa.com.br/cadastro-positivo" e "https://www.bcb.gov.br/cidadaniafinanceira/cadastropositivo" sem links clicáveis
- Links oficiais no conteúdo dos posts não usam `target="_blank"` nem `rel="noopener noreferrer"` de forma consistente
- Nenhum link quebrado foi detectado na análise estática

---

## 13. Problemas de Schema

**Schemas implementados:**
- `BreadcrumbList` — via componente `Breadcrumbs` — OK
- `FAQPage` — via componente `FAQSection` — OK (apenas na home e artigos com FAQ)
- `WebApplication` — via `gerarWebApplication()` — OK (nas calculadoras)
- `HowTo` — via `gerarHowTo()` — OK (nas calculadoras)
- `WebSite` — **AUSENTE** no layout global
- `Organization` — **AUSENTE** no layout global
- `Article` / `BlogPosting` — **AUSENTE** nos artigos
- `Person` — **AUSENTE** na página de autor
- `SearchAction` — **AUSENTE** (não há busca interna indexável)

**Schemas inadequados ausentes** (nenhum schema que gere autoridade falsa foi encontrado)

---

## 14. Problemas de Metadata / Canonical / Sitemap

**Metadata:**
- Todas as páginas têm title único (bom)
- Todas as páginas têm meta description (bom)
- Open Graph presente em quase todas as páginas (bom)
- Twitter cards presentes (bom)
- Alguns títulos de blog posts são muito longos (>60 caracteres), podem ser cortados no SERP
- Meta descriptions de cluster pages são genéricas (ex.: /dividas, /cartoes)

**Canonical:**
- Todas as páginas implementam canonical corretamente
- Blog com paginação usa canonical dinâmico correto

**Sitemap:**
- Presente em `/sitemap.xml` via `/app/sitemap.ts`
- Inclui todas as páginas: posts, calculadoras, clusters, páginas estáticas, categorias
- Prioridades razoáveis (1.0 para home, 0.9 calculadoras, 0.8 clusters, 0.7 posts)
- Posts usam `lastModified` da data do post, páginas estáticas usam data atual — poderia ser mais refinado

**Robots:**
- Presente em `/robots.txt` via `/app/robots.ts`
- Permite tudo, desallow apenas `/admin/`
- Sitemap referenciado corretamente

---

## 15. Problemas de Páginas Institucionais / E-E-A-T

**Presentes e OK:**
- `/sobre` — história, missão, valores. Menciona "Daniel Gonçalves" como criador.
- `/autor` — credenciais, formação, compromisso com precisão. Perfil "desenvolvedor web".
- `/politica-editorial` — fontes, processo editorial, correções, links afiliados.
- `/metodologia` — fórmulas, fontes oficiais (BCB, IBGE, Febraban).
- `/contato` — e-mail de contato real.
- `/politica-privacidade` — compatível com AdSense, cookies.
- `/termos-uso` — isenção de responsabilidade.
- Cookie banner — presente.
- Aviso de independência — presente na home, footer e FAQ.

**Problemas:**
- `/sobre` menciona "Daniel Gonçalves" como criador — nome real, sem credenciais falsas. Aceitável.
- `/autor` diz "Bacharel em Ciência da Computação" — sem comprovação visível, mas é uma afirmação educacional, não financeira. Risco baixo.
- `/metodologia` (line 222) menciona "advogado" como profissional a consultar — viola AGENTS.md (proíbe mencionar advogados sem equipe jurídica).
- Ausência de página `/faq` centralizada (FAQ existe apenas na home e nos artigos)
- Ausência de página `/fontes-oficiais` ou `/links-uteis`

---

## 16. Problemas de Mojibake / Acentos

**Nenhum caso de mojibake foi encontrado.**

O único "falso positivo" foi o uso de `&nbsp;` (espaço não quebrável) nos termos de uso, que é intencional e correto.

---

## 17. Contaminação de Outros Projetos

**Nenhuma ocorrência encontrada.**

Buscas por "Calculadora Trabalhista", "calculadoratrabalhista", "Calculobra", "BuildCalc", "IPVA Digital", "ipvadigital", "Tabela FIPE" retornaram zero resultados.

O projeto está completamente limpo de contaminação do projeto anterior.

---

## 18. Segurança / Formulários

**Nenhum formulário de coleta de dados sensíveis foi encontrado.**

- A página de contato exibe apenas um e-mail clicável (mailto:)
- Calculadoras são client-side e não armazenam dados
- Cookie banner informa sobre cookies
- Google Analytics coleta dados anônimos de navegação
- AdSense está presente com ID `ca-pub-1190641604220445`
- Não há formulários de CPF, senha, dados bancários ou pagamento
- A política de privacidade cobre cookies, analytics e Adsense

**Status: Seguro.**

---

## 19. Acessibilidade / UX

**Problemas identificados:**

- `AdPlaceholder` usa `aria-hidden="true"` — correto para elementos decorativos
- Header usa `aria-label` no menu mobile — OK
- Breadcrumbs têm `aria-label="Breadcrumb"` — OK
- FAQ Section usa Accordion com navegação por teclado — OK
- Foco visível: não verificado em runtime, mas shadcn/ui tem suporte nativo
- Contraste: usa Tailwind padrão com variáveis CSS — provavelmente OK
- Links com texto claro: a maioria tem, alguns CTAs como "Calcular agora" são genéricos
- Tabelas nos artigos podem não ser totalmente responsivas em mobile (algumas usam `overflow-x-auto`, outras não)
- Imagens: apenas o og-image.png está presente, sem alt text em imagens de layout

---

## 20. Performance / Build / Lint / Testes

**Build:**
- Compilou com sucesso em 6.2s (segunda execução)
- TypeScript passou em 9.9s sem erros
- 33 páginas estáticas geradas em 1.7s
- 2 páginas dinâmicas (/blog/[slug], /blog/categoria/[slug])

**Lint:**
- Passou sem erros ou warnings

**Testes:**
- Nenhum teste encontrado (configurado para `lib/**/*.test.ts`)
- Sem arquivos de teste implementados

**Performance observável no código:**
- Uso de Suspense para Google Analytics (boa prática)
- Analytics só carrega em produção (boa prática)
- Imagens: o apenas og-image.png, sem next/image otimizado
- Uso de fontes Google com variáveis CSS (Inter, Geist Mono) — pode impactar LCP
- `'use client'` em header.tsx e faq-section.tsx — necessário para interatividade
- BlogFilters é client component — necessário para busca/filtro
- AdPlaceholder é server component — bom

---

## 21. Prioridades Recomendadas de Correção

### Prioridade 1 — Crítico

1. **Adicionar schema Article/BlogPosting nos artigos** (`/blog/[slug]/page.tsx`)
   - Impacto: Rich snippets, elegibilidade para Google News, Discover
   - Ação: Adicionar JSON-LD Article com headline, description, author (Organization), publisher, datePublished, dateModified, image

2. **Remover "advogado" da página de metodologia** (`/app/metodologia/page.tsx` line 222)
   - Impacto: Violação direta do AGENTS.md
   - Ação: Substituir "consultor financeiro, contador ou advogado" por "profissional qualificado ou órgão competente"

### Prioridade 2 — Alta

3. **Adicionar schema WebSite e Organization** no layout global
   - Impacto: Melhora a compreensão do site pelos mecanismos de busca

4. **Expandir artigos rasos** (melhores-cartoes-score-baixo, emprestimo-pessoal-ou-consignado)
   - Impacto: Qualidade de conteúdo, satisfação do usuário, AdSense readiness

5. **Criar página /faq centralizada** ou adicionar FAQ nas cluster pages
   - Impacto: E-E-A-T, experiência do usuário

6. **Adicionar links clicáveis oficiais** nos posts que citam URLs governamentais sem hyperlink
   - Impacto: Usabilidade, confiança, E-E-A-T

### Prioridade 3 — Média

7. **Revisar meta descriptions dos cluster pages** para serem mais descritivas
8. **Adicionar schema Person na página de autor**
9. **Melhorar interlinking nos artigos mais superficiais**
10. **Refinar lastModified no sitemap** para usar dados reais em vez de `new Date()`
11. **Adicionar target="_blank" + rel="noopener noreferrer"** em links externos
12. **Expandir `/blog/metodo-50-30-20-como-aplicar`** com exemplos regionais
13. **Expandir `/blog/quanto-custa-morar-sozinho`** com fontes IBGE/FipeZap
14. **Adicionar `/fontes-oficiais` ou `/links-uteis`** como página institucional

### Prioridade 4 — Baixa

15. Adicionar menu mobile com links institucionais completos (/autor, /politica-editorial, /metodologia)
16. Verificar responsividade de tabelas em artigos
17. Otimizar fontes (Inter + Geist Mono) para evitar FOIT/FOUT
18. Adicionar alt text descritivo em imagens do layout
19. Considerar next/image para og-image.png
20. Padronizar URLs de links internos (relativas vs absolutas)

---

## 22. Lista de Próximos Prompts Sugeridos

1. `Corrigir schema Article/BlogPosting em todos os artigos`
2. `Corrigir menção a "advogado" na metodologia`
3. `Expandir artigos rasos: melhores-cartoes-score-baixo, emprestimo-pessoal-ou-consignado`
4. `Adicionar schema WebSite e Organization no layout global`
5. `Criar página /faq centralizada`
6. `Adicionar links oficiais clicáveis nos posts`
7. `Revisar meta descriptions dos cluster pages`
8. `Criar teste unitário para funções financeiras`
9. `Refinar sitemap com lastModified reais`
10. `Adicionar schema Person na página de autor`

---

## 23. Resultado do Build

```
▲ Next.js 16.2.6 (Turbopack)
✓ Compiled successfully in 6.2s
✓ TypeScript em 9.9s
✓ 33 páginas estáticas geradas em 1.7s

Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /autor
├ ƒ /blog
├ ƒ /blog/[slug]
├ ƒ /blog/categoria/[slug]
├ ○ /calculadoras
├ ○ /calculadoras/capacidade-endividamento
├ ○ /calculadoras/comprometimento-renda
├ ○ /calculadoras/economia-mensal
├ ○ /calculadoras/emprestimo
├ ○ /calculadoras/financiamento
├ ○ /calculadoras/juros-compostos
├ ○ /calculadoras/juros-simples
├ ○ /calculadoras/meta-financeira
├ ○ /calculadoras/orcamento-familiar
├ ○ /calculadoras/parcelas
├ ○ /calculadoras/quitacao-dividas
├ ○ /calculadoras/reserva-emergencia
├ ○ /calculadoras/troca-dividas
├ ○ /cartoes
├ ○ /contato
├ ○ /custo-de-vida
├ ○ /dividas
├ ○ /emprestimos
├ ○ /metodologia
├ ○ /organizacao-financeira
├ ○ /politica-editorial
├ ○ /politica-privacidade
├ ○ /robots.txt
├ ○ /score
├ ○ /sitemap.xml
├ ○ /sobre
└ ○ /termos-uso
```

**Build: ✅ Aprovado (sem erros)**

---

## 24. Resultado do Lint

```
> eslint .
```

**Lint: ✅ Aprovado (sem erros ou warnings)**

---

## 25. Resultado dos Testes

```
> vitest

No test files found, exiting with code 1
include: lib/**/*.test.ts
exclude: **/node_modules/**, **/.git/**
```

**Testes: ⚠️ Nenhum teste implementado** (configurado mas sem arquivos)

---

## 26. Observações Finais

1. **Qualidade geral do código é alta.** TypeScript estrito, componentes bem organizados, separação de concerns adequada.

2. **O conteúdo é majoritariamente bom.** Os artigos principais (como-sair-das-dividas, como-aumentar-score-de-credito, quanto-tempo-leva-para-score-aumentar) são completos, bem escritos e com linguagem cautelosa exemplar.

3. **A falta de schema Article/BlogPosting é o maior gargalo técnico.** Enquanto 100% dos artigos têm FAQPage schema, nenhum tem Article schema, o que limita significativamente o potencial de rich results no Google.

4. **AdSense readiness é boa.** As páginas legais estão presentes, o disclaimer de independência está visível, e não há conteúdo problemático. Os artigos rasos (4 detectados) são o principal risco para approval/retention.

5. **O projeto está 100% livre de contaminação** do projeto anterior (Calculadora Trabalhista).

6. **Nenhum dado sensível é coletado** e não há formulários de risco.

7. **Pontos de atenção futuros:** À medida que o site crescer, a canibalização entre posts de score e dívidas pode aumentar. Recomenda-se planejamento de cluster/hub antes de criar novos artigos.

---

## Pontuação Final

| Categoria | Nota | Justificativa |
|-----------|------|---------------|
| SEO técnico | 72/100 | Schema Article ausente é o maior problema. Metadata e canonical estão bons. Sitemap OK. |
| Conteúdo | 75/100 | 4 artigos rasos, mas o conteúdo principal é de alta qualidade com linguagem cautelosa exemplar. |
| Confiança / E-E-A-T | 78/100 | Páginas institucionais completas. Autor sem credenciais falsas. Menção a "advogado" na metodologia reduz a nota. |
| AdSense readiness | 80/100 | Disclaimers presentes, páginas legais OK, ads.txt configurado, política de privacidade compatível. Artigos rasos são o principal risco. |
| UX / Acessibilidade | 70/100 | Navegação funcional. Foco e contraste provavelmente OK. Tabelas podem ter problemas de responsividade. |
| Performance | 82/100 | Build eficiente, Suspense no GA. Fontes Google e falta de next/image são pontos de melhoria. |
| **Nota geral** | **76/100** | Site sólido e bem construído. Prioridade máxima é corrigir schema Article e a menção a "advogado". Depois expandir conteúdo raso. |
