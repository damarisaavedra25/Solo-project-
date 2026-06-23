import React from 'react';

function Home({ traduccion, miau, contadorMiau }) {
  return (
    <>
      <section id="home" className="hero-container">
        <div className="hero-content">
          <div className="hero-left">
            <h1 className="hero-title">
              {traduccion.bienvenida} <br />
              <span className="hero-name">Mayo<span className="heart-icon">💙</span></span>
            </h1>
            <p className="hero-tagline">{traduccion.tagline}</p>
            <p className="hero-description">{traduccion.descripcion}</p>

            <div className="hero-buttons">
              <button onClick={miau} className="btn-primary-hero">{traduccion.btnSaludar}</button>
              <button onClick={() => {
                const galeria = document.getElementById('galeria-home');
                if (galeria) galeria.scrollIntoView({ behavior: 'smooth' });
              }} className="btn-secondary-hero">{traduccion.btnFotos}</button>

              <div className="social-proof-wrapper">
                <div className="social-avatars">
                  <img src="/img/portrait1.jpg" alt="User" />
                  <img src="/img/portrait2.jpeg" alt="User" />
                  <img src="/img/portrait3.jpeg" alt="User" />
                </div>
                <div className="social-labels">
                  <span className="followers-bold">+{traduccion.seguidores}</span>
                  <span className="thanks-text">{traduccion.agradecimiento}</span>
                </div>
              </div>
              <div className="hero-counter-container">
                <p className="greet-counter">🐾 {traduccion.contadorSaludos.replace("{cantidad}", contadorMiau)}</p>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="orbe-container">
              <div className="orbe-bg"></div>
              <img src="/img/foto15.png" alt="Mayo" className="mayo-hero-img" />
              <div className="mood-badge">
                <div className="mood-text">
                  <span className="mood-title">{traduccion.moodTitulo}</span>
                  <span className="mood-desc">{traduccion.moodDesc}</span>
                </div>
                <span className="mood-dot"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="historia-integrada" className="historia-card-container">
        <div className="historia-card-content">
          <h2 className="home-gallery-title">{traduccion.historiaTitulo}</h2>
          <p className="historia-p1">{traduccion.historiaP1}</p>
          <p className="historia-p2">{traduccion.historiaP2}</p>
        </div>
        <div className="historia-images">
          <img src="/img/foto4.jpg" alt="Mayo 1" />
          <img src="/img/foto5.jpg" alt="Mayo 2" />
          <img src="/img/foto6.jpg" alt="Mayo 3" />
        </div>
      </section>

      <div id="galeria-home" className="home-gallery-section">
        <div className="main-section-box">
          <h2 className="home-gallery-title">{traduccion.momentos}</h2>
          <div className="galeria-especial">
            <img src="/img/foto1.jpg" alt="Mayo Momento 1" />
            <img src="/img/foto2.jpg" alt="Mayo Momento 2" />
            <img src="/img/foto3.jpg" alt="Mayo Momento 3" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;