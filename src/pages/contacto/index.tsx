"use client";

import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; // o el tema que prefieras
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validación básica
    if (!formData.name || !formData.email || !formData.message) {
      setError('Todos los campos son requeridos.');
      return;
    }
    
    setError('');
    // Aquí podrías enviar los datos a un API o procesarlos según necesites.
    try {
        const res = await fetch('/api/contacto', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
  
        console.log("RESPUESTA", res);
        
        if (!res.ok) {
          throw new Error('Error en el envío del correo');
        }

        
        setSubmitted(true);
        setFormData({ name: '', email: '',  message: '' });
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } catch (err) {
        setError('Error al enviar el correo. Inténtalo nuevamente.');
        console.error(err);
      }
  };

  return (
    <div className="contact-us p-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2 className="mb-4">Contáctanos</h2>
      
      {submitted && <Message severity="success" text="Gracias por contactarnos. Pronto nos pondremos en contacto." className="mb-4" />}
      {error && <Message severity="error" text={error} className="mb-4" />}
      
      <form onSubmit={handleSubmit} className="p-fluid">
        <div className="field mb-3">
          <label htmlFor="name">Nombre</label>
          <InputText id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Ingresa tu nombre" />
        </div>
        <div className="field mb-3">
          <label htmlFor="email">Correo electrónico</label>
          <InputText id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Ingresa tu correo" />
        </div>
        <div className="field mb-3">
          <label htmlFor="message">Mensaje</label>
          <InputTextarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Escribe tu mensaje" />
        </div>
        <Button label="Enviar" type="submit" />
      </form>
    </div>
  );
};

export default ContactUs;
