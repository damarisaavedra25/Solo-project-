import React from 'react';

function Asesorias({ traduccion, setCalendarioAbierto }) {
  return (
    <section id="coaching" className="page-section">
      <div className="main-section-box">
        <h2>{traduccion.coachTitulo}</h2>
        <p className="coaching-subtitle">{traduccion.coachSub}</p>

        <div className="coaching-grid">
          <div className="coaching-card">
            <h3 className="coaching-card-title">{traduccion.espComportamientoTitulo}</h3>
            <p className="coaching-card-desc">{traduccion.espComportamientoDesc}</p>
          </div>
          <div className="coaching-card">
            <h3 className="coaching-card-title">{traduccion.espNutricionTitulo}</h3>
            <p className="coaching-card-desc">{traduccion.espNutricionDesc}</p>
          </div>
          <div className="coaching-card">
            <h3 className="coaching-card-title">{traduccion.espVeterinarioTitulo}</h3>
            <p className="coaching-card-desc">{traduccion.espVeterinarioDesc}</p>
          </div>
          <div className="coaching-card">
            <h3 className="coaching-card-title">{traduccion.espAuxiliosTitulo}</h3>
            <p className="coaching-card-desc">{traduccion.espAuxiliosDesc}</p>
          </div>
        </div>

        <p className="coaching-modality">{traduccion.coachModalidad}</p>
        <p className="coaching-price">{traduccion.priceInfo}</p>

        <div className="coaching-actions">
          <button className="btn-primary-hero" onClick={() => setCalendarioAbierto(true)}>
            {traduccion.btnAgenda}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Asesorias;