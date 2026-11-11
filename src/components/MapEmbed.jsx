import './MapEmbed.css'

const MAP_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.4!2d-63.80158!3d-22.51650!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941dd8c2fa7b6f2b%3A0x55c3a2d3e5f2a1b0!2sUniversidad%20UPATECO!5e0!3m2!1ses!2sar!4v1699000000000!5m2!1ses!2sar'

export default function MapEmbed() {
  return (
    <div className="map-wrapper" id="map">
      <div className="map-header">
        <div className="map-header__icon">📍</div>
        <h2>Nuestra ubicación</h2>
        <p>Universidad Upateco · Tartagal, Salta</p>
      </div>

      <div className="map-container">
        <iframe
          title="Ubicación Universidad Upateco"
          src={MAP_SRC}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="map-info">
        <div className="info-item">
          <span className="info-icon">🏛️</span>
          <div>
            <strong>Universidad Upateco</strong>
            <span>Tartagal, Salta, Argentina</span>
          </div>
        </div>
        <div className="info-item">
          <span className="info-icon">🕐</span>
          <div>
            <strong>Horario de atención</strong>
            <span>Lun – Vie: 8:00 – 20:00</span>
          </div>
        </div>
        <div className="info-item">
          <span className="info-icon">📞</span>
          <div>
            <strong>Teléfono</strong>
            <span>+54 (3875) 123-456</span>
          </div>
        </div>
      </div>
    </div>
  )
}
