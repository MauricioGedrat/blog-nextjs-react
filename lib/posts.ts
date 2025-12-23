import { createServerClient } from './supabase-server'
import { readingTime } from 'reading-time'

export type Post = {
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

type GetPostsOptions = {
  limit?: number
  tag?: string
}

export async function getPosts(options: GetPostsOptions = {}): Promise<Post[]> {
  try {
    const supabase = await createServerClient()
    let query = supabase
      .from('posts')
      .select('*')
      .eq('published', true)
      .order('published_at', { ascending: false })

    if (options.tag) {
      query = query.contains('tags', [options.tag])
    }

    if (options.limit) {
      query = query.limit(options.limit)
    }

    const { data, error } = await query

    if (error) {
      console.error('Error fetching posts:', error)
      return []
    }

    return (data || []).map((post) => ({
      slug: post.slug,
      title: post.title,
      content: post.content,
      excerpt: post.excerpt,
      publishedAt: post.published_at,
      author: post.author,
      tags: post.tags || [],
      image: post.image,
      readingTime: post.content ? Math.ceil(readingTime(post.content).minutes) : undefined,
    }))
  } catch (error) {
    console.error('Error in getPosts:', error)
    return []
  }
}

export async function getPost(slug: string): Promise<Post | null> {
  try {
    const supabase = await createServerClient()
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .single()

    if (error || !data) {
      return null
    }

    return {
      slug: data.slug,
      title: data.title,
      content: data.content,
      excerpt: data.excerpt,
      publishedAt: data.published_at,
      author: data.author,
      tags: data.tags || [],
      image: data.image,
      readingTime: data.content ? Math.ceil(readingTime(data.content).minutes) : undefined,
    }
  } catch (error) {
    console.error('Error in getPost:', error)
    return null
  }
}

