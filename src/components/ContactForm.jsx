import { useRef, useState } from 'react'
import './ContactForm.css'

const FORMSPREE_URL = 'https://formspree.io/f/xvkaorkz'

const SERVICE_ID  = 'service_k1c5w0v'
const TEMPLATE_ID = 'template_4tggveb'
const PUBLIC_KEY  = 'YFEYNc4KmDe0FkDrR'

export default function ContactForm() {
  const form = useRef()
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: new FormData(form.current),
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('success')
        form.current.reset()
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        const data = await res.json()
        console.error('Formspree error:', data)
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch (err) {
      console.error('Network error:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <div className="form-card" id="contact">
      <div className="form-card__header">
        <div className="form-card__icon">✉</div>
        <h2>Envianos un mensaje</h2>
        <p>Completá los campos y te respondemos a la brevedad.</p>
      </div>

      <form ref={form} onSubmit={handleSubmit} className="cform" noValidate>
        <div className="cform__row">
          <div className="cform__field">
            <label htmlFor="user_name">Nombre</label>
            <input id="user_name" type="text" name="user_name"
              placeholder="Tu nombre" required minLength={3} />
          </div>
          <div className="cform__field">
            <label htmlFor="user_email">Email</label>
            <input id="user_email" type="email" name="user_email"
              placeholder="tu@email.com" required />
          </div>
        </div>

        <div className="cform__field">
          <label htmlFor="subject">Asunto</label>
          <input id="subject" type="text" name="subject"
            placeholder="¿En qué te podemos ayudar?" required />
        </div>

        <div className="cform__field">
          <label htmlFor="message">Mensaje</label>
          <textarea id="message" name="message" rows={5}
            placeholder="Escribí tu consulta acá..." required minLength={10} />
        </div>

        <button type="submit" className={`cform__btn ${status}`}
          disabled={status === 'sending'}>
          {status === 'sending' && <span className="btn-spinner" />}
          {status === 'idle'    && <><span>Enviar mensaje</span><span className="btn-arrow">→</span></>}
          {status === 'sending' && <span>Enviando...</span>}
          {status === 'success' && <span>✓ ¡Mensaje enviado!</span>}
          {status === 'error'   && <span>✕ Algo salió mal</span>}
        </button>
      </form>
    </div>
  )
}
