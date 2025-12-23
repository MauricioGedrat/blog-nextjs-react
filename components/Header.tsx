import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b border-dark-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors">
            Next.js Brasil
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-dark-700 hover:text-primary-600 transition-colors font-medium">
              Início
            </Link>
            <Link href="/posts" className="text-dark-700 hover:text-primary-600 transition-colors font-medium">
              Posts
            </Link>
            <Link href="/sobre" className="text-dark-700 hover:text-primary-600 transition-colors font-medium">
              Sobre
            </Link>
            <Link href="/contato" className="text-dark-700 hover:text-primary-600 transition-colors font-medium">
              Contato
            </Link>
          </nav>

          <div className="md:hidden">
            <button className="text-dark-700 hover:text-primary-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

