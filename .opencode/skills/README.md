# Skills do Bolso do Trabalhador

## Skills personalizadas do projeto

| Skill | Caminho | Função |
|-------|---------|--------|
| Blog Render Review | `.opencode/skills/blog-render-review/SKILL.md` | Revisar render final de artigos, detectar markdown cru, tabelas quebradas, FAQ duplicado |
| Premium Article Rewrite | `.opencode/skills/premium-article-rewrite/SKILL.md` | Reconstruir artigos com padrão premium, linguagem cautelosa, estrutura completa |
| SEO Audit Fix | `.opencode/skills/seo-audit-fix/SKILL.md` | Corrigir problemas de SEO, schema, indexação, qualidade editorial |

## Skills externas instaladas (awesome-agent-skills)

| Skill | Caminho | Função |
|-------|---------|--------|
| Webapp Testing | `.opencode/skills/webapp-testing/SKILL.md` | Testar aplicações locais com Playwright (evitar "build passou, render quebrou") |
| Next.js Best Practices | `.opencode/skills/next-best-practices/SKILL.md` | Boas práticas de Next.js, App Router, RSC, metadata, otimização |
| Next.js Cache Components | `.opencode/skills/next-cache-components/SKILL.md` | Cache, PPR, use cache directive, cacheLife, cacheTag |
| Web Quality Audit | `.opencode/skills/web-quality-audit/SKILL.md` | Auditoria de qualidade web: performance, acessibilidade, SEO, boas práticas |
| SEO | `.opencode/skills/seo/SKILL.md` | SEO técnico, on-page, structured data, crawlability, mobile SEO |
| Programmatic SEO | `.opencode/skills/programmatic-seo/SKILL.md` | SEO programático, templates em escala, clusters de conteúdo |
| Schema Markup | `.opencode/skills/schema-markup/SKILL.md` | Schema Article, FAQPage, BreadcrumbList, JSON-LD |
| SEO Audit | `.opencode/skills/seo-audit/SKILL.md` | Auditoria SEO on-page e técnica completa |
| Content Strategy | `.opencode/skills/content-strategy/SKILL.md` | Estratégia de conteúdo, priorização, topic clusters |
| SEO & AEO Best Practices | `.opencode/skills/seo-aeo-best-practices/SKILL.md` | SEO + Answer Engine Optimization, EEAT, AI crawlers |
| Performance | `.opencode/skills/performance/SKILL.md` | Otimização de performance web: carregamento, runtime, orçamento de recursos |
| Core Web Vitals | `.opencode/skills/core-web-vitals/SKILL.md` | Otimização focada em LCP, INP e CLS para ranqueamento e experiência |
| Accessibility | `.opencode/skills/accessibility/SKILL.md` | Acessibilidade web seguindo WCAG 2.2, leitores de tela, navegação por teclado |
| Best Practices | `.opencode/skills/best-practices/SKILL.md` | Segurança, compatibilidade, qualidade de código, CSP, SRI, Trusted Types |
| Next.js Upgrade | `.opencode/skills/next-upgrade/SKILL.md` | Upgrade do Next.js seguindo guias oficiais e codemods |
| Frontend Design | `.opencode/skills/frontend-design/SKILL.md` | Design visual distintivo: tipografia, paleta, layout, identidade visual |

## Ordem de prioridade

Em caso de conflito entre skills, seguir esta ordem:

1. **AGENTS.md** do projeto
2. **Skills personalizadas** do projeto (blog-render-review, premium-article-rewrite, seo-audit-fix)
3. **Comandos locais** em `.opencode/commands/`
4. **Skills externas** do awesome-agent-skills

## Quando usar cada skill

| Tarefa | Skill recomendada |
|--------|-------------------|
| Revisar render de artigo | blog-render-review |
| Reescrever artigo como premium | premium-article-rewrite |
| Corrigir SEO/schema | seo-audit-fix |
| Testar app local com Playwright | webapp-testing |
| Seguir boas práticas Next.js | next-best-practices |
| Otimizar cache Next.js | next-cache-components |
| Auditar qualidade web | web-quality-audit |
| SEO técnico e on-page | seo |
| Criar páginas SEO em escala | programmatic-seo |
| Implementar schema markup | schema-markup |
| Auditar SEO completo | seo-audit |
| Planejar estratégia de conteúdo | content-strategy |
| SEO + AEO + EEAT | seo-aeo-best-practices |
| Otimizar performance web | performance |
| Melhorar Core Web Vitals (LCP, INP, CLS) | core-web-vitals |
| Auditar/melhorar acessibilidade | accessibility |
| Revisar segurança e boas práticas | best-practices |
| Fazer upgrade do Next.js | next-upgrade |
| Criar design visual distintivo | frontend-design |
