'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase-client'

type Comment = {
  id: string
  author: string
  content: string
  created_at: string
  replies?: Comment[]
}

type Props = {
  postSlug: string
}

export default function CommentsSection({ postSlug }: Props) {
  const [comments, setComments] = useState<Comment[]>([])
  const [loading, setLoading] = useState(true)
  const [author, setAuthor] = useState('')
  const [content, setContent] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    loadComments()
  }, [postSlug])

  const loadComments = async () => {
    try {
      const supabase = createClient()
      const { data, error } = await supabase
        .from('comments')
        .select('*')
        .eq('post_slug', postSlug)
        .eq('parent_id', null)
        .order('created_at', { ascending: false })

      if (error) throw error
      setComments(data || [])
    } catch (error) {
      console.error('Erro ao carregar comentários:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!author.trim() || !content.trim()) return

    setSubmitting(true)
    try {
      const supabase = createClient()
      const { error } = await supabase.from('comments').insert({
        post_slug: postSlug,
        author: author.trim(),
        content: content.trim(),
      })

      if (error) throw error

      setAuthor('')
      setContent('')
      loadComments()
    } catch (error) {
      console.error('Erro ao enviar comentário:', error)
      alert('Erro ao enviar comentário. Tente novamente.')
    } finally {
      setSubmitting(false)
    }
  }

  if (loading) {
    return (
      <div className="bg-dark-50 rounded-lg p-6 border border-dark-200">
        <p className="text-dark-600">Carregando comentários...</p>
      </div>
    )
  }

  return (
    <div className="bg-dark-50 rounded-lg p-6 border border-dark-200">
      <h3 className="text-2xl font-bold text-dark-900 mb-6">
        Comentários ({comments.length})
      </h3>

      <form onSubmit={handleSubmit} className="mb-8">
        <div className="space-y-4">
          <div>
            <label htmlFor="author" className="block text-sm font-medium text-dark-700 mb-2">
              Nome
            </label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full px-4 py-2 border border-dark-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-dark-700 mb-2">
              Comentário
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={4}
              className="w-full px-4 py-2 border border-dark-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              required
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? 'Enviando...' : 'Enviar Comentário'}
          </button>
        </div>
      </form>

      <div className="space-y-6">
        {comments.length === 0 ? (
          <p className="text-dark-600">Seja o primeiro a comentar!</p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="bg-white rounded-lg p-4 border border-dark-200">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-semibold text-dark-900">{comment.author}</h4>
                <span className="text-sm text-dark-500">
                  {new Date(comment.created_at).toLocaleDateString('pt-BR')}
                </span>
              </div>
              <p className="text-dark-700 whitespace-pre-wrap">{comment.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

