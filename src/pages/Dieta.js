import React from 'react';

function Dieta({ traduccion }) {
  return (
    <section id="dieta">
      <div className="main-section-box dieta-container">
        <h2>{traduccion.dietaTitulo}</h2>
        <p className="section-subtitle">{traduccion.dietaSub}</p>

        <div className="table-responsive">
          <table className="tabla-comida">
            <thead>
              <tr>
                <th>{traduccion.thHorario}</th>
                <th>{traduccion.thTipo}</th>
                <th>{traduccion.thPorcion}</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>07:00 AM</td><td>{traduccion.comida1}</td><td>40g o 1/2</td></tr>
              <tr><td>02:00 PM</td><td>{traduccion.comida2}</td><td>1 Tubito</td></tr>
              <tr><td>9:00 PM</td><td>{traduccion.comida3}</td><td>30g o 1/3</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="suplementos-title">{traduccion.suplementosTitulo}</h3>
        <div className="table-responsive">
          <table className="tabla-comida">
            <thead>
              <tr>
                <th>{traduccion.thSuplemento}</th>
                <th>{traduccion.thDosis}</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>{traduccion.supSalmon}</strong></td><td>{traduccion.supSalmonDosis}</td></tr>
              <tr><td><strong>{traduccion.supDental}</strong></td><td>{traduccion.supDentalDosis}</td></tr>
              <tr><td><strong>{traduccion.supProbioticos}</strong></td><td>{traduccion.supProbioticosDosis}</td></tr>
            </tbody>
          </table>
        </div>

        <div className="stores-wrapper">
          <p className="stores-title">{traduccion.tiendasTitulo}</p>
          <div className="stores-grid">
            <a href="https://www.mercadolibre.com.mx/alimento-hpm-virbac-cat-weight-loss-diabetes-3-kg/p/MLM19884594" target="_blank" rel="noopener noreferrer" className="boton-tienda">
              {traduccion.btnMercado}
            </a>
            <a href="https://www.mercadolibre.com.mx/aceite-de-salmon-omega-3-y-6-para-perros-y-gatos-1-l-fancy-pets-1-litro-suplemento-alimenticio-aceite-de-salmon-para-perros-y-gatos-1l-con-omega-3-6-dha-y-epa/p/MLM65293868?pdp_filters=item_id%3AMLM4752701036" target="_blank" rel="noopener noreferrer" className="boton-tienda">
              🐟 Aceite de Salmón (M. Libre)
            </a>
            <a href="https://www.petsmart.com/cat/health-and-wellness/dental-and-breath-care/proden-plaqueoff-cat-powder-supplement---supports-dental-health-40g-87543.html" target="_blank" rel="noopener noreferrer" className="boton-tienda">
              {traduccion.btnPetsmart}
            </a>
            <a href="https://www.walmart.com/ip/Pure-Balance-Pro-Probiotic-Care-Cat-Powder-Daily-Support-for-Healthy-Digestion-30-Servings/1699776807" target="_blank" rel="noopener noreferrer" className="boton-tienda">
              {traduccion.btnWalmart}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dieta;