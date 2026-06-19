Origem:
awesome-agent-skills / vercel-labs/next-cache-components

Uso neste projeto:
Complementar as skills locais do Bolso do Trabalhador. Não substituir as regras do AGENTS.md nem as skills personalizadas do projeto.

Prioridade:
As regras locais do projeto em AGENTS.md e as skills personalizadas do projeto têm prioridade quando houver conflito.

---

name: next-cache-components
description: Next.js 16 Cache Components - PPR, use cache directive, cacheLife, cacheTag, updateTag
---

# Cache Components (Next.js 16+)

Cache Components enable Partial Prerendering (PPR) - mix static, cached, and dynamic content in a single route.

## Enable Cache Components

```ts
// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  cacheComponents: true,
}

export default nextConfig
```

This replaces the old `experimental.ppr` flag.

---

## Three Content Types

With Cache Components enabled, content falls into three categories:

### 1. Static (Auto-Prerendered)

Synchronous code, imports, pure computations - prerendered at build time:

```tsx
export default function Page() {
  return (
    <header>
      <h1>Our Blog</h1>
      <nav>...</nav>
    </header>
  )
}
```

### 2. Cached (`use cache`)

Async data that doesn't need fresh fetches every request:

```tsx
async function BlogPosts() {
  'use cache'
  cacheLife('hours')

  const posts = await db.posts.findMany()
  return <PostList posts={posts} />
}
```

### 3. Dynamic (Suspense)

Runtime data that must be fresh - wrap in Suspense:

```tsx
import { Suspense } from 'react'

export default function Page() {
  return (
    <>
      <BlogPosts />
      <Suspense fallback={<p>Loading...</p>}>
        <UserPreferences />
      </Suspense>
    </>
  )
}

async function UserPreferences() {
  const theme = (await cookies()).get('theme')?.value
  return <p>Theme: {theme}</p>
}
```

---

## `use cache` Directive

### File Level

```tsx
'use cache'

export default async function Page() {
  const data = await fetchData()
  return <div>{data}</div>
}
```

### Component Level

```tsx
export async function CachedComponent() {
  'use cache'
  const data = await fetchData()
  return <div>{data}</div>
}
```

### Function Level

```tsx
export async function getData() {
  'use cache'
  return db.query('SELECT * FROM posts')
}
```

---

## Cache Profiles

### Built-in Profiles

```tsx
'use cache'                    // Default: 5m stale, 15m revalidate
```

```tsx
'use cache: remote'           // Platform-provided cache (Redis, KV)
```

```tsx
'use cache: private'          // For compliance, allows runtime APIs
```

### `cacheLife()` - Custom Lifetime

```tsx
import { cacheLife } from 'next/cache'

async function getData() {
  'use cache'
  cacheLife('hours')
  return fetch('/api/data')
}
```

Built-in profiles: `'default'`, `'minutes'`, `'hours'`, `'days'`, `'weeks'`, `'max'`

### Inline Configuration

```tsx
async function getData() {
  'use cache'
  cacheLife({
    stale: 3600,
    revalidate: 7200,
    expire: 86400,
  })
  return fetch('/api/data')
}
```

---

## Cache Invalidation

### `cacheTag()` - Tag Cached Content

```tsx
import { cacheTag } from 'next/cache'

async function getProducts() {
  'use cache'
  cacheTag('products')
  return db.products.findMany()
}

async function getProduct(id: string) {
  'use cache'
  cacheTag('products', `product-${id}`)
  return db.products.findUnique({ where: { id } })
}
```

### `updateTag()` - Immediate Invalidation

```tsx
'use server'

import { updateTag } from 'next/cache'

export async function updateProduct(id: string, data: FormData) {
  await db.products.update({ where: { id }, data })
  updateTag(`product-${id}`)
}
```

### `revalidateTag()` - Background Revalidation

```tsx
'use server'

import { revalidateTag } from 'next/cache'

export async function createPost(data: FormData) {
  await db.posts.create({ data })
  revalidateTag('posts')
}
```

---

## Runtime Data Constraint

**Cannot** access `cookies()`, `headers()`, or `searchParams` inside `use cache`.

### Solution: Pass as Arguments

```tsx
async function ProfilePage() {
  const session = (await cookies()).get('session')?.value
  return <CachedProfile sessionId={session} />
}

async function CachedProfile({ sessionId }: { sessionId: string }) {
  'use cache'
  const data = await fetchUserData(sessionId)
  return <div>{data.name}</div>
}
```

### Exception: `use cache: private`

```tsx
async function getData() {
  'use cache: private'
  const session = (await cookies()).get('session')?.value
  return fetchData(session)
}
```

---

## Cache Key Generation

Cache keys are automatic based on:
- **Build ID** - invalidates all caches on deploy
- **Function ID** - hash of function location
- **Serializable arguments** - props become part of key
- **Closure variables** - outer scope values included

---

## Migration from Previous Versions

| Old Config | Replacement |
|-----------|-------------|
| `experimental.ppr` | `cacheComponents: true` |
| `dynamic = 'force-dynamic'` | Remove (default behavior) |
| `dynamic = 'force-static'` | `'use cache'` + `cacheLife('max')` |
| `revalidate = N` | `cacheLife({ revalidate: N })` |
| `unstable_cache()` | `'use cache'` directive |

---

## Limitations

- **Edge runtime not supported** - requires Node.js
- **Static export not supported** - needs server
- **Non-deterministic values** (`Math.random()`, `Date.now()`) execute once at build time inside `use cache`
