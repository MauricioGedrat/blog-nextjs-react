import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Next.js Brasil</h3>
            <p className="text-dark-300 text-sm">
              Blog técnico especializado em Next.js e React para desenvolvedores brasileiros.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-2 text-sm text-dark-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/posts" className="hover:text-white transition-colors">
                  Posts
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:text-white transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm text-dark-300">
              <li>
                <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Documentação Next.js
                </a>
              </li>
              <li>
                <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Documentação React
                </a>
              </li>
              <li>
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Vercel
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-dark-300 text-sm mb-4">
              Receba os melhores tutoriais diretamente no seu email.
            </p>
            <Link href="/#newsletter" className="btn-primary text-sm">
              Assinar
            </Link>
          </div>
        </div>
        
        <div className="border-t border-dark-800 mt-8 pt-8 text-center text-sm text-dark-400">
          <p>&copy; {currentYear} Next.js Brasil. Todos os direitos reservados.</p>
          <p className="mt-2">
            Feito com ❤️ usando Next.js, React e TypeScript
          </p>
        </div>
      </div>
    </footer>
  )
}

