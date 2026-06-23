import React from 'react';
import { fotosClasica, fotosMiau } from '../data';


function Tienda({ 
  idioma, traduccion: t, ordenCompletada, setOrdenCompletada, procesarOrden,
  colorClasica, setColorClasica, tallaClasica, setTallaClasica,
  colorMiauSel, setColorMiauSel, tallaMiauSel, setTallaMiauSel,
  indiceClasica, rotarClasica, indiceMiau, rotarMiau 
}) {

  return (
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

      {/* DETALLES DE TRANSFERENCIA */}
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
  );
}

export default Tienda;