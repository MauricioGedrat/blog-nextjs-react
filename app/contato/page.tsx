import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Contato',
  description: 'Entre em contato conosco. Sugestões, dúvidas ou colaborações são bem-vindas!',
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-dark-900 mb-6">Entre em Contato</h1>
        <p className="text-dark-600 text-lg mb-8">
          Tem alguma sugestão, dúvida ou quer colaborar? Preencha o formulário abaixo ou 
          envie um email diretamente.
        </p>
        
        <ContactForm />
      </div>
    </div>
  )
}

