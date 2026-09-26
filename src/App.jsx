
import './App.css'

function App() {
  return (
    <div className="pagina">
      <header className="encabezado">
        <h1>Mi mundo musical</h1>
        <p>Un espacio dedicado a una de mis principales aficiones.</p>
      </header>

      <main className="contenido">
        <img
          className="imagen"
          src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80"
          alt="Instrumentos musicales"
        />

        <section className="tarjeta">
          <h2>Sobre la música</h2>

          <p>
            La música es una forma de expresión que puede transmitir
            emociones, recuerdos e ideas de diferentes maneras.
          </p>

          <p>
            Me interesa la música porque permite descubrir diferentes
            estilos, artistas y sonidos, además de acompañar diferentes
            momentos de la vida cotidiana.
          </p>
        </section>

        <section className="generos">
          <h2>Géneros que me interesan</h2>

          <div className="lista">
            <div className="genero">
              <h3>Rock</h3>
              <p>Guitarras, energía y diferentes estilos.</p>
            </div>

            <div className="genero">
              <h3>Pop</h3>
              <p>Melodías fáciles de recordar y gran variedad.</p>
            </div>

            <div className="genero">
              <h3>Electrónica</h3>
              <p>Sonidos digitales y ritmos variados.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="pie">
        <p>Proyecto realizado para el taller de React - UFPSO</p>
      </footer>
    </div>
  )
}

export default App
