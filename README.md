# 🚀 Blog Técnico Next.js/React

Blog técnico especializado em Next.js e React, desenvolvido para gerar renda através de múltiplas fontes de monetização.

## ✨ Características

- ✅ Next.js 14 com App Router
- ✅ TypeScript
- ✅ Tailwind CSS com design tokens personalizados
- ✅ Supabase (banco de dados gratuito)
- ✅ Sistema de comentários
- ✅ Newsletter com Resend
- ✅ Google Analytics integrado
- ✅ Google AdSense pronto
- ✅ Sistema de afiliados
- ✅ Stripe para doações
- ✅ SEO otimizado
- ✅ Table of Contents automático
- ✅ Sistema de compartilhamento social

## 🛠️ Tecnologias

- **Framework**: Next.js 14 (App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Banco de Dados**: Supabase (PostgreSQL)
- **Emails**: Resend
- **Pagamentos**: Stripe
- **Analytics**: Google Analytics
- **Monetização**: Google AdSense + Afiliados

## 📦 Instalação

1. **Clone o repositório**
```bash
git clone <seu-repositorio>
cd blog-prototype
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**

Crie um arquivo `.env.local` na raiz do projeto. Veja `ENV_SETUP.md` para detalhes.

4. **Configure o Supabase**

- Crie uma conta em [Supabase](https://supabase.com)
- Crie um novo projeto
- Execute o script `database/schema.sql` no SQL Editor do Supabase
- Copie a URL e a chave anon para o `.env.local`

5. **Execute o projeto em desenvolvimento**
```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## 🚀 Deploy

### Vercel (Recomendado)

1. Faça push do código para o GitHub
2. Conecte o repositório no [Vercel](https://vercel.com)
3. Adicione as variáveis de ambiente no painel do Vercel
4. Deploy automático!

### Configuração de Variáveis no Vercel

Adicione todas as variáveis do `.env.local` no painel do Vercel:
- Settings → Environment Variables

## 📝 Estrutura do Projeto

```
blog-prototype/
├── app/                    # App Router (Next.js 14)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Homepage
│   ├── posts/             # Posts do blog
│   └── api/               # API Routes
├── components/            # Componentes React
├── lib/                   # Funções utilitárias
├── database/              # Schema do banco
└── public/                # Assets estáticos
```

## 📚 Documentação Completa

Consulte `PLANO_COMPLETO.md` para:
- Plano de conteúdo (12 posts em 6 meses)
- Estratégia de monetização
- Plano de marketing
- Roadmap de evolução
- Métricas e KPIs
- Checklist de validação

## 💰 Monetização

O blog está preparado para múltiplas fontes de receita:

1. **Google AdSense**: Componentes prontos para inserção
2. **Afiliados**: Sistema de banners rotativos
3. **Stripe**: API para doações e membros premium
4. **Produtos Próprios**: Estrutura para futuros produtos

## 📊 Métricas

Configure e monitore:
- Google Analytics
- Google Search Console
- AdSense Dashboard
- Newsletter (Resend)

## 🤝 Contribuindo

Este é um projeto pessoal, mas sugestões são bem-vindas!

## 📄 Licença

MIT

## 🆘 Suporte

Para dúvidas sobre implementação:
- Documentação Next.js: https://nextjs.org/docs
- Documentação Supabase: https://supabase.com/docs
- Documentação Resend: https://resend.com/docs

---

**Desenvolvido com ❤️ usando Next.js, React e TypeScript**

