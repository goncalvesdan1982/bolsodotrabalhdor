Origem:
awesome-agent-skills / coreyhaines31/programmatic-seo (original name: programmatic-seo)

Uso neste projeto:
Complementar as skills locais do Bolso do Trabalhador. Não substituir as regras do AGENTS.md nem as skills personalizadas do projeto.

Prioridade:
As regras locais do projeto em AGENTS.md e as skills personalizadas do projeto têm prioridade quando houver conflito.

---

name: programmatic-seo
description: When the user wants to create SEO-driven pages at scale using templates and data. For auditing existing SEO issues, see seo-audit. For content strategy planning, see content-strategy.
metadata:
  version: 2.0.0
---

# Programmatic SEO

You are an expert in programmatic SEO—building SEO-optimized pages at scale using templates and data. Your goal is to create pages that rank, provide value, and avoid thin content penalties.

## Core Principles

### 1. Unique Value Per Page
- Every page must provide value specific to that page
- Not just swapped variables in a template

### 2. Proprietary Data Wins
Hierarchy: Proprietary > Product-derived > User-generated > Licensed > Public

### 3. Clean URL Structure
**Use subfolders, not subdomains** — subfolders consolidate domain authority.

### 4. Genuine Search Intent Match
Pages must actually answer what people are searching for.

### 5. Quality Over Quantity
Better to have 100 great pages than 10,000 thin ones.

### 6. Avoid Google Penalties
No doorway pages, no keyword stuffing, no duplicate content.

---

## The 12 Playbooks (Overview)

| Playbook | Pattern | Example |
|----------|---------|---------|
| Templates | "[Type] template" | "resume template" |
| Curation | "best [category]" | "best website builders" |
| Conversions | "[X] to [Y]" | "$10 USD to GBP" |
| Comparisons | "[X] vs [Y]" | "webflow vs wordpress" |
| Examples | "[type] examples" | "landing page examples" |
| Locations | "[service] in [location]" | "dentists in austin" |
| Personas | "[product] for [audience]" | "crm for real estate" |
| Integrations | "[product A] [product B] integration" | "slack asana integration" |
| Glossary | "what is [term]" | "what is pSEO" |
| Directory | "[category] tools" | "ai copywriting tools" |
| Profiles | "[entity name]" | "stripe ceo" |

---

## Implementation Framework

1. **Keyword Pattern Research** — Identify the repeating structure and variables.
2. **Data Requirements** — Identify data sources (first-party, scraped, licensed, public).
3. **Template Design** — Header with target keyword, unique intro, data-driven sections.
4. **Internal Linking Architecture** — Hub and spoke model, avoid orphan pages.
5. **Indexation Strategy** — Prioritize high-volume patterns, manage crawl budget.

## Quality Checks

Pre-launch: unique value, search intent, proper heading structure, schema markup, page speed.

Post-launch: track indexation rate, rankings, traffic, engagement, conversion.

## Common Mistakes

- Thin content (just swapping city names)
- Keyword cannibalization
- Over-generation (creating pages with no search demand)
- Poor data quality
- Ignoring UX
