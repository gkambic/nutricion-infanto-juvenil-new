// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  console.log("ENTRO ACA", resend);
  const { name, email, subject, message } = req.body;

  try {
    // Envía el email usando Resend
    const data = await resend.emails.send({
      from: email, // También puedes usar un remitente fijo, por ejemplo: 'tuemail@tudominio.com'
      to: 'gkambic@gmail.com', // Destinatario predeterminado
      subject: subject || 'Nuevo mensaje de contacto',
      html: `
        <p><strong>Mensaje:</strong></p>
      `
    });

    res.status(200).json({ message: 'Email enviado exitosamente.', data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al enviar el email.', error });
  }
}


/* 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  const { name, email, subject, message } = req.body;

  try {
    // Envía el email usando Resend
    const data = await resend.emails.send({
      from: email, // También puedes usar un remitente fijo, por ejemplo: 'tuemail@tudominio.com'
      to: 'gkambic@gmail.com', // Destinatario predeterminado
      subject: subject || 'Nuevo mensaje de contacto',
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `
    });

    res.status(200).json({ message: 'Email enviado exitosamente.', data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al enviar el email.', error });
  }
}
 */