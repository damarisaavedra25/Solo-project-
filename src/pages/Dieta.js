import React from 'react';

function Dieta({ traduccion }) {
  const horarios = [
    { time: "07:00 AM", type: traduccion.comida1, port: "40g o 1/2" },
    { time: "02:00 PM", type: traduccion.comida2, port: "1 Tubito" },
    { time: "09:00 PM", type: traduccion.comida3, port: "30g o 1/3" },
  ];

  const suplementos = [
    { label: traduccion.supSalmon, dosis: traduccion.supSalmonDosis },
    { label: traduccion.supDental, dosis: traduccion.supDentalDosis },
    { label: traduccion.supProbioticos, dosis: traduccion.supProbioticosDosis },
  ];

  return (
    <section id="dieta" className="py-20 px-4">
      <div className="max-w-4xl mx-auto bg-slate-900/80 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-lg">
        <h2 className="text-3xl font-bold text-white mb-4 text-center">{traduccion.dietaTitulo}</h2>
        <p className="text-slate-400 text-center mb-10">{traduccion.dietaSub}</p>

        {/* Tabla Comida */}
        <div className="overflow-x-auto mb-12">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-cyan-400 border-b border-white/10">
                <th className="p-4">{traduccion.thHorario}</th>
                <th className="p-4">{traduccion.thTipo}</th>
                <th className="p-4">{traduccion.thPorcion}</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              {horarios.map((h, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-4">{h.time}</td>
                  <td className="p-4">{h.type}</td>
                  <td className="p-4">{h.port}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tabla Suplementos */}
        <h3 className="text-2xl font-semibold text-white mb-6 text-center">{traduccion.suplementosTitulo}</h3>
        <div className="overflow-x-auto mb-12">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-cyan-400 border-b border-white/10">
                <th className="p-4">{traduccion.thSuplemento}</th>
                <th className="p-4">{traduccion.thDosis}</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              {suplementos.map((s, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-4 font-bold text-white">{s.label}</td>
                  <td className="p-4">{s.dosis}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      {/* Tiendas */}
        <div className="text-center">
          <p className="text-xl font-semibold text-white mb-6">{traduccion.tiendasTitulo}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.mercadolibre.com.mx/alimento-hpm-virbac-cat-weight-loss-diabetes-3-kg/p/MLM19884594" target="_blank" rel="noopener noreferrer" className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition-all">
              {traduccion.btnMercado}
            </a>
            <a href="https://www.mercadolibre.com.mx/aceite-de-salmon-omega-3-y-6-para-perros-y-gatos-1-l-fancy-pets-1-litro-suplemento-alimenticio-aceite-de-salmon-para-perros-y-gatos-1l-con-omega-3-6-dha-y-epa/p/MLM65293868?pdp_filters=item_id%3AMLM4752701036" target="_blank" rel="noopener noreferrer" className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition-all">
              🐟 Aceite de Salmón
            </a>
            <a href="https://www.petsmart.com/cat/health-and-wellness/dental-and-breath-care/proden-plaqueoff-cat-powder-supplement---supports-dental-health-40g-87543.html" target="_blank" rel="noopener noreferrer" className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition-all">
              {traduccion.btnPetsmart}
            </a>
            <a href="https://www.walmart.com/ip/Pure-Balance-Pro-Probiotic-Care-Cat-Powder-Daily-Support-for-Healthy-Digestion-30-Servings/1699776807" target="_blank" rel="noopener noreferrer" className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition-all">
              {traduccion.btnWalmart}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dieta;