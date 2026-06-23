import React from 'react';

function Contacto({ traduccion, enviarMensaje, nombreUsuario, setNombreUsuario, mensajeUsuario, setMensajeUsuario }) {
  return (
    <section id="contact">
      <div className="main-section-box">
        <h2>{traduccion.contactoTitulo}</h2>
        <p className="contact-email">{traduccion.labelCorreo} damaris.svdra@gmail.com</p>
        <p className="contact-reward">{traduccion.contactoPremio}</p>

        <form id="contactForm" onSubmit={enviarMensaje}>
          <input
            type="text"
            placeholder={traduccion.placeholderNombre}
            value={nombreUsuario}
            onChange={(e) => setNombreUsuario(e.target.value)}
            className="form-full-width"
          />
          <br />
          <textarea
            placeholder={traduccion.placeholderMensaje}
            value={mensajeUsuario}
            onChange={(e) => setMensajeUsuario(e.target.value)}
            rows="5"
            className="form-full-width"
          ></textarea>
          <div className="form-actions">
            <button type="submit" className="btn-primary-hero">
              {traduccion.btnForm}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contacto;