import { getPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import AffiliateBanner from '@/components/AffiliateBanner'

export const metadata = {
  title: 'Todos os Posts',
  description: 'Lista completa de todos os posts sobre Next.js e React.',
}

export default async function PostsPage() {
  const posts = await getPosts()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-dark-900 mb-4">Todos os Posts</h1>
        <p className="text-dark-600 text-lg">
          Explore nossa coleção completa de tutoriais e guias sobre Next.js e React.
        </p>
      </div>

      <AffiliateBanner />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
    </div>
  )
}

