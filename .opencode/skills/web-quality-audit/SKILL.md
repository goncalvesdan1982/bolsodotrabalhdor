Origem:
awesome-agent-skills / addyosmani/web-quality-audit

Uso neste projeto:
Complementar as skills locais do Bolso do Trabalhador. Não substituir as regras do AGENTS.md nem as skills personalizadas do projeto.

Prioridade:
As regras locais do projeto em AGENTS.md e as skills personalizadas do projeto têm prioridade quando houver conflito.

---

name: web-quality-audit
description: Comprehensive web quality audit covering performance, accessibility, SEO, and best practices. Use when asked to "audit my site", "review web quality", "run lighthouse audit", "check page quality", or "optimize my website".
license: MIT
metadata:
  author: web-quality-skills
  version: "1.0"
---

# Web quality audit

Comprehensive quality review based on Google Lighthouse audits. Covers Performance, Accessibility, SEO, and Best Practices across 150+ checks.

## How it works

1. Analyze the provided code/project for quality issues
2. Categorize findings by severity (Critical, High, Medium, Low)
3. Provide specific, actionable recommendations
4. Include code examples for fixes

## Audit categories

### Performance (40% of typical issues)

**Core Web Vitals** — Must pass for good page experience:
* **LCP (Largest Contentful Paint) < 2.5s.**
* **INP (Interaction to Next Paint) < 200ms.**
* **CLS (Cumulative Layout Shift) < 0.1.**

**Resource Optimization:**
* Compress images. Use WebP/AVIF with fallbacks.
* Minimize JavaScript. Remove unused code.
* Optimize CSS. Extract critical CSS.
* Efficient fonts. Use `font-display: swap`.

**Loading Strategy:**
* Preconnect to origins.
* Preload critical assets.
* Lazy load below-fold content.
* Cache effectively.

### Accessibility (30% of typical issues)

**Perceivable:**
* Text alternatives on every `<img>`.
* Color contrast minimum 4.5:1.
* Don't rely on color alone.
* Captions and transcripts.

**Operable:**
* Keyboard accessible.
* Focus visible.
* Skip links.
* Sufficient time.

**Understandable:**
* Page language set.
* Consistent navigation.
* Error identification.
* Labels and instructions.

**Robust:**
* Valid HTML.
* ARIA used correctly.
* Name, role, value.

### SEO (15% of typical issues)

**Crawlability:**
* Valid robots.txt.
* XML sitemap.
* Canonical URLs.
* No noindex on important pages.

**On-Page SEO:**
* Unique title tags (50-60 chars).
* Meta descriptions (150-160 chars).
* Heading hierarchy.
* Descriptive link text.

**Technical SEO:**
* Mobile-friendly.
* HTTPS.
* Fast loading.
* Structured data.

### Best practices (15% of typical issues)

**Security:**
* HTTPS everywhere.
* No vulnerable libraries.
* CSP headers.
* No exposed source maps.

**Modern Standards:**
* No deprecated APIs.
* Valid doctype.
* Charset declared.
* No browser errors.

## Severity levels

| Level | Description | Action |
|-------|-------------|--------|
| **Critical** | Security vulnerabilities, complete failures | Fix immediately |
| **High** | Core Web Vitals failures, major a11y barriers | Fix before launch |
| **Medium** | Performance opportunities, SEO improvements | Fix within sprint |
| **Low** | Minor optimizations, code quality | Fix when convenient |
