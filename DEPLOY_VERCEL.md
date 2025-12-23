# 🚀 Deploy no Vercel - Passo a Passo

## ✅ Commit Realizado!

O código já está commitado localmente. Agora você precisa:

## 1. Criar Repositório no GitHub

### Opção A: Via Site GitHub

1. Acesse [github.com](https://github.com)
2. Clique no **"+"** no canto superior direito → **"New repository"**
3. Preencha:
   - **Repository name**: `blog-nextjs-react` (ou outro nome)
   - **Description**: "Blog técnico Next.js/React com monetização"
   - **Visibility**: Público ou Privado (sua escolha)
   - **NÃO marque** "Initialize with README" (já temos arquivos)
4. Clique em **"Create repository"**

### Opção B: Via GitHub CLI (se tiver instalado)

```bash
gh repo create blog-nextjs-react --public --source=. --remote=origin --push
```

## 2. Conectar e Fazer Push

Após criar o repositório no GitHub, execute:

```bash
# Adicionar o repositório remoto (substitua SEU-USUARIO pelo seu username do GitHub)
git remote add origin https://github.com/SEU-USUARIO/blog-nextjs-react.git

# Renomear branch para main (se necessário)
git branch -M main

# Fazer push
git push -u origin main
```

**Ou se preferir SSH:**

```bash
git remote add origin git@github.com:SEU-USUARIO/blog-nextjs-react.git
git branch -M main
git push -u origin main
```

## 3. Deploy no Vercel

### Passo a Passo:

1. **Acesse [vercel.com](https://vercel.com)**
2. **Faça login** com sua conta GitHub
3. Clique em **"Add New Project"**
4. **Importe seu repositório** `blog-nextjs-react`
5. **Configure o projeto**:
   - Framework Preset: **Next.js** (já detectado automaticamente)
   - Root Directory: `./` (deixe padrão)
   - Build Command: `npm run build` (já configurado)
   - Output Directory: `.next` (já configurado)
6. **Environment Variables**: Adicione todas as variáveis do `.env.local`:
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `RESEND_API_KEY`
   - `RESEND_FROM_EMAIL`
   - `NEXT_PUBLIC_GA_ID`
   - E outras que você configurar
7. Clique em **"Deploy"**
8. Aguarde 2-3 minutos
9. **Pronto!** Você receberá uma URL como: `https://blog-nextjs-react.vercel.app`

## 4. Atualizar Variáveis Após Deploy

Após o deploy, atualize o `.env.local` com a URL real:

```env
NEXT_PUBLIC_SITE_URL=https://seu-blog.vercel.app
```

E adicione essa mesma variável no Vercel (Environment Variables).

## 5. Configurar Domínio Customizado (Opcional)

1. No Vercel, vá em **Settings** → **Domains**
2. Adicione seu domínio (se tiver)
3. Siga as instruções de DNS

## ✅ Checklist

- [ ] Repositório criado no GitHub
- [ ] Código enviado para GitHub (push)
- [ ] Projeto importado no Vercel
- [ ] Variáveis de ambiente configuradas
- [ ] Deploy realizado com sucesso
- [ ] Site acessível na URL do Vercel
- [ ] URL atualizada no `.env.local`

## 🆘 Problemas Comuns

### "Build failed"
- Verifique se todas as dependências estão no `package.json`
- Certifique-se de que as variáveis de ambiente estão configuradas

### "Module not found"
- Execute `npm install` localmente primeiro
- Verifique se o `package.json` está correto

### "Environment variable missing"
- Adicione todas as variáveis no Vercel
- Certifique-se de que os nomes estão corretos

---

**Dica**: Após o primeiro deploy, o Vercel faz deploy automático sempre que você fizer push para o GitHub!

