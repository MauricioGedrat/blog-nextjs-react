import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      )
    }

    // Enviar email para o administrador
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'Contato <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'mauriciogedrat@gmail.com',
      reply_to: email,
      subject: `[Blog] ${subject} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0284c7;">Nova Mensagem de Contato</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Assunto:</strong> ${subject}</p>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #e5e7eb;">
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Erro ao enviar mensagem' },
        { status: 500 }
      )
    }

    // Enviar confirmação para o usuário
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'Contato <onboarding@resend.dev>',
      to: email,
      subject: 'Mensagem Recebida - Next.js Brasil',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0284c7;">Mensagem Recebida!</h2>
          <p>Olá ${name},</p>
          <p>Recebemos sua mensagem e responderemos em breve.</p>
          <p style="margin-top: 30px; color: #6b7280; font-size: 14px;">
            Equipe Next.js Brasil
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

