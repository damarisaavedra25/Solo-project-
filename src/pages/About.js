import React from 'react';

function About({ traduccion }) {
  return (
    <section id="about">
      <div className="main-section-box">
        <h2>{traduccion.sobreMiTitulo}</h2>
        <ul className="about-list">
          <li><strong>{traduccion.sobreMiComida}</strong> {traduccion.sobreMiComidaDetalle}</li>
          <li><strong>{traduccion.sobreMiHobby}</strong> {traduccion.sobreMiHobbyDetalle}</li>
          <li><strong>{traduccion.sobreMiPoder}</strong> {traduccion.sobreMiPoderDetalle}</li>
        </ul>
      </div>
    </section>
  );
}

export default About;