import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }

    // Salvar no banco de dados (Supabase)
    // Por enquanto, apenas enviar email de confirmação
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'Newsletter <onboarding@resend.dev>',
      to: email,
      subject: 'Bem-vindo à Newsletter do Next.js Brasil!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #0284c7;">Bem-vindo à Newsletter!</h1>
          <p>Obrigado por se inscrever na nossa newsletter sobre Next.js e React.</p>
          <p>Você receberá os melhores tutoriais e dicas diretamente no seu email.</p>
          <p style="margin-top: 30px; color: #6b7280; font-size: 14px;">
            Se você não se inscreveu, pode ignorar este email.
          </p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Erro ao enviar email' },
        { status: 500 }
      )
    }

    // TODO: Salvar email no Supabase para gerenciamento
    // const supabase = await createServerClient()
    // await supabase.from('newsletter').insert({ email })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Newsletter API error:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

