import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import 'highlight.js/styles/github-dark.css'

type Post = {
  slug: string
  title: string
  content: string
  excerpt: string
  publishedAt: string
  author?: string
  tags?: string[]
  image?: string
  readingTime?: number
}

type Props = {
  post: Post
}

export default function BlogPost({ post }: Props) {
  const publishedDate = format(new Date(post.publishedAt), "d 'de' MMMM 'de' yyyy", { locale: ptBR })

  return (
    <article className="prose prose-lg max-w-none">
      {/* Header */}
      <header className="mb-8">
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <h1 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4">
          {post.title}
        </h1>
        
        <div className="flex items-center gap-4 text-dark-600 text-sm mb-6">
          <span>{publishedDate}</span>
          {post.readingTime && (
            <>
              <span>•</span>
              <span>{post.readingTime} min de leitura</span>
            </>
          )}
          {post.author && (
            <>
              <span>•</span>
              <span>Por {post.author}</span>
            </>
          )}
        </div>
        
        {post.image && (
          <div className="mb-8 rounded-xl overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}
      </header>

      {/* Content */}
      <div className="prose-custom">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[
            rehypeHighlight,
            rehypeSlug,
            [rehypeAutolinkHeadings, { behavior: 'wrap' }],
          ]}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  )
}

