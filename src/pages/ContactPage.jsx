import ContactForm from '../components/ContactForm'
import MapEmbed from '../components/MapEmbed'
import './ContactPage.css'

export default function ContactPage() {
  return (
    <section className="contact-page">
      <div className="hero">
        <div className="hero-content">
          <div className="hero-badge">✦ Universidad Upateco</div>
          <h1>Hablemos.<br /><span>Estamos para vos.</span></h1>
          <p>Escribinos sobre inscripciones, oferta académica o cualquier consulta. Te respondemos pronto.</p>
        </div>
      </div>

      <div className="contact-layout">
        <ContactForm />
        <MapEmbed />
      </div>
    </section>
  )
}
