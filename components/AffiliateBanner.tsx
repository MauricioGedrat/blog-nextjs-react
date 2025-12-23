'use client'

import { useState, useEffect } from 'react'

type AffiliateLink = {
  title: string
  description: string
  url: string
  cta: string
  color: string
}

const affiliateLinks: AffiliateLink[] = [
  {
    title: 'Hosting na Vercel',
    description: 'Deploy grátis e ilimitado para seus projetos Next.js',
    url: 'https://vercel.com/?utm_source=blog&utm_medium=affiliate',
    cta: 'Experimentar Grátis',
    color: 'bg-black text-white hover:bg-gray-800',
  },
  {
    title: 'Cursos na Udemy',
    description: 'Aprenda Next.js com os melhores cursos em português',
    url: 'https://www.udemy.com/?utm_source=blog&utm_medium=affiliate',
    cta: 'Ver Cursos',
    color: 'bg-purple-600 text-white hover:bg-purple-700',
  },
  {
    title: 'DigitalOcean',
    description: 'Cloud hosting confiável para suas aplicações',
    url: 'https://www.digitalocean.com/?utm_source=blog&utm_medium=affiliate',
    cta: 'Começar Agora',
    color: 'bg-blue-600 text-white hover:bg-blue-700',
  },
]

export default function AffiliateBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentLink = affiliateLinks[currentIndex]

  // Rotacionar banners a cada 10 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % affiliateLinks.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6 mb-8 border border-primary-200">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex-1 min-w-[200px]">
          <h3 className="font-bold text-dark-900 mb-1">{currentLink.title}</h3>
          <p className="text-sm text-dark-600">{currentLink.description}</p>
        </div>
        <a
          href={currentLink.url}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className={`px-6 py-3 rounded-lg font-semibold transition-colors ${currentLink.color}`}
        >
          {currentLink.cta}
        </a>
      </div>
      
      {/* Indicadores */}
      <div className="flex gap-2 mt-4 justify-center">
        {affiliateLinks.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? 'w-8 bg-primary-600' : 'w-2 bg-dark-300'
            }`}
            aria-label={`Banner ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

