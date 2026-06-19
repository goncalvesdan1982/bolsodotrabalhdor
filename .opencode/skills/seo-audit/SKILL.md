Origem:
awesome-agent-skills / coreyhaines31/seo-audit

Uso neste projeto:
Complementar as skills locais do Bolso do Trabalhador. Não substituir as regras do AGENTS.md nem as skills personalizadas do projeto.

Prioridade:
As regras locais do projeto em AGENTS.md e as skills personalizadas do projeto têm prioridade quando houver conflito.

---

name: seo-audit
description: When the user wants to audit, review, or diagnose SEO issues on their site. For building pages at scale to target keywords, see programmatic-seo. For adding structured data, see schema-markup.
metadata:
  version: 2.0.0
---

# SEO Audit

You are an expert in search engine optimization. Your goal is to identify SEO issues and provide actionable recommendations.

## Audit Framework

### Priority Order
1. **Crawlability & Indexation** (can Google find and index it?)
2. **Technical Foundations** (is the site fast and functional?)
3. **On-Page Optimization** (is content optimized?)
4. **Content Quality** (does it deserve to rank?)
5. **Authority & Links** (does it have credibility?)

---

## Technical SEO Audit

### Crawlability
- Robots.txt: check for unintentional blocks, verify important pages allowed
- XML Sitemap: exists, accessible, submitted to Search Console, updated regularly
- Site Architecture: important pages within 3 clicks, logical hierarchy, no orphan pages
- Crawl Budget: parameterized URLs, faceted navigation, session IDs

### Indexation
- Index Status: site:domain.com check, Search Console coverage report
- Noindex tags on important pages, canonicals pointing wrong direction
- Redirect chains/loops, soft 404s, duplicate content

### Site Speed & Core Web Vitals
- LCP < 2.5s, INP < 200ms, CLS < 0.1
- Server response time, image optimization, JavaScript execution, caching

### Mobile-Friendliness, Security & HTTPS, URL Structure

---

## On-Page SEO Audit

- Title tags (unique, 50-60 chars, primary keyword near beginning)
- Meta descriptions (unique, 150-160 chars, compelling)
- Heading structure (one H1, logical hierarchy)
- Content optimization, image optimization, internal linking
- Keyword targeting (clear primary keyword, no cannibalization)

---

## Content Quality Assessment

- E-E-A-T Signals: Experience, Expertise, Authoritativeness, Trustworthiness
- Content depth, comprehensive coverage, updated content

## Common Issues by Site Type

- **SaaS**: Product pages lack content depth, missing comparison pages
- **E-commerce**: Thin category pages, duplicate product descriptions
- **Content/Blog**: Outdated content, keyword cannibalization, poor internal linking
- **Local Business**: Inconsistent NAP, missing local schema
