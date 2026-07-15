import React from 'react';
import { fotosClasica, fotosMiau } from '../data';

function Tienda({ 
  idioma, traduccion: t, ordenCompletada, setOrdenCompletada, procesarOrden,
  colorClasica, setColorClasica, tallaClasica, setTallaClasica,
  colorMiauSel, setColorMiauSel, tallaMiauSel, setTallaMiauSel,
  indiceClasica, rotarClasica, indiceMiau, rotarMiau 
}) {

  const productStyle = "bg-slate-900/50 backdrop-blur-lg border border-white/10 rounded-3xl p-6 shadow-xl w-full max-w-[320px]";
  const selectStyle = "w-full p-3 mt-2 rounded-xl bg-slate-950 border border-white/10 text-white focus:border-cyan-400 outline-none";

  return (
    <section id="mayos-shop" className="py-20 px-4">
      <h2 className="text-4xl font-bold text-white text-center mb-6">👕 Mayo's Shop</h2>
      <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
        {idioma === 'es'
          ? '¡Lleva el estilo de Mayo contigo! Selecciona tu modelo, color y talla para generar tu orden de compra.'
          : 'Take Mayo\'s style with you! Select your model, color, and size to generate your order.'}
      </p>

      <div className="flex justify-center mb-16">
        <img src="/img/foto14.jpeg" alt="Paleta de Colores" className="rounded-2xl border border-white/10 w-full max-w-md shadow-lg" />
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {/* CABALLERO */}
        <div className="flex flex-col">
          <h3 className="text-xl font-bold text-white mb-4 pl-2">♂ {idioma === 'es' ? 'Caballero' : 'Men'}</h3>
          <div className={productStyle}>
            <div className="relative bg-slate-950 rounded-2xl p-4 mb-4 border border-white/5">
              <img src={fotosClasica[indiceClasica]} alt="Camisa Caballero" className="w-full h-56 object-cover rounded-xl" />
              <button onClick={rotarClasica} className="absolute bottom-6 right-6 px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full backdrop-blur-md border border-cyan-500/30 hover:bg-cyan-500 hover:text-white transition-all">
                {indiceClasica === 0 ? "✨ Ver Puesta" : `📸 ${indiceClasica}/3`}
              </button>
            </div>
            <h3 className="text-lg font-semibold text-white">{idioma === 'es' ? 'Camisa Logo Clásico' : 'Classic Logo Tee'}</h3>
            <p className="text-2xl font-bold text-cyan-400 my-3">$500 MXN</p>
            
            <select value={colorClasica} onChange={(e) => setColorClasica(e.target.value)} className={selectStyle}>
              {Array.from({ length: 24 }, (_, i) => <option key={i+1} value={i+1}>Color {i+1}</option>)}
            </select>
            <select value={tallaClasica} onChange={(e) => setTallaClasica(e.target.value)} className={selectStyle}>
              {['S','M','L','XL'].map(s => <option key={s} value={s}>{s}</option>)}
            </select>

            <button onClick={() => procesarOrden('Camisa Caballero', 500, tallaClasica, colorClasica)} className="w-full mt-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold rounded-xl hover:scale-[1.02] transition-transform">
              📋 {idioma === 'es' ? 'Generar Orden' : 'Place Order'}
            </button>
          </div>
        </div>

        {/* DAMA */}
        <div className="flex flex-col">
          <h3 className="text-xl font-bold text-white mb-4 pl-2">♀ {idioma === 'es' ? 'Dama' : 'Women'}</h3>
          <div className={productStyle}>
            <div className="relative bg-slate-950 rounded-2xl p-4 mb-4 border border-white/5">
              <img src={fotosMiau[indiceMiau]} alt="Camisa Dama" className="w-full h-56 object-cover rounded-xl" />
              <button onClick={rotarMiau} className="absolute bottom-6 right-6 px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full backdrop-blur-md border border-cyan-500/30 hover:bg-cyan-500 hover:text-white transition-all">
                {indiceMiau === 0 ? "✨ Ver Puesta" : `📸 ${indiceMiau}/3`}
              </button>
            </div>
            <h3 className="text-lg font-semibold text-white">{idioma === 'es' ? 'Camisa Edición "Miau"' : '"Miau" Edition'}</h3>
            <p className="text-2xl font-bold text-cyan-400 my-3">$500 MXN</p>
            
            <select value={colorMiauSel} onChange={(e) => setColorMiauSel(e.target.value)} className={selectStyle}>
              {[1, 2, 3, 6, 7, 10, 13, 14, 15, 18, 19, 20, 21, 23, 24].map(n => <option key={n} value={n}>Color {n}</option>)}
            </select>
            <select value={tallaMiauSel} onChange={(e) => setTallaMiauSel(e.target.value)} className={selectStyle}>
              {['S','M','L','XL'].map(s => <option key={s} value={s}>{s}</option>)}
            </select>

            <button onClick={() => procesarOrden('Camisa Dama', 500, tallaMiauSel, colorMiauSel)} className="w-full mt-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold rounded-xl hover:scale-[1.02] transition-transform">
              📋 {idioma === 'es' ? 'Generar Orden' : 'Place Order'}
            </button>
          </div>
        </div>
      </div>

  {/* DETALLES DE TRANSFERENCIA */}
      {ordenCompletada && (
        <div className="max-w-xl mx-auto mt-16 p-8 bg-slate-900 border border-dashed border-cyan-500 rounded-3xl text-slate-200 shadow-2xl">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">🎉 {idioma === 'es' ? '¡Orden Generada!' : 'Order Generated!'}</h3>
          
          <div className="space-y-3 text-lg border-b border-white/10 pb-6 mb-6">
            <p>📌 <strong>{idioma === 'es' ? 'Folio de Orden:' : 'Order Folio:'}</strong> <span className="text-cyan-400 font-bold">{ordenCompletada.folio}</span></p>
            <p>🛒 {ordenCompletada.producto} (Color {ordenCompletada.color} - {t.reciboTalla} {ordenCompletada.talla})</p>
            <p>👕 {idioma === 'es' ? 'Prenda:' : 'Item:'} {ordenCompletada.prenda}</p>
            <p>🚚 {idioma === 'es' ? 'Envío:' : 'Shipping:'} {ordenCompletada.envio}</p>
            <p>💰 <strong>Total: {ordenCompletada.total}</strong></p>
          </div>

          <p className="font-semibold text-white mb-3">🏦 {idioma === 'es' ? 'Datos para tu Transferencia:' : 'Bank Transfer Information:'}</p>
          <div className="p-4 bg-slate-950 rounded-xl font-mono text-sm border border-white/5 space-y-1">
            <p><strong>Banco:</strong> BBVA</p>
            <p><strong>CLABE:</strong> 012028015150078183</p>
            <p><strong>Titular:</strong> Damaris Saavedra</p>
            <p><strong>Concepto:</strong> {ordenCompletada.folio}</p>
          </div>

          <p className="mt-6 text-red-400 text-sm font-medium leading-relaxed">
            ⚠️ {idioma === 'es'
              ? `Importante: Una vez realizada tu transferencia, envía tu comprobante mencionando el Folio ${ordenCompletada.folio} al correo damaris.svdra@gmail.com.`
              : `Important: Once your transfer is complete, send your receipt mentioning Folio ${ordenCompletada.folio} to damaris.svdra@gmail.com.`}
          </p>

          <button onClick={() => setOrdenCompletada(null)} className="block w-full mt-8 text-slate-500 underline hover:text-white transition-colors">
            {idioma === 'es' ? 'Cerrar detalles de pago' : 'Close payment details'}
          </button>
        </div>
      )}
      </section>
  );
}

export default Tienda;