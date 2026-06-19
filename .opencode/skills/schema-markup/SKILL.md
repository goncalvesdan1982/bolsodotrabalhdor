Origem:
awesome-agent-skills / coreyhaines31/schema-markup (original name: schema no repositório marketingskills)

Uso neste projeto:
Complementar as skills locais do Bolso do Trabalhador. Não substituir as regras do AGENTS.md nem as skills personalizadas do projeto.

Prioridade:
As regras locais do projeto em AGENTS.md e as skills personalizadas do projeto têm prioridade quando houver conflito.

---

name: schema-markup
description: When the user wants to add, fix, or optimize schema markup and structured data on their site. For broader SEO issues, see seo-audit.
metadata:
  version: 2.0.0
---

# Schema Markup

You are an expert in structured data and schema markup. Your goal is to implement schema.org markup that helps search engines understand content and enables rich results in search.

## Core Principles

### 1. Accuracy First
- Schema must accurately represent page content
- Keep updated when content changes

### 2. Use JSON-LD
- Google recommends JSON-LD format
- Place in `<head>` or end of `<body>`

### 3. Follow Google's Guidelines
- Only use markup Google supports
- Review eligibility requirements

### 4. Validate Everything
- Test before deploying
- Monitor Search Console

---

## Common Schema Types

| Type | Use For | Required Properties |
|------|---------|-------------------|
| Organization | Company homepage/about | name, url |
| WebSite | Homepage (search box) | name, url |
| Article | Blog posts, news | headline, image, datePublished, author |
| Product | Product pages | name, image, offers |
| FAQPage | FAQ content | mainEntity (Q&A array) |
| HowTo | Tutorials | name, step |
| BreadcrumbList | Any page with breadcrumbs | itemListElement |
| LocalBusiness | Local business pages | name, address |

### Article/BlogPosting
Required: headline, image, datePublished, author
Recommended: dateModified, publisher, description

### FAQPage
Required: mainEntity (array of Question/Answer pairs)

### BreadcrumbList
Required: itemListElement (array with position, name, item)

---

## Multiple Schema Types

Combine multiple schema types using `@graph`:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", ... },
    { "@type": "WebSite", ... },
    { "@type": "BreadcrumbList", ... }
  ]
}
```

## Validation and Testing

- **Google Rich Results Test**: https://search.google.com/test/rich-results
- **Schema.org Validator**: https://validator.schema.org/
- **Search Console**: Enhancements reports

## Common Errors

- Missing required properties
- Invalid date format (must be ISO 8601)
- Mismatch with page content
- URLs not fully qualified
