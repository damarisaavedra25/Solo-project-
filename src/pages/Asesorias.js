import React from 'react';

function Asesorias({ traduccion, setCalendarioAbierto }) {
  
  const specialties = [
    { title: traduccion.espComportamientoTitulo, desc: traduccion.espComportamientoDesc },
    { title: traduccion.espNutricionTitulo, desc: traduccion.espNutricionDesc },
    { title: traduccion.espVeterinarioTitulo, desc: traduccion.espVeterinarioDesc },
    { title: traduccion.espAuxiliosTitulo, desc: traduccion.espAuxiliosDesc },
  ];

  return (
    <section id="coaching" className="py-20 px-4">
      <div className="max-w-5xl mx-auto bg-slate-900/80 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-lg text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {traduccion.coachTitulo}
        </h2>
        
        <p className="text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          {traduccion.coachSub}
        </p>

        {/* Grid replaces .coaching-grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 text-left">
          {specialties.map((item, index) => (
            <div key={index} className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all duration-300">
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                {item.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="inline-block px-6 py-3 bg-cyan-500/10 text-cyan-400 rounded-lg italic font-medium mb-4">
          {traduccion.coachModalidad}
        </p>
        
        <p className="text-red-400 font-bold text-xl mb-8">
          {traduccion.priceInfo}
        </p>

        <div>
          <button 
            className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-slate-900 font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg" 
            onClick={() => setCalendarioAbierto(true)}
          >
            {traduccion.btnAgenda}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Asesorias;