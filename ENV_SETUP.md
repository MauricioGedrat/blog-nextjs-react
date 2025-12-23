# Configuração de Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```env
# Site URL
NEXT_PUBLIC_SITE_URL=https://seu-blog.vercel.app

# Supabase (Banco de dados gratuito)
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anon-aqui

# Resend (Emails - Free Tier: 3.000 emails/mês)
RESEND_API_KEY=re_sua-chave-aqui
RESEND_FROM_EMAIL=Newsletter <newsletter@seu-dominio.com>

# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Google AdSense
NEXT_PUBLIC_ADSENSE_ID=ca-pub-XXXXXXXXXX

# Google Site Verification
GOOGLE_SITE_VERIFICATION=seu-codigo-verificacao

# Stripe (Opcional - para doações)
STRIPE_SECRET_KEY=sk_test_sua-chave-aqui
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_sua-chave-aqui

# Email de contato
CONTACT_EMAIL=seu-email@exemplo.com
```

