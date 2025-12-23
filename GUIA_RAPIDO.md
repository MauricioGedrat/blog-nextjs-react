# 🚀 Guia Rápido de Início

## Passo a Passo para Colocar o Blog no Ar

### 1. Configurar Supabase (5 minutos)

1. Acesse [supabase.com](https://supabase.com) e crie uma conta
2. Crie um novo projeto (escolha uma região próxima)
3. Vá em **SQL Editor** → **New Query**
4. Copie e cole o conteúdo de `database/schema.sql`
5. Execute o script (Run)
6. Vá em **Settings** → **API**
7. Copie:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 2. Configurar Resend (3 minutos)

1. Acesse [resend.com](https://resend.com) e crie uma conta
2. Vá em **API Keys** → **Create API Key**
3. Copie a chave → `RESEND_API_KEY`
4. Vá em **Domains** e adicione seu domínio (ou use o domínio de teste)
5. Use o email fornecido → `RESEND_FROM_EMAIL`

### 3. Configurar Google Analytics (3 minutos)

1. Acesse [analytics.google.com](https://analytics.google.com)
2. Crie uma propriedade para seu site
3. Copie o **Measurement ID** (G-XXXXXXXXXX) → `NEXT_PUBLIC_GA_ID`

### 4. Configurar Variáveis de Ambiente (2 minutos)

Crie o arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-aqui

# Resend
RESEND_API_KEY=re_sua-chave-aqui
RESEND_FROM_EMAIL=Newsletter <onboarding@resend.dev>

# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Opcional (configurar depois)
NEXT_PUBLIC_ADSENSE_ID=
GOOGLE_SITE_VERIFICATION=
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
CONTACT_EMAIL=mauriciogedrat@gmail.com
```

### 5. Instalar e Executar (2 minutos)

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

### 6. Criar Primeiro Post

1. Acesse o Supabase Dashboard
2. Vá em **Table Editor** → **posts**
3. Clique em **Insert** → **Insert row**
4. Preencha:
   - `slug`: "meu-primeiro-post"
   - `title`: "Meu Primeiro Post"
   - `content`: "# Título\n\nConteúdo do post em Markdown..."
   - `excerpt`: "Resumo do post"
   - `published`: true
   - `published_at`: Data atual
   - `author`: "Seu Nome"
   - `tags`: ["Next.js", "React"]

5. Salve e acesse `/posts/meu-primeiro-post`

### 7. Deploy no Vercel (5 minutos)

1. Faça push do código para o GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Clique em **Add New Project**
4. Importe seu repositório
5. Configure as variáveis de ambiente (copie do `.env.local`)
6. Deploy!

### 8. Configurar Google Search Console (5 minutos)

1. Acesse [search.google.com/search-console](https://search.google.com/search-console)
2. Adicione sua propriedade (URL do Vercel)
3. Verifique a propriedade (método HTML tag)
4. Copie o código de verificação → `GOOGLE_SITE_VERIFICATION` no `.env.local`
5. Adicione o sitemap: `https://seu-blog.vercel.app/sitemap.xml`

### 9. Aplicar para Google AdSense (após 1-2 meses)

**Requisitos**:
- Pelo menos 10 posts publicados
- 1.000+ visitantes/mês
- Conteúdo original e útil
- Site no ar há pelo menos 1 mês

**Passos**:
1. Acesse [google.com/adsense](https://www.google.com/adsense)
2. Aplique com seu site
3. Aguarde aprovação (1-7 dias)
4. Copie o Publisher ID → `NEXT_PUBLIC_ADSENSE_ID`

## ✅ Checklist MVP

- [ ] Supabase configurado
- [ ] Resend configurado
- [ ] Google Analytics configurado
- [ ] Variáveis de ambiente preenchidas
- [ ] Projeto rodando localmente
- [ ] 1 post criado e publicado
- [ ] Deploy no Vercel
- [ ] Google Search Console configurado
- [ ] Sitemap submetido

## 🎯 Próximos Passos

1. Escrever mais 2-3 posts
2. Compartilhar no LinkedIn, Twitter, Reddit
3. Configurar newsletter
4. Monitorar métricas no Analytics
5. Aplicar para AdSense (quando atingir requisitos)

## 📚 Recursos Úteis

- [Documentação Next.js](https://nextjs.org/docs)
- [Documentação Supabase](https://supabase.com/docs)
- [Documentação Resend](https://resend.com/docs)
- [Plano Completo](./PLANO_COMPLETO.md)

---

**Tempo total estimado**: ~30 minutos para ter o blog no ar! 🚀

