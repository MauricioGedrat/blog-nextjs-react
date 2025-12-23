# Exemplo de Post para o Banco de Dados

Use este exemplo como referência ao criar posts no Supabase.

## Estrutura do Post

### Campos Obrigatórios

- **slug**: URL amigável (sem espaços, minúsculas, hífens)
- **title**: Título do post
- **content**: Conteúdo em Markdown
- **excerpt**: Resumo curto (150-200 caracteres)
- **published**: true/false
- **published_at**: Data de publicação

### Campos Opcionais

- **author**: Nome do autor
- **tags**: Array de tags (ex: ["Next.js", "React", "Tutorial"])
- **image**: URL da imagem destacada

## Exemplo Completo

### Dados para Inserir no Supabase

```json
{
  "slug": "guia-completo-nextjs-app-router",
  "title": "Guia Completo do Next.js 14 App Router para Iniciantes",
  "excerpt": "Aprenda tudo sobre o App Router do Next.js 14, desde a estrutura básica até conceitos avançados de Server Components e rotas dinâmicas.",
  "author": "Seu Nome",
  "tags": ["Next.js", "React", "App Router", "Tutorial"],
  "image": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200",
  "published": true,
  "published_at": "2024-01-15T10:00:00Z",
  "content": "# Guia Completo do Next.js 14 App Router para Iniciantes\n\nO Next.js 14 introduziu o **App Router**, uma nova forma de estruturar aplicações React que revoluciona a forma como desenvolvemos.\n\n## O que é o App Router?\n\nO App Router é o novo sistema de roteamento do Next.js baseado em arquivos e pastas. Ele substitui o antigo Pages Router com várias melhorias.\n\n### Principais Diferenças\n\n1. **Estrutura de Pastas**\n   - `app/` ao invés de `pages/`\n   - Rotas baseadas em pastas\n   - Layouts aninhados\n\n2. **Server Components por Padrão**\n   - Componentes são Server Components por padrão\n   - Melhor performance\n   - Menos JavaScript no cliente\n\n3. **Rotas Dinâmicas**\n   ```typescript\n   // app/posts/[slug]/page.tsx\n   export default function PostPage({ params }: { params: { slug: string } }) {\n     return <div>Post: {params.slug}</div>\n   }\n   ```\n\n## Estrutura Básica\n\n```\napp/\n├── layout.tsx      # Layout raiz\n├── page.tsx        # Homepage (/)\n├── about/\n│   └── page.tsx    # /about\n└── posts/\n    ├── page.tsx    # /posts\n    └── [slug]/\n        └── page.tsx # /posts/[slug]\n```\n\n## Server Components vs Client Components\n\n### Server Component (Padrão)\n\n```typescript\n// app/components/ServerComponent.tsx\nexport default function ServerComponent() {\n  // Executa no servidor\n  const data = await fetch('...')\n  return <div>{data}</div>\n}\n```\n\n### Client Component\n\n```typescript\n'use client'\n\n// app/components/ClientComponent.tsx\nexport default function ClientComponent() {\n  const [count, setCount] = useState(0)\n  return <button onClick={() => setCount(count + 1)}>{count}</button>\n}\n```\n\n## Conclusão\n\nO App Router do Next.js 14 oferece uma experiência de desenvolvimento moderna e performática. Comece usando Server Components por padrão e adicione `'use client'` apenas quando necessário.\n\n## Próximos Passos\n\n- [Documentação Oficial](https://nextjs.org/docs/app)\n- [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)\n- [Rotas Dinâmicas](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)"
}
```

## Dicas de Formatação Markdown

### Títulos
```markdown
# Título Principal (H1)
## Subtítulo (H2)
### Seção (H3)
```

### Listas
```markdown
- Item 1
- Item 2
  - Subitem
```

### Código
````markdown
```typescript
const exemplo = "código formatado"
```
````

### Links
```markdown
[Texto do Link](https://exemplo.com)
```

### Imagens
```markdown
![Alt text](https://url-da-imagem.jpg)
```

### Negrito e Itálico
```markdown
**negrito** e *itálico*
```

### Blockquotes
```markdown
> Citação importante
```

## Boas Práticas

1. **Slug**: Use hífens, minúsculas, sem acentos
2. **Excerpt**: 150-200 caracteres, descritivo
3. **Tags**: 3-5 tags relevantes
4. **Imagem**: Use URLs de Unsplash ou hospede suas próprias
5. **Conteúdo**: Mínimo 1.500 palavras para SEO
6. **Estrutura**: Use H2 e H3 para organização
7. **Código**: Sempre inclua exemplos práticos

## Template de Post

Copie e adapte este template:

```markdown
# [Título do Post]

[Excerpt curto e chamativo]

## Introdução

[Contexto e problema que o post resolve]

## [Seção Principal 1]

[Conteúdo detalhado]

### [Subseção]

[Detalhes adicionais]

```typescript
// Exemplo de código
```

## [Seção Principal 2]

[Mais conteúdo]

## Conclusão

[Resumo e próximos passos]

## Recursos Adicionais

- [Link 1](url)
- [Link 2](url)
```

---

**Dica**: Escreva posts de 2.000-3.000 palavras para melhor rankeamento no Google!

