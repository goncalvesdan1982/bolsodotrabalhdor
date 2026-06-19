Origem:
awesome-agent-skills / addyosmani/seo

Uso neste projeto:
Complementar as skills locais do Bolso do Trabalhador. Não substituir as regras do AGENTS.md nem as skills personalizadas do projeto.

Prioridade:
As regras locais do projeto em AGENTS.md e as skills personalizadas do projeto têm prioridade quando houver conflito.

---

name: seo
description: Optimize for search engine visibility and ranking. Use when asked to "improve SEO", "optimize for search", "fix meta tags", "add structured data", "sitemap optimization", or "search engine optimization".
license: MIT
metadata:
  author: web-quality-skills
  version: "1.0"
---

# SEO optimization

Search engine optimization based on Lighthouse SEO audits and Google Search guidelines. Focus on technical SEO, on-page optimization, and structured data.

## Technical SEO

### Crawlability

**robots.txt:**
```text
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Sitemap: https://example.com/sitemap.xml
```

**Meta robots:**
```html
<meta name="robots" content="index, follow">
<meta name="robots" content="noindex, nofollow">
```

**Canonical URLs:**
```html
<link rel="canonical" href="https://example.com/page">
```

### XML sitemap

Best practices: Maximum 50,000 URLs or 50MB per sitemap. Include only canonical, indexable URLs. Update `lastmod` when content changes.

### URL structure

- Use hyphens, not underscores
- Lowercase only
- Keep short (< 75 characters)
- Include target keywords naturally

---

## On-page SEO

**Title tags:** 50-60 characters, primary keyword near beginning, unique per page.

**Meta descriptions:** 150-160 characters, include primary keyword, compelling call-to-action.

**Heading structure:** Single `<h1>` per page, logical hierarchy, include keywords naturally.

**Image SEO:** Descriptive filenames, alt text, compressed, WebP/AVIF, lazy load.

**Internal linking:** Descriptive anchor text, link to relevant pages, fix broken links.

---

## Structured data (JSON-LD)

### Organization, Article, Product, FAQPage, BreadcrumbList

Full JSON-LD examples for each schema type including Organization, Article/BlogPosting, Product, FAQPage, and BreadcrumbList with `@context`, `@type`, and required properties.

---

## Mobile SEO

- Responsive viewport meta tag
- Tap targets >= 48px
- Font size minimum 16px

---

## International SEO

- Hreflang tags for multi-language sites
- Language declaration via `html lang` attribute

---

## AI search visibility (emerging)

- Don't block AI crawlers wholesale
- Lean on schema.org Article/Product/FAQPage
- Make first-paragraph answers self-contained
