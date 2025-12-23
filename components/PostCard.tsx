import Link from 'next/link'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

type Post = {
  slug: string
  title: string
  excerpt: string
  publishedAt: string
  tags?: string[]
  image?: string
}

type Props = {
  post: Post
}

export default function PostCard({ post }: Props) {
  const publishedDate = format(new Date(post.publishedAt), "d 'de' MMMM 'de' yyyy", { locale: ptBR })

  return (
    <Link href={`/posts/${post.slug}`} className="card block hover:scale-105 transition-transform duration-200">
      {post.image && (
        <div className="mb-4 rounded-lg overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-48 object-cover"
          />
        </div>
      )}
      
      <div>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <h3 className="text-xl font-bold text-dark-900 mb-2 line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-dark-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-dark-500">
          <span>{publishedDate}</span>
          <span className="text-primary-600 font-medium hover:text-primary-700">
            Ler mais →
          </span>
        </div>
      </div>
    </Link>
  )
}

