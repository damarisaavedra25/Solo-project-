import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import { traducciones } from './traducciones';
import { PopupModal } from 'react-calendly';

function App() {
  // --- ESTADOS ---
  const [idioma, setIdioma] = useState('es');
  const [contadorMiau, setContadorMiau] = useState(0);
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [mensajeUsuario, setMensajeUsuario] = useState('');
  const [estaMaullando, setEstaMaullando] = useState(false);
  const [calendarioAbierto, setCalendarioAbierto] = useState(false);
  const [ordenCompletada, setOrdenCompletada] = useState(null);

  // Estados para controlar los selectores de la tienda
  const [colorClasica, setColorClasica] = useState('1');
  const [tallaClasica, setTallaClasica] = useState('S');
  const [colorMiauSel, setColorMiauSel] = useState('1');
  const [tallaMiauSel, setTallaMiauSel] = useState('S');

  const [indiceClasica, setIndiceClasica] = useState(0);
  const [indiceMiau, setIndiceMiau] = useState(0);

  const t = traducciones[idioma];

  // --- ARRAYS DE IMÁGENES ---
  const fotosClasica = [
    "/img/foto10.png",
    "/img/foto11.png",
    "/img/foto12.png",
    "/img/foto13.png"
  ];

  const fotosMiau = [
    "/img/foto10.png",
    "/img/foto7.jpg",
    "/img/foto8.jpg",
    "/img/foto9.JPG"
  ];

  // --- LÓGICA DEL SONIDO MIAU ---
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
      alert(t.alertMiau);
    };
  };


  // --- FORMULARIO DE CONTACTO ---
  const enviarMensaje = (e) => {
    e.preventDefault();
    if (!nombreUsuario.trim()) {
      alert(t.alertErrorNombre);
      return;
    }
    alert(t.alertGracias.replace("{nombre}", nombreUsuario));
    setNombreUsuario('');
    setMensajeUsuario('');
  };

  const rotarClasica = () => setIndiceClasica((prev) => (prev === 3 ? 0 : prev + 1));
  const rotarMiau = () => setIndiceMiau((prev) => (prev === 3 ? 0 : prev + 1));

  // --- PROCESAR ORDEN DE COMPRA ---
  const procesarOrden = (nombreProducto, precioPrenda, talla, color) => {
    const numeroFolio = Math.floor(1000 + Math.random() * 9000);
    const folioGenerado = `MAYO-${numeroFolio}`;

    const costoEnvio = 200;
    const totalCalculado = precioPrenda + costoEnvio;

    setOrdenCompletada({
      folio: folioGenerado,
      producto: nombreProducto,
      talla: talla,
      color: color,
      prenda: `$${precioPrenda} MXN`,
      envio: `$${costoEnvio} MXN`,
      total: `$${totalCalculado} MXN`
    });
  };

  return (
    <Router>
      <div className="App">
        {/* NAVEGACIÓN GLOBAL */}
        <nav>
          <div className="main-wrapper">
            {/* Capa de fondo aislada: no interfiere con el contenido */}
            <div className="patitas-bg"></div>
          </div>

          <div className="nav-logo">
            <img src="/img/logo-mayo.png" alt="Logo Mayo" />
          </div>
          <ul>
            <li><NavLink to="/">{t.navHome}</NavLink></li>
            <li><NavLink to="/about">{t.navSobreMi}</NavLink></li>
            <li><NavLink to="/dieta">{t.navDieta}</NavLink></li>
            <li><NavLink to="/tienda">Mayo's Shop{t.navMayosshop}</NavLink></li>
            <li><NavLink to="/asesorias">{t.navAsesorias}</NavLink></li>
            <li><NavLink to="/contacto">{t.navContacto}</NavLink></li>

            <li className="nav-seguidores">⭐ {t.seguidores}</li>
            <li className="nav-lang-item"></li>
            {/* CAPSULA DE IDIOMA INCORPORADA */}
            <li className="nav-lang-item">
              <div className="language-picker-capsule">
                <button
                  onClick={() => setIdioma('es')}
                  className={`lang-btn ${idioma === 'es' ? 'active-lang' : ''}`}
                >
                  ES
                </button>
                <button
                  onClick={() => setIdioma('en')}
                  className={`lang-btn ${idioma === 'en' ? 'active-lang' : ''}`}
                >
                  EN
                </button>
              </div>
              <div className="mayo-saludador-nav">
                <img src="/img/foto16.png" alt="Mayo Saludando" />
              </div>
            </li>
          </ul>
        </nav>

        {/* CONTENEDOR PRINCIPAL */}
        <main className="main-content">
          <Routes>

            {/* PAGINA: HOME */}
            <Route path="/" element={
              <>
              <section id="home" className="hero-container">
                <div className="hero-content">

                  {/* COLUMNA IZQUIERDA */}
                  <div className="hero-left">
                    <h1 className="hero-title">
                      {t.bienvenida} <br />
                      <span className="hero-name">Mayo<span className="heart-icon">💙</span></span>
                    </h1>
                    <p className="hero-tagline">{t.tagline}</p>
                    <p className="hero-description">{t.descripcion}</p>

                    <div className="hero-buttons">
                      <button onClick={miau} className="btn-primary-hero">{t.btnSaludar}</button>
                      <button onClick={() => {
                        const galeria = document.getElementById('galeria-home');
                        if (galeria) galeria.scrollIntoView({ behavior: 'smooth' });
                      }} className="btn-secondary-hero">{t.btnFotos}</button>

                      <div className="social-proof-wrapper">
                        <div className="social-avatars">
                          <img src="/img/Portrait1.jpeg" alt="User" />
                          <img src="/img/portrait2.jpg" alt="User" />
                          <img src="/img/portrait3.jpeg" alt="User" />
                        </div>
                        <div className="social-labels">
                          <span className="followers-bold">+{t.seguidores}</span>
                          <span className="thanks-text">{t.agradecimiento}</span>
                        </div>
                      </div>
                      <div className="hero-counter-container">
                        <p className="greet-counter">🐾 {t.contadorSaludos.replace("{cantidad}", contadorMiau)}</p>
                      </div>
                    </div>
                  </div>


                  {/* COLUMNA DERECHA */}
                  <div className="hero-right">
                    <div className="orbe-container">
                      <div className="orbe-bg"></div>
                      <img src="/img/foto15.png" alt="Mayo" className="mayo-hero-img" />
                      <div className="mood-badge">
                        <div className="mood-text">
                          <span className="mood-title">{t.moodTitulo}</span>
                          <span className="mood-desc">{t.moodDesc}</span>
                        </div>
                        <span className="mood-dot"></span>
                      </div>
                    </div>
                  </div>
                </div>
</section>
                {/* --- SECCIÓN HISTORIA INTEGRADA --- */}
                <section id="historia-integrada" className="historia-card-container">
                  <div className="historia-card-content">
                    <h2 className="home-gallery-title">{t.historiaTitulo}</h2>
                    <p className="historia-p1">{t.historiaP1}</p>
                    <p className="historia-p2">{t.historiaP2}</p>
                  </div>

                  <div className="historia-images">
                    <img src="/img/foto4.jpg" alt="Mayo 1" />
                    <img src="/img/foto5.jpg" alt="Mayo 2" />
                    <img src="/img/foto6.jpg" alt="Mayo 3" />
                  </div>
                </section>

                {/* AQUÍ ESTÁ EL CAMBIO PARA TU RECUADRO: Envolvemos en <div className="container"> */}
                <div id="galeria-home" className="home-gallery-section">
                  <div className="main-section-box">
                    <h2 className="home-gallery-title">{t.momentos}</h2>
                    <div className="galeria-especial">
                      <img src="/img/foto1.jpg" alt="Mayo Momento 1" />
                      <img src="/img/foto2.jpg" alt="Mayo Momento 2" />
                      <img src="/img/foto3.jpg" alt="Mayo Momento 3" />
                    </div>
                  </div>
                </div>
                </>
            } />

            {/* PAGINA: SOBRE MÍ */}
            <Route path="/about" element={
              <section id="about">
                <div className="main-section-box">
                  <h2>{t.sobreMiTitulo}</h2>
                  <ul className="about-list">
                    <li><strong>{t.sobreMiComida}</strong> {t.sobreMiComidaDetalle}</li>
                    <li><strong>{t.sobreMiHobby}</strong> {t.sobreMiHobbyDetalle}</li>
                    <li><strong>{t.sobreMiPoder}</strong> {t.sobreMiPoderDetalle}</li>
                  </ul>
                </div>
              </section>
            } />

            {/* PAGINA: DIETA */}
            <Route path="/dieta" element={
              <section id="dieta">
                <div className="main-section-box dieta-container">
                  <h2>{t.dietaTitulo}</h2>
                  <p className="section-subtitle">{t.dietaSub}</p>

                  <div className="table-responsive">
                    <table className="tabla-comida">
                      <thead>
                        <tr>
                          <th>{t.thHorario}</th>
                          <th>{t.thTipo}</th>
                          <th>{t.thPorcion}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td>07:00 AM</td><td>{t.comida1}</td><td>40g o 1/2</td></tr>
                        <tr><td>02:00 PM</td><td>{t.comida2}</td><td>1 Tubito</td></tr>
                        <tr><td>9:00 PM</td><td>{t.comida3}</td><td>30g o 1/3</td></tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="suplementos-title">{t.suplementosTitulo}</h3>
                  <div className="table-responsive">
                    <table className="tabla-comida">
                      <thead>
                        <tr>
                          <th>{t.thSuplemento}</th>
                          <th>{t.thDosis}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td><strong>{t.supSalmon}</strong></td><td>{t.supSalmonDosis}</td></tr>
                        <tr><td><strong>{t.supDental}</strong></td><td>{t.supDentalDosis}</td></tr>
                        <tr><td><strong>{t.supProbioticos}</strong></td><td>{t.supProbioticosDosis}</td></tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="stores-wrapper">
                    <p className="stores-title">{t.tiendasTitulo}</p>
                    <div className="stores-grid">
                      <a href="https://www.mercadolibre.com.mx/alimento-hpm-virbac-cat-weight-loss-diabetes-3-kg/p/MLM19884594" target="_blank" rel="noopener noreferrer" className="boton-tienda">
                        {t.btnMercado}
                      </a>
                      <a href="https://www.mercadolibre.com.mx/aceite-de-salmon-omega-3-y-6-para-perros-y-gatos-1-l-fancy-pets-1-litro-suplemento-alimenticio-aceite-de-salmon-para-perros-y-gatos-1l-con-omega-3-6-dha-y-epa/p/MLM65293868?pdp_filters=item_id%3AMLM4752701036" target="_blank" rel="noopener noreferrer" className="boton-tienda">
                        🐟 Aceite de Salmón (M. Libre)
                      </a>
                      <a href="https://www.petsmart.com/cat/health-and-wellness/dental-and-breath-care/proden-plaqueoff-cat-powder-supplement---supports-dental-health-40g-87543.html" target="_blank" rel="noopener noreferrer" className="boton-tienda">
                        {t.btnPetsmart}
                      </a>
                      <a href="https://www.walmart.com/ip/Pure-Balance-Pro-Probiotic-Care-Cat-Powder-Daily-Support-for-Healthy-Digestion-30-Servings/1699776807" target="_blank" rel="noopener noreferrer" className="boton-tienda">
                        {t.btnWalmart}
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            } />

            {/* PAGINA: ASESORÍAS */}
            <Route path="/asesorias" element={
              <section id="coaching" className="page-section">
                <div className="main-section-box">
                  <h2>{t.coachTitulo}</h2>
                  <p className="coaching-subtitle">{t.coachSub}</p>

                  <div className="coaching-grid">
                    <div className="coaching-card">
                      <h3 className="coaching-card-title">{t.espComportamientoTitulo}</h3>
                      <p className="coaching-card-desc">{t.espComportamientoDesc}</p>
                    </div>
                    <div className="coaching-card">
                      <h3 className="coaching-card-title">{t.espNutricionTitulo}</h3>
                      <p className="coaching-card-desc">{t.espNutricionDesc}</p>
                    </div>
                    <div className="coaching-card">
                      <h3 className="coaching-card-title">{t.espVeterinarioTitulo}</h3>
                      <p className="coaching-card-desc">{t.espVeterinarioDesc}</p>
                    </div>
                    <div className="coaching-card">
                      <h3 className="coaching-card-title">{t.espAuxiliosTitulo}</h3>
                      <p className="coaching-card-desc">{t.espAuxiliosDesc}</p>
                    </div>
                  </div>

                  <p className="coaching-modality">{t.coachModalidad}</p>
                  <p className="coaching-price">
                    {t.priceInfo}
                  </p>

                  <div className="coaching-actions">
                    <button
                      className="btn-primary-hero"
                      onClick={() => setCalendarioAbierto(true)}
                    >
                      {t.btnAgenda}
                    </button>
                  </div>
                </div>
              </section>
            } />


            {/* PAGINA: MAYO'S SHOP */}
            <Route path="/tienda" element={
              <section id="mayos-shop" className="shop-section">
                <h2>👕 Mayo's Shop</h2>
                <p className="shop-subtitle">
                  {idioma === 'es'
                    ? '¡Lleva el estilo de Mayo contigo! Selecciona tu modelo, color y talla para generar tu orden de compra. Los estilos son bordados con el logo y también pueden ser personalizados (envíanos tu imagen). El costo de envío aproximado es de $200 MXN.'
                    : 'Take Mayo\'s style with you! Select your model, color, and size to generate your order. Embroidered designs with logo or custom images. Shipping is approximately $200 MXN.'}
                </p>

                <div className="palette-container">
                  <img src="/img/foto14.jpeg" alt="Paleta de Colores Disponibles" className="palette-image" />
                </div>

                <div className="shop-container">
                  {/* CABALLERO */}
                  <div>
                    <h3 className="gender-title">{idioma === 'es' ? '♂ Caballero' : '♂ Men'}</h3>
                    <div className="product-card">
                      <div className="image-container">
                        <img src={fotosClasica[indiceClasica]} alt="Camisa Caballero" className="product-image" />
                        <button onClick={rotarClasica} type="button" className="btn-rotate">
                          {indiceClasica === 0 ? "✨ Ver Puesta" : `📸 Foto ${indiceClasica}/3`}
                        </button>
                      </div>
                      <h3>{idioma === 'es' ? 'Camisa Logo Clásico' : 'Classic Logo Tee'}</h3>
                      <p className="product-price">$500 MXN</p>

                      <label className="product-label">
                        <span>{idioma === 'es' ? 'Color:' : 'Color:'}</span>
                        <select value={colorClasica} onChange={(e) => setColorClasica(e.target.value)} className="product-select">
                          {Array.from({ length: 24 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>Color {i + 1}</option>
                          ))}
                        </select>
                      </label>

                      <label className="product-label">
                        <span>{idioma === 'es' ? 'Talla:' : 'Size:'}</span>
                        <select value={tallaClasica} onChange={(e) => setTallaClasica(e.target.value)} className="product-select">
                          <option value="S">S</option><option value="M">M</option><option value="L">L</option><option value="XL">XL</option>
                        </select>
                      </label>

                      <button
                        onClick={() => procesarOrden(idioma === 'es' ? 'Camisa Caballero (Logo Clásico)' : 'Men\'s Classic Logo Tee', 500, tallaClasica, colorClasica)}
                        className="btn-order"
                      >
                        📋 {idioma === 'es' ? 'Generar Orden' : 'Place Order'}
                      </button>
                    </div>
                  </div>

                  {/* DAMA */}
                  <div>
                    <h3 className="gender-title">{idioma === 'es' ? '♀ Dama' : '♀ Women'}</h3>
                    <div className="product-card">
                      <div className="image-container">
                        <img src={fotosMiau[indiceMiau]} alt="Camisa Dama" className="product-image" />
                        <button onClick={rotarMiau} type="button" className="btn-rotate">
                          {indiceMiau === 0 ? "✨ Ver Puesta" : `📸 Foto ${indiceMiau}/3`}
                        </button>
                      </div>
                      <h3>{idioma === 'es' ? 'Camisa Edición "Miau"' : '"Miau" Special Edition'}</h3>
                      <p className="product-price">$500 MXN</p>

                      <label className="product-label">
                        <span>{idioma === 'es' ? 'Color:' : 'Color:'}</span>
                        <select value={colorMiauSel} onChange={(e) => setColorMiauSel(e.target.value)} className="product-select">
                          {[1, 2, 3, 6, 7, 10, 13, 14, 15, 18, 19, 20, 21, 23, 24].map((numColor) => (
                            <option key={numColor} value={numColor}>Color {numColor}</option>
                          ))}
                        </select>
                      </label>

                      <label className="product-label">
                        <span>{idioma === 'es' ? 'Talla:' : 'Size:'}</span>
                        <select value={tallaMiauSel} onChange={(e) => setTallaMiauSel(e.target.value)} className="product-select">
                          <option value="S">S</option><option value="M">M</option><option value="L">L</option><option value="XL">XL</option>
                        </select>
                      </label>

                      <button
                        onClick={() => procesarOrden(idioma === 'es' ? 'Camisa Dama (Edición Miau)' : 'Women\'s "Miau" Edition', 500, tallaMiauSel, colorMiauSel)}
                        className="btn-order"
                      >
                        📋 {idioma === 'es' ? 'Generar Orden' : 'Place Order'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* DETALLES DE TRANSFERENCIA BANCARIA */}
                {ordenCompletada && (
                  <div className="receipt-container">
                    <h3 className="receipt-title">🎉 {idioma === 'es' ? '¡Orden Generada!' : 'Order Generated!'}</h3>
                    <p className="receipt-details">
                      📌 <strong>{idioma === 'es' ? 'Folio de Orden:' : 'Order Folio:'}</strong> <span className="receipt-folio">{ordenCompletada.folio}</span><br />
                      🛒 {ordenCompletada.producto} (Color {ordenCompletada.color} - {t.reciboTalla} {ordenCompletada.talla})<br />
                      👕 {idioma === 'es' ? 'Prenda:' : 'Item:'} {ordenCompletada.prenda}<br />
                      🚚 {idioma === 'es' ? 'Envío:' : 'Shipping:'} {ordenCompletada.envio}<br />
                      💰 <strong>Total: {ordenCompletada.total}</strong>
                    </p>

                    <p className="receipt-bank-title">🏦 {idioma === 'es' ? 'Datos para tu Transferencia:' : 'Bank Transfer Information:'}</p>
                    <div className="receipt-bank-box">
                      <strong>Banco:</strong> BBVA<br />
                      <strong>CLABE:</strong> 012028015150078183<br />
                      <strong>Titular:</strong> Damaris Saavedra<br />
                      <strong>Concepto:</strong> {ordenCompletada.folio}
                    </div>

                    <p className="receipt-warning">
                      ⚠️ {idioma === 'es'
                        ? `Importante: Una vez realizada tu transferencia, envía tu comprobante mencionando el Folio ${ordenCompletada.folio} al correo damaris.svdra@gmail.com.`
                        : `Important: Once your transfer is complete, send your receipt mentioning Folio ${ordenCompletada.folio} to damaris.svdra@gmail.com.`}
                    </p>

                    <button onClick={() => setOrdenCompletada(null)} className="btn-close-receipt">
                      {idioma === 'es' ? 'Cerrar detalles de pago' : 'Close payment details'}
                    </button>
                  </div>
                )}
              </section>
            } />

            {/* PAGINA: CONTACTO */}
            <Route path="/contacto" element={
              <section id="contact">
                <div className="main-section-box">
                  <h2>{t.contactoTitulo}</h2>
                  <p className="contact-email">{t.labelCorreo} damaris.svdra@gmail.com</p>
                  <p className="contact-reward">{t.contactoPremio}</p>

                  <form id="contactForm" onSubmit={enviarMensaje}>
                    <input
                      type="text"
                      placeholder={t.placeholderNombre}
                      value={nombreUsuario}
                      onChange={(e) => setNombreUsuario(e.target.value)}
                      className="form-full-width"
                    />
                    <br />
                    <textarea
                      placeholder={t.placeholderMensaje}
                      value={mensajeUsuario}
                      onChange={(e) => setMensajeUsuario(e.target.value)}
                      rows="5"
                      className="form-full-width"
                    ></textarea>
                    {/* Contenedor controlado desde el CSS para centrar el botón premium */}
                    <div className="form-actions">
                      <button type="submit" className="btn-primary-hero">
                        {t.btnForm}
                      </button>
                    </div>
                  </form>
                </div>
              </section>
            } />

          </Routes>
        </main>

        {/* MODAL INVISIBLE DE CALENDLY */}
        <PopupModal
          url="https://calendly.com/damaris-svdra/asesoria-felina"
          pageSettings={{
            backgroundColor: 'ffffff',
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: '030712',
            textColor: '030712'
          }}
          onModalClose={() => setCalendarioAbierto(false)}
          open={calendarioAbierto}
          rootElement={document.getElementById('root')}
        />
      </div>
     <div className="music-player-container">
  <iframe
    className="music-player-iframe"
    src="https://www.youtube.com/embed/6iDuLGZt6Wo?autoplay=1&loop=1&playlist=6iDuLGZt6Wo"
    allowFullScreen
  />
</div>
    </Router>
  );
}

export default App;