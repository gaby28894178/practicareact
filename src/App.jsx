import ContactPage from './pages/ContactPage'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1 className="logo">✦ Upateco</h1>
          <nav>
            <a href="#contact">Contacto</a>
            <a href="#map">Ubicación</a>
          </nav>
        </div>
      </header>

      <main>
        <ContactPage />
      </main>

      <footer className="footer">
        <p>© 2026 Universidad Upateco · Tartagal, Salta, Argentina</p>
      </footer>
    </div>
  )
}

export default App
