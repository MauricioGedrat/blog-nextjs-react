import Link from 'next/link'
import { getPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import NewsletterSignup from '@/components/NewsletterSignup'
import AffiliateBanner from '@/components/AffiliateBanner'

export const metadata = {
  title: 'Início',
  description: 'Blog técnico especializado em Next.js e React. Tutoriais práticos, dicas de performance e muito mais.',
}

export default async function Home() {
  const posts = await getPosts({ limit: 6 })

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-dark-900 mb-6">
          Aprenda <span className="text-primary-600">Next.js</span> e{' '}
          <span className="text-accent-600">React</span> do Zero ao Avançado
        </h1>
        <p className="text-xl text-dark-600 max-w-3xl mx-auto mb-8">
          Tutoriais práticos, dicas de performance, Server Actions, App Router e muito mais 
          para desenvolvedores brasileiros que querem dominar o ecossistema React.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/posts" className="btn-primary">
            Ver Todos os Posts
          </Link>
          <Link href="/sobre" className="btn-secondary">
            Sobre o Blog
          </Link>
        </div>
      </section>

      {/* Affiliate Banner */}
      <AffiliateBanner />

      {/* Featured Posts */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-dark-900 mb-8">Posts em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-dark-600 text-lg">
              Nenhum post publicado ainda. Em breve teremos conteúdo incrível aqui!
            </p>
          </div>
        )}
      </section>

      {/* Newsletter Section */}
      <section className="bg-primary-50 rounded-2xl p-8 md:p-12 mb-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-dark-900 mb-4">
            Receba Novos Posts no Seu Email
          </h2>
          <p className="text-dark-600 mb-6">
            Cadastre-se na nossa newsletter e receba os melhores tutoriais sobre Next.js e React 
            diretamente na sua caixa de entrada.
          </p>
          <NewsletterSignup />
        </div>
      </section>

      {/* Topics Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-dark-900 mb-8">Tópicos que Cobrimos</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            'App Router',
            'Server Actions',
            'Performance',
            'TypeScript',
            'SEO',
            'Deploy',
            'Autenticação',
            'API Routes',
          ].map((topic) => (
            <div key={topic} className="card text-center">
              <h3 className="font-semibold text-dark-900">{topic}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

