import { notFound } from 'next/navigation'
import { getPost, getPosts } from '@/lib/posts'
import BlogPost from '@/components/BlogPost'
import TableOfContents from '@/components/TableOfContents'
import CommentsSection from '@/components/CommentsSection'
import NewsletterSignup from '@/components/NewsletterSignup'
import AffiliateBanner from '@/components/AffiliateBanner'
import ShareButtons from '@/components/ShareButtons'
import type { Metadata } from 'next'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug)

  if (!post) {
    return {
      title: 'Post não encontrado',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags?.join(', ') || '',
    authors: [{ name: post.author || 'Next.js Brasil' }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author || 'Next.js Brasil'],
      tags: post.tags || [],
      images: [
        {
          url: post.image || '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image || '/og-image.jpg'],
    },
  }
}

export default async function PostPage({ params }: Props) {
  const post = await getPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <article className="max-w-4xl mx-auto">
        <BlogPost post={post} />
        
        <div className="my-8">
          <ShareButtons 
            title={post.title}
            url={`${process.env.NEXT_PUBLIC_SITE_URL}/posts/${post.slug}`}
          />
        </div>

        <AffiliateBanner />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-12">
          <div className="lg:col-span-3">
            <CommentsSection postSlug={post.slug} />
          </div>
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <TableOfContents content={post.content} />
              <div className="mt-8">
                <NewsletterSignup compact />
              </div>
            </div>
          </aside>
        </div>
      </article>
    </div>
  )
}

