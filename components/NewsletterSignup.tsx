'use client'

import { useState } from 'react'

type Props = {
  compact?: boolean
}

export default function NewsletterSignup({ compact = false }: Props) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage('Inscrição realizada com sucesso! Verifique seu email.')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error || 'Erro ao realizar inscrição. Tente novamente.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Erro ao realizar inscrição. Tente novamente.')
    }
  }

  if (compact) {
    return (
      <div className="bg-primary-50 rounded-lg p-4 border border-primary-200">
        <h4 className="font-semibold text-dark-900 mb-2 text-sm">Newsletter</h4>
        <form onSubmit={handleSubmit} className="space-y-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu email"
            className="w-full px-3 py-2 text-sm border border-dark-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            required
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full btn-primary text-sm py-2 disabled:opacity-50"
          >
            {status === 'loading' ? 'Enviando...' : 'Assinar'}
          </button>
          {message && (
            <p className={`text-xs ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
              {message}
            </p>
          )}
        </form>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Seu melhor email"
          className="flex-1 px-4 py-3 border border-dark-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          required
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-primary whitespace-nowrap disabled:opacity-50"
        >
          {status === 'loading' ? 'Enviando...' : 'Assinar'}
        </button>
      </div>
      {message && (
        <p className={`mt-2 text-sm text-center ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
          {message}
        </p>
      )}
    </form>
  )
}

