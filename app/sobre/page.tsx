export const metadata = {
  title: 'Sobre',
  description: 'Conheça mais sobre o blog Next.js Brasil e nossa missão.',
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-dark-900 mb-6">Sobre o Blog</h1>
        
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-lg text-dark-700 leading-relaxed">
            Bem-vindo ao <strong>Next.js Brasil</strong>! Somos um blog técnico dedicado a ajudar 
            desenvolvedores brasileiros a dominar Next.js e React.
          </p>
          
          <h2 className="text-2xl font-bold text-dark-900 mt-8 mb-4">Nossa Missão</h2>
          <p className="text-dark-700 leading-relaxed">
            Criar conteúdo de alta qualidade em português sobre Next.js e React, com foco em 
            tutoriais práticos, dicas de performance e casos de uso reais do mercado brasileiro.
          </p>
          
          <h2 className="text-2xl font-bold text-dark-900 mt-8 mb-4">O que Você Vai Encontrar</h2>
          <ul className="list-disc pl-6 space-y-2 text-dark-700">
            <li>Tutoriais passo a passo sobre Next.js App Router</li>
            <li>Guias de performance e otimização</li>
            <li>Exemplos práticos de Server Actions</li>
            <li>Dicas de SEO e acessibilidade</li>
            <li>Comparativos e análises de ferramentas</li>
            <li>Casos de uso do mercado brasileiro</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-dark-900 mt-8 mb-4">Contato</h2>
          <p className="text-dark-700 leading-relaxed">
            Tem alguma sugestão, dúvida ou quer colaborar? Entre em contato através da nossa 
            <a href="/contato" className="text-primary-600 hover:underline"> página de contato</a>.
          </p>
        </div>
      </div>
    </div>
  )
}

