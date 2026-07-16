import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import { traducciones } from './traducciones';
import { PopupModal } from 'react-calendly';
import CatGallery from "./components/CatGallery";

// IMPORTACIÓN DE PÁGINAS Y DATA EXTERNA
import Home from './pages/Home';
import About from './pages/About';
import Dieta from './pages/Dieta';
import Asesorias from './pages/Asesorias';
import Tienda from './pages/Tienda';
import Contacto from './pages/Contacto';

function App() {
  // --- ESTADOS ---
  const [idioma, setIdioma] = useState('es');
  const [contadorMiau, setContadorMiau] = useState(0);
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [mensajeUsuario, setMensajeUsuario] = useState('');
  const [estaMaullando, setEstaMaullando] = useState(false);
  const [calendarioAbierto, setCalendarioAbierto] = useState(false);


  // Nombre de variable descriptivo en vez de 't'
  const traduccion = traducciones[idioma];

  // --- LÓGICA DEL SONION MIAU ---
  const miau = () => {
    setContadorMiau(contadorMiau + 1);
    if (estaMaullando) return;

    setEstaMaullando(true);
    const audio = new Audio(`${process.env.PUBLIC_URL}/img/miau.mp3`);

    audio.play().catch(error => {
      console.log("Error al reproducir sonido:", error);
      setEstaMaullando(false);
    });

    audio.onended = () => {
      setEstaMaullando(false);
      alert(traduccion.alertMiau);
    };
  };

  // --- FORMULARIO DE CONTACTO ---
  const enviarMensaje = (e) => {
    e.preventDefault();
    if (!nombreUsuario.trim()) {
      alert(traduccion.alertErrorNombre);
      return;
    }
    alert(traduccion.alertGracias.replace("{nombre}", nombreUsuario));
    setNombreUsuario('');
    setMensajeUsuario('');
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <div className="main-wrapper"><div className="patitas-bg"></div></div>
          <div className="nav-logo"><img src="/img/logo-mayo.png" alt="Logo Mayo" /></div>
          <ul>
            <li><NavLink to="/">{traduccion.navHome}</NavLink></li>
            <li><NavLink to="/about">{traduccion.navSobreMi}</NavLink></li>
            <li><NavLink to="/dieta">{traduccion.navDieta}</NavLink></li>
            <li><NavLink to="/tienda">Mayo's Shop{traduccion.navMayosshop}</NavLink></li>
            <li><NavLink to="/asesorias">{traduccion.navAsesorias}</NavLink></li>
            <li><NavLink to="/contacto">{traduccion.navContacto}</NavLink></li>
           <li><NavLink to="/gatos">{traduccion.navGatos}</NavLink></li>
            <li className="nav-seguidores">⭐ {traduccion.seguidores}</li>

            <li className="nav-lang-item">
              <div className="language-picker-capsule">
                <button onClick={() => setIdioma('es')} className={`lang-btn ${idioma === 'es' ? 'active-lang' : ''}`}>ES</button>
                <button onClick={() => setIdioma('en')} className={`lang-btn ${idioma === 'en' ? 'active-lang' : ''}`}>EN</button>
              </div>
              <div className="mayo-saludador-nav"><img src="/img/foto16.png" alt="Mayo" /></div>
            </li>
          </ul>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home traduccion={traduccion} miau={miau} contadorMiau={contadorMiau} />} />
            <Route path="/about" element={<About traduccion={traduccion} />} />
            <Route path="/dieta" element={<Dieta traduccion={traduccion} />} />
            <Route path="/asesorias" element={<Asesorias traduccion={traduccion} setCalendarioAbierto={setCalendarioAbierto} />} />
            <Route path="/gatos" element={<CatGallery traduccion={traduccion} />} />
           <Route path="/tienda" element={<Tienda idioma={idioma} traduccion={traduccion} />} />
            <Route path="/contacto" element={
              <Contacto 
                traduccion={traduccion} enviarMensaje={enviarMensaje} 
                nombreUsuario={nombreUsuario} setNombreUsuario={setNombreUsuario} 
                mensajeUsuario={mensajeUsuario} setMensajeUsuario={setMensajeUsuario} 
              />
            } />
          </Routes>
        </main>

        <PopupModal
          url="https://calendly.com/damaris-svdra/asesoria-felina"
          pageSettings={{ backgroundColor: 'ffffff', primaryColor: '030712', textColor: '030712' }}
          onModalClose={() => setCalendarioAbierto(false)}
          open={calendarioAbierto}
          rootElement={document.getElementById('root')}
        />
      </div>
       <div className="music-player-container">
        <iframe className="music-player-iframe" src="https://www.youtube.com/embed/6iDuLGZt6Wo?autoplay=1&loop=1&playlist=6iDuLGZt6Wo" title="Mayo Music Player" allowFullScreen />
      </div>
    </Router>
  );
}

export default App;